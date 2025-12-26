import { Component, VNode } from 'vue'
import type { DialogEmits, DialogProps } from '@/components/Dialog/CDialog.types'

export type ConfirmDialogType = 'warning' | 'error' | 'success' | 'info'

export interface ConfirmDialogProps
  extends Omit<DialogProps, 'fullscreen' | 'maximizeIcon' | 'minimizeIcon'> {
  message?: string
  type?: ConfirmDialogType
  icon?: Component
  iconColor?: string
  confirmText?: string
  cancelText?: string
  confirmSeverity?: 'primary' | 'secondary' | 'contrast'
  cancelSeverity?: 'primary' | 'secondary' | 'contrast'
  confirmVariant?: 'filled' | 'outlined' | 'text'
  cancelVariant?: 'filled' | 'outlined' | 'text'
  showCancel?: boolean
  showConfirm?: boolean
  closeOnConfirm?: boolean
  closeOnCancel?: boolean
}

export interface ConfirmDialogSlots {
  header?(scope: { close: () => void }): VNode[]
  default?(): VNode[]
  actions?(scope: { confirm: (e: MouseEvent) => void; cancel: (e: MouseEvent) => void }): VNode[]
}

export interface ConfirmDialogEmits extends Omit<DialogEmits, 'maximize' | 'minimize'> {
  confirm: [e?: MouseEvent]
  cancel: [e?: MouseEvent]
}

export type ConfirmDialogClasses = (string | { [key: string]: boolean })[]
