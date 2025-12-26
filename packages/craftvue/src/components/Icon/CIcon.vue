<template>
  <i class="c-icon" v-bind="$attrs" :style="style">
    <slot>
      <component :is="iconComponent" />
    </slot>
  </i>
</template>

<script setup lang="ts">
import { CSSProperties, computed, defineAsyncComponent, defineSlots } from 'vue'
import type { Component } from 'vue'
import type { IconProps, IconName, IconSlots } from './CIcon.types'
import { addUnit } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

defineSlots<IconSlots>()
const props = defineProps<IconProps>()

// Dynamic imports for individual icon entry points are only available after @craftvue/icons package is built
// These paths are resolved at runtime and may not be available during type checking in CI/CD
const iconLoaders: Record<IconName, () => Promise<{ default: Component }>> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  close: () => import('@craftvue/icons/close'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  search: () => import('@craftvue/icons/search'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  spinner: () => import('@craftvue/icons/spinner'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  eye: () => import('@craftvue/icons/eye'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  eyeslash: () => import('@craftvue/icons/eyeslash'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  nextarrow: () => import('@craftvue/icons/nextarrow'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  prevarrow: () => import('@craftvue/icons/prevarrow'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  uparrow: () => import('@craftvue/icons/uparrow'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  downarrow: () => import('@craftvue/icons/downarrow'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  check: () => import('@craftvue/icons/check'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  edit: () => import('@craftvue/icons/edit'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  save: () => import('@craftvue/icons/save'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  delete: () => import('@craftvue/icons/delete'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  home: () => import('@craftvue/icons/home'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  add: () => import('@craftvue/icons/add'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  envelope: () => import('@craftvue/icons/envelope'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  minus: () => import('@craftvue/icons/minus'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  error: () => import('@craftvue/icons/error'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  info: () => import('@craftvue/icons/info'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  maximize: () => import('@craftvue/icons/maximize'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  minimize: () => import('@craftvue/icons/minimize'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Icon entry points are only available after @craftvue/icons package is built
  warning: () => import('@craftvue/icons/warning')
}

const iconComponent = computed<Component | null>(() => {
  if (props.name && iconLoaders[props.name]) {
    return defineAsyncComponent(iconLoaders[props.name])
  }

  return null
})

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: addUnit(size),
    '--color': color,
  }
})
</script>
