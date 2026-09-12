import type { Locale } from '../i18n/types';

const europassPdfSv =
  'https://www.nbi-handelsakademin.se/wp-content/uploads/Europass-MAI24HA-SV.pdf';
const europassPdfEn =
  'https://www.nbi-handelsakademin.se/wp-content/uploads/Europass-MAI24HA-ENG.pdf';

/** Europass qualification supplement — direct PDF per site language */
export function europassUrlForLocale(locale: Locale): string {
  return locale === 'sv' ? europassPdfSv : europassPdfEn;
}

export const nbiEuropass = {
  pageUrl: 'https://www.nbi-handelsakademin.se/europass/',
  pdfSv: europassPdfSv,
  pdfEn: europassPdfEn,
  timelineLabel: {
    en: 'Europass (English)',
    sv: 'Europass (svenska)',
    de: 'Europass (English)',
    fr: 'Europass (English)',
    es: 'Europass (English)',
    it: 'Europass (English)',
    pl: 'Europass (English)',
    sq: 'Europass (English)',
  } satisfies Record<Locale, string>,
  linkLabel: {
    en: 'Europass — Software Developer AI (EN)',
    sv: 'Europass — Mjukvaruutvecklare AI (SV)',
    de: 'Europass — Software Developer AI (EN)',
    fr: 'Europass — Software Developer AI (EN)',
    es: 'Europass — Software Developer AI (EN)',
    it: 'Europass — Software Developer AI (EN)',
    pl: 'Europass — Software Developer AI (EN)',
    sq: 'Europass — Software Developer AI (EN)',
  } satisfies Record<Locale, string>,
} as const;

/** Public TRUE original — blockchain-verified diploma from NBI/Handelsakademin */
export const nbiDiploma = {
  url: 'https://true.nbi-handelsakademin.se/examensbevis-nbi-356401-8604/?zone=truecrt&lang=se',
  verifyUrl: 'https://verify.trueoriginal.com/BD37A33A-C66B-1B25-C8AA-0244C8B7F720/?ref=badge',
  qrImageUrl:
    'https://cdn.truecrt.com/cdn/full/qrcode-raw-BD37A33A-C66B-1B25-C8AA-0244C8B7F720.png?ref=qrcode&key=X9dRTsX622&s=0',
  verifyLabel: {
    en: 'Verify diploma (TRUE)',
    sv: 'Verifiera examensbevis (TRUE)',
    de: 'Zeugnis verifizieren (TRUE)',
    fr: 'Vérifier le diplôme (TRUE)',
    es: 'Verificar título (TRUE)',
    it: 'Verifica diploma (TRUE)',
    pl: 'Zweryfikuj dyplom (TRUE)',
    sq: 'Verifiko diplomën (TRUE)',
  } satisfies Record<Locale, string>,
  linkLabel: {
    en: 'NBI diploma — verified (TRUE)',
    sv: 'Examensbevis NBI — verifierat (TRUE)',
    de: 'NBI-Zeugnis — verifiziert (TRUE)',
    fr: 'Diplôme NBI — vérifié (TRUE)',
    es: 'Título NBI — verificado (TRUE)',
    it: 'Diploma NBI — verificato (TRUE)',
    pl: 'Dyplom NBI — zweryfikowany (TRUE)',
    sq: 'Diploma NBI — e verifikuar (TRUE)',
  } satisfies Record<Locale, string>,
  qrCaption: {
    en: 'Click or scan to verify diploma',
    sv: 'Klicka eller skanna för att verifiera examensbevis',
    de: 'Klicken oder scannen zum Verifizieren',
    fr: 'Cliquer ou scanner pour vérifier',
    es: 'Clic o escanear para verificar',
    it: 'Clicca o scansiona per verificare',
    pl: 'Kliknij lub zeskanuj, aby zweryfikować',
    sq: 'Kliko ose skano për të verifikuar',
  } satisfies Record<Locale, string>,
} as const;
