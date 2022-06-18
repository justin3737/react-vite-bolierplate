import { defineConfig } from 'vite'
const { resolve } = require('path');
import { splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        counter: resolve(__dirname, 'pages/Counter/index.html'),
        subpage: resolve(__dirname, 'pages/Subpage/index.html')
      },
      output: {
        entryFileNames: `pages/[name]/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
