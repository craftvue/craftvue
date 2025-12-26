<template>
  <span :class="tagClasses" :style="attrs.style">
    <slot name="prefix">
      <CIcon v-if="props.prefixIcon" class="c-tag__prefix-icon">
        <component :is="props.prefixIcon" />
      </CIcon>
    </slot>

    <slot>{{ props.value }}</slot>

    <slot name="suffix">
      <CIcon v-if="props.suffixIcon" class="c-tag__suffix-icon">
        <component :is="props.suffixIcon" />
      </CIcon>
    </slot>

    <button
      v-if="props.closable"
      type="button"
      class="c-tag__close"
      :aria-label="getAriaLabel('close')"
      @click="emits('close', $event)"
    >
      <CIcon name="close" class="c-tag__close-icon" />
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed, HTMLAttributes, useAttrs } from 'vue'
import { TagClasses, TagEmits, TagProps, TagSlots } from './CTag.types'
import { CIcon } from '@/components'
import { getAriaLabel } from '@/constants/aria-labels'

defineOptions({
  inheritAttrs: false,
})

defineSlots<TagSlots>()
const emits = defineEmits<TagEmits>()
const attrs = useAttrs() as HTMLAttributes
const props = withDefaults(defineProps<TagProps>(), {
  severity: 'primary',
  variant: 'filled',
  closable: false,
  rounded: false,
})

const tagClasses = computed<TagClasses>(() => [
  'c-tag',
  `c-tag--${props.severity}`,
  `c-tag--${props.variant}`,
  {
    'c-tag--rounded': props.rounded,
    'c-tag--sm': props.size === 'sm',
    'c-tag--lg': props.size === 'lg',
    'c-tag--closable': props.closable,
  },
  attrs.class,
])
</script>
