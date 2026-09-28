# Editor Jakupi — Portfolio

Multilingual developer portfolio built with **React 18 + TypeScript + Vite**. Single-page layout with hero, about, project grid with case-study modals, references, and contact.

**Hosting:** this site runs on my **Hetzner CX23** VPS (`apps-nbg1`, `23.88.100.144`) — Vite static build → nginx in Docker → shared **Caddy** (TLS via Let's Encrypt). Not on Render, Vercel, or other PaaS.

## Live site

**Portfolio:** [https://editorjakupi.com](https://editorjakupi.com) (also `www`)

Same VPS / Caddy edge:

| App | URL |
|-----|-----|
| Portfolio (this repo) | https://editorjakupi.com |
| Diamonds Intelligence | https://diamonds.editorjakupi.com |
| Telco Churn | https://churn.editorjakupi.com |
| SmartFood | https://smartfood.editorjakupi.com |
| Gematrior | https://gematrior.com |

Cloudflare DNS points these names at the VPS (prefer DNS-only for hosts terminated by Caddy).

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

## Stack

- React 18 + TypeScript + Vite
- Static `dist/` served by nginx (`Dockerfile` + `nginx.conf`)
- `docker-compose.yml` → container `portfolio-prod-web` on Docker network `deploy_gematrior`
- Edge: shared Caddy reverse proxy (same stack as the showcase apps)

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

## Deploy on Hetzner

Production tree: **`/opt/portfolio`** on `apps-nbg1` (no git clone on the server — sync the repo tree, then rebuild).

```bash
# From your machine (after commit/push), sync sources then rebuild on the VPS:
# e.g. tar | scp, or rsync if available
ssh root@23.88.100.144 'cd /opt/portfolio && docker compose up -d --build'
ssh root@23.88.100.144 'docker exec gematrior-prod-caddy caddy reload --config /etc/caddy/Caddyfile'
curl -sI https://editorjakupi.com/ | head -5
```

`Dockerfile` multi-stage: `npm ci` + `vite build` → copy `dist/` into nginx alpine. Caddy terminates HTTPS for `editorjakupi.com` / `www` and proxies to `portfolio-prod-web:80`.

Legacy bookmarks on `editor-jakupi-portfolio.onrender.com` still client-redirect to `https://editorjakupi.com` (`src/site.ts`).

## CV

- On-site: [/cv.html](public/cv.html) — EN / SV / SQ, printable to PDF
- Portfolio link on the CV points to **https://editorjakupi.com**
- Profile photo: branded avatar (`public/me.svg`) — drop in `public/me.jpg` to use your own photo

## Links

- Live: https://editorjakupi.com
- Portfolio repo: https://github.com/editorjakupi/portfolio
- GitHub profile: https://github.com/editorjakupi
- LinkedIn: https://www.linkedin.com/in/editorjakupi/
