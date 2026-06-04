import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Si se está ejecutando en GitHub Actions, usa el nombre del repo, si no, usa la raíz '/'
  base: process.env.GITHUB_ACTIONS ? '/tienda_vendefacil/' : '/',
})
