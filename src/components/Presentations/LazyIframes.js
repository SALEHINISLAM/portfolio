"use client";

const React = require("react");
const { useEffect, useRef, useState } = React;

/**
 * LazyIframe (CommonJS)
 * - Defers loading until visible (IntersectionObserver)
 * - Retries with exponential backoff + cache-busting if load event doesn’t fire
 * - Shows skeleton + manual “Load preview” button
 * - SSR safe (guards for window/IntersectionObserver)
 */
function LazyIframe({
    src,
    title,
    className = "",
    timeoutPerTry = 12000, // wait per attempt before retrying
    maxRetries = 6,
    preloadMargin = "200px", // start loading slightly before visible
    immediate = false, // true (e.g., in modal) = skip visibility gating
    showManualButton = true,
}) {
    const wrapperRef = useRef(null);
    const timeoutRef = useRef(null);
    const retryTimerRef = useRef(null);

    const [shouldLoad, setShouldLoad] = useState(immediate);
    const [attempt, setAttempt] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [cacheBustedSrc, setCacheBustedSrc] = useState(src);
    const [error, setError] = useState(null);

    const clearTimers = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
    };

    // Lazy start via IntersectionObserver (SSR safe)
    useEffect(() => {
        if (immediate || loaded || shouldLoad) return;

        const el = wrapperRef.current;
        const hasIO =
            typeof window !== "undefined" && "IntersectionObserver" in window;

        if (!el || !hasIO) {
            // Fallback if IO not available (older browsers/SSR)
            setShouldLoad(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                        break;
                    }
                }
            },
            { root: null, rootMargin: preloadMargin, threshold: 0.01 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [immediate, loaded, preloadMargin, shouldLoad]);

    // Retry with exponential backoff + cache-busting
    useEffect(() => {
        if (!shouldLoad || loaded) return;

        setLoading(true);
        setError(null);

        const cb = `cb=${Date.now()}_${attempt}`;
        const url = src.includes("?") ? `${src}&${cb}` : `${src}?${cb}`;
        setCacheBustedSrc(url);

        // Watchdog: retry if no iframe onLoad within timeoutPerTry
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            if (loaded) return;
            if (attempt + 1 < maxRetries) {
                const nextAttempt = attempt + 1;
                const backoff = Math.min(1000 * Math.pow(2, nextAttempt - 1), 10000);
                retryTimerRef.current = setTimeout(() => setAttempt(nextAttempt), backoff);
            } else {
                setLoading(false);
                setError("Could not load preview. You can still open the public link.");
            }
        }, timeoutPerTry);

        return clearTimers;
    }, [shouldLoad, attempt, src, timeoutPerTry, loaded, maxRetries]);

    const handleLoad = () => {
        clearTimers();
        setLoaded(true);
        setLoading(false);
        setError(null);
    };

    const manualLoad = () => {
        setShouldLoad(true);
        setAttempt((a) => a + 1); // force new remount
    };

    return (
        <div ref={wrapperRef} className={className} style={{ position: "relative" }}>
            {!shouldLoad && showManualButton && (
                <div className="w-full h-full flex items-center justify-center">
                    <button className="btn btn-sm" onClick={manualLoad}>
                        Load preview
                    </button>
                </div>
            )}

            {shouldLoad && (
                <>
                    {!loaded && (
                        <div
                            className="skeleton w-full h-full rounded-xl"
                            aria-busy={loading ? "true" : "false"}
                        />
                    )}

                    {/* Remount on each attempt so the iframe reloads cleanly */}
                    <iframe
                        key={attempt}
                        src={cacheBustedSrc}
                        title={title}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        onLoad={handleLoad}
                        referrerPolicy="no-referrer-when-downgrade"
                        allow="fullscreen"
                        className={`w-full h-full ${loaded ? "" : "opacity-0 absolute inset-0 -z-10"
                            }`}
                        style={{ border: "none", overflow: "hidden" }}
                    />

                    {error && (
                        <div className="alert alert-warning mt-3">
                            <span>{error}</span>
                            <button className="btn btn-sm ml-auto" onClick={manualLoad}>
                                Retry
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

module.exports = LazyIframe;
