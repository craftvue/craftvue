/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, VNode } from 'vue'

export interface BaseRadioProps {
  modelValue?: any
  disabled?: boolean
  invalid?: boolean
  size?: 'sm' | 'lg'
  label?: string
  value?: any
  variant?: 'outlined' | 'filled'
  name?: string
  id?: string
  ariaLabel?: string
  ariaLabelledby?: string
}

export interface RadioProps
  extends /* @vue-ignore */ Omit<
      InputHTMLAttributes,
      'disabled' | 'size' | 'value' | 'checked' | 'name' | 'id' | 'aria-label' | 'aria-labelledby'
    >,
    BaseRadioProps {}

export interface RadioSlots {
  default(): VNode[]
  icon(scope: { checked: boolean; iconClass: string }): VNode[]
}

export type RadioClasses = (string | { [key: string]: boolean })[]

export type RadioEmits = {
  'update:modelValue': [value: any]
  change: [value: any]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}
