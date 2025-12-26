import { VNode } from 'vue'

export interface IconProps {
  /** Название иконки для динамического импорта */
  name?: IconName
  /** Размер иконки */
  size?: number | string
  /** Цвет иконки */
  color?: string
}

export type IconName =
  | 'close'
  | 'search'
  | 'spinner'
  | 'eye'
  | 'eyeslash'
  | 'nextarrow'
  | 'prevarrow'
  | 'uparrow'
  | 'downarrow'
  | 'check'
  | 'edit'
  | 'save'
  | 'delete'
  | 'home'
  | 'add'
  | 'envelope'
  | 'minus'
  | 'error'
  | 'info'
  | 'maximize'
  | 'minimize'
  | 'warning'

export interface IconSlots {
  default(): VNode[]
}
