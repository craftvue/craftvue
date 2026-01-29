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
      description: 'Unique tab value',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    disabled: {
      description: 'Disable tab',
    },
    as: {
      description: 'HTML element for rendering',
    },
    asChild: {
      description: 'Use child element as root',
    },
    default: {
      description: 'Slot for tab content',
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
