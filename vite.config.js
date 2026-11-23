import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// Relative base keeps the build portable for GitHub Pages project sites,
// custom domains, and local previews without hard-coding a repository name.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        research: resolve(rootDir, 'research.html'),
      },
    },
  },
})
