# Editor Jakupi — Portfolio

Multilingual developer portfolio built with **React 18 + TypeScript + Vite**. Single-page layout with hero, about, project grid with case-study modals, references, and contact. Deployed on Render with custom domain on Cloudflare.

## Live site

**Primary:** [https://editorjakupi.com](https://editorjakupi.com)

**Legacy (redirects to primary):** `https://editor-jakupi-portfolio.onrender.com`  
Skip redirect while testing DNS: append `?noredirect=1`

## Languages

Source content is **English**. The language dropdown uses **Google Website Translator** (same language set as Google Translate) — no hardcoded UI catalogs per language.

CV (`/cv.html`) still offers curated **EN / SV / SQ** layouts for print/PDF quality.

## Local development

```bash
NODE_OPTIONS=--use-system-ca npm install
npm run dev
```

Open `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## Deploy on Render

Already wired via `render.yaml` (static site → `./dist`).

### Custom domain (Cloudflare → Render)

1. **Render** → your static site → **Settings → Custom Domains** → add `editorjakupi.com` and `www.editorjakupi.com`
2. **Cloudflare** → DNS for `editorjakupi.com`:
   - `CNAME` `@` → `editor-jakupi-portfolio.onrender.com` (proxied or DNS-only; Cloudflare flattens apex CNAME)
   - `CNAME` `www` → `editor-jakupi-portfolio.onrender.com`
3. Wait for Render SSL + Cloudflare DNS to go green
4. Optional: Cloudflare **Redirect Rule** `www` → `https://editorjakupi.com` (301)

The app also redirects the old `*.onrender.com` host to `https://editorjakupi.com` so bookmarks keep working during the transition.

## CV

- On-site: [/cv.html](public/cv.html) — EN / SV / SQ, printable to PDF
- Portfolio link on the CV points to **https://editorjakupi.com**
- Profile photo: branded avatar (`public/me.svg`) — drop in `public/me.jpg` to use your own photo

## Links

- Live: https://editorjakupi.com
- Portfolio repo: https://github.com/editorjakupi/portfolio
- GitHub profile: https://github.com/editorjakupi
- LinkedIn: https://www.linkedin.com/in/editorjakupi/
