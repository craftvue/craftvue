<div align="center">
  <p>
    <img src="../../public/Logo_light.svg" alt="CraftVue Logo" width="250" height="auto" />
  </p>

[![npm version](https://img.shields.io/npm/v/craftvue?style=for-the-badge&colorA=e2c996&colorB=6b5235)](https://www.npmjs.com/package/craftvue)
[![npm downloads](https://img.shields.io/npm/dm/craftvue?style=for-the-badge&colorA=e2c996&colorB=6b5235)](https://www.npmjs.com/package/craftvue)
[![GitHub license](https://img.shields.io/github/license/craftvue/craftvue?style=for-the-badge&colorA=e2c996&colorB=6b5235)](https://github.com/craftvue/craftvue/blob/main/LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-green?style=for-the-badge&colorA=e2c996&colorB=6b5235)](https://vuejs.org/)

</div>

# CraftVue

A modern Vue.js component library with beautiful, accessible components.

## Installation

```bash
npm install craftvue
# or
yarn add craftvue
# or
pnpm add craftvue
```

## Usage

### Automatic import (Recommended)

Configure resolver in your `vite.config.ts` to automatically import components:

```typescript
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
```

After configuration, you can use components directly in templates without importing:

```vue
<template>
  <CButton label="Click me" />
  <CInput placeholder="Enter text" />
</template>
```

### Manual import

```typescript
import { CButton, CIcon } from 'craftvue'
// or
import CButton from 'craftvue/button'
import CIcon from 'craftvue/icon'
```

### Import styles

```typescript
import 'craftvue/style'
```

## Documentation

For detailed documentation, examples, and component API, visit the [Storybook documentation](https://craftvue.github.io/craftvue/).

## Requirements

- Vue 3.4+
- Node.js 20.19+ or 22.12+

## License

MIT
