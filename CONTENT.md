# Toastery — sisällön julkaisu (Nice Media)

Asiakas ei päivitä sivustoa. Uudet blogipostit lisätään repoon.

## Uusi blogiposti

1. Lisää kuva: `public/images/blog/your-image.jpg`
2. Luo tiedosto: `src/content/blog/your-slug.md`

```yaml
---
title: 'Otsikko'
description: 'Lyhyt kuvaus (meta + listaus)'
pubDate: 2026-05-27
tag: toast          # toast | 24h | terrace | coffee | bar
coverImage: /images/blog/your-image.jpg
draft: false
---

Artikkelin teksti markdownina.
```

3. `npm run build` — tarkista että build onnistuu
4. Deploy

## Tagit (some-kalenteri)

| tag | käyttö |
|-----|--------|
| toast | Tiistai, toast of the week |
| 24h | Torstai, yö & 24h |
| terrace | Terassi |
| coffee | Kahviasema |
| bar | Lauantai, cocktailit |

## Linkit

- Finavia: https://www.finavia.fi/en/airports/helsinki-airport/services-and-shops/toastery-cafe-bar-terrace
- Kartta: https://www.finavia.fi/en/airports/helsinki-airport/airport-map
- Instagram: https://www.instagram.com/toasterycafebar/

## Kehitys

```bash
cd toastery-web
npm run dev
npm run build
npm run preview
```
