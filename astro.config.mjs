// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://toastery.fi',
  trailingSlash: 'always',
  compressHTML: true,
});
