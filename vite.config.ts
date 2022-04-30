import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/intro-section-with-dropdown/",
  build: {
    lib: {
      entry: 'src/web-bar.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
