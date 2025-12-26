import { Component, VNode } from 'vue'

export interface DialogProps {
  show?: boolean
  width?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
  fullscreen?: boolean
  modal?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  lockScroll?: boolean
  teleportTo?: string | HTMLElement | false
  zIndex?: number
  title?: string
  showClose?: boolean
  durationEnter?: number
  durationLeave?: number
  animation?: 'fade' | 'zoom' | 'slide'
  closeIcon?: Component
  maximizeIcon?: Component
  minimizeIcon?: Component
}

export interface DialogSlots {
  header?(scope: {
    close: () => void
    toggleFullscreen: () => void
    isFullscreen: boolean
    fullscreenIcon: Component
  }): VNode[]
  default?(): VNode[]
  footer?(): VNode[]
}

export interface DialogEmits {
  'update:show': [value: boolean]
  show: []
  hide: []
  maximize: []
  minimize: []
  overlayClick: [event: MouseEvent]
  escape: [e: KeyboardEvent]
}

export type DialogClasses = (string | { [key: string]: boolean })[]
