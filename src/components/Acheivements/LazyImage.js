/* eslint-disable @next/next/no-img-element */
// LazyImage.jsx (React JavaScript)
"use client";
import { useEffect, useRef, useState } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  style,
  timeoutPerTry = 12000,     // how long to wait before a retry
  maxRetries = 8,            // total attempts
  preloadMargin = "200px",   // start loading before it appears
  immediate = false,         // true e.g. in modal
  fetchPriority = "auto",
}) {
  const wrapperRef = useRef(null);
  const watchdogRef = useRef(null);
  const retryTimerRef = useRef(null);

  const [shouldLoad, setShouldLoad] = useState(immediate);
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cacheBustedSrc, setCacheBustedSrc] = useState(src);

  const clearTimers = () => {
    if (watchdogRef.current) clearTimeout(watchdogRef.current);
    if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
  };

  // Lazy-start when visible (SSR-safe)
  useEffect(() => {
    if (immediate || loaded || shouldLoad) return;

    const el = wrapperRef.current;
    const hasIO = typeof window !== "undefined" && "IntersectionObserver" in window;

    if (!el || !hasIO) {
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

  // Retry + cache-busting loop
  useEffect(() => {
    if (!shouldLoad || loaded) return;

    setLoading(true);
    setError(null);

    // cache-bust per attempt
    const cb = `cb=${Date.now()}_${attempt}`;
    const url = src.includes("?") ? `${src}&${cb}` : `${src}?${cb}`;
    setCacheBustedSrc(url);

    // watchdog: if no onLoad within timeout, schedule retry
    clearTimers();
    watchdogRef.current = setTimeout(() => {
      if (loaded) return;
      if (attempt + 1 < maxRetries) {
        const nextAttempt = attempt + 1;
        const backoff = Math.min(1000 * Math.pow(2, nextAttempt - 1), 10000); // cap 10s
        retryTimerRef.current = setTimeout(() => setAttempt(nextAttempt), backoff);
      } else {
        setLoading(false);
        setError("Could not load image. You can try again or open the source.");
      }
    }, timeoutPerTry);

    return () => clearTimers();
  }, [shouldLoad, attempt, src, timeoutPerTry, loaded, maxRetries]);

  const handleLoad = () => {
    clearTimers();
    setLoaded(true);
    setLoading(false);
    setError(null);
  };

  const manualLoad = () => {
    setShouldLoad(true);
    setAttempt((a) => a + 1); // force remount/retry immediately
  };

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ position: "relative", ...style }}
    >
      {!shouldLoad && (
        <div className="w-full h-full flex items-center justify-center">
          <button className="btn btn-sm" onClick={manualLoad}>
            Load image
          </button>
        </div>
      )}

      {shouldLoad && (
        <>
          {!loaded && (
            <div className="flex flex-col items-center justify-center gap-2 p-6 text-center">
              <span className="loading loading-dots loading-lg" aria-hidden />
              <p className="text-sm opacity-70">
                Loading certificate… This may take a moment for large files.
              </p>
            </div>
          )}

          {/* Remount on each attempt so the <img> restarts clean */}
          {/* // eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={attempt}
            src={cacheBustedSrc}
            alt={alt}
            onLoad={handleLoad}
            onError={() => setError("Image failed to load.")}
            loading="lazy"
            fetchPriority={fetchPriority}
            className={`${loaded ? "" : "opacity-0 absolute inset-0 -z-10"} max-w-full max-h-full object-contain`}
            style={{ border: 0 }}
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
