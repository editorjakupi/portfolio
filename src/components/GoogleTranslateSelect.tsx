import { useEffect, useState } from 'react';
import {
  ensureGoogleTranslateElement,
  getGoogleTranslateLang,
  GOOGLE_TRANSLATE_LANGUAGES,
  setGoogleTranslateLang,
} from '../i18n/googleTranslate';

export default function GoogleTranslateSelect() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    setLang(getGoogleTranslateLang());
    ensureGoogleTranslateElement();
  }, []);

  return (
    <label className="lang-select-wrap notranslate" translate="no">
      <span className="sr-only">Translate</span>
      <select
        className="lang-select"
        value={lang}
        onChange={(event) => {
          const next = event.target.value;
          setLang(next);
          setGoogleTranslateLang(next);
        }}
        aria-label="Translate page"
      >
        {GOOGLE_TRANSLATE_LANGUAGES.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
