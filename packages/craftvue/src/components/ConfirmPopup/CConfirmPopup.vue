<template>
  <CPopup
    ref="popupRef"
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
    :class="['c-confirm-popup', attrs.class]"
    @hide="emits('hide')"
    @show="emits('show')"
  >
    <div class="c-confirm-popup__body">
      <slot>
        <div class="c-confirm-popup__content">
          <CIcon :color="props.iconColor" class="c-confirm-popup__icon">
            <component :is="props.icon" />
          </CIcon>
          <p class="c-confirm-popup__message">{{ props.message }}</p>
        </div>
      </slot>
    </div>

    <template #footer>
      <div v-if="hasFooter" class="c-confirm-popup__footer">
        <slot name="actions" :confirm="handleConfirm" :cancel="handleCancel">
          <CButton
            :label="props.cancelText"
            :severity="props.cancelSeverity"
            :variant="props.cancelVariant"
            size="sm"
            @click="handleCancel"
          />
          <CButton
            :label="props.confirmText"
            :severity="props.confirmSeverity"
            :variant="props.confirmVariant"
            size="sm"
            @click="handleConfirm"
          />
        </slot>
      </div>
    </template>

    <template v-if="slots.trigger" #trigger="{ isOpen, close, open }">
      <slot name="trigger" :is-open="isOpen" :open="open" :close="close"></slot>
    </template>
  </CPopup>
</template>

<script setup lang="ts">
import { CPopup, CIcon, CButton } from '@/components'
import type { ConfirmPopupEmits, ConfirmPopupProps, ConfirmPopupSlots } from './CConfirmPopup.types'
import { WarningIcon } from '@craftvue/icons'
import { computed, HTMLAttributes, ref, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs() as HTMLAttributes
const slots = defineSlots<ConfirmPopupSlots>()
const emits = defineEmits<ConfirmPopupEmits>()
const props = withDefaults(defineProps<ConfirmPopupProps>(), {
  show: undefined,
  placement: 'bottom',
  align: 'start',
  trigger: 'click',
  offset: 5,
  sameWidth: false,
  boundaryPadding: 5,
  zIndex: 2000,
  maxWidth: 200,
  teleportTo: 'body',
  restoreFocus: false,
  animation: 'opacity',
  arrow: true,
  showDelay: 0,
  hideDelay: 0,
  durationEnter: 300,
  durationLeave: 300,
  confirmSeverity: 'primary',
  cancelSeverity: 'secondary',
  confirmVariant: 'filled',
  cancelVariant: 'outlined',
  icon: () => WarningIcon,
  confirmText: 'Yes',
  cancelText: 'No',
})

const popupRef = ref<InstanceType<typeof CPopup> | null>(null)

const hasFooter = computed<boolean>(
  () => !!(slots.actions || (!slots.actions && props.confirmText && props.cancelText)),
)

const closePopup = () => popupRef.value?.close()

const handleConfirm = (e: MouseEvent) => {
  emits('confirm', e)
  closePopup()
}

const handleCancel = (e: MouseEvent) => {
  emits('cancel', e)
  closePopup()
}
</script>
