import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  base: '/atlasvanguard-site/',
  site: 'https://atlasvanguard-ma.github.io',
  outDir: 'dist',
});