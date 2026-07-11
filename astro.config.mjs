// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // After the first Cloudflare Pages deploy, set this to the production URL
  // (e.g. site: 'https://your-project.pages.dev') to enable canonical/og:url tags.
  vite: {
    plugins: [tailwindcss()],
  },
});
