const configCodeTexts = {
  download: `
# Using npm
npm install craftvue

# Using yarn
yarn add craftvue

# Using pnpm
pnpm add craftvue
`,
  globalReg: `
    import CButton from "craftvue/button";

    const app = createApp(App);
    app.component("CButton", CButton);
  `,
  basicUsage: `
    <template>
      <CButton label="Кнопка">
        <CBadge value="12" />
      </CButton>
    </template>
    <script setup>
      import { CButton, CBadge } from "craftvue";
      // or import separately
      import CButton from "craftvue/button";
      import CBadge from "craftvue/badge";
    </script>
  `,
  autoImport: `
    // vite.config.ts
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import Components from 'unplugin-vue-components/vite'
    import { CraftVueResolver } from 'craftvue'

    export default defineConfig({
      plugins: [
        vue(),
        Components({
          resolvers: [CraftVueResolver()],
        }),
      ],
    })
  `,
  styles: `
    // main.ts
    import 'craftvue/style'
  `,
  iconsDownload: `
# Using npm
npm install @craftvue/icons

# Using yarn
yarn add @craftvue/icons

# Using pnpm
pnpm add @craftvue/icons
  `,
  iconsImport: `
    <template>
      <SearchIcon/>
      <CloseIcon/>
    </template>
    <script setup>
      import { SearchIcon, CloseIcon } from '@craftvue/icons'
      // or import separately
      import SearchIcon from '@craftvue/icons/search'
      import CloseIcon from '@craftvue/icons/close'
    </script>
  `,
  themingFont: `
    <style>
      :root{
        --c-font-family-base: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
      }
    </style>
  `,
  themingFontSetup: `
    <style>
      @font-face {
        font-family: 'Montserrat';
        src: url('../fonts/Montserrat-VariableFont_wght\ .woff2') format('woff2-variations');
        font-weight: 100 900;
        font-display: swap;
      }
    </style>
  `,
  themingColorBasic: `
    <style>
      :root {
        --c-main-color: var(--white);
        --c-ground-back: var(--neutral-900);
        --c-prime-color: #bea87b;
        --c-prime-color-light: color-mix(in srgb, var(--c-prime-color) 100%, #fff 30%);
        --c-prime-color-dark: color-mix(in srgb, var(--c-prime-color) 90%, #000 100%);
        --c-secondary-back: var(--neutral-800);
        --c-secondary-text-color: var(--zinc-400);
        --c-invalid-color: var(--red-400);
      }
    </style>
  `,
  themingColorComponent: `
    <style>
      :root {
        --c-badge-primary-back: var(--c-prime-color);
        --c-badge-primary-color: var(--black);
        --c-badge-secondary-back: var(--c-secondary-back);
        --c-badge-secondary-color: var(--white);
        --c-badge-contrast-back: var(--c-prime-color-dark);
        --c-badge-contrast-color: var(--white);
        --c-badge-outline-color: var(--c-ground-back);
      }
    </style>
  `,
  themingColorPalette: `
    <style>
      :root {
        --slate-50: #f8fafc;
      }

      // usage
      color: var(--slate-50);
    </style>
  `,
  themingCssProperties: `
    <style>
      :root {
        --c-border-radius-none: 0;
        --c-border-radius-xs: 2px;
        --c-border-radius-sm: 4px;
        --c-border-radius-md: 6px;
        --c-border-radius-lg: 8px;
        --c-border-radius-xl: 12px;
        --c-border-radius-2xl: 15px;
        --c-border-radius-full: 9999px;

        --c-z-index-1000: 1000;
        --c-z-index-1100: 1100;
      }
    </style>
  `,
}
export default configCodeTexts
