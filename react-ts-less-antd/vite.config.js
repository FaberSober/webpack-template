import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const path = require('path');
import serverConfig from './configs/server.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: {
          // 修改antd主题色
          '@primary-color': serverConfig.primaryColor,
          'link-color': serverConfig.linkColor,
        },
      },
    }
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
