# Editor Jakupi — Portfolio

Multilingual developer portfolio built with **React 18 + TypeScript + Vite**. Single-page layout with hero, about, project grid with case-study modals, references, and contact.

**Hosted on Hetzner** (`apps-nbg1`) with Docker + nginx behind Caddy/Let’s Encrypt — same VPS stack as my showcase apps under `*.editorjakupi.com`.

## Live site

**Primary:** [https://editorjakupi.com](https://editorjakupi.com) (also `www`)

| App | URL |
|-----|-----|
| Portfolio | https://editorjakupi.com |
| SmartFood | https://smartfood.editorjakupi.com |
| Telco Churn | https://churn.editorjakupi.com |
| Diamonds Intelligence | https://diamonds.editorjakupi.com |
| Gematrior | https://gematrior.com |

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

Live path on VPS: **`/opt/portfolio`** · container `portfolio-prod-web` · edge via `gematrior-prod-caddy` on Docker network `deploy_gematrior`.

```bash
# From this repo (example sync + rebuild)
tar -czf /tmp/portfolio-deploy.tgz \
  --exclude=node_modules --exclude=dist --exclude=.git \
  .
scp /tmp/portfolio-deploy.tgz root@23.88.100.144:/tmp/portfolio-deploy.tgz

ssh root@23.88.100.144 '
  tar -xzf /tmp/portfolio-deploy.tgz -C /opt/portfolio
  cd /opt/portfolio && docker compose up -d --build
  docker exec gematrior-prod-caddy caddy reload --config /etc/caddy/Caddyfile
  curl -sI https://editorjakupi.com/ | head -5
'
```

DNS: `editorjakupi.com` / `www` and app subdomains → `23.88.100.144` (Cloudflare DNS-only recommended for apex). TLS is handled by Caddy.

GitHub push alone does **not** update the live site — deploy is an SSH rebuild of `/opt/portfolio`.

## CV

- On-site: [/cv.html](public/cv.html) — EN / SV / SQ, printable to PDF
- Portfolio link on the CV points to **https://editorjakupi.com**
- Profile photo: branded avatar (`public/me.svg`) — drop in `public/me.jpg` to use your own photo

## Links

- Live: https://editorjakupi.com
- Portfolio repo: https://github.com/editorjakupi/portfolio
- GitHub profile: https://github.com/editorjakupi
- LinkedIn: https://www.linkedin.com/in/editorjakupi/
