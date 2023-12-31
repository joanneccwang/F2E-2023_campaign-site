import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  base: '/F2E-2023_campaign-site/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/style/variables.scss";
          @import "@/style/mixins.scss";
          @import "@/style/media-query.scss";`,
      },
    },
  },
});
