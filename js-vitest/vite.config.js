import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.jsx?$/],
    },
    setupFiles: './setupVitest.js',
    // if you have few tests, try commenting one
    // or both out to improve performance:
    // threads: false,
    // isolate: false,
  },
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
