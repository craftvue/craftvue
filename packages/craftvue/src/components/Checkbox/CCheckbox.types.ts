/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, VNode } from 'vue'

export interface BaseCheckboxProps {
  modelValue?: any
  indeterminate?: boolean
  disabled?: boolean
  invalid?: boolean
  size?: 'sm' | 'lg'
  label?: string
  value?: any
  trueValue?: any
  falseValue?: any
  variant?: 'outlined' | 'filled'
  name?: string
  id?: string
  ariaLabel?: string
  ariaLabelledby?: string
}

export interface CheckboxProps
  extends /* @vue-ignore */ Omit<
      InputHTMLAttributes,
      | 'disabled'
      | 'size'
      | 'value'
      | 'checked'
      | 'indeterminate'
      | 'name'
      | 'id'
      | 'aria-label'
      | 'aria-labelledby'
    >,
    BaseCheckboxProps {}

export type CheckboxClasses = (string | { [key: string]: boolean })[]

export interface CheckboxSlots {
  default(): VNode[]
  icon(scope: { checked: boolean; indeterminate: boolean; iconClass: string }): VNode[]
}

export type CheckboxEmits = {
  'update:modelValue': [value: any]
  'update:indeterminate': [value: boolean]
  change: [value: any]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}
