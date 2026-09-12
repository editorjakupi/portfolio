/** Primary public site — update here when the domain changes. */
export const SITE = {
  url: 'https://editorjakupi.com',
  host: 'editorjakupi.com',
  /** Render default hostname — redirects to SITE.url during the transition window. */
  legacyHosts: ['editor-jakupi-portfolio.onrender.com'] as const,
} as const;

/**
 * Send visitors from the old Render URL to the custom domain.
 * Add `?noredirect=1` to skip (useful while testing DNS/SSL).
 */
export function maybeRedirectLegacyHost(): void {
  if (typeof window === 'undefined') return;

  const { hostname, pathname, search, hash } = window.location;
  if (!(SITE.legacyHosts as readonly string[]).includes(hostname)) return;
  if (new URLSearchParams(search).has('noredirect')) return;

  window.location.replace(`${SITE.url}${pathname}${search}${hash}`);
}
