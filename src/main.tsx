import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LocaleProvider } from './i18n/LocaleContext';
import { maybeRedirectLegacyHost } from './site';
import './styles/global.css';

maybeRedirectLegacyHost();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>,
);
