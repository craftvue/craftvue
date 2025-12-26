<template>
  <CPopup
    :show="props.show"
    :root-el="props.rootEl"
    :placement="props.placement"
    :align="props.align"
    :trigger="props.trigger"
    :offset="props.offset"
    :boundary-padding="props.boundaryPadding"
    :z-index="props.zIndex"
    :max-width="props.maxWidth"
    :teleport-to="props.teleportTo"
    animation="opacity"
    arrow
    :show-delay="props.showDelay"
    :hide-delay="props.hideDelay"
    :duration-enter="props.durationEnter"
    :duration-leave="props.durationLeave"
    :auto-hide="props.autoHide"
    :style="attrs.style"
    :class="['c-tooltip', attrs.class]"
    @hide="emits('hide')"
    @show="emits('show')"
  >
    <div class="c-tooltip__content">
      <slot name="content">
        {{ props.content }}
      </slot>
    </div>
    <template v-if="slots.default || slots.trigger" #trigger="{ isOpen, open, close }">
      <slot v-if="!slots.trigger" name="default" />
      <slot name="trigger" :is-open="isOpen" :open="open" :close="close" />
    </template>
  </CPopup>
</template>

<script setup lang="ts">
import { CPopup } from '@/components'
import { TooltipEmits, TooltipProps, TooltipSlots } from './CTooltip.types'
import { HTMLAttributes, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const slots = defineSlots<TooltipSlots>()
const attrs = useAttrs() as HTMLAttributes
const emits = defineEmits<TooltipEmits>()
const props = withDefaults(defineProps<TooltipProps>(), {
  show: undefined,
  placement: 'bottom',
  align: 'center',
  trigger: 'hover',
  offset: 0,
  boundaryPadding: 5,
  zIndex: 2000,
  teleportTo: 'body',
  showDelay: 0,
  hideDelay: 0,
  durationEnter: 300,
  durationLeave: 0,
  autoHide: true,
})
</script>

<style scoped></style>
