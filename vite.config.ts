import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
