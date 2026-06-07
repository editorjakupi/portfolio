# Editor Jakupi — Portfolio

Multilingual developer portfolio built with **React 18 + TypeScript + Vite**. Single-page layout with hero, about, project grid with case-study modals, references, and contact. Deployed on Render.

## Live site

After connecting the repo on Render, your site will be at:

`https://editor-jakupi-portfolio.onrender.com` (or your custom domain)

## Languages (8)

| Code | Language |
|------|----------|
| en | English (default) |
| de | Deutsch |
| fr | Français |
| es | Español |
| it | Italiano |
| pl | Polski |
| sv | Svenska |
| sq | Shqip (Albanian) |

Project case studies are fully translated in **EN / SV / SQ**; other UI languages fall back to English for project descriptions.

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

## Deploy on Render (one-time setup)

1. Go to [dashboard.render.com](https://dashboard.render.com) → **New** → **Blueprint**
2. Connect GitHub repo: `editorjakupi/portfolio`
3. Render reads `render.yaml` automatically
4. After deploy, optional: **Settings → Custom Domains** to add your domain

## CV

- On-site: [/cv.html](public/cv.html) — EN / SV / SQ, printable to PDF
- Profile photo: GitHub avatar (`public/me.jpg`) — replace with your own photo anytime

## Links

- Portfolio repo: https://github.com/editorjakupi/portfolio
- GitHub profile: https://github.com/editorjakupi
- LinkedIn: https://www.linkedin.com/in/editorjakupi/
