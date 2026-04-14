import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

const site = 'https://worldwidewebcommercial.com';

export default defineConfig({
  site,
  integrations: [netlify(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
