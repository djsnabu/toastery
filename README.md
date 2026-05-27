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

## Deploy

Static output in `dist/`. Suitable for Cloudflare Pages, Netlify, or any static host:

```bash
npm run build
# Publish dist/
```

Set build command `npm run build` and output directory `dist`. Update `site` in `astro.config.mjs` when the production URL is known.
