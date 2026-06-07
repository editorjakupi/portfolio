# Editor Jakupi — Portfolio

Multilingual developer portfolio built with **React 18 + TypeScript + Vite**. Inspired by modern single-page layouts with project case-study modals, deployed on Render.

## Languages

- **English** (default)
- **Svenska**
- **Shqip** (Albanian)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy on Render

1. Push this repo to GitHub.
2. Create a new **Static Site** on [render.com](https://render.com).
3. Connect the repo — `render.yaml` is included for automatic config.
4. Build command: `npm install && npm run build`
5. Publish directory: `dist`

## Structure

- `src/i18n/` — locale files (EN, SV, SQ)
- `src/data/projects.ts` — all GitHub repos + LIA projects
- `src/data/profile.ts` — contact info and references
- `src/components/` — Hero, About, Projects, References, Contact

## Links

- GitHub: https://github.com/editorjakupi
- LinkedIn: https://www.linkedin.com/in/editorjakupi/
