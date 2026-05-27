# Toastery web

Static site (Astro): landing + journal (blog). Brand assets live in the parent `Toastery/` folder.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Content workflow for Nice Media: see [CONTENT.md](./CONTENT.md).

## Deploy (Cloudflare Pages)

### Option A — Git integration (recommended)

1. Push this repo to GitHub (`djsnabu/toastery`).
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select repo and set:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22 (`.node-version` is included)
4. Deploy. Add custom domain (e.g. `toastery.fi`) under **Custom domains**.
5. Update `site` in `astro.config.mjs` to match production URL.

### Option B — CLI deploy

```bash
npm install -D wrangler@latest
npx wrangler login
npm run deploy
```

First run may prompt to create the Pages project `toastery`.
