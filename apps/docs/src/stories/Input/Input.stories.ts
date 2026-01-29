/* eslint-disable @typescript-eslint/no-explicit-any */

import { computed, markRaw, nextTick, onMounted, ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { CButton, CIcon, CInput } from 'craftvue'
import type { BaseInputProps, InputEmits, InputSlots } from 'craftvue'
import { CloseIcon, DeleteIcon, EyeIcon, SearchIcon } from '@craftvue/icons'

type AllKeys = keyof InputEmits | keyof InputSlots | keyof BaseInputProps

const slotsArgskeys: (keyof InputSlots)[] = [
  'append',
  'prefix',
  'prepend',
  'suffix',
]

const propsArgskeys: (keyof BaseInputProps)[] = [
  'clearIcon',
  'clearable',
  'disabled',
  'formatter',
  'invalid',
  'parser',
  'prefixIcon',
  'showPassword',
  'showWordLimit',
  'size',
  'suffixIcon',
  'variant',
  'modelValue',
]

const emitsArgsKeys: (keyof InputEmits)[] = [
  'change',
  'clear',
  'input',
  'mouseenter',
  'mouseleave',
  'update:modelValue',
]

const excludedKeys = ['prefix'] satisfies AllKeys[]

const meta = {
  title: 'Form/Input/Input',
  component: CInput,
  args: {
    variant: 'outlined',
    size: 1 as any,
    invalid: false,
    disabled: false,
    clearable: false,
    showPassword: false,
    showWordLimit: false,
    formatter: 0 as any,
    parser: 0 as any,
    clearIcon: 0 as any,
    prefixIcon: 0 as any,
    suffixIcon: 0 as any,
    prepend: 0 as any,
    append: 0 as any,
    suffix: 0 as any,
    prefix: 0 as any,
    onChange: fn(),
    'onUpdate:modelValue': fn(),
    onClear: fn(),
  },
  parameters: {
    controls: {
      include: [...slotsArgskeys, ...emitsArgsKeys, ...propsArgskeys],
    },
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      description:
        'Visual display variant of input. Defines the style (filled, outlined).',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Small', 1: 'Normal', 2: 'Large' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description:
        'Input size. Controls element scale through predefined size variants',
    },
    invalid: {
      control: 'boolean',
      description:
        'Error state. Enables visual error indication and blocks interaction',
    },
    disabled: {
      type: 'boolean',
      description:
        'Disabled state. Enables visual indication of disabled state and blocks interaction',
    },
    clearable: {
      type: 'boolean',
      description:
        'Clear value capability. Enables clear button and allows deleting entered data',
    },
    showPassword: {
      type: 'boolean',
      description:
        'Show password. Enables displaying password as text and hides it as dots',
    },
    showWordLimit: {
      type: 'boolean',
      description:
        'Show character limit. Enables displaying character limit and count of entered characters',
    },
    formatter: {
      control: {
        type: 'select',
        labels: {
          0: 'No formatting',
          1: 'Format $ 1,000,000',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: (value: string) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      },
      description:
        'Value formatting function. Transforms entered value according to predefined format',
    },
    modelValue: {
      control: false,
      description:
        'Input value. Can be used to initialize value or display current value',
    },
    parser: {
      control: {
        type: 'select',
        labels: {
          0: 'No parser',
          1: 'Parser $ 1,000,000',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: (value: string) => value.replace(/\D/g, ''),
      },
      description:
        'Value parsing function. Transforms formatted value back to original',
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
        0: markRaw(CloseIcon),
        1: markRaw(DeleteIcon),
      },
      description: 'Clear icon. Graphic element used to clear input value',
    },
    prefixIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'No icon',
          1: 'With icon',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(SearchIcon),
      },
      description:
        'Prefix icon. Graphic element used to display prefix of input value',
    },
    suffixIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'No icon',
          1: 'With icon',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(EyeIcon),
      },
      description:
        'Suffix icon. Graphic element used to display suffix of input value',
    },
    prepend: {
      control: {
        type: 'select',
        labels: { 0: 'Empty slot', 1: 'template #prepend' },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: 'Https://',
      },
      description: 'Slot for content before input field',
    },
    append: {
      control: {
        type: 'select',
        labels: { 0: 'Empty slot', 1: 'template #append' },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(SearchIcon),
      },
      description: 'Slot for content after input field',
    },
    suffix: {
      control: {
        type: 'select',
        labels: { 0: 'Empty slot', 1: 'template #suffix' },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: 'check',
      },
      description: 'Slot for suffix content (after input)',
    },
    prefix: {
      control: {
        type: 'select',
        labels: { 0: 'Empty slot', 1: 'template #prefix' },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: 'search',
      },
      table: {
        category: 'slots',
        type: {
          summary: 'any',
        },
      },
      description: 'Slot for prefix content (before input)',
    },
  },
  decorators: [
    () => ({
      template: '<div style="min-width: 300px; display: flex;"><story /></div>',
    }),
  ],
  render: (args) => ({
    components: { CInput, CButton, CIcon },

    setup() {
      const modelValue = ref('')

      // исключение пропсов с уже используемыми названиями
      const allowedArgs = computed(() => {
        const obj = { ...args }
        excludedKeys.forEach((key) => {
          delete obj[key]
        })
        return obj
      })

      const hasSlots = computed(() => args.prepend || args.append)

      return { args, allowedArgs, modelValue, CButton, hasSlots }
    },
    template: `
      <CInput
        v-bind="allowedArgs"
        v-model="modelValue"
        maxlength="20"
        :placeholder="args.placeholder || 'Enter text...'"
        :style="{width: hasSlots ? '400px' : '300px'}"
      >
        <template #prepend v-if="args.prepend">
          {{ args.prepend }}
        </template>
        <template #append v-if="args.append">
          <CButton :icon="args.append" :size="args.size" label="Search" style="margin: 0 -16px; border-radius: 0; height: 100%;" />
        </template>
        <template #suffix>
          <CIcon v-if="args.suffix" :name="args.suffix" />
        </template>
        <template #prefix v-if="args.prefix">
          <CIcon :name="args.prefix" />
        </template>
      </CInput>
    `,
  }),
} satisfies Meta<typeof CInput>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
}

