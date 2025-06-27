import { defineConfig } from 'astro/config';
import fulldevUi from 'fulldev-ui';
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  integrations: [fulldevUi(), mdx()]
});