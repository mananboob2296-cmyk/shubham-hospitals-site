import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shubham-hospitals.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'mr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
