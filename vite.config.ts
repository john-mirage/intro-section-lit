import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/intro-section-lit/",
  build: {
    lib: {
      entry: 'src/components/web-app.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
