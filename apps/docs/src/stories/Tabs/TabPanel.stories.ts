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
      description: 'Panel value (should match tab)',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    as: {
      description: 'HTML element for rendering',
    },
    asChild: {
      description: 'Use child element as root',
    },
    default: {
      description: 'Slot for tab panel content',
    },
  },
  tags: ['!dev'],
} satisfies Meta<typeof CTabPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
