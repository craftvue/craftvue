# @craftvue/icons

Icon components for [CraftVue](https://github.com/craftvue/craftvue) library.

## Installation

```bash
npm install @craftvue/icons
# or
yarn add @craftvue/icons
# or
pnpm add @craftvue/icons
```

## Usage

### With CIcon component (Recommended)

The easiest way to use icons is through the `CIcon` component from `craftvue`:

```vue
<template>
  <CIcon name="search" />
  <CIcon name="close" size="24" color="#ff0000" />
</template>

<script setup>
import CIcon from 'craftvue/icon'
</script>
```

### Import all icons

```typescript
import { SearchIcon, CloseIcon, SpinnerIcon } from '@craftvue/icons'
```

### Import specific icon

```typescript
import SearchIcon from '@craftvue/icons/search'
import CloseIcon from '@craftvue/icons/close'
import SpinnerIcon from '@craftvue/icons/spinner'
```

## Requirements

- [Vue 3.4+](https://vuejs.org/)

## License

MIT
