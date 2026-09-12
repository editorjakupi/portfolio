import { createContext, useContext, useEffect, type ReactNode } from 'react';
import type { Translations } from './types';
import en from './locales/en';

interface LocaleContextValue {
  locale: 'en';
  t: Translations;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/** English is the source language; Google Translate handles other languages in the DOM. */
export function LocaleProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  return (
    <LocaleContext.Provider value={{ locale: 'en', t: en }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