export const Size: Story = {
  args: {
    prefixIcon: 1 as any,
  },
  argTypes: {
    size: {
      control: false,
    },
    prefix: {
      control: false,
    },
    suffix: {
      control: false,
    },
    prepend: {
      control: false,
    },
    append: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CInput },
    setup() {
      const value1 = ref('')
      const value2 = ref('')
      const value3 = ref('')

      const allowedArgs = computed(() => {
        const obj = { ...args }
        excludedKeys.forEach((key) => {
          delete obj[key]
        })
        return obj
      })

      return { value1, value2, value3, allowedArgs }
    },
    template: `
      <div style="width: 100%; display: flex; flex-direction: column; gap: 15px;">
        <CInput v-bind="allowedArgs" v-model="value1" type="text" maxlength="20" placeholder="Small" size="sm" />
        <CInput v-bind="allowedArgs" v-model="value2" type="text" maxlength="20" placeholder="Normal" />
        <CInput v-bind="allowedArgs" v-model="value3" type="text" maxlength="20" placeholder="Large" size="lg" />
      </div>
    `,
  }),
}

export const Invalid: Story = {
  args: {},
  argTypes: {
    invalid: {
      control: false,
    },
    variant: {
      control: false,
    },
    prefix: {
      control: false,
    },
    suffix: {
      control: false,
    },
    prepend: {
      control: false,
    },
    append: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CInput },
    setup() {
      const value1 = ref('')
      const value2 = ref('')

      const allowedArgs = computed(() => {
        const obj = { ...args }
        excludedKeys.forEach((key) => {
          delete obj[key]
        })
        return obj
      })

      return { allowedArgs, value1, value2 }
    },
    template: `
      <div style="width: 300px; display: flex; flex-direction: column; gap: 15px;">
        <CInput v-bind="allowedArgs" v-model="value1" maxlength="20" placeholder="Name" :invalid="!value1" />
        <CInput v-bind="allowedArgs" v-model="value2" maxlength="20" placeholder="Name" :invalid="!value2" variant="filled" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
  argTypes: {
    disabled: {
      control: false,
    },
  },
}

export const Clearable: Story = {
  args: {
    clearable: true,
  },
  argTypes: {
    clearable: {
      control: false,
    },
  },
}

export const CustomClearIcon: Story = {
  args: {
    clearIcon: 1 as any,
    clearable: true,
    placeholder: 'Enter text...',
  },
  argTypes: {
    clearable: {
      control: false,
    },
    clearIcon: {
      control: false,
    },
    prepend: {
      control: false,
    },
    append: {
      control: false,
    },
    suffix: {
      control: false,
    },
    prefix: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CInput, CButton },
    setup() {
      const modelValue = ref('Custom clear icon')
      const input = ref()

      onMounted(async () => {
        await nextTick()
        // input.value?.focus()
      })

      const allowedArgs = computed(() => {
        const obj = { ...args }
        excludedKeys.forEach((key) => {
          delete obj[key]
        })
        return obj
      })

      return { args, allowedArgs, modelValue, input }
    },
    template: `
      <CInput v-bind="allowedArgs" v-model="modelValue" ref="input" maxlength="20" />
    `,
  }),
}

export const Formatter: Story = {
  args: {
    formatter: 1 as any,
    parser: 1 as any,
  },
  argTypes: {
    formatter: {
      control: false,
    },
    parser: {
      control: false,
    },
  },
}

export const Password: Story = {
  args: {
    showPassword: true,
    placeholder: 'Input password',
  },
  argTypes: {
    showPassword: {
      control: false,
    },
  },
}

export const LimitLength: Story = {
  args: {
    showWordLimit: true,
  },
  argTypes: {
    showWordLimit: {
      control: false,
    },
    showPassword: {
      control: false,
    },
  },
}

export const WithIcon: Story = {
  args: {
    prefix: 1 as any,
    suffix: 1 as any,
  },
  argTypes: {
    prefix: {
      control: false,
    },
    suffix: {
      control: false,
    },
    prefixIcon: {
      control: false,
    },
    suffixIcon: {
      control: false,
    },
    prepend: {
      control: false,
    },
    append: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CInput, CIcon },
    setup() {
      const value1 = ref('')
      const value2 = ref('')
      const value3 = ref('')
      const value4 = ref('')

      const allowedArgs = computed(() => {
        const obj = { ...args }
        excludedKeys.forEach((key) => {
          delete obj[key]
        })
        return obj
      })

      return {
        args,
        value1,
        value2,
        value3,
        value4,
        allowedArgs,
        SearchIcon,
        DeleteIcon,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column;">
        <span style="margin-bottom: 5px;">Using attributes</span>
        <div style="display: flex; gap: 10px; margin-bottom: 15px;">
          <CInput v-bind="allowedArgs" v-model="value1" maxlength="20" placeholder="With suffix" :suffixIcon="DeleteIcon" style="width: 250px;" />
          <CInput v-bind="allowedArgs" v-model="value2" maxlength="20" placeholder="With prefix" :prefixIcon="SearchIcon" style="width: 250px;" />
        </div>
        <span style="margin-bottom: 5px;">Using slots</span>
        <div style="display: flex; gap: 10px;">
          <CInput v-bind="allowedArgs" v-model="value3" maxlength="20" placeholder="With suffix" style="width: 250px;">
            <template #suffix>
              <CIcon :name="args.suffix" />
            </template>
          </CInput>
          <CInput v-bind="allowedArgs" v-model="value4" maxlength="20" placeholder="With prefix" style="width: 250px;">
            <template #prefix>
              <CIcon :name="args.prefix" />
            </template>
          </CInput>
        </div>
      </div>
    `,
  }),
}

