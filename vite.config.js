import { defineConfig } from 'vite';

// Relative asset URLs also work under the GitHub Pages repository path.
export default defineConfig({ base: './',build:{rollupOptions:{output:{manualChunks:{three:['three']}}}} });
