/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ComponentPropsAndSlots,
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import {
  AddIcon,
  DeleteIcon,
  EnvelopeIcon,
  NextArrowIcon,
  SearchIcon,
} from '@craftvue/icons'
import { CButton, CFormItem, CIcon, CSelect, SelectEmits } from 'craftvue'
import { markRaw, ref, watch } from 'vue'
import { fn } from 'storybook/test'

type AllSelectArgs = SelectEmits &
  ComponentPropsAndSlots<typeof CSelect> & { 'clear ': any; 'loading ': any }

const countries = ref<{ label: string; value: string; disabled?: boolean }[]>([
  { label: 'Russia', value: 'ru' },
  { label: 'USA', value: 'us' },
  { label: 'Japan', value: 'jp' },
  { label: 'China', value: 'cn' },
  { label: 'Brazil', value: 'br' },
])

const meta = {
  title: 'Form/Select/Select',
  component: CSelect,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: [
        'onUpdate:modelValue',
        'onChange',
        'onSearch',
        'onSelect',
        'onRemove',
        'onClear',
        '$slots',
      ],
    },
  },
  args: {
    modelValue: false,
    options: countries.value,
    placeholder: 'Select country',
    disabled: false,
    multiple: false,
    clearable: false,
    searchable: false,
    size: 1 as any,
    variant: 'outlined',
    invalid: false,
    loading: false,
    checkmark: false,
    full: false,
    optionLabel: 'label',
    optionValue: 'value',
    optionDisabled: 'disabled',
    filterPlaceholder: 'Search...',
    noOptionsText: 'No options available',
    loadingText: 'Loading...',
    clearIcon: 0 as any,
    dropdownIcon: 0 as any,
    loadingIcon: 0 as any,
    checkmarkIcon: 0 as any,
    'onUpdate:modelValue': fn(),
    onChange: fn(),
    onSearch: fn(),
    onSelect: fn(),
    onRemove: fn(),
    onClear: fn(),
    noOptions: 0,
    dropdown: 0,
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
      description:
        'Current select value. For multiple — array of values, otherwise single value or null',
    },
    options: {
      control: false,
      description:
        'List of options. Each element: { label: string; value: any; disabled?: boolean }',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when value is not selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables select and interaction with it',
    },
    multiple: {
      control: 'boolean',
      description: 'Multiple selection mode',
    },
    clearable: {
      control: 'boolean',
      description: 'Shows clear button for selected value',
    },
    searchable: {
      control: 'boolean',
      description: 'Enables search field for options',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Small', 1: 'Normal', 2: 'Large' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description: 'Component size: sm | (default) | lg',
    },
    variant: {
      control: 'select',
      description: 'Styling variant: outlined | filled',
    },
    invalid: {
      control: 'boolean',
      description: 'Error state (changes styles)',
    },
    loading: {
      control: 'boolean',
      description: 'Displays loading state and blocks interaction',
    },
    checkmark: {
      control: 'boolean',
      description: 'Show checkmark icon for selected option',
    },
    full: {
      control: 'boolean',
      description: 'Stretch select to full available width',
    },
    optionLabel: {
      control: 'text',
      description: 'Field name for option text in options object',
    },
    optionValue: {
      control: 'text',
      description: 'Field name for option value in options object',
    },
    optionDisabled: {
      control: 'text',
      description: 'Field name indicating disabled option',
    },
    filterPlaceholder: {
      control: 'text',
      description: 'Placeholder in search field',
    },
    noOptionsText: {
      control: 'text',
      description: 'Text when no available options',
    },
    loadingText: {
      control: 'text',
      description: 'Text when loading options',
    },
    clearIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'Default',
          1: 'Custom icon',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(DeleteIcon),
      },
      description: 'Icon for clear value action',
    },
    dropdownIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'Default',
          1: 'Custom icon',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(NextArrowIcon),
      },
      description: 'Dropdown list indicator icon',
    },
    loadingIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'Default',
          1: 'Custom icon',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(SearchIcon),
      },
      description: 'Loading state icon',
    },
    checkmarkIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'Default',
          1: 'Custom icon',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(EnvelopeIcon),
      },
      description: 'Selected option checkmark icon',
    },
    overlayClass: {
      control: false,
      description: 'Additional class for dropdown overlay',
    },
    overlayStyle: {
      control: false,
      description: 'Additional styles for dropdown overlay',
    },
    'update:modelValue': {
      description: 'Event fired when model value changes (v-model)',
    },
    change: {
      description: 'Event fired when user confirms selection',
    },
    search: {
      description: 'Event fired when text is entered in search field',
    },
    select: {
      description: 'Event fired when option is selected',
    },
    remove: {
      description: 'Event fired when selected option is removed (in multiple)',
    },
    clear: {
      description: 'Event fired when value is cleared',
    },
    option: {
      control: false,
      description: 'Slot template for individual option',
    },
    value: {
      control: false,
      description: 'Value slot (display selected value in trigger)',
    },
    footer: {
      control: false,
      description: 'Slot for bottom part of dropdown list',
    },
    header: {
      control: false,
      description: 'Slot for top part of dropdown list',
    },
    noOptions: {
      control: {
        type: 'select',
        labels: {
          0: 'Default',
          1: 'template #noOptions',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: 'Nothing found',
      },
      description: 'Slot when no available options',
    },
    dropdown: {
      control: {
        type: 'select',
        labels: {
          0: 'Default',
          1: 'template #dropdown',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: 'Open',
      },
      description: 'Slot for dropdown opening',
    },
    'clear ': {
      control: false,
      table: {
        category: 'slots',
        type: {
          summary: 'any',
        },
      },
      description: 'Slot for clear value element',
    },
    'loading ': {
      control: false,
      table: {
        category: 'slots',
        type: {
          summary: 'any',
        },
      },
      description: 'Slot for loading element',
    },
  },
  decorators: [
    () => ({
      template:
        '<div class="sb-story__layout" style="width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem;"><story/></div>',
    }),
  ],
  render: (args) => ({
    components: { CSelect, CIcon },
    setup() {
      const value = ref(
        args.multiple
          ? args.modelValue
            ? ['ru', 'cn']
            : []
          : args.modelValue
            ? 'ru'
            : null,
      )

      watch(
        () => [args.multiple, args.modelValue],
        () => {
          value.value = args.multiple
            ? args.modelValue
              ? ['ru', 'cn']
              : []
            : args.modelValue
              ? 'ru'
              : null
        },
      )

      return { args, value }
    },
    template: `
      <CSelect v-bind="args" v-model="value">
        <template #noOptions v-if="args.noOptions">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
            <CIcon name="search" size="60" />
            {{ args.noOptions }}
          </div>
        </template>
        <template #dropdown v-if="args.dropdown">
          {{ args.dropdown }}
        </template>
      </CSelect>
    `,
  }),
} satisfies Meta<AllSelectArgs>

