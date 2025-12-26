<template>
  <CPopup
    :show="props.show"
    :root-el="props.rootEl"
    :placement="props.placement"
    :align="props.align"
    trigger="click"
    :same-width="props.sameWidth"
    :offset="props.offset"
    :boundary-padding="props.boundaryPadding"
    :z-index="props.zIndex"
    :max-height="props.maxHeight"
    :max-width="props.maxWidth"
    :teleport-to="props.teleportTo"
    :restore-focus="props.restoreFocus"
    :animation="props.animation"
    :arrow="props.arrow"
    :style="attrs.style"
    :class="['c-dropdown', attrs.class]"
    @hide="emits('hide')"
    @show="emits('show')"
  >
    <template #header>
      <slot name="header" />
    </template>
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </CPopup>
</template>

<script setup lang="ts">
import { CPopup } from '@/components'
import { DropdownEmits, DropdownProps, DropdownSlots } from './CDropdown.types'
import { HTMLAttributes, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

defineSlots<DropdownSlots>()

const attrs = useAttrs() as HTMLAttributes
const emits = defineEmits<DropdownEmits>()
const props = withDefaults(defineProps<DropdownProps>(), {
  show: undefined,
  placement: 'bottom',
  align: 'start',
  sameWidth: false,
  offset: 5,
  boundaryPadding: 5,
  zIndex: 1000,
  teleportTo: 'body',
  restoreFocus: false,
  animation: 'opacity',
  arrow: false,
})
</script>

<style scoped></style>
