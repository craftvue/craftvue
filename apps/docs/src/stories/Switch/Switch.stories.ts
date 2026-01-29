/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  Meta,
  StoryObj,
  ComponentPropsAndSlots,
} from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import type { SwitchEmits } from 'craftvue'
import { CButton, CFormItem, CIcon, CSwitch } from 'craftvue'
import { ref, watch } from 'vue'
import { generateId } from 'docs/utils'

type CustomSwitchArgs = ComponentPropsAndSlots<typeof CSwitch> & SwitchEmits

const customArgsKeys: (keyof CustomSwitchArgs)[] = [
  'modelValue',
  'disabled',
  'invalid',
  'loading',
  'size',
  'label',
  'trueValue',
  'falseValue',
  'name',
  'id',
  'variant',
  'ariaLabel',
  'ariaLabelledby',
  'default',
  'thumb',
  'update:modelValue',
  'change',
  'focus',
  'blur',
]

const meta = {
  title: 'Form/Switch/Switch',
  component: CSwitch,
  args: {
    modelValue: false,
    disabled: false,
    invalid: false,
    loading: false,
    size: 1 as any,
    label: '',
    variant: 'outlined',
    'onUpdate:modelValue': fn(),
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
    default: false,
    thumb: false,
  },
  parameters: {
    controls: {
      include: customArgsKeys,
    },
    layout: 'centered',
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
      description:
        'Switch value (true/false or custom value via trueValue/falseValue)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables switch, making it unavailable for interaction',
    },
    invalid: {
      control: 'boolean',
      description: 'Marks switch as invalid',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading indicator and blocks interaction',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Small', 1: 'Normal', 2: 'Large' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description: 'Switch size: sm (small), normal (default), lg (large)',
    },
    label: {
      control: 'text',
      description: 'Text label displayed next to switch',
    },
    variant: {
      control: 'select',
      description:
        'Switch style variant: outlined (with border) or filled (filled)',
    },
    trueValue: {
      control: false,
      description: 'Custom value to be used when switch is on',
    },
    falseValue: {
      control: false,
      description: 'Custom value to be used when switch is off',
    },
    name: {
      control: false,
      description:
        'Name attribute for input element (used for grouping in forms)',
    },
    id: {
      control: false,
      description:
        'Unique element identifier (generated automatically if not specified)',
    },
    ariaLabel: {
      control: false,
      description:
        'ARIA label for accessibility (alternative to label for screen readers)',
    },
    ariaLabelledby: {
      control: false,
      description: 'ID of element that serves as label for switch (ARIA)',
    },
    'update:modelValue': {
      control: false,
      description: 'Event for updating switch value',
    },
    change: {
      control: false,
      description: 'Event fired when switch state changes',
    },
    focus: {
      control: false,
      description: 'Event fired when switch receives focus',
    },
    blur: {
      control: false,
      description: 'Event fired when switch loses focus',
    },
    default: {
      control: 'boolean',
      description: 'Slot for custom label content',
    },
    thumb: {
      control: 'boolean',
      description: 'Slot for custom content inside switch (thumb)',
    },
  },
  render: (args) => ({
    components: { CSwitch, CIcon },
    setup() {
      const value = ref(args.modelValue)

      watch(
        () => args.modelValue,
        (newValue) => {
          value.value = newValue
        },
      )

      return { args, value }
    },
    template: `
      <CSwitch v-bind="args" v-model="value">
        <template #default="{checked}">
          <span v-if="args.default" style="color: #bea87b; font-weight: 500;">
            {{ checked ? 'Checked' : 'No checked' }}
          </span>
        </template>
        <template #thumb="{checked}" v-if="args.thumb"  >
          <CIcon :name="checked ? 'add' : 'minus'" />
        </template>
      </CSwitch>
    `,
  }),
} satisfies Meta<CustomSwitchArgs>

export default meta
type Story = StoryObj<CustomSwitchArgs>

export const Basic: Story = {
  args: {
    id: generateId(),
  },
}

export const WithLabel: Story = {
  args: {
    id: generateId(),
    label: 'Switch to dark theme',
  },
}

