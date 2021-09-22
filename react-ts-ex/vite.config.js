import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const resolveExternalsPlugin = require('vite-plugin-resolve-externals');
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    resolveExternalsPlugin(),
    reactRefresh(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
})
