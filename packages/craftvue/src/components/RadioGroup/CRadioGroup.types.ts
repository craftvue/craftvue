/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComputedRef, InjectionKey, Ref, VNode } from 'vue'

export interface RadioGroupProps {
  modelValue?: any
  disabled?: boolean
  invalid?: boolean
  size?: 'sm' | 'lg'
  variant?: 'outlined' | 'filled'
  name?: string
  orientation?: 'horizontal' | 'vertical'
}

export interface RadioGroupSlots {
  default(): VNode[]
}

export type RadioGroupClasses = (string | { [key: string]: boolean })[]

export interface RadioGroupEmits {
  'update:modelValue': [value: any]
  change: [value: any]
}

export interface RadioGroupContext {
  modelValue: Ref<any>
  name: ComputedRef<string>
  $props: RadioGroupProps
  $id: string
  updateValue: (value: any) => void
}

export const RadioGroupInjectionKey = Symbol('RadioGroup') as InjectionKey<RadioGroupContext>
