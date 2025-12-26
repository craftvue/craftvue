import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CTabList } from 'craftvue'

const meta = {
  title: 'Navigation/Tabs/TabList',
  component: CTabList,
  parameters: {
    controls: {
      exclude: ['$slots'],
    },
  },
  argTypes: {
    default: {
      description: 'Слот для контейнера списка вкладок',
    },
  },
  tags: ['!dev'],
} satisfies Meta<typeof CTabList>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
