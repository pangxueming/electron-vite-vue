import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import resolve, { lib2esm } from 'vite-plugin-resolve';
import electron from 'vite-plugin-electron/renderer';
import pkg from '../../package.json';
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import renderer from 'vite-plugin-electron-renderer';
import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig({
  mode: process.env.NODE_ENV,
  root: __dirname,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'views': path.resolve(__dirname, 'src/views'),
      "Type": path.resolve(__dirname, 'src/types'),
      "vue-i18n": 'vue-i18n/dist/vue-i18n.cjs.js',
      '~/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    electron(),
    renderer(),
    resolve(
      {
        'electron-store': 'export default require("electron-store");',
        sqlite3: lib2esm('sqlite3', { format: 'cjs' }),
        serialport: lib2esm(
          'serialport',
          [
            'SerialPort',
            'SerialPortMock',
          ],
          { format: 'cjs' },
        ),
      }
    ),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass", })],
    }),
    ElementPlus({
      useSource: true,
    })
  ],
  base: './',
  build: {
    outDir: '../../dist/renderer',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  },
  server: {
    host: pkg.env.VITE_DEV_SERVER_HOST,
    port: pkg.env.VITE_DEV_SERVER_PORT,
  },
})
