import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  assetsInclude: ['**/*.xml', '**/*.txt'], // tell vite to allow XML/TXT as static files
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
