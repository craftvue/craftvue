import type {
  ComponentPropsAndSlots,
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import { CCheckboxGroup } from 'craftvue'
import type { CheckboxGroupEmits } from 'craftvue'

type AllCheckboxGroupArgs = ComponentPropsAndSlots<typeof CCheckboxGroup> &
  CheckboxGroupEmits

const meta = {
  title: 'Form/Checkbox/CheckboxGroup',
  component: CCheckboxGroup,
  parameters: {
    controls: {
      exclude: ['$slots', 'onUpdate:modelValue', 'onChange'],
    },
  },
  argTypes: {
    modelValue: {
      description: 'Array of selected checkbox values in group',
    },
    disabled: {
      description:
        'Disables all checkboxes in group, making them unavailable for interaction',
    },
    invalid: {
      description: 'Marks checkbox group as invalid',
    },
    size: {
      description:
        'Size of all checkboxes in group: sm (small), normal (default), lg (large)',
    },
    variant: {
      description:
        'Style variant of all checkboxes in group: outlined (with border) or filled (filled)',
    },
    name: {
      description:
        'Name attribute for all checkboxes in group (used for grouping in forms)',
    },
    orientation: {
      description: 'Orientation of checkbox arrangement',
    },
    default: {
      description: 'Slot for placing child CCheckbox components',
    },
    'update:modelValue': {
      description: 'Event for updating array of selected values',
    },
    change: {
      description: 'Event fired when selected values in group change',
    },
  },
  tags: ['!dev'],
} satisfies Meta<AllCheckboxGroupArgs>

export default meta
type Story = StoryObj<AllCheckboxGroupArgs>

export const Basic: Story = {
  args: {},
}
