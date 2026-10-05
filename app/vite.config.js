import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Required for GitHub Project Pages: https://<user>.github.io/<repo>/
  base: '/my-open-code/',
  plugins: [react()],
})
