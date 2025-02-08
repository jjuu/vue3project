import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import { fileURLToPath, URL } from "url";

import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// const root: string = process.cwd()
// const pathResolve = (path: string): string => resolve(root, path)

const pathResolve = path.resolve(__dirname, './src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      // options
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
    // {
    //   // '@': path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
    //   '@': path.resolve(__dirname, './src'), // 将'@'映射到'/src'目录
    //   '@components': path.resolve(__dirname, 'src/components')
    //   // 设置 `@` 指向 `src` 目录
    //   // { find: '@', replacement: pathResolve('src') },
    //   // 设置 `#` 指向 `types` 目录
    //   // { find: '#', replacement: pathResolve('types') },

    // }
  },
})
