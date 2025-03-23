import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/heroes-app-react/', // <-- Aquí va el nombre de tu repo
  build: {
    outDir: 'docs', // <--- Aquí cambias "dist" por "docs"
  },
})
