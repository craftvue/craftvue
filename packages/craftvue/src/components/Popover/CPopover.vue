<template>
  <CPopup
    :show="props.show"
    :root-el="props.rootEl"
    :placement="props.placement"
    :align="props.align"
    :trigger="props.trigger"
    :offset="props.offset"
    :same-width="props.sameWidth"
    :boundary-padding="props.boundaryPadding"
    :z-index="props.zIndex"
    :max-height="props.maxHeight"
    :max-width="props.maxWidth"
    :teleport-to="props.teleportTo"
    :restore-focus="props.restoreFocus"
    :animation="props.animation"
    :arrow="props.arrow"
    :show-delay="props.showDelay"
    :hide-delay="props.hideDelay"
    :duration-enter="props.durationEnter"
    :duration-leave="props.durationLeave"
    :style="attrs.style"
    :class="['c-popover', attrs.class]"
    @hide="emits('hide')"
    @show="emits('show')"
  >
    <template #header>
      <div v-if="slots.header || props.title" class="c-popover__header">
        <slot name="header">
          <div v-if="props.title" class="c-popover__title">{{ props.title }}</div>
        </slot>
      </div>
    </template>

    <div class="c-popover__body">
      <slot />
    </div>

    <template #footer>
      <div v-if="slots.footer" class="c-popover__footer">
        <slot name="footer" />
      </div>
    </template>

    <template v-if="slots.trigger" #trigger="{ isOpen, close, open }">
      <slot name="trigger" :is-open="isOpen" :open="open" :close="close"></slot>
    </template>
  </CPopup>
</template>

<script setup lang="ts">
import { CPopup, PopoverEmits, PopoverProps, PopoverSlots } from '@/components'
import { HTMLAttributes, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const slots = defineSlots<PopoverSlots>()
const attrs = useAttrs() as HTMLAttributes
const emits = defineEmits<PopoverEmits>()
const props = withDefaults(defineProps<PopoverProps>(), {
  show: undefined,
  placement: 'bottom',
  align: 'start',
  trigger: 'click',
  offset: 5,
  sameWidth: false,
  boundaryPadding: 5,
  zIndex: 2000,
  teleportTo: 'body',
  restoreFocus: false,
  animation: 'zoom',
  arrow: true,
  showDelay: 0,
  hideDelay: 0,
  durationEnter: 300,
  durationLeave: 300,
})
</script>
