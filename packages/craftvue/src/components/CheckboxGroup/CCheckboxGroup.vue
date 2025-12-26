<template>
  <div :class="checkboxGroupClasses" :style="checkboxGroupStyle" role="group">
    <slot />
  </div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */

import { computed, HTMLAttributes, provide, ref, StyleValue, useAttrs, useId, watch } from 'vue'
import {
  CheckboxGroupClasses,
  CheckboxGroupContext,
  CheckboxGroupEmits,
  CheckboxGroupInjectionKey,
  CheckboxGroupProps,
  CheckboxGroupSlots,
} from './CCheckboxGroup.types'
import { equals } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  modelValue: () => [],
  disabled: false,
  invalid: false,
  variant: 'outlined',
  orientation: 'vertical',
})

defineSlots<CheckboxGroupSlots>()
const emits = defineEmits<CheckboxGroupEmits>()
const attrs = useAttrs() as HTMLAttributes

const modelValue = ref<any[]>(props.modelValue || [])
const id = useId()

watch(
  () => props.modelValue,
  (newValue) => {
    modelValue.value = newValue || []
  },
)

const groupName = computed<string>(() => props.name || `checkbox-group-${id}`)

const checkboxGroupClasses = computed<CheckboxGroupClasses>(() => [
  'c-checkbox-group',
  {
    'c-checkbox-group--sm': props.size === 'sm',
    'c-checkbox-group--lg': props.size === 'lg',
    'c-checkbox-group--horizontal': props.orientation === 'horizontal',
  },
  attrs.class,
])

const checkboxGroupStyle = computed<StyleValue>(() => [attrs.style])

const updateValue = (value: any, checked: boolean) => {
  const index = modelValue.value.findIndex((v) => equals(v, value))
  const wasChanged = checked ? index === -1 : index !== -1

  if (!wasChanged) return

  if (checked) {
    modelValue.value.push(value)
  } else {
    modelValue.value.splice(index, 1)
  }

  emits('update:modelValue', [...modelValue.value])
  emits('change', [...modelValue.value])
}

provide<CheckboxGroupContext>(CheckboxGroupInjectionKey, {
  modelValue,
  name: groupName,
  $props: props,
  $id: id,
  updateValue,
})
</script>

<style scoped></style>
