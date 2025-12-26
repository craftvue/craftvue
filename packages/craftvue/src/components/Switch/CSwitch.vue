<template>
  <label :for="inputId" :class="switchClasses" :style="switchStyle">
    <span class="c-switch__input-wrapper">
      <input
        :id="inputId"
        ref="inputRef"
        type="checkbox"
        class="c-switch__input"
        :checked="isChecked"
        :disabled="resolvedDisabled"
        :name="props.name"
        v-bind="attrs"
        role="switch"
        :aria-label="props.ariaLabel"
        :aria-labelledby="ariaLabelledby"
        :aria-invalid="props.invalid"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @click.stop
      />

      <span class="c-switch__track">
        <span class="c-switch__thumb">
          <slot name="thumb" :checked="isChecked">
            <CIcon v-if="props.loading" name="spinner" />
          </slot>
        </span>
      </span>
    </span>

    <span v-if="hasLabel" :id="labelId" class="c-switch__label">
      <slot :checked="isChecked">{{ props.label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  computed,
  InputHTMLAttributes,
  ref,
  shallowRef,
  StyleValue,
  useId,
  useAttrs as useRawAttrs,
} from 'vue'
import { CIcon } from '@/components'
import {
  BaseSwitchProps,
  SwitchClasses,
  SwitchEmits,
  SwitchProps,
  SwitchSlots,
} from './CSwitch.types'
import { useAttrs } from '@/composables'
import { equals } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  invalid: false,
  loading: false,
  trueValue: true,
  falseValue: false,
  variant: 'outlined',
})

const emits = defineEmits<SwitchEmits>()
const slots = defineSlots<SwitchSlots>()
const rawAttrs = useRawAttrs() as InputHTMLAttributes
const attrs = useAttrs<InputHTMLAttributes>()
const props = _props as Pick<typeof _props, keyof BaseSwitchProps>

const inputRef = shallowRef<HTMLInputElement>()
const focused = ref<boolean>(false)

// ID
const switchId = `${useId()}_switch`
const inputId = computed<string>(() => props.id || switchId)
const labelId = computed<string>(() => (hasLabel.value ? `${inputId.value}-label` : ''))

const switchClasses = computed<SwitchClasses>(() => [
  'c-switch',
  {
    'is--checked': isChecked.value,
    'is--disabled': resolvedDisabled.value,
    'is--invalid': props.invalid,
    'is--focused': focused.value,
    'c-switch--sm': props.size === 'sm',
    'c-switch--lg': props.size === 'lg',
    'c-switch--filled': props.variant === 'filled',
  },
  rawAttrs.class,
])

const switchStyle = computed<StyleValue>(() => [rawAttrs.style])

const resolvedDisabled = computed<boolean>(() => props.disabled || props.loading)
const hasLabel = computed<boolean>(() => !!(props.label || slots.default))
const hasCustomValues = computed<boolean>(
  () => props.trueValue !== true || props.falseValue !== false,
)

const isChecked = computed<boolean>(() => {
  // switch с кастомными значениями
  if (hasCustomValues.value) {
    return equals(props.modelValue, props.trueValue)
  }

  // Обычный switch (boolean)
  if (typeof props.modelValue === 'boolean') {
    return props.modelValue
  }

  return false
})

const ariaLabelledby = computed<string | undefined>(() => {
  if (props.ariaLabelledby) return props.ariaLabelledby
  if (hasLabel.value && !props.ariaLabel) return labelId.value
  return undefined
})

const handleChange = () => {
  if (resolvedDisabled.value || !inputRef.value) return

  const isChecked = inputRef.value.checked

  let newValue: any

  if (hasCustomValues.value) {
    // кастомные значения
    newValue = isChecked ? props.trueValue : props.falseValue
  } else {
    // обычный boolean switch
    newValue = isChecked
  }

  emits('update:modelValue', newValue)
  emits('change', newValue)
}

const handleFocus = (e: FocusEvent) => {
  if (!resolvedDisabled.value) {
    focused.value = true
    emits('focus', e)
  }
}

const handleBlur = (e: FocusEvent) => {
  focused.value = false
  emits('blur', e)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (resolvedDisabled.value) return

  if (e.code === 'Enter' || e.code === 'Space') {
    e.preventDefault()
    inputRef.value?.click()
  }
}

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  inputRef,
})
</script>
