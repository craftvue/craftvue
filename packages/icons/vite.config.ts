import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue(), dts({ outDir: 'dist', insertTypesEntry: true })],
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        'components/SearchIcon': fileURLToPath(
          new URL('./src/components/SearchIcon.vue', import.meta.url),
        ),
        'components/CloseIcon': fileURLToPath(
          new URL('./src/components/CloseIcon.vue', import.meta.url),
        ),
        'components/SpinnerIcon': fileURLToPath(
          new URL('./src/components/SpinnerIcon.vue', import.meta.url),
        ),
        'components/EyeIcon': fileURLToPath(
          new URL('./src/components/EyeIcon.vue', import.meta.url),
        ),
        'components/EyeSlashIcon': fileURLToPath(
          new URL('./src/components/EyeSlashIcon.vue', import.meta.url),
        ),
        'components/NextArrowIcon': fileURLToPath(
          new URL('./src/components/NextArrowIcon.vue', import.meta.url),
        ),
        'components/PrevArrowIcon': fileURLToPath(
          new URL('./src/components/PrevArrowIcon.vue', import.meta.url),
        ),
        'components/UpArrowIcon': fileURLToPath(
          new URL('./src/components/UpArrowIcon.vue', import.meta.url),
        ),
        'components/DownArrowIcon': fileURLToPath(
          new URL('./src/components/DownArrowIcon.vue', import.meta.url),
        ),
        'components/CheckIcon': fileURLToPath(
          new URL('./src/components/CheckIcon.vue', import.meta.url),
        ),
        'components/EditIcon': fileURLToPath(
          new URL('./src/components/EditIcon.vue', import.meta.url),
        ),
        'components/SaveIcon': fileURLToPath(
          new URL('./src/components/SaveIcon.vue', import.meta.url),
        ),
        'components/DeleteIcon': fileURLToPath(
          new URL('./src/components/DeleteIcon.vue', import.meta.url),
        ),
        'components/HomeIcon': fileURLToPath(
          new URL('./src/components/HomeIcon.vue', import.meta.url),
        ),
        'components/AddIcon': fileURLToPath(
          new URL('./src/components/AddIcon.vue', import.meta.url),
        ),
        'components/EnvelopeIcon': fileURLToPath(
          new URL('./src/components/EnvelopeIcon.vue', import.meta.url),
        ),
        'components/ErrorIcon': fileURLToPath(
          new URL('./src/components/ErrorIcon.vue', import.meta.url),
        ),
        'components/InfoIcon': fileURLToPath(
          new URL('./src/components/InfoIcon.vue', import.meta.url),
        ),
        'components/MaximizeIcon': fileURLToPath(
          new URL('./src/components/MaximizeIcon.vue', import.meta.url),
        ),
        'components/MinimizeIcon': fileURLToPath(
          new URL('./src/components/MinimizeIcon.vue', import.meta.url),
        ),
        'components/WarningIcon': fileURLToPath(
          new URL('./src/components/WarningIcon.vue', import.meta.url),
        ),
        'components/MinusIcon': fileURLToPath(
          new URL('./src/components/MinusIcon.vue', import.meta.url),
        ),
      },
      name: 'CraftVueIcons',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'mjs' : 'cjs'
        return entryName === 'index' ? `index.${ext}` : `${entryName}.${ext}`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.names && assetInfo.names[0] === 'craftvue-icons.css') {
            return 'craftvue-icons.css'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
