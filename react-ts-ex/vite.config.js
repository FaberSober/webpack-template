import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import createExternal from 'vite-plugin-external';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createExternal({
      externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
      }
    }),
    reactRefresh(),
  ],
  resolve: {
    alias: [
      { find: /^~@/, replacement: path.resolve(__dirname, 'src') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
