import type { Locale } from '../i18n/types';

/** VU1 security-guard certificate hosted on the live portfolio (absolute for CV exports). */
export const vu1Certificate = {
  url: 'https://editorjakupi.com/credentials/vu1-utbildningsbevis.png',
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
