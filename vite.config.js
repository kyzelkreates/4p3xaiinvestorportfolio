import { defineConfig } from 'vite';

export default defineConfig({
  // Root is the project root (index.html lives here)
  root: '.',
  // Public dir for static assets served as-is (sw.js, manifest, icons, offline.html, JSON pack)
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Generate source maps for debugging
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173
  }
});
