import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8',
    },
  },
});
