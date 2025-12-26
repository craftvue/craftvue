<template>
  <div class="c-form-item">
    <component
      :is="props.for ? 'label' : 'div'"
      v-if="hasLabel"
      :for="props.for"
      :class="labelClasses"
    >
      <slot name="labelSlot" :label="props.label">{{ props.label }}</slot>
    </component>

    <div class="c-form-item__content">
      <slot />

      <transition @enter="onEnter" @leave="onLeave">
        <div v-if="showError" class="c-form-item__error">
          <slot name="error" :error="errorMessage" :error-class="'c-form-item__error-text'">
            <div class="c-form-item__error-text">{{ errorMessage }}</div>
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FormItemProps, FormItemsClasses, FormItemSlots } from './CFormItem.types'

const slots = defineSlots<FormItemSlots>()
const props = withDefaults(defineProps<FormItemProps>(), {
  required: false,
  durationEnter: 300,
  durationLeave: 300,
})

const ANIMATION_EASING = 'ease'

const hasLabel = computed<boolean>(() => {
  return !!(props.label || slots.labelSlot)
})

const showError = computed<boolean>(() => {
  return !!props.errorMessage
})

const labelClasses = computed<FormItemsClasses>(() => [
  'c-form-item__label',
  {
    'c-form-item--required': props.required,
  },
])

const onEnter = async (el: Element, done: () => void) => {
  if (!(el instanceof HTMLElement)) return

  const targetHeight = el.offsetHeight

  el.style.height = '0'
  el.style.opacity = '0'

  const animation = el.animate(
    { height: `${targetHeight}px`, opacity: 1 },
    { duration: props.durationEnter, easing: ANIMATION_EASING },
  )

  animation.finished.finally(() => {
    el.style.height = ''
    el.style.opacity = ''
    done()
  })
}

const onLeave = (el: Element, done: () => void) => {
  if (!(el instanceof HTMLElement)) return

  el.style.height = `${el.offsetHeight}px`
  el.style.opacity = '1'

  const animation = el.animate(
    { height: 0, opacity: 0 },
    { duration: props.durationLeave, easing: ANIMATION_EASING },
  )

  animation.finished.finally(() => {
    el.style.height = ''
    el.style.opacity = ''
    done()
  })
}
</script>
