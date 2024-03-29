import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import vercel from 'vite-plugin-vercel'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let base = 'http://localhost:3002'
  if (command === 'build') base = 'https://crash-mouse.vercel.app'
  return {
    plugins: [
      vue(),
      svgLoader(),
      vitePluginSingleSpa({
        type: 'mife',
        serverPort: 3002
      }),
      vercel()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      hmr: false
    },
    base: base
  }
})
