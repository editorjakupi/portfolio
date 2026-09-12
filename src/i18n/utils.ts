import type { Locale } from './types';

export function pickLocalized<T>(
  map: Partial<Record<Locale, T>> & { en: T },
  _locale: Locale = 'en',
): T {
  return map.en;
}
