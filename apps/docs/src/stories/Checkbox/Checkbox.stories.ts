/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj, ComponentPropsAndSlots } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { CButton, CCheckbox, CCheckboxGroup, CFormItem, CIcon } from 'craftvue'
import type { CheckboxEmits, CheckboxGroupEmits } from 'craftvue'
import { AddPrefixKey } from 'docs/types'
import { computed, ref, watch } from 'vue'
import { generateId } from 'docs/utils'

type AllCheckboxArgs = ComponentPropsAndSlots<typeof CCheckbox> &
  AddPrefixKey<ComponentPropsAndSlots<typeof CCheckboxGroup>, 'Group.'> &
  AddPrefixKey<CheckboxGroupEmits, 'Group.'> &
  CheckboxEmits

const customArgsKeys: (keyof AllCheckboxArgs)[] = [
  'modelValue',
  'indeterminate',
  'disabled',
  'invalid',
  'size',
  'label',
  'value',
  'trueValue',
  'falseValue',
  'variant',
  'name',
  'id',
  'ariaLabel',
  'ariaLabelledby',
  'default',
  'icon',
  'update:indeterminate',
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
  'Group.update:modelValue',
  'Group.change',
  'Group.default',
]

const meta = {
  title: 'Form/Checkbox/Checkbox',
  component: CCheckbox,
  args: {
    modelValue: false,
    indeterminate: false,
    disabled: false,
    invalid: false,
    size: 1 as any,
    label: '',
    variant: 'outlined',
    'onUpdate:modelValue': fn(),
    'onUpdate:indeterminate': fn(),
    onFocus: fn(),
    onChange: fn(),
    onBlur: fn(),
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
      control: 'boolean',
      description:
        'Значение чекбокса (true/false или кастомное значение через trueValue/falseValue)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Неопределенное состояние чекбокса (частично выбран)',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает чекбокс, делая его недоступным для взаимодействия',
    },
    invalid: {
      control: 'boolean',
      description: 'Помечает чекбокс как невалидный',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Маленький', 1: 'Нормальный', 2: 'Большой' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description: 'Размер чекбокса: sm (маленький), нормальный (по умолчанию), lg (большой)',
    },
    label: {
      control: 'text',
      description: 'Текстовая метка, отображаемая рядом с чекбоксом',
    },
    value: {
      control: false,
      description: 'Значение чекбокса при использовании в группе (CheckboxGroup)',
    },
    trueValue: {
      control: false,
      description: 'Кастомное значение, которое будет использоваться когда чекбокс выбран',
    },
    falseValue: {
      control: false,
      description: 'Кастомное значение, которое будет использоваться когда чекбокс не выбран',
    },
    variant: {
      control: 'select',
      description: 'Вариант стиля чекбокса: outlined (с обводкой) или filled (заполненный)',
    },
    name: {
      control: false,
      description: 'Атрибут name для элемента input (используется для группировки в формах)',
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
      description: 'ID элемента, который служит меткой для чекбокса (ARIA)',
    },
    focus: {
      description: 'Событие, возникающее при получении фокуса чекбоксом',
    },
    blur: {
      description: 'Событие, возникающее при потере фокуса чекбоксом',
    },
    change: {
      description: 'Событие, возникающее при изменении состояния чекбокса',
    },
    'update:indeterminate': {
      description: 'Событие для обновления состояния indeterminate',
    },
    'update:modelValue': {
      description: 'Событие для обновления значения чекбокса',
    },
    default: {
      control: 'boolean',
      description: 'Слот для кастомного содержимого метки',
    },
    icon: {
      control: 'boolean',
      description: 'Слот для кастомной иконки чекбокса',
    },
  },
  render: (args) => ({
    components: { CCheckbox, CIcon },
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
      <CCheckbox v-bind="args" v-model="value">
        <template #default>
          <span v-if="args.default" style="color: var(--prime-color); font-weight: 500;">Default slot</span>
        </template>
        <template #icon="{ checked, indeterminate, iconClass }" v-if="args.icon">
            <span v-if="checked" :class="iconClass">✓</span>
            <span v-else-if="indeterminate" :class="iconClass">○</span>
        </template>
      </CCheckbox>
    `,
  }),
} satisfies Meta<AllCheckboxArgs>

export default meta
type Story = StoryObj<AllCheckboxArgs>

export const Basic: Story = {
  args: {
    id: generateId(),
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Agree to terms',
    id: generateId(),
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    id: generateId(),
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
}

export const Size: Story = {
  args: {},
  argTypes: {
    modelValue: { control: false },
    size: { control: false },
    label: { control: false },
    default: { control: false },
    icon: { control: false },
  },
  render: (args) => ({
    components: { CCheckbox },
    setup() {
      const value1 = ref(false)
      const value2 = ref(false)
      const value3 = ref(false)

      return { args, value1, value2, value3, generateId }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 20px;">
        <CCheckbox v-bind="args" :id="generateId()" v-model="value1" size="sm" label="Small" />
        <CCheckbox v-bind="args" :id="generateId()" v-model="value2" label="Normal" />
        <CCheckbox v-bind="args" :id="generateId()" v-model="value3" size="lg" label="Large" />
      </div>
    `,
  }),
}

