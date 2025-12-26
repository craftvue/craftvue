import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        'components/Button/index': fileURLToPath(
          new URL('./src/components/Button/index.ts', import.meta.url),
        ),
        'components/Badge/index': fileURLToPath(
          new URL('./src/components/Badge/index.ts', import.meta.url),
        ),
        'components/Icon/index': fileURLToPath(
          new URL('./src/components/Icon/index.ts', import.meta.url),
        ),
        'components/Input/index': fileURLToPath(
          new URL('./src/components/Input/index.ts', import.meta.url),
        ),
        'components/FormItem/index': fileURLToPath(
          new URL('./src/components/FormItem/index.ts', import.meta.url),
        ),
        'components/Tabs/index': fileURLToPath(
          new URL('./src/components/Tabs/index.ts', import.meta.url),
        ),
        'components/TabList/index': fileURLToPath(
          new URL('./src/components/TabList/index.ts', import.meta.url),
        ),
        'components/Tab/index': fileURLToPath(
          new URL('./src/components/Tab/index.ts', import.meta.url),
        ),
        'components/TabPanels/index': fileURLToPath(
          new URL('./src/components/TabPanels/index.ts', import.meta.url),
        ),
        'components/TabPanel/index': fileURLToPath(
          new URL('./src/components/TabPanel/index.ts', import.meta.url),
        ),
        'components/Tooltip/index': fileURLToPath(
          new URL('./src/components/Tooltip/index.ts', import.meta.url),
        ),
        'components/Select/index': fileURLToPath(
          new URL('./src/components/Select/index.ts', import.meta.url),
        ),
        'components/Dropdown/index': fileURLToPath(
          new URL('./src/components/Dropdown/index.ts', import.meta.url),
        ),
        'components/Popup/index': fileURLToPath(
          new URL('./src/components/Popup/index.ts', import.meta.url),
        ),
        'components/Checkbox/index': fileURLToPath(
          new URL('./src/components/Checkbox/index.ts', import.meta.url),
        ),
        'components/CheckboxGroup/index': fileURLToPath(
          new URL('./src/components/CheckboxGroup/index.ts', import.meta.url),
        ),
        'components/ConfirmDialog/index': fileURLToPath(
          new URL('./src/components/ConfirmDialog/index.ts', import.meta.url),
        ),
        'components/ConfirmPopup/index': fileURLToPath(
          new URL('./src/components/ConfirmPopup/index.ts', import.meta.url),
        ),
        'components/Dialog/index': fileURLToPath(
          new URL('./src/components/Dialog/index.ts', import.meta.url),
        ),
        'components/Popover/index': fileURLToPath(
          new URL('./src/components/Popover/index.ts', import.meta.url),
        ),
        'components/Radio/index': fileURLToPath(
          new URL('./src/components/Radio/index.ts', import.meta.url),
        ),
        'components/RadioGroup/index': fileURLToPath(
          new URL('./src/components/RadioGroup/index.ts', import.meta.url),
        ),
        'components/Switch/index': fileURLToPath(
          new URL('./src/components/Switch/index.ts', import.meta.url),
        ),
        'components/Tag/index': fileURLToPath(
          new URL('./src/components/Tag/index.ts', import.meta.url),
        ),
      },
      name: 'CraftVue',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'mjs' : 'cjs'
        return entryName === 'index' ? `index.${ext}` : `${entryName}.${ext}`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: { vue: 'Vue' },
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.names && assetInfo.names[0] === 'craftvue.css') {
            return 'craftvue.css'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/mixins.scss" as *;`,
      },
    },
  },
})
