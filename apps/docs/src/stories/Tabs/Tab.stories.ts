import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CTab } from 'craftvue'

const meta = {
  title: 'Navigation/Tabs/Tab',
  component: CTab,
  args: {
    value: 'tab1',
    disabled: false,
    as: 'button',
    asChild: false,
  },
  parameters: {
    controls: {
      exclude: ['$slots'],
    },
  },
  argTypes: {
    value: {
      description: 'Уникальное значение вкладки',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    disabled: {
      description: 'Отключить вкладку',
    },
    as: {
      description: 'HTML элемент для рендеринга',
    },
    asChild: {
      description: 'Использовать дочерний элемент как корневой',
    },
    default: {
      description: 'Слот для содержимого вкладки',
      table: {
        type: {
          summary: `
            {
              tabClasses?: string | number | undefined;
              active?: boolean | undefined;
              a11yAttrs?: Record<string, unknown> | undefined;
              onClick?: (() => void) | undefined;
            } `,
        },
      },
    },
  },
  tags: ['!dev'],
} satisfies Meta<typeof CTab>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
