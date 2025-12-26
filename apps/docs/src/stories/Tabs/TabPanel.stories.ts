import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CTabPanel } from 'craftvue'

const meta = {
  title: 'Navigation/Tabs/TabPanel',
  component: CTabPanel,
  args: {
    value: 'tab1',
    as: 'div',
    asChild: false,
  },
  parameters: {
    controls: {
      exclude: ['$slots'],
    },
  },
  argTypes: {
    value: {
      description: 'Значение панели (должно соответствовать вкладке)',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    as: {
      description: 'HTML элемент для рендеринга',
    },
    asChild: {
      description: 'Использовать дочерний элемент как корневой',
    },
    default: {
      description: 'Слот для содержимого панели вкладки',
    },
  },
  tags: ['!dev'],
} satisfies Meta<typeof CTabPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
