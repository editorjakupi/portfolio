# Editor Jakupi — Portfolio

Multilingual developer portfolio built with **React 18 + TypeScript + Vite**. Single-page layout with hero, about, project grid with case-study modals, references, and contact. Hosted on a **Hetzner CX23** (`apps-nbg1`) behind shared **Caddy + Let's Encrypt**, with the static Vite build served via nginx in Docker.

## Live site

**Primary:** [https://editorjakupi.com](https://editorjakupi.com) (also `www`)

Showcase apps on the same VPS:

| App | URL |
|-----|-----|
| Diamonds Intelligence | https://diamonds.editorjakupi.com |
| Telco Churn | https://churn.editorjakupi.com |
| SmartFood | https://smartfood.editorjakupi.com |

Legacy bookmarks on `*.onrender.com` still redirect to the primary domain.

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

## Deploy on Hetzner

Production path: `/opt/portfolio` on `apps-nbg1` (`portfolio-prod-web` on Docker network `deploy_gematrior`). Caddy terminates TLS and reverse-proxies `editorjakupi.com` / `www`.

```bash
# From this repo (after commit/push), on the VPS:
cd /opt/portfolio
git pull   # or rsync the tree
docker compose up -d --build
docker exec gematrior-prod-caddy caddy reload --config /etc/caddy/Caddyfile
curl -sI https://editorjakupi.com/ | head -5
```

Cloudflare DNS for `editorjakupi.com` / `www` and app subdomains should point at the VPS (prefer DNS-only for apex/subdomains served by Caddy).

## CV

- On-site: [/cv.html](public/cv.html) — EN / SV / SQ, printable to PDF
- Portfolio link on the CV points to **https://editorjakupi.com**
- Profile photo: branded avatar (`public/me.svg`) — drop in `public/me.jpg` to use your own photo

## Links

- Live: https://editorjakupi.com
- Portfolio repo: https://github.com/editorjakupi/portfolio
- GitHub profile: https://github.com/editorjakupi
- LinkedIn: https://www.linkedin.com/in/editorjakupi/
