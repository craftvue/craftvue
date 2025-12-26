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
