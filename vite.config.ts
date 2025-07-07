import uni from '@dcloudio/vite-plugin-uni';
import UnoCSS from 'unocss/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  return {
    plugins: [uni(), UnoCSS()],
    build: {
      sourcemap: mode === 'development',
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    }
});