export default meta
type Story = StoryObj<AllSelectArgs>

export const Basic: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  argTypes: {
    disabled: { control: false },
    searchable: { control: false },
    checkmark: { control: false },
    optionLabel: { control: false },
    optionValue: { control: false },
    optionDisabled: { control: false },
    filterPlaceholder: { control: false },
    noOptionsText: { control: false },
    clearIcon: { control: false },
    checkmarkIcon: { control: false },
    noOptions: { control: false },
  },
}

export const DisabledOption: Story = {
  args: {
    options: [
      ...countries.value,
      { label: 'Kazakhstan', value: 'kz', disabled: true },
    ],
  },
}

export const Clearable: Story = {
  args: {
    clearable: true,
    modelValue: true,
  },
  argTypes: {
    clearable: { control: false },
    optionDisabled: { control: false },
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
  argTypes: {
    invalid: { control: false },
    modelValue: { control: false },
    variant: { control: false },
    optionDisabled: { control: false },
    noOptions: { control: false },
    dropdown: { control: false },
  },
  render: (args) => ({
    components: { CSelect },
    setup() {
      const value1 = ref(null)
      const value2 = ref(null)

      return { args, value1, value2 }
    },
    template: `
      <div style="display: flex; justify-content: center; gap: 10px; width: 100%;">
        <CSelect v-bind="args" v-model="value1" />
        <CSelect v-bind="args" v-model="value2" variant="filled" />
      </div>
    `,
  }),
}

export const Multiple: Story = {
  args: {
    multiple: true,
    modelValue: true,
  },
  argTypes: {
    multiple: { control: false },
    optionDisabled: { control: false },
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
  argTypes: {
    variant: { control: false },
    optionDisabled: { control: false },
  },
}

export const FullWidth: Story = {
  args: {
    full: true,
  },
  argTypes: {
    full: { control: false },
    optionDisabled: { control: false },
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  argTypes: {
    loading: { control: false },
    optionDisabled: { control: false },
  },
}

export const Filter: Story = {
  args: {
    searchable: true,
  },
  argTypes: {
    searchable: { control: false },
    optionDisabled: { control: false },
  },
}

export const Size: Story = {
  argTypes: {
    modelValue: { control: false },
    size: { control: false },
    optionDisabled: { control: false },
    placeholder: { control: false },
    noOptions: { control: false },
    dropdown: { control: false },
  },
  render: (args) => ({
    components: { CSelect },
    setup() {
      const value1 = ref(null)
      const value2 = ref(null)
      const value3 = ref(null)

      return { args, value1, value2, value3 }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%;">
        <CSelect v-bind="args" v-model="value1" size="sm" placeholder="Small" />
        <CSelect v-bind="args" v-model="value2" placeholder="Normal" />
        <CSelect v-bind="args" v-model="value3" size="lg" placeholder="Large" />
      </div>
    `,
  }),
}

export const Checkmark: Story = {
  args: {
    checkmark: true,
    modelValue: true,
  },
  argTypes: {
    checkmark: { control: false },
    optionDisabled: { control: false },
  },
}

export const Template: Story = {
  argTypes: {
    modelValue: { control: false },
    multiple: { control: false },
    searchable: { control: false },
    optionLabel: { control: false },
    optionValue: { control: false },
    filterPlaceholder: { control: false },
    noOptionsText: { control: false },
    loadingText: { control: false },
    dropdownIcon: { control: false },
    noOptions: { control: false },
    dropdown: { control: false },
  },
  render: (args) => ({
    components: { CSelect, CIcon, CButton },
    setup() {
      const value = ref(null)
      const getLink = (code: string) => {
        return `https://flagcdn.com/w20/${code}.png`
      }
      return { args, value, getLink, AddIcon }
    },
    template: `
      <CSelect v-bind="args" v-model="value" >
        <template #value="{option, placeholder}">
          <div v-if="option" style="display: flex; gap: 10px; align-items: center;">
            <img :src="getLink(option.value)" :alt="option.value" />
            <div>{{option.label}}</div>
          </div>
          <span v-else>
            {{placeholder}}
          </span>
        </template>
        <template #option="{option}">
          <div style="display: flex; gap: 10px; align-items: center;">
            <img :src="getLink(option.value)" :alt="option.value" />
            <div>{{option.label}}</div>
          </div>
        </template>
        <template #dropdown>
          <CIcon name="home" size="20" />
        </template>
        <template #header>
          <div style="padding: 10px 10px 5px;">List of available countries</div>
        </template>
        <template #footer>
          <div style="padding: 8px;">
            <CButton label="Add" :icon="AddIcon" size="sm" style="width: 100%;" />
          </div>
        </template>
      </CSelect>
    `,
  }),
}

export const Form: Story = {
  args: {
    clearable: true,
  },
  argTypes: {
    modelValue: { control: false },
    multiple: { control: false },
    invalid: { control: false },
    full: { control: false },
    optionDisabled: { control: false },
    noOptions: { control: false },
    dropdown: { control: false },
  },
  render: (args) => ({
    components: { CSelect, CFormItem, CButton },
    setup() {
      const value = ref(null)
      const error = ref('')

      const submit = () => {
        error.value = value.value ? '' : 'Please select a city'
      }

      return { args, value, submit, error }
    },
    template: `
      <form @submit.prevent="submit" style="width: 15rem;">
        <CFormItem required label="Select country" :error-message="error" >
          <CSelect v-bind="args" v-model="value" :invalid="!!error" full />
        </CFormItem>
        <CButton label="Submit" type="submit" style="width: 100%; margin-top: 20px;" />
      </form>
    `,
  }),
}