export const InputGroup: Story = {
  args: {
    prepend: 1 as any,
    append: 1 as any,
    placeholder: 'Enter text...',
  },
  argTypes: {
    prepend: {
      control: false,
    },
    append: {
      control: false,
    },
    prefix: {
      control: false,
    },
    suffix: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CInput, CButton },
    setup() {
      const value1 = ref('')
      const value2 = ref('')
      const value3 = ref('')

      const allowedArgs = computed(() => {
        const obj = { ...args }
        excludedKeys.forEach((key) => {
          delete obj[key]
        })
        return obj
      })

      return { args, allowedArgs, value1, value2, value3 }
    },
    template: `
      <div style="width: 400px; display: flex; flex-direction: column; gap: 15px;" >
        <CInput v-bind="allowedArgs" v-model="value1" maxlength="20">
          <template #prepend>
            {{ args.prepend }}
          </template>
        </CInput>
        <CInput v-bind="allowedArgs" v-model="value2" maxlength="20">
          <template #append>
            <CButton :icon="args.append" :size="args.size" label="Search" style="margin: 0 -16px; border-radius: 0; height: 100%;" />
          </template>
        </CInput>
        <CInput v-bind="allowedArgs" v-model="value3" maxlength="20">
          <template #prepend>
            {{ args.prepend }}
          </template>
          <template #append>
            <CButton :icon="args.append" :size="args.size" label="Search" style="margin: 0 -16px; border-radius: 0; height: 100%;" />
          </template>
        </CInput>
      </div>
    `,
  }),
}