export const Filled: Story = {
  argTypes: {
    modelValue: { control: false },
    label: { control: false },
    variant: { control: false },
    default: { control: false },
    thumb: { control: false },
  },
  render: (args) => ({
    components: { CSwitch },
    setup() {
      const value1 = ref(false)
      const value2 = ref(false)

      return { args, value1, value2, generateId }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <CSwitch v-bind="args" v-model="value1" :id="generateId()" label="Outlined" />
        <CSwitch v-bind="args" v-model="value2" :id="generateId()" label="Filled" variant="filled" />
      </div>
    `,
  }),
}

export const Size: Story = {
  argTypes: {
    modelValue: { control: false },
    size: { control: false },
    label: { control: false },
    default: { control: false },
    thumb: { control: false },
  },
  render: (args) => ({
    components: { CSwitch },
    setup() {
      const value1 = ref(false)
      const value2 = ref(false)
      const value3 = ref(false)

      return { args, value1, value2, value3, generateId }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <CSwitch v-bind="args" v-model="value1" :id="generateId()" label="Small" size="sm" />
        <CSwitch v-bind="args" v-model="value2" :id="generateId()" label="Normal" />
        <CSwitch v-bind="args" v-model="value3" :id="generateId()" label="Large" size="lg" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: false },
    default: { control: false },
    thumb: { control: false },
  },
  render: (args) => ({
    components: { CSwitch },
    setup() {
      const value1 = ref(true)
      const value2 = ref(false)

      return { args, value1, value2, generateId }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <CSwitch v-bind="args" v-model="value1" :id="generateId()" label="Checked" />
        <CSwitch v-bind="args" v-model="value2" :id="generateId()" label="No checked" />
      </div>
    `,
  }),
}

export const Invalid: Story = {
  args: {
    id: generateId(),
  },
  argTypes: {
    modelValue: { control: false },
    invalid: { control: false },
    default: { control: false },
    thumb: { control: false },
  },
  render: (args) => ({
    components: { CSwitch },
    setup() {
      const value = ref(false)

      return { args, value }
    },
    template: `
      <CSwitch v-bind="args" v-model="value" :invalid="!value" />
    `,
  }),
}

export const Loading: Story = {
  args: {
    id: generateId(),
    loading: true,
    label: 'Loading',
  },
}

export const CustomLabel: Story = {
  args: {
    id: generateId(),
    default: true,
    label: 'Switch to dark theme',
  },
}

export const Template: Story = {
  args: {
    id: generateId(),
    modelValue: true,
    thumb: true,
    label: 'Switch to dark theme',
  },
}

export const CustomValues: Story = {
  args: {
    trueValue: 'yes',
    falseValue: 'no',
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: false },
    default: { control: false },
    thumb: { control: false },
  },
  render: (args) => ({
    components: { CSwitch },
    setup() {
      const value1 = ref('no')
      const value2 = ref('yes')

      return { args, value1, value2, generateId }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <CSwitch v-bind="args" v-model="value1" :id="generateId()" label="Custom value (no)" />
        <CSwitch v-bind="args" v-model="value2" :id="generateId()" label="Custom value (yes)" />
      </div>
      <div style="margin-top: 10px; padding: 10px; background-color: #262626; border-radius: var(--c-border-radius);">
        <div>Value 1: {{ value1 }}</div>
        <div>Value 2: {{ value2 }}</div>
      </div>
    `,
  }),
}

export const Form: Story = {
  argTypes: {
    modelValue: { control: false },
    invalid: { control: false },
    label: { control: false },
    default: { control: false },
    thumb: { control: false },
  },
  render: (args) => ({
    components: { CSwitch, CButton, CFormItem },
    setup() {
      const value = ref(false)
      const error = ref('')

      const submit = () => {
        error.value = value.value ? '' : 'Must be checked'
      }

      const handleChange = () => {
        if (value.value) {
          error.value = ''
        }
      }

      return { args, value, error, submit, handleChange, generateId }
    },
    template: `
      <CFormItem
        label="Please check to agree"
        required
        :errorMessage="error"
      >
        <CSwitch
          v-bind="args"
          v-model="value"
          :id="generateId()"
          :invalid="!!error"
          label="Accept Terms & Conditions"
          @change="handleChange"
        />
      </CFormItem>
      <CButton
        label="Submit"
        severity="secondary"
        style="width: 100%; margin-top: 20px;"
        @click="submit"
      />
    `,
  }),
}
