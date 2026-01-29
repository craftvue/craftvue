import type { Meta, StoryObj } from '@storybook/vue3-vite'
import IconGallery from 'docs/components/IconGallery.vue'

const meta = {
  title: 'Design System/Icons',
  component: IconGallery,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Галерея всех доступных иконок в CraftVue',
      },
    },
  },
  // tags: ['autodocs'],
  tags: ['!dev'],
} satisfies Meta<typeof IconGallery>

export default meta
type Story = StoryObj<typeof meta>

export const AllIcons: Story = {
  name: 'Все иконки',
  parameters: {
    docs: {
      description: {
        story: '## Все иконки',
      }
    }
  }
}
