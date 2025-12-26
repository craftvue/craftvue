/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj, ComponentPropsAndSlots } from '@storybook/vue3-vite'
import { CButton, CFormItem, CRadio, CRadioGroup } from 'craftvue'
import type { RadioEmits, RadioGroupEmits } from 'craftvue'
import { AddPrefixKey } from 'docs/types'
import { fn } from 'storybook/test'
import { computed, ref, watch } from 'vue'
import { generateId } from 'docs/utils'

type AllRadioArgs = ComponentPropsAndSlots<typeof CRadio> &
  AddPrefixKey<ComponentPropsAndSlots<typeof CRadioGroup>, 'Group.'> &
  AddPrefixKey<RadioGroupEmits, 'Group.'> &
  RadioEmits

const customArgsKeys: (keyof AllRadioArgs)[] = [
  'modelValue',
  'disabled',
  'invalid',
  'size',
  'label',
  'value',
  'variant',
  'name',
  'id',
  'ariaLabel',
  'ariaLabelledby',
  'default',
  'icon',
  'update:modelValue',
  'change',
  'focus',
  'blur',
  'Group.modelValue',
  'Group.disabled',
  'Group.invalid',
  'Group.size',
  'Group.variant',
  'Group.name',
  'Group.orientation',
  'Group.default',
  'Group.update:modelValue',
  'Group.change',
]

