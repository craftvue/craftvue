import React from 'react'
import './style.scss'
import { useI18n } from 'docs/hooks/useI18n'
import {} from '@storybook/addon-docs/blocks'

interface DocgenItem {
  name: string
  type?: string
  required?: boolean
  default?: unknown
}

interface ComponentInfo {
  props?: Record<string, unknown>
  __docgenInfo?: {
    props?: DocgenItem[]
    events?: DocgenItem[]
    slots?: DocgenItem[]
  }
}

interface ArgType {
  description?: string
  table?: {
    category?: string
    [key: string]: unknown
  }
}

interface StorybookMeta {
  title?: string
  argTypes?: Record<string, ArgType>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any
}

interface ArgItem {
  name: string
  type?: string[]
  required?: boolean
  default?: string
  description?: string
}

interface ArgsCollection {
  props: ArgItem[]
  events: ArgItem[]
  slots: ArgItem[]
}

type TranslateFunction = ReturnType<typeof useI18n>['t']

const TYPE_PATTERN = /\([^]*\)|\{[^]*\}|\[[^]*\]|([^|\s]*)/g

/**
 * Парсит строку типа и возвращает массив типов
 */
const parseType = (typeString?: string): string[] | undefined => {
  if (!typeString) return undefined

  return typeString
    .match(TYPE_PATTERN)
    ?.map((item) => item.trim())
    .filter((item) => item && item !== 'undefined')
}

/**
 * Форматирует значение по умолчанию
 */
const formatDefaultValue = (value: unknown): string | undefined => {
  if (value == null) return undefined
  return String(value) || '""'
}

const removeColon = (name: string): string => {
  return name.replace(':', '')
}

/**
 * Получает описание для элемента с переводом
 */
const getDescription = (
  name: string,
  category: 'props' | 'events' | 'slots',
  title: string,
  argTypes: Record<string, ArgType>,
  t: TranslateFunction,
): string => {
  // Учет дублирующихся имен
  const sameNameKey = `${name} `
  const sameNameArg: ArgType | undefined = argTypes[sameNameKey]
  const isSameName = sameNameArg?.table?.category === category
  const arg: ArgType | undefined = argTypes[name]

  // Удаление двоеточия из названия (неправильно обрабатывается в i18n)
  const formattedName = removeColon(isSameName ? sameNameKey : name)

  return t(`${title}.argTypes.${formattedName}`, {
    defaultValue: (isSameName ? sameNameArg : arg)?.description || '',
  })
}

/**
 * Обрабатывает пропсы компонента
 */
const processProps = (
  props: DocgenItem[],
  propsList: string[],
  title: string,
  argTypes: Record<string, ArgType>,
  t: TranslateFunction,
): ArgItem[] => {
  const result: ArgItem[] = []

  props.forEach((prop) => {
    // только базовые пропсы
    const isBasicProp = propsList.includes(prop.name)
    if (!isBasicProp) return

    const type = parseType(prop.type)
    const defaultValue = formatDefaultValue(prop.default)
    const description = getDescription(prop.name, 'props', title, argTypes, t)

    const argItem: ArgItem = {
      name: prop.name,
      type,
      required: prop.required,
    }

    if (defaultValue) argItem.default = defaultValue
    if (description) argItem.description = description

    result.push(argItem)
  })

  return result
}

/**
 * Обрабатывает слоты компонента
 */
const processSlots = (
  slots: DocgenItem[],
  title: string,
  argTypes: Record<string, ArgType>,
  t: TranslateFunction,
): ArgItem[] => {
  return slots.map((slot) => {
    const type = parseType(slot.type)
    const description = getDescription(slot.name, 'slots', title, argTypes, t)

    const argItem: ArgItem = {
      name: slot.name,
      type,
    }

    if (description) argItem.description = description

    return argItem
  })
}

/**
 * Обрабатывает события компонента
 */
const processEvents = (
  events: DocgenItem[],
  title: string,
  argTypes: Record<string, ArgType>,
  t: TranslateFunction,
): ArgItem[] => {
  return events.map((event) => {
    const type = parseType(event.type)
    const description = getDescription(event.name, 'events', title, argTypes, t)

    const argItem: ArgItem = {
      name: event.name,
      type,
    }

    if (description) argItem.description = description

    return argItem
  })
}

export const CustomArgTypes = ({ of }: { of: StorybookMeta }) => {
  const { t } = useI18n()

  const component = of.component as ComponentInfo | undefined
  if (!component?.__docgenInfo) return null

  const { props = [], events = [], slots = [] } = component.__docgenInfo
  const argTypes = of.argTypes || {}
  const title = of.title?.split('/').pop()?.toLowerCase() || ''

  const propsList = component.props ? Object.keys(component.props) : []

  const args: ArgsCollection = {
    props: processProps(props, propsList, title, argTypes, t),
    slots: processSlots(slots, title, argTypes, t),
    events: processEvents(events, title, argTypes, t),
  }

  return (
    <div className="args sb-unstyled">
      <table className="args__table">
        <thead className="args__table-head">
          <tr>
            <th>
              <span>{t('customArgTypes.name')}</span>
            </th>
            <th>
              <span>{t('customArgTypes.description')}</span>
            </th>
            <th>
              <span>{t('customArgTypes.default')}</span>
            </th>
          </tr>
        </thead>
        <tbody className="args__table-body">
          {Object.entries(args).map(([key, value]) => {
            if (value.length === 0) return null

            return (
              <React.Fragment key={key}>
                <tr>
                  <td colSpan={3} className="args__title">
                    <span className="args__title-text">{key}</span>
                  </td>
                </tr>
                {value.map((item: ArgItem) => (
                  <tr key={item.name}>
                    <td className="args__name">
                      <span
                        className={`args__name-text ${item.required ? 'is--required' : ''}`}
                      >
                        {item.name}
                      </span>
                    </td>
                    <td className="args__description">
                      <div className="args__description-content">
                        {item.description && (
                          <span className="args__description-text">
                            {item.description}
                          </span>
                        )}
                        {item.type && item.type.length > 0 && (
                          <div
                            className={item.type.length > 1 ? 'args__tags' : ''}
                          >
                            {item.type.map((type: string, index: number) => (
                              <span key={index} className="args__tag">
                                {type}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="args__default">
                      {item.default ? (
                        <span className="args__tag">{item.default}</span>
                      ) : (
                        <span className="args__default-text">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
