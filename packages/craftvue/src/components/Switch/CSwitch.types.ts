/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputHTMLAttributes, VNode } from 'vue'

export interface BaseSwitchProps {
  modelValue?: any
  disabled?: boolean
  invalid?: boolean
  loading?: boolean
  size?: 'sm' | 'lg'
  label?: string
  trueValue?: any
  falseValue?: any
  name?: string
  id?: string
  variant?: 'outlined' | 'filled'
  ariaLabel?: string
  ariaLabelledby?: string
}

export interface SwitchProps
  extends /* @vue-ignore */ Omit<
      InputHTMLAttributes,
      'disabled' | 'size' | 'value' | 'checked' | 'name' | 'id' | 'aria-label' | 'aria-labelledby'
    >,
    BaseSwitchProps {}

export type SwitchClasses = (string | { [key: string]: boolean })[]

export interface SwitchSlots {
  default?(scope: { checked: boolean }): VNode[]
  thumb?(scope: { checked: boolean }): VNode[]
}

export interface SwitchEmits {
  'update:modelValue': [value: any]
  change: [value: any]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}
