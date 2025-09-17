// No "use client" — this is safe for Server Components
// MDX will call this to get component overrides (we just pass-through)
export function useMDXComponents(components) {
  return components;
}
