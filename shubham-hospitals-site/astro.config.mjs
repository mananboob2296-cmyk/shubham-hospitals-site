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
  integrations: [
    sitemap({
      // The two digital visiting cards ship <meta name="robots" content="noindex">.
      // Listing a noindex URL in the XML sitemap sends Google contradictory signals,
      // so keep them out of it. They stay reachable and shareable as before.
      filter: (page) => !/\/(dr-manan-boob-blue|dr-manjushree-boob)\/$/.test(page),
    }),
  ],
});
