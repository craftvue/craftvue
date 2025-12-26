<template>
  <label :for="inputId" :class="radioClasses" :style="radioStyle">
    <span class="c-radio__input-wrapper">
      <input
        :id="inputId"
        ref="inputRef"
        type="radio"
        class="c-radio__input"
        :checked="isChecked"
        :disabled="resolvedDisabled"
        :value="props.value"
        :name="resolvedName"
        v-bind="attrs"
        :aria-label="props.ariaLabel"
        :aria-labelledby="ariaLabelledby"
        :aria-invalid="resolvedInvalid"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
      />

      <span class="c-radio__box">
        <span v-if="isChecked && !slots.icon" class="c-radio__dot"></span>
        <slot name="icon" :checked="isChecked" :icon-class="'c-radio__icon'"></slot>
      </span>
    </span>

    <span v-if="hasLabel" :id="labelId" class="c-radio__label">
      <slot>{{ props.label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  computed,
  InputHTMLAttributes,
  shallowRef,
  StyleValue,
  useId,
  useAttrs as useRawAttrs,
  inject,
  ref,
} from 'vue'
import { useAttrs } from '@/composables'
import type {
  BaseRadioProps,
  RadioClasses,
  RadioEmits,
  RadioProps,
  RadioSlots,
} from './CRadio.types'
import { RadioGroupContext, RadioGroupInjectionKey } from '../RadioGroup/CRadioGroup.types'
import { equals } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<RadioProps>(), {
  modelValue: undefined,
  disabled: false,
  invalid: false,
  variant: 'outlined',
  value: undefined,
})

const $pcRadioGroup = inject<RadioGroupContext | undefined>(RadioGroupInjectionKey, undefined)
const props = _props as Pick<typeof _props, keyof BaseRadioProps>
const slots = defineSlots<RadioSlots>()
const emits = defineEmits<RadioEmits>()
const attrs = useAttrs<InputHTMLAttributes>()
const rawAttrs = useRawAttrs() as InputHTMLAttributes

const inputRef = shallowRef<HTMLInputElement>()
const focused = ref<boolean>(false)

// ID
const radioId = `${useId()}_radio`
const inputId = computed<string>(() => props.id || radioId)
const labelId = computed<string>(() => (hasLabel.value ? `${inputId.value}-label` : ''))

const hasLabel = computed<boolean>(() => !!(props.label || slots.default))
const isInGroup = computed<boolean>(() => !!$pcRadioGroup)

const resolvedModelValue = computed<any>(() =>
  isInGroup.value ? $pcRadioGroup!.modelValue.value : props.modelValue,
)
const resolvedDisabled = computed<boolean>(() => {
  if (props.disabled) return true
  if (isInGroup.value) return $pcRadioGroup!.$props.disabled ?? false
  return false
})
const resolvedInvalid = computed<boolean>(() => {
  if (props.invalid) return true
  if (isInGroup.value) return $pcRadioGroup!.$props.invalid ?? false
  return false
})
const resolvedSize = computed<'sm' | 'lg' | undefined>(() => {
  if (props.size) return props.size
  if (isInGroup.value) return $pcRadioGroup!.$props.size
  return undefined
})
const resolvedVariant = computed<'filled' | 'outlined'>(() => {
  if (props.variant !== 'outlined') return props.variant
  if (isInGroup.value) return $pcRadioGroup!.$props.variant ?? 'outlined'
  return 'outlined'
})
const resolvedName = computed<string | undefined>(() => {
  if (props.name) return props.name
  if (isInGroup.value) return $pcRadioGroup!.name.value
  return undefined
})

const isChecked = computed<boolean>(() => {
  if (resolvedModelValue.value == null || props.value == null) {
    return false
  }
  return equals(resolvedModelValue.value, props.value)
})

const radioClasses = computed<RadioClasses>(() => [
  'c-radio',
  {
    'is--checked': isChecked.value,
    'is--disabled': resolvedDisabled.value,
    'is--invalid': resolvedInvalid.value,
    'is--focused': focused.value,
    'c-radio--sm': resolvedSize.value === 'sm',
    'c-radio--lg': resolvedSize.value === 'lg',
    'c-radio--filled': resolvedVariant.value === 'filled',
  },
  rawAttrs.class,
])

const radioStyle = computed<StyleValue>(() => [rawAttrs.style])

const ariaLabelledby = computed<string | undefined>(() => {
  if (props.ariaLabelledby) return props.ariaLabelledby
  if (hasLabel.value && !props.ariaLabel) return labelId.value
  return undefined
})

const handleChange = () => {
  if (resolvedDisabled.value || !inputRef.value) return

  if (isInGroup.value) {
    $pcRadioGroup!.updateValue(props.value)
  } else {
    emits('update:modelValue', props.value)
    emits('change', props.value)
  }
}

const handleFocus = (event: FocusEvent) => {
  if (!resolvedDisabled.value) {
    focused.value = true
    emits('focus', event)
  }
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emits('blur', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (resolvedDisabled.value) return

  if (event.code === 'Enter' || event.code === 'Space') {
    event.preventDefault()
    inputRef.value?.click()
  }
}

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  inputRef,
})
</script>
