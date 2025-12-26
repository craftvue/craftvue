import { VNode } from 'vue'

export interface FormItemProps {
  for?: string
  label?: string
  errorMessage?: string
  required?: boolean
  durationEnter?: number
  durationLeave?: number
}

export type FormItemsClasses = (string | { [key: string]: boolean })[]

export interface FormItemSlots {
  default(): VNode[]
  labelSlot(scope: { label?: string }): VNode[]
  error(scope: { error?: string; errorClass?: string }): VNode[]
}
