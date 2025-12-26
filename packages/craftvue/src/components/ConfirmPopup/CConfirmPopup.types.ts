import { Component, ComponentPublicInstance, VNode } from 'vue'

export interface ConfirmPopupProps {
  message?: string
  icon?: Component
  iconColor?: string
  confirmText?: string
  cancelText?: string
  show?: boolean
  rootEl?: HTMLElement | ComponentPublicInstance | null
  placement?: 'bottom' | 'top' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  trigger?: 'hover' | 'click'
  offset?: number
  sameWidth?: boolean
  boundaryPadding?: number
  zIndex?: number
  maxHeight?: number | string
  maxWidth?: number | string
  teleportTo?: string | HTMLElement | false
  restoreFocus?: boolean
  animation?: 'zoom' | 'opacity'
  arrow?: boolean
  showDelay?: number
  hideDelay?: number
  durationEnter?: number
  durationLeave?: number
  confirmSeverity?: 'primary' | 'secondary' | 'contrast'
  cancelSeverity?: 'primary' | 'secondary' | 'contrast'
  confirmVariant?: 'filled' | 'outlined' | 'text'
  cancelVariant?: 'filled' | 'outlined' | 'text'
}

export interface ConfirmPopupSlots {
  default?(): VNode[]
  actions?(scope: { confirm: (e: MouseEvent) => void; cancel: (e: MouseEvent) => void }): VNode[]
  trigger?(scope: { isOpen: boolean; open: () => void; close: () => void }): VNode[]
}

export interface ConfirmPopupEmits {
  confirm: [e: MouseEvent]
  cancel: [e: MouseEvent]
  hide: []
  show: []
}
