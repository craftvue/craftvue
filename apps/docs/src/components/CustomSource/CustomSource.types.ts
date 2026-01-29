// Доступные UI компоненты
export type UIComponentType =
  | 'button'
  | 'input'
  | 'badge'
  | 'tabs'
  | 'formItem'
  | 'icon'
  | 'select'
  | 'dropdown'
  | 'tooltip'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'popover'
  | 'confirmPopup'
  | 'dialog'
  | 'confirmDialog'
  | 'tag'

// Типы для названий историй UI компонентов
export type ButtonStoryName =
  | 'basic'
  | 'icons'
  | 'loading'
  | 'severity'
  | 'disabled'
  | 'raised'
  | 'rounded'
  | 'text'
  | 'raisedText'
  | 'outlined'
  | 'iconOnly'
  | 'size'
  | 'badge'
  | 'template'

export type BadgeStoryName =
  | 'basic'
  | 'severity'
  | 'size'
  | 'maxValue'
  | 'customizations'
  | 'overlay'
  | 'positionOverlay'
  | 'button'

export type InputStoryName =
  | 'basic'
  | 'filled'
  | 'size'
  | 'invalid'
  | 'disabled'
  | 'clearable'
  | 'customClearIcon'
  | 'formatter'
  | 'password'
  | 'limitLength'
  | 'withIcon'
  | 'inputGroup'

export type TabsStoryName =
  | 'basic'
  | 'vertical'
  | 'dynamic'
  | 'template'
  | 'controlled'
  | 'scrollable'
  | 'disabled'
  | 'navigation'

export type FormItemStoryName =
  | 'basic'
  | 'withLabel'
  | 'required'
  | 'withError'
  | 'customLabel'
  | 'customError'
  | 'withFor'
  | 'form'

export type IconStoryName = 'basic' | 'name' | 'color' | 'size' | 'template'

export type SelectStoryName =
  | 'basic'
  | 'disabled'
  | 'disabledOption'
  | 'clearable'
  | 'invalid'
  | 'multiple'
  | 'filled'
  | 'fullWidth'
  | 'loading'
  | 'filter'
  | 'size'
  | 'checkmark'
  | 'template'
  | 'form'

export type DropdownStoryName =
  | 'basic'
  | 'placement'
  | 'sameWidth'
  | 'arrow'
  | 'animation'
  | 'template'
  | 'maxSize'
  | 'boundaryPadding'
  | 'offset'

export type TooltipStoryName =
  | 'basic'
  | 'placement'
  | 'trigger'
  | 'autoHide'
  | 'delay'
  | 'template'
  | 'triggerSlot'
  | 'controlled'
  | 'rootEl'

export type CheckboxStoryName =
  | 'basic'
  | 'withLabel'
  | 'filled'
  | 'size'
  | 'indeterminate'
  | 'disabled'
  | 'invalid'
  | 'group'
  | 'customIcon'
  | 'customLabel'
  | 'customValues'
  | 'form'

export type RadioStoryName =
  | 'basic'
  | 'filled'
  | 'size'
  | 'disabled'
  | 'invalid'
  | 'group'
  | 'customIcon'
  | 'customLabel'
  | 'form'

export type SwitchStoryName =
  | 'basic'
  | 'withLabel'
  | 'filled'
  | 'size'
  | 'disabled'
  | 'invalid'
  | 'loading'
  | 'customLabel'
  | 'template'
  | 'customValues'
  | 'form'

export type PopoverStoryName =
  | 'basic'
  | 'placement'
  | 'trigger'
  | 'arrow'
  | 'triggerSlot'
  | 'template'

export type ConfirmPopupStoryName =
  | 'basic'
  | 'placement'
  | 'controlled'
  | 'customization'
  | 'template'

export type DialogStoryName =
  | 'basic'
  | 'fullscreen'
  | 'animation'
  | 'nonModal'
  | 'template'
  | 'size'
  | 'withoutHeader'
  | 'customIcons'

export type ConfirmDialogStoryName = 'basic' | 'template' | 'type' | 'oneAction'

export type TagStoryName =
  | 'basic'
  | 'severity'
  | 'outlined'
  | 'soft'
  | 'size'
  | 'closable'
  | 'rounded'
  | 'withIcon'
  | 'template'

// Union тип для всех возможных названий историй
export type AllStoryNames =
  | ButtonStoryName
  | BadgeStoryName
  | InputStoryName
  | TabsStoryName
  | FormItemStoryName
  | IconStoryName
  | SelectStoryName
  | DropdownStoryName
  | TooltipStoryName
  | CheckboxStoryName
  | RadioStoryName
  | SwitchStoryName
  | PopoverStoryName
  | ConfirmPopupStoryName
  | DialogStoryName
  | ConfirmDialogStoryName
  | TagStoryName

// CustomSource props
export interface CustomSourceProps {
  /** Название истории  */
  name?: AllStoryNames
  /** Тип UI компонента */
  type?: UIComponentType
  /** Доступные кнопки */
  actions?: ['copy'?, 'full'?, 'download'?]
  /** Передача кода напрямую */
  code?: string
  /** Язык кода (для подсветки) */
  language?: 'javascript' | 'typescript' | 'xml' | 'markdown' | 'tsx' | 'bash' | 'apache'
  /** Парсер кода для Prettier */
  parser?: 'babel' | 'vue' | 'markdown' | 'html' | 'bash'
  /** Длина строки */
  printWidth?: number
}

// Тип для кода историй
export type CodeTexts<T extends AllStoryNames = AllStoryNames> = Record<T, CodeData>

// Тип для импортированного модуля с кодом
export interface CodeModule {
  default: CodeTexts
}

// Тип для данных кода
export type CodeData = {
  simple: string
  full: string
}
