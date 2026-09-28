/** Primary public site — update here when the domain changes. */
export const SITE = {
  url: 'https://editorjakupi.com',
  host: 'editorjakupi.com',
  /** Old cloud hostnames — redirect bookmarks to SITE.url. */
  legacyHosts: ['editor-jakupi-portfolio.onrender.com'] as const,
} as const;

/**
 * Send visitors from retired cloud URLs to the custom domain on Hetzner.
 * Add `?noredirect=1` to skip (useful while testing DNS/SSL).
 */
export function maybeRedirectLegacyHost(): void {
  if (typeof window === 'undefined') return;

  const { hostname, pathname, search, hash } = window.location;
  if (!(SITE.legacyHosts as readonly string[]).includes(hostname)) return;
  if (new URLSearchParams(search).has('noredirect')) return;

  window.location.replace(`${SITE.url}${pathname}${search}${hash}`);
}
