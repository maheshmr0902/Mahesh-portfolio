import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ Fixes blank screen on Netlify
  plugins: [react()],
});



