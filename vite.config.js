import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vitePluginRequire({
    // @fileRegex RegExp
    // optional：default file processing rules are as follows
    // fileRegex:/(.jsx?|.tsx?|.vue)$/
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