export const Indeterminate: Story = {
  argTypes: {
    modelValue: { control: false },
    indeterminate: { control: false },
    label: { control: false },
    default: { control: false },
    icon: { control: false },
  },
  render: (args) => ({
    components: { CCheckbox, CCheckboxGroup },
    setup() {
      const checkAll = ref(false)
      const isIndeterminate = ref(true)
      const checkedCountries = ref(['Russia', 'USA'])
      const countries = ref(['Russia', 'USA', 'Japan', 'China'])

      const handleCheckAllChange = (value: boolean) => {
        checkedCountries.value = value ? countries.value : []
        isIndeterminate.value = false
      }

      const handleCheckedCountriesChange = (value: string[]) => {
        const checkedCount = value.length
        checkAll.value = checkedCount === countries.value.length
        isIndeterminate.value = checkedCount > 0 && checkedCount < countries.value.length
      }

      return {
        args,
        checkAll,
        isIndeterminate,
        checkedCountries,
        countries,
        handleCheckAllChange,
        handleCheckedCountriesChange,
        generateId,
      }
    },
    template: `
      <CCheckbox v-model="checkAll" :id="generateId()" :indeterminate="isIndeterminate" label="Check all" style="margin-bottom: 20px;" @change="handleCheckAllChange" />
      <CCheckboxGroup v-model="checkedCountries" orientation="horizontal" @change="handleCheckedCountriesChange">
        <CCheckbox
          v-for="country in countries"
          v-bind="args"
          :key="country"
          :id="generateId()"
          :label="country"
          :value="country"
        />
      </CCheckboxGroup>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  argTypes: {
    modelValue: { control: false },
    disabled: { control: false },
    default: { control: false },
    icon: { control: false },
  },
  render: (args) => ({
    components: { CCheckbox },
    setup() {
      const value1 = ref(false)
      const value2 = ref(true)
      return { args, value1, value2, generateId }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 10px;">
        <CCheckbox v-bind="args" v-model="value1" :id="generateId()" />
        <CCheckbox v-bind="args" v-model="value2" :id="generateId()" />
      </div>
    `,
  }),
}

export const Invalid: Story = {
  args: {
    id: generateId(),
  },
  argTypes: {
    invalid: { control: false },
    default: { control: false },
    icon: { control: false },
  },
  render: (args) => ({
    components: { CCheckbox },
    setup() {
      const value = ref(false)

      watch(
        () => args.modelValue,
        (newValue) => {
          value.value = newValue
        },
      )

      return { args, value }
    },
    template: `
      <CCheckbox v-bind="args" v-model="value" :invalid="!value" />
    `,
  }),
}

