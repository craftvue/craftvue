<template>
  <div :class="radioGroupClasses" :style="radioGroupStyle" role="radiogroup">
    <slot />
  </div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  computed,
  provide,
  ref,
  StyleValue,
  useAttrs,
  useId,
  watch,
  type HTMLAttributes,
} from 'vue'
import {
  RadioGroupClasses,
  RadioGroupContext,
  RadioGroupEmits,
  RadioGroupInjectionKey,
  RadioGroupProps,
  RadioGroupSlots,
} from './CRadioGroup.types'
import { equals } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: undefined,
  disabled: false,
  invalid: false,
  variant: 'outlined',
  orientation: 'vertical',
})

const attrs = useAttrs() as HTMLAttributes
const emits = defineEmits<RadioGroupEmits>()
defineSlots<RadioGroupSlots>()

const $id = useId()
const modelValue = ref<any>(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    modelValue.value = newValue
  },
)

const groupName = computed<string>(() => props.name || `radio-group-${$id}`)

const radioGroupClasses = computed<RadioGroupClasses>(() => [
  'c-radio-group',
  {
    'c-radio-group--sm': props.size === 'sm',
    'c-radio-group--lg': props.size === 'lg',
    'c-radio-group--horizontal': props.orientation === 'horizontal',
  },
  attrs.class,
])

const radioGroupStyle = computed<StyleValue>(() => [attrs.style])

const updateValue = (value: any) => {
  if (!equals(modelValue.value, value)) {
    modelValue.value = value
    emits('update:modelValue', value)
    emits('change', value)
  }
}

provide<RadioGroupContext>(RadioGroupInjectionKey, {
  modelValue,
  name: groupName,
  $props: props,
  updateValue,
  $id,
})
</script>

<style scoped></style>
