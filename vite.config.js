import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
  server: {
    port: 9999,
    strictPort: false,
  },
  preview: {
    port: 8888,
    strictPort: false,
  }
});
