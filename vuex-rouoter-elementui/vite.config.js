import { defineConfig } from 'vite'
const { createVuePlugin } = require('vite-plugin-vue2')
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: [
      { find: /^~@/, replacement: path.resolve(__dirname, 'src') },
      { find: /^~/, replacement: '' },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
