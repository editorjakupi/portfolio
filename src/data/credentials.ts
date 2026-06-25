import type { Locale } from '../i18n/types';

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
