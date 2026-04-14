import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://worldwidewebcommercial.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
