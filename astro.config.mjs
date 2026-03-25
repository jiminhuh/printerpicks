import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://example.com', // Agent replaces with actual domain
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
