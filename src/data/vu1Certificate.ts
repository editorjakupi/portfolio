import type { Locale } from '../i18n/types';

/** Local VU1 security-guard certificate (hosted under /credentials). */
export const vu1Certificate = {
  url: '/credentials/vu1-utbildningsbevis.png',
  label: {
    en: 'View certificate',
    sv: 'Visa utbildningsbevis',
    de: 'Zertifikat anzeigen',
    fr: 'Voir le certificat',
    es: 'Ver certificado',
    it: 'Vedi certificato',
    pl: 'Zobacz certyfikat',
    sq: 'Shiko certifikatën',
  } satisfies Record<Locale, string>,
} as const;
