import { ComponentPublicInstance, VNode } from 'vue'

export interface PopoverProps {
  title?: string
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
}

export interface PopoverSlots {
  default(): VNode[]
  header(): VNode[]
  footer(): VNode[]
  trigger?(scope: { isOpen: boolean; open: () => void; close: () => void }): VNode[]
}

export interface PopoverEmits {
  hide: []
  show: []
}
