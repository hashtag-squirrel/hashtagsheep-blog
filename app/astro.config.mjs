import { defineConfig } from 'astro/config';
import fulldevUi from 'fulldev-ui';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://hashtagsheep.com',
  integrations: [fulldevUi(), sitemap()],
  build: {
    format: 'file'
  }
});