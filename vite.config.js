import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /website/ (a subpath), while
// Vercel serves it from the domain root. GH_PAGES=true is set only by
// the GitHub Actions deploy workflow.
export default defineConfig({
  base: process.env.GH_PAGES ? '/website/' : '/',
  plugins: [react()],
})
