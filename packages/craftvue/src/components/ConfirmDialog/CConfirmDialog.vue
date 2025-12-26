<template>
  <CDialog
    ref="dialogRef"
    :show="showState"
    :width="props.width"
    :max-width="props.maxWidth"
    :max-height="props.maxHeight"
    :modal="props.modal"
    :close-on-overlay-click="props.closeOnOverlayClick"
    :close-on-escape="props.closeOnEscape"
    :lock-scroll="props.lockScroll"
    :teleport-to="props.teleportTo"
    :z-index="props.zIndex"
    :show-close="props.showClose"
    :close-icon="props.closeIcon"
    :duration-enter="props.durationEnter"
    :duration-leave="props.durationLeave"
    :animation="props.animation"
    :title="props.title"
    :class="confirmDialogClasses"
    :style="attrs.style"
    @show="emits('show')"
    @hide="emits('hide')"
    @overlay-click="emits('overlayClick', $event)"
    @escape="emits('escape', $event)"
    @update:show="handleUpdateShow"
  >
    <!-- HEADER -->
    <template #header="{ close }">
      <slot name="header" :close="close"></slot>
    </template>

    <!-- BODY -->
    <div class="c-confirm-dialog__body">
      <slot>
        <div class="c-confirm-dialog__content">
          <CIcon :color="props.iconColor" class="c-confirm-dialog__icon">
            <component :is="icon" />
          </CIcon>
          <p class="c-confirm-dialog__message">{{ props.message }}</p>
        </div>
      </slot>
    </div>

    <!-- FOOTER -->
    <template v-if="hasFooter" #footer>
      <slot name="actions" :confirm="handleConfirm" :cancel="handleCancel">
        <CButton
          v-if="props.showCancel"
          :label="props.cancelText"
          :severity="props.cancelSeverity"
          :variant="props.cancelVariant"
          @click="handleCancel"
        />
        <CButton
          v-if="props.showConfirm"
          :label="props.confirmText"
          :severity="props.confirmSeverity"
          :variant="props.confirmVariant"
          @click="handleConfirm"
        />
      </slot>
    </template>
  </CDialog>
</template>

<script setup lang="ts">
import { CDialog, CButton, CIcon } from '@/components'
import type {
  ConfirmDialogClasses,
  ConfirmDialogEmits,
  ConfirmDialogProps,
  ConfirmDialogSlots,
} from './CConfirmDialog.types'
import { WarningIcon, CheckIcon, ErrorIcon, InfoIcon } from '@craftvue/icons'
import { type Component, computed, HTMLAttributes, ref, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs() as HTMLAttributes
const emits = defineEmits<ConfirmDialogEmits>()
const slots = defineSlots<ConfirmDialogSlots>()
const props = withDefaults(defineProps<ConfirmDialogProps>(), {
  show: undefined,
  width: 420,
  maxWidth: '90vw',
  maxHeight: '90vh',
  modal: true,
  closeOnOverlayClick: false,
  closeOnEscape: true,
  lockScroll: true,
  teleportTo: 'body',
  zIndex: 3000,
  showClose: true,
  durationEnter: 300,
  durationLeave: 300,
  animation: 'zoom',
  type: undefined,
  confirmText: 'Yes',
  cancelText: 'No',
  confirmSeverity: 'primary',
  cancelSeverity: 'secondary',
  confirmVariant: 'filled',
  cancelVariant: 'outlined',
  showConfirm: true,
  showCancel: true,
  closeOnConfirm: true,
  closeOnCancel: true,
})

const dialogRef = ref<InstanceType<typeof CDialog> | null>(null)
const internalShow = ref<boolean>(false)

const isControlled = computed<boolean>(() => props.show !== undefined)
const showState = computed<boolean>(() => (isControlled.value ? props.show! : internalShow.value))

const hasFooter = computed<boolean>(
  () =>
    !!(
      slots.actions ||
      (props.showConfirm && props.confirmText) ||
      (props.showCancel && props.cancelText)
    ),
)

const confirmDialogClasses = computed<ConfirmDialogClasses>(() => [
  'c-confirm-dialog',
  `c-confirm-dialog--${props.type}`,
  attrs.class,
])

const icon = computed<Component>(() => {
  if (props.icon) return props.icon

  switch (props.type) {
    case 'error':
      return ErrorIcon
    case 'warning':
      return WarningIcon
    case 'info':
      return InfoIcon
    case 'success':
      return CheckIcon
    default:
      return WarningIcon
  }
})

const closeDialog = () => dialogRef.value?.close()
const openDialog = () => dialogRef.value?.open()

const handleUpdateShow = (value: boolean) => {
  if (isControlled.value) {
    emits('update:show', value)
  } else {
    internalShow.value = value
  }
}

const handleConfirm = (e: MouseEvent) => {
  emits('confirm', e)
  if (props.closeOnConfirm) {
    closeDialog()
  }
}

const handleCancel = (e: MouseEvent) => {
  emits('cancel', e)
  if (props.closeOnCancel) {
    closeDialog()
  }
}

defineExpose({
  dialogRef,
  open: openDialog,
  close: closeDialog,
  isOpen: showState,
})
</script>
