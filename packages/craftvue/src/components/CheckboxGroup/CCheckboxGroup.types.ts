/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComputedRef, InjectionKey, Ref, VNode } from 'vue'

export interface CheckboxGroupProps {
  modelValue?: any[]
  disabled?: boolean
  invalid?: boolean
  size?: 'sm' | 'lg'
  variant?: 'outlined' | 'filled'
  name?: string
  orientation?: 'horizontal' | 'vertical'
}

export interface CheckboxGroupSlots {
  default(): VNode[]
}

export interface CheckboxGroupEmits {
  'update:modelValue': [value: any[]]
  change: [value: any[]]
}

export type CheckboxGroupClasses = (string | { [key: string]: boolean })[]

export interface CheckboxGroupContext {
  modelValue: Ref<any[]>
  name: ComputedRef<string>
  $props: CheckboxGroupProps
  $id: string
  updateValue: (value: any, checked: boolean) => void
}

export const CheckboxGroupInjectionKey = Symbol(
  'CheckboxGroup',
) as InjectionKey<CheckboxGroupContext>
