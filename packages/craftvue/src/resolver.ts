import type { ComponentResolver } from 'unplugin-vue-components/types'

export interface CraftVueResolverOptions {
  /**
   * Префикс для компонентов
   * @default 'C
   */
  prefix?: string
}

export function CraftVueResolver(options: CraftVueResolverOptions = {}): ComponentResolver {
  const { prefix = 'C' } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      // Проверяем, что имя компонента начинается с префикса
      if (!name.startsWith(prefix)) {
        return
      }

      // Убираем префикс и приводим к camelCase
      const componentName = name.slice(prefix.length)
      const kebabName = componentName
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '')

      // Список доступных компонентов
      const components = [
        'button',
        'badge',
        'input',
        'form-item',
        'icon',
        'tabs',
        'tab-list',
        'tab',
        'tab-panels',
        'tab-panel',
        'tooltip',
        'select',
        'dropdown',
        'popup',
        'checkbox',
        'checkbox-group',
        'confirm-dialog',
        'confirm-popup',
        'dialog',
        'popover',
        'radio',
        'radio-group',
        'switch',
        'tag'
      ]

      if (components.includes(kebabName)) {
        return {
          name: name,
          from: 'craftvue',
        }
      }
    },
  }
}
