import type {
  ComponentPropsAndSlots,
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import { CRadioGroup } from 'craftvue'
import type { RadioGroupEmits } from 'craftvue'

type AllRadioGroupArgs = ComponentPropsAndSlots<typeof CRadioGroup> &
  RadioGroupEmits

const meta = {
  title: 'Form/Radio/RadioGroup',
  component: CRadioGroup,
  parameters: {
    controls: {
      exclude: ['$slots', 'onUpdate:modelValue', 'onChange'],
    },
  },
  argTypes: {
    modelValue: {
      description: 'Selected value in radio button group',
    },
    disabled: {
      description:
        'Disables all radio buttons in group, making them unavailable for interaction',
    },
    invalid: {
      description: 'Marks radio button group as invalid',
    },
    size: {
      description:
        'Size of all radio buttons in group: sm (small), normal (default), lg (large)',
    },
    variant: {
      description:
        'Style variant of all radio buttons in group: outlined (with border) or filled (filled)',
    },
    name: {
      description: 'Name attribute for all radio buttons in group',
    },
    orientation: {
      description: 'Orientation of radio button arrangement',
    },
    default: {
      description: 'Slot for placing child CRadio components',
    },
    'update:modelValue': {
      description: 'Event for updating selected value',
    },
    change: {
      description: 'Event fired when selected option in group changes',
    },
  },
  tags: ['!dev'],
} satisfies Meta<AllRadioGroupArgs>

export default meta
type Story = StoryObj<AllRadioGroupArgs>

export const Basic: Story = {
  args: {},
}
