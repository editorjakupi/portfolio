import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale, Translations } from './types';
import en from './locales/en';
import sv from './locales/sv';
import sq from './locales/sq';

const STORAGE_KEY = 'portfolio-locale';

const catalogs: Record<Locale, Translations> = { en, sv, sq };

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function detectInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'sv' || stored === 'sq') return stored;

  const browser = navigator.language.toLowerCase();
  if (browser.startsWith('sv')) return 'sv';
  if (browser.startsWith('sq')) return 'sq';
  return 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale());

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: catalogs[locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
