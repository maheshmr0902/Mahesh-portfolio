import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mahesh-portfolio/'  // 👈 MUST MATCH your GitHub repo name
})




