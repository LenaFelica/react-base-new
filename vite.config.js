import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      api: path.resolve(__dirname, './src/api'),
    },
    mainFields: ['module', 'main', 'browser'],
    extensions: ['.jsx', '.js', '.json'],
  },
  build: {
    assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.svg'],
  },
  assetsInclude: ['**/*.svg'],
});