const meta = {
  title: 'Form/Radio/Radio',
  component: CRadio,
  args: {
    modelValue: 0,
    disabled: false,
    invalid: false,
    size: 1 as any,
    label: '',
    variant: 'outlined',
    onFocus: fn(),
    onBlur: fn(),
    onChange: fn(),
    'onUpdate:modelValue': fn(),
    default: false,
    icon: false,
  },
  parameters: {
    controls: {
      include: customArgsKeys,
    },
    layout: 'centered',
  },
  argTypes: {
    modelValue: {
      control: { type: 'select', labels: { 0: 'Option 1', 1: 'Option 2', 2: '-' } },
      options: [0, 1, 2],
      mapping: {
        0: 'option1',
        1: 'option2',
        2: undefined,
      },
      description: 'Выбранное значение радиокнопки (должно совпадать с value выбранной опции)',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает радиокнопку, делая её недоступной для взаимодействия',
    },
    invalid: {
      control: 'boolean',
      description: 'Помечает радиокнопку как невалидную',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Маленький', 1: 'Нормальный', 2: 'Большой' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description: 'Размер радиокнопки: sm (маленький), нормальный (по умолчанию), lg (большой)',
    },
    label: {
      control: 'text',
      description: 'Текстовая метка, отображаемая рядом с радиокнопкой',
    },
    value: {
      control: false,
      description: 'Значение радиокнопки, которое устанавливается в modelValue при выборе',
    },
    variant: {
      control: 'select',
      description: 'Вариант стиля радиокнопки: outlined (с обводкой) или filled (заполненный)',
    },
    name: {
      control: false,
      description: 'Атрибут name для элемента input (используется для группировки в RadioGroup)',
    },
    id: {
      control: false,
      description: 'Уникальный идентификатор элемента (генерируется автоматически, если не указан)',
    },
    ariaLabel: {
      control: false,
      description: 'ARIA-метка для доступности (альтернатива label для скринридеров)',
    },
    ariaLabelledby: {
      control: false,
      description: 'ID элемента, который служит меткой для радиокнопки (ARIA)',
    },
    focus: {
      description: 'Событие, возникающее при получении фокуса радиокнопкой',
    },
    blur: {
      description: 'Событие, возникающее при потере фокуса радиокнопкой',
    },
    'update:modelValue': {
      description: 'Событие для обновления выбранного значения',
    },
    change: {
      description: 'Событие, возникающее при изменении выбранной опции',
    },
    default: {
      control: 'boolean',
      description: 'Слот для кастомного содержимого метки',
    },
    icon: {
      control: 'boolean',
      description: 'Слот для кастомной иконки радиокнопки',
    },
  },
  render: (args) => ({
    components: { CRadio },
    setup() {
      const value = ref(args.modelValue)

      watch(
        () => args.modelValue,
        (newValue) => {
          value.value = newValue
        },
      )

      return { args, value, generateId }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 15px;">
        <CRadio
          v-bind="args"
          :id="generateId()"
          v-model="value"
          value="option1"
          :label="args.label || 'Option 1'"
        >
          <template #default v-if="args.default">
            <span style="color: #bea87b; font-weight: 500;">Default slot</span>
          </template>
          <template #icon="{ checked, iconClass }" v-if="args.icon">
            <span v-if="checked" :class="iconClass">✓</span>
          </template>
        </CRadio>
        <CRadio
          v-bind="args"
          :id="generateId()"
          v-model="value"
          value="option2"
          :label="args.label || 'Option 2'"
        >
          <template #icon="{ checked, iconClass }" v-if="args.icon">
            <span v-if="checked" :class="iconClass">✓</span>
          </template>
        </CRadio>
      </div>
    `,
  }),
} satisfies Meta<AllRadioArgs>

export default meta
type Story = StoryObj<AllRadioArgs>

export const Basic: Story = {
  args: {},
}

export const Filled: Story = {
  args: {
    modelValue: 2,
  },
  argTypes: {
    label: { control: false },
    variant: { control: false },
    default: { control: false },
    icon: { control: false },
  },
  render: (args) => ({
    components: { CRadio },
    setup() {
      const value = ref(args.modelValue)

      watch(
        () => args.modelValue,
        (newValue) => {
          value.value = newValue
        },
      )

      return { args, value, generateId }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 20px;">
        <CRadio v-bind="args" :id="generateId()" v-model="value" value="option1" label="Outlined" />
        <CRadio v-bind="args" :id="generateId()" v-model="value" value="option2" label="Filled" variant="filled" />
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
    icon: { control: false },
  },
  render: (args) => ({
    components: { CRadio },

    setup() {
      const value = ref('option2')

      return { args, value, generateId }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 20px;">
        <CRadio
          v-bind="args"
          :id="generateId()"
          v-model="value"
          value="option1"
          size="sm"
          label="Small"
        />
        <CRadio
          v-bind="args"
          :id="generateId()"
          v-model="value"
          value="option2"
          label="Normal"
        />
        <CRadio
          v-bind="args"
          :id="generateId()"
          v-model="value"
          value="option3"
          size="lg"
          label="Large"
        />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Invalid: Story = {
  args: {
    value: 'option1',
    label: 'Option 1',
  },
  argTypes: {
    modelValue: { control: false },
    invalid: { control: false },
    label: { control: false },
    default: { control: false },
    icon: { control: false },
  },
  render: (args) => ({
    components: { CRadio },
    setup() {
      const value = ref(undefined)
      return { args, value, generateId }
    },
    template: `
      <CRadio
        v-bind="args"
        :id="generateId()"
        v-model="value"
        :invalid="!value"
      />
    `,
  }),
}

export const Group: Story = {
  args: {
    'Group.modelValue': 'Russia',
    'Group.disabled': false,
    'Group.invalid': false,
    'Group.size': 1 as any,
    'Group.variant': 'outlined',
    'Group.orientation': 'horizontal',
    'Group.onUpdate:modelValue': fn(),
    'Group.onChange': fn(),
  },
  argTypes: {
    modelValue: { control: false },
    label: { control: false },
    default: { control: false },
    icon: { control: false },
    'Group.modelValue': {
      control: 'select',
      options: ['Russia', 'USA', 'Japan', 'China'],
      table: {
        category: 'props',
        subcategory: 'RadioGroup',
      },
    },
    'Group.disabled': {
      control: 'boolean',
      table: {
        category: 'props',
        subcategory: 'RadioGroup',
      },
    },
    'Group.invalid': {
      control: 'boolean',
      table: {
        category: 'props',
        subcategory: 'RadioGroup',
      },
    },
    'Group.size': {
      control: {
        type: 'select',
        labels: { 0: 'Маленький', 1: 'Нормальный', 2: 'Большой' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      table: {
        category: 'props',
        subcategory: 'RadioGroup',
      },
    },
    'Group.variant': {
      control: 'select',
      options: ['outlined', 'filled'],
      table: {
        category: 'props',
        subcategory: 'RadioGroup',
      },
    },
    'Group.orientation': {
      control: 'select',
      options: ['vertical', 'horizontal'],
      table: {
        category: 'props',
        subcategory: 'RadioGroup',
      },
    },
    'Group.name': {
      control: false,
      table: {
        category: 'props',
        subcategory: 'RadioGroup',
      },
    },
    'Group.default': {
      control: false,
      table: {
        category: 'slots',
        subcategory: 'RadioGroup',
      },
    },
    'Group.update:modelValue': {
      control: false,
      table: {
        category: 'events',
        subcategory: 'RadioGroup',
      },
    },
    'Group.change': {
      control: false,
      table: {
        category: 'events',
        subcategory: 'RadioGroup',
      },
    },
  },
  render: (args) => ({
    components: { CRadio, CRadioGroup },
    setup() {
      const radioArgs = computed<Record<string, any>>(() => {
        return Object.fromEntries(Object.entries(args).filter(([key]) => !key.startsWith('Group.')))
      })
      const radioGroupArgs = computed<Record<string, any>>(() => {
        return Object.fromEntries(
          Object.entries(args)
            .filter(([key]) => key.startsWith('Group.'))
            .map(([key, value]) => [key.replace('Group.', ''), value]),
        )
      })

      const selectedCountry = ref(args['Group.modelValue'])
      const countries = ['Russia', 'USA', 'Japan', 'China']

      watch(
        () => args['Group.modelValue'],
        (newValue) => {
          selectedCountry.value = newValue
        },
      )

      return { args, radioArgs, radioGroupArgs, selectedCountry, countries, generateId }
    },
    template: `
      <CRadioGroup v-bind="radioGroupArgs" :name="generateId()" v-model="selectedCountry">
        <CRadio
          v-for="country in countries"
          v-bind="country === 'Russia' ? radioArgs : {}"
          :key="country"
          :id="generateId()"
          :value="country"
          :label="country"
        />
      </CRadioGroup>

      <div style="margin-top: 20px; padding: 10px; background-color: #262626; border-radius: var(--c-border-radius);">
        {{ selectedCountry }}
      </div>
    `,
  }),
}

export const CustomIcon: Story = {
  args: {
    icon: true,
  },
}

export const CustomLabel: Story = {
  args: {
    default: true,
  },
}

export const Form: Story = {
  argTypes: {
    modelValue: { control: false },
    invalid: { control: false },
    label: { control: false },
    default: { control: false },
    icon: { control: false },
  },
  render: (args) => ({
    components: { CRadio, CRadioGroup, CFormItem, CButton },
    setup() {
      const selectedCountry = ref(undefined)
      const countries = ['Russia', 'USA', 'Japan', 'China']
      const error = ref('')

      const submit = () => {
        error.value = selectedCountry.value ? '' : 'Please select a country'
      }

      const handleChange = () => {
        error.value = ''
      }

      return { args, selectedCountry, countries, error, submit, handleChange, generateId }
    },
    template: `
      <CFormItem label="Select country" required :errorMessage="error">
        <CRadioGroup
          v-model="selectedCountry"
          :name="generateId()"
          :invalid="!!error"
          orientation="horizontal"
          @change="handleChange"
        >
          <CRadio
            v-for="country in countries"
            v-bind="args"
            :key="country"
            :id="generateId()"
            :value="country"
            :label="country"
          />
        </CRadioGroup>
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
