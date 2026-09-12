import { getGoogleTranslateLang } from '../i18n/googleTranslate';

const europassPdfSv =
  'https://www.nbi-handelsakademin.se/wp-content/uploads/Europass-MAI24HA-SV.pdf';
const europassPdfEn =
  'https://www.nbi-handelsakademin.se/wp-content/uploads/Europass-MAI24HA-ENG.pdf';

/** Prefer Swedish Europass PDF when the page is translated to Swedish. */
export function europassUrlForLocale(): string {
  return getGoogleTranslateLang() === 'sv' ? europassPdfSv : europassPdfEn;
}

export const nbiEuropass = {
  pageUrl: 'https://www.nbi-handelsakademin.se/europass/',
  pdfSv: europassPdfSv,
  pdfEn: europassPdfEn,
  timelineLabel: 'Europass (English)',
  linkLabel: 'Europass — Software Developer AI (EN)',
} as const;

/** Public TRUE original — blockchain-verified diploma from NBI/Handelsakademin */
export const nbiDiploma = {
  url: 'https://true.nbi-handelsakademin.se/examensbevis-nbi-356401-8604/?zone=truecrt&lang=se',
  verifyUrl: 'https://verify.trueoriginal.com/BD37A33A-C66B-1B25-C8AA-0244C8B7F720/?ref=badge',
  qrImageUrl:
    'https://cdn.truecrt.com/cdn/full/qrcode-raw-BD37A33A-C66B-1B25-C8AA-0244C8B7F720.png?ref=qrcode&key=X9dRTsX622&s=0',
  verifyLabel: 'Verify diploma (TRUE)',
  linkLabel: 'NBI diploma — verified (TRUE)',
  qrCaption: 'Click or scan to verify diploma',
} as const;
