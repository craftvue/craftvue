import type { Meta, StoryObj } from '@storybook/vue3-vite'
import OverviewComponents from 'docs/components/OverviewComponents.vue'

const meta = {
  title: 'Design System/Components',
  component: OverviewComponents,
  parameters: {
    layout: 'fullscreen',
  },
  // tags: ['autodocs'],
  tags: ['!dev'],
} satisfies Meta<typeof OverviewComponents>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  name: 'Все компоненты',
}
