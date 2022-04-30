import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/web-app.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  base: "/intro-section-lit/",
})
