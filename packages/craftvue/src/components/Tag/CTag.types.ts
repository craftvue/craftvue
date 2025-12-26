/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, VNode } from 'vue'

export interface TagProps {
  value?: any
  severity?: 'primary' | 'secondary' | 'contrast' | 'success' | 'error' | 'warning' | 'info'
  variant?: 'filled' | 'outlined' | 'soft'
  size?: 'sm' | 'lg'
  closable?: boolean
  rounded?: boolean
  prefixIcon?: Component
  suffixIcon?: Component
}

export interface TagEmits {
  close: [event: MouseEvent]
}

export type TagClasses = (string | { [key: string]: boolean })[]

export interface TagSlots {
  default(): VNode[]
  prefix(): VNode[]
  suffix(): VNode[]
}
