<template>
  <label :for="inputId" :class="checkboxClasses" :style="checkboxStyle">
    <span class="c-checkbox__input-wrapper">
      <input
        :id="inputId"
        ref="inputRef"
        type="checkbox"
        class="c-checkbox__input"
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
      <span class="c-checkbox__box">
        <slot
          name="icon"
          :checked="isChecked"
          :indeterminate="indeterminated"
          :icon-class="'c-checkbox__icon'"
        >
          <CIcon class="c-checkbox__icon">
            <CheckIcon v-if="isChecked" />
            <MinusIcon v-else-if="indeterminated" />
          </CIcon>
        </slot>
      </span>
    </span>

    <span v-if="hasLabel" :id="labelId" class="c-checkbox__label">
      <slot>{{ props.label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  computed,
  inject,
  InputHTMLAttributes,
  onMounted,
  ref,
  shallowRef,
  StyleValue,
  useId,
  useAttrs as useRawAttrs,
  watch,
} from 'vue'
import {
  BaseCheckboxProps,
  CheckboxClasses,
  CheckboxEmits,
  CheckboxProps,
  CheckboxSlots,
} from './CCheckbox.types'
import { useAttrs } from '@/composables'
import { CheckboxGroupContext, CheckboxGroupInjectionKey, CIcon } from '@/components'
import { CheckIcon, MinusIcon } from '@craftvue/icons'
import { equals } from '@/utils'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  indeterminate: false,
  disabled: false,
  invalid: false,
  trueValue: true,
  falseValue: false,
  variant: 'outlined',
})

const $pcCheckboxGroup = inject<CheckboxGroupContext | undefined>(
  CheckboxGroupInjectionKey,
  undefined,
)
const props = _props as Pick<typeof _props, keyof BaseCheckboxProps>
const slots = defineSlots<CheckboxSlots>()
const attrs = useAttrs<InputHTMLAttributes>()
const rawAttrs = useRawAttrs() as InputHTMLAttributes
const emits = defineEmits<CheckboxEmits>()

const inputRef = shallowRef<HTMLInputElement>()
const focused = ref<boolean>(false)
const indeterminated = ref<boolean>(props.indeterminate)

const isInGroup = computed<boolean>(() => !!$pcCheckboxGroup)
const resolvedModelValue = computed<any>(() =>
  isInGroup.value ? $pcCheckboxGroup!.modelValue.value : props.modelValue,
)
const resolvedDisabled = computed<boolean>(() => {
  if (props.disabled) return true
  if (isInGroup.value) return $pcCheckboxGroup!.$props.disabled ?? false
  return false
})
const resolvedInvalid = computed<boolean>(() => {
  if (props.invalid) return true
  if (isInGroup.value) return $pcCheckboxGroup!.$props.invalid ?? false
  return false
})
const resolvedSize = computed<'sm' | 'lg' | undefined>(() => {
  if (props.size) return props.size
  if (isInGroup.value) return $pcCheckboxGroup!.$props.size
  return undefined
})
const resolvedVariant = computed<'outlined' | 'filled'>(() => {
  if (props.variant !== 'outlined') return props.variant
  if (isInGroup.value) return $pcCheckboxGroup!.$props.variant ?? 'outlined'
  return 'outlined'
})
const resolvedName = computed<string | undefined>(() => {
  if (props.name) return props.name
  if (isInGroup.value) return $pcCheckboxGroup!.name.value
  return undefined
})

// ID
const checkboxId = `${useId()}_checkbox`
const inputId = computed<string>(() => props.id || checkboxId)
const labelId = computed<string>(() => (hasLabel.value ? `${inputId.value}-label` : ''))

const isGroup = computed<boolean>(() => isInGroup.value || Array.isArray(resolvedModelValue.value))
const hasCustomValues = computed<boolean>(
  () => props.trueValue !== true || props.falseValue !== false,
)
const hasLabel = computed<boolean>(() => !!(props.label || slots.default))

const isChecked = computed<boolean>(() => {
  if (indeterminated.value) {
    return false
  }

  // если сипользуется в группе
  if (isGroup.value) {
    if (props.value != null) {
      return (
        Array.isArray(resolvedModelValue.value) &&
        resolvedModelValue.value.findIndex((v) => equals(v, props.value)) > -1
      )
    }
    return false
  }

  // одиночный checkbox с кастомными значениями
  if (hasCustomValues.value) {
    return equals(resolvedModelValue.value, props.trueValue)
  }

  // Обычный одиночный checkbox (boolean)
  if (typeof resolvedModelValue.value === 'boolean') {
    return resolvedModelValue.value
  }

  return false
})

const checkboxClasses = computed<CheckboxClasses>(() => [
  'c-checkbox',
  {
    'is--checked': isChecked.value,
    'is--indeterminate': indeterminated.value,
    'is--disabled': resolvedDisabled.value,
    'is--invalid': resolvedInvalid.value,
    'is--focused': focused.value,
    'c-checkbox--sm': resolvedSize.value === 'sm',
    'c-checkbox--lg': resolvedSize.value === 'lg',
    'c-checkbox--filled': resolvedVariant.value === 'filled',
  },
  rawAttrs.class,
])

const checkboxStyle = computed<StyleValue>(() => [rawAttrs.style])

const ariaLabelledby = computed<string | undefined>(() => {
  if (props.ariaLabelledby) return props.ariaLabelledby
  if (hasLabel.value && !props.ariaLabel) return labelId.value
  return undefined
})

const handleChange = () => {
  if (resolvedDisabled.value || !inputRef.value) return

  const isChecked = inputRef.value.checked

  if (indeterminated.value) {
    indeterminated.value = false
    emits('update:indeterminate', indeterminated.value)
  }

  // если используется в CheckboxGroup
  if (isInGroup.value && props.value != null) {
    $pcCheckboxGroup!.updateValue(props.value, isChecked)
    return
  }

  // если используется в группе (не CheckboxGroup)
  if (!isInGroup.value && isGroup.value && props.value != null) {
    const modelValueArray = [...(resolvedModelValue.value as any[])]
    const valueIndex = modelValueArray.findIndex((v) => equals(v, props.value))

    if (isChecked) {
      if (valueIndex === -1) {
        modelValueArray.push(props.value)
      }
    } else {
      if (valueIndex !== -1) {
        modelValueArray.splice(valueIndex, 1)
      }
    }

    emits('update:modelValue', modelValueArray)
    emits('change', modelValueArray)
    return
  }

  // одиночный checkbox
  let newValue: boolean | string | number

  // кастомные значения
  if (hasCustomValues.value) {
    newValue = isChecked ? props.trueValue : props.falseValue
  } else {
    // обычный boolean checkbox
    newValue = isChecked
  }

  emits('update:modelValue', newValue)
  emits('change', newValue)
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

  if (event.code === 'Enter') {
    event.preventDefault()
    inputRef.value?.click()
  }
}

const updateIndeterminate = () => {
  if (inputRef.value) {
    inputRef.value.indeterminate = indeterminated.value
  }
}

watch(
  () => props.indeterminate,
  (newValue) => {
    indeterminated.value = newValue
    updateIndeterminate()
  },
)

onMounted(() => {
  updateIndeterminate()
})

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  inputRef,
})
</script>
