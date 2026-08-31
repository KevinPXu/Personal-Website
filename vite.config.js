import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site is served from the custom root domain (kevinx.dev), so assets
  // resolve from '/'. If this ever deploys under a subpath (e.g. a GitHub
  // project page), change base to '/<repo-name>/'.
  base: '/',
  build: {
    // CRA emitted to build/; keep that so `gh-pages -d build` still works.
    outDir: 'build',
  },
});
