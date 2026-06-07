import type { Locale } from './types';

export function pickLocalized<T>(
  map: Partial<Record<Locale, T>> & { en: T },
  locale: Locale,
): T {
  return map[locale] ?? map.en;
}

export function detectBrowserLocale(): Locale {
  const browser = navigator.language.toLowerCase();
  if (browser.startsWith('de')) return 'de';
  if (browser.startsWith('fr')) return 'fr';
  if (browser.startsWith('es')) return 'es';
  if (browser.startsWith('it')) return 'it';
  if (browser.startsWith('pl')) return 'pl';
  if (browser.startsWith('sv')) return 'sv';
  if (browser.startsWith('sq')) return 'sq';
  return 'en';
}

export function isLocale(value: string | null): value is Locale {
  return (
    value === 'en' ||
    value === 'de' ||
    value === 'fr' ||
    value === 'es' ||
    value === 'it' ||
    value === 'pl' ||
    value === 'sv' ||
    value === 'sq'
  );
}