export const Group: Story = {
  args: {
    'Group.modelValue': ['Russia', 'Japan'],
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
      control: {
        type: 'multi-select',
      },
      options: ['Russia', 'USA', 'Japan', 'China'],
      table: {
        category: 'props',
        subcategory: 'CheckboxGroup',
      },
    },
    'Group.disabled': {
      control: 'boolean',
      table: {
        category: 'props',
        subcategory: 'CheckboxGroup',
      },
    },
    'Group.invalid': {
      control: 'boolean',
      table: {
        category: 'props',
        subcategory: 'CheckboxGroup',
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
        subcategory: 'CheckboxGroup',
      },
    },
    'Group.variant': {
      control: 'select',
      options: ['outlined', 'filled'],
      table: {
        category: 'props',
        subcategory: 'CheckboxGroup',
      },
    },
    'Group.orientation': {
      control: 'select',
      options: ['vertical', 'horizontal'],
      table: {
        category: 'props',
        subcategory: 'CheckboxGroup',
      },
    },
    'Group.name': {
      control: false,
      table: {
        category: 'props',
        subcategory: 'CheckboxGroup',
      },
    },
    'Group.default': {
      control: false,
      table: {
        category: 'slots',
        subcategory: 'CheckboxGroup',
      },
    },
    'Group.update:modelValue': {
      control: false,
      table: {
        category: 'events',
        subcategory: 'CheckboxGroup',
      },
    },
    'Group.change': {
      control: false,
      table: {
        category: 'events',
        subcategory: 'CheckboxGroup',
      },
    },
  },
  render: (args) => ({
    components: { CCheckbox, CCheckboxGroup },
    setup() {
      const checkboxArgs = computed<Record<string, any>>(() => {
        return Object.fromEntries(Object.entries(args).filter(([key]) => !key.startsWith('Group.')))
      })
      const checkboxGroupArgs = computed<Record<string, any>>(() => {
        return Object.fromEntries(
          Object.entries(args)
            .filter(([key]) => key.startsWith('Group.'))
            .map(([key, value]) => [key.replace('Group.', ''), value]),
        )
      })

      const checkedCountries = ref(args['Group.modelValue'] || [])
      const countries = ['Russia', 'USA', 'Japan', 'China']

      watch(
        () => args['Group.modelValue'],
        (newValue) => {
          checkedCountries.value = newValue || []
        },
      )

      return { args, checkboxArgs, checkboxGroupArgs, checkedCountries, countries, generateId }
    },
    template: `
      <CCheckboxGroup v-bind="checkboxGroupArgs" v-model="checkedCountries">
        <CCheckbox
          v-for="country in countries"
          v-bind="country === 'Russia' ? checkboxArgs : {}"
          :key="country"
          :id="generateId()"
          :value="country"
          :label="country"
        />
      </CCheckboxGroup>

      <div style="margin-top: 20px;padding: 10px; background-color: #262626; border-radius: var(--c-border-radius);">
        {{ checkedCountries }}
      </div>
    `,
  }),
}

export const CustomIcon: Story = {
  args: {
    modelValue: true,
    icon: true,
    label: 'Agree to terms',
    id: generateId(),
  },
}

export const CustomLabel: Story = {
  args: {
    default: true,
    label: 'Agree to terms',
    id: generateId(),
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
    trueValue: { control: false },
    falseValue: { control: false },
    default: { control: false },
    icon: { control: false },
  },
  render: (args) => ({
    components: { CCheckbox },
    setup() {
      const value1 = ref('no')
      const value2 = ref('yes')

      return { args, value1, value2, generateId }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 15px;">
        <CCheckbox v-bind="args" v-model="value1" :id="generateId()" label="Custom value (no)" />
        <CCheckbox v-bind="args" v-model="value2" :id="generateId()" label="Custom value (yes)" />
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
    icon: { control: false },
  },
  render: (args) => ({
    components: { CCheckbox, CCheckboxGroup, CButton, CFormItem },
    setup() {
      const checkedCountries = ref([])
      const countries = ['Russia', 'USA', 'Japan', 'China']
      const error = ref('')

      const submit = () => {
        error.value = checkedCountries.value.length ? '' : 'Check at least 1 option'
      }

      const handleChange = () => {
        if (checkedCountries.value.length) {
          error.value = ''
        }
      }

      return { args, checkedCountries, countries, submit, error, handleChange, generateId }
    },
    template: `
      <CFormItem label="Check options" required :errorMessage="error">
        <CCheckboxGroup
          v-model="checkedCountries"
          :invalid="!!error"
          orientation="horizontal"
          @change="handleChange"
        >
          <CCheckbox
            v-for="country in countries"
            v-bind="args"
            :key="country"
            :id="generateId()"
            :value="country"
            :label="country"
          />
        </CCheckboxGroup>
      </CFormItem>
      <CButton label="Submit" severity="secondary" style="width: 100%; margin-top: 20px;" @click="submit" />
    `,
  }),
}
