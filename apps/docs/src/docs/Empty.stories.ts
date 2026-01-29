import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'

const meta: Meta = {
  title: 'Empty',
  component: defineComponent({ template: '<div/>' }),
  tags: ['!dev'],
}

export default meta
type Story = StoryObj

export const Basic: Story = {}
