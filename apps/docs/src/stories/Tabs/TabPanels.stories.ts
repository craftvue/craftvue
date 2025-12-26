import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CTabPanels } from 'craftvue'

const meta = {
  title: 'Navigation/Tabs/TabPanels',
  component: CTabPanels,
  parameters: {
    controls: {
      exclude: ['$slots'],
    },
  },
  argTypes: {
    default: {
      description: 'Слот для контейнера панелей вкладок',
    },
  },
  tags: ['!dev'],
} satisfies Meta<typeof CTabPanels>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
