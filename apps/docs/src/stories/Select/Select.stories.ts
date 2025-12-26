/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import { AddIcon, DeleteIcon, EnvelopeIcon, NextArrowIcon, SearchIcon } from '@craftvue/icons'
import { CButton, CFormItem, CIcon, CSelect, SelectEmits } from 'craftvue'
import { markRaw, ref, watch } from 'vue'
import { fn } from 'storybook/test'

type AllSelectArgs = SelectEmits &
  ComponentPropsAndSlots<typeof CSelect> & { 'clear ': any; 'loading ': any }

const countries = ref<{ label: string; value: string; disabled?: boolean }[]>([
  { label: 'Россия', value: 'ru' },
  { label: 'США', value: 'us' },
  { label: 'Япония', value: 'jp' },
  { label: 'Китай', value: 'cn' },
  { label: 'Бразилия', value: 'br' },
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
    placeholder: 'Выберите страну',
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
    filterPlaceholder: 'Поиск...',
    noOptionsText: 'Нет доступных опций',
    loadingText: 'Загрузка...',
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
        'Текущее значение select. Для multiple — массив значений, иначе одно значение или null.',
    },
    options: {
      control: false,
      description:
        'Список опций. Каждый элемент: { label: string; value: any; disabled?: boolean }',
    },
    placeholder: {
      control: 'text',
      description: 'Текст-заполнитель, когда значение не выбрано.',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает select и взаимодействие с ним.',
    },
    multiple: {
      control: 'boolean',
      description: 'Режим множественного выбора.',
    },
    clearable: {
      control: 'boolean',
      description: 'Показывает кнопку очистки выбранного значения.',
    },
    searchable: {
      control: 'boolean',
      description: 'Включает поле поиска по опциям.',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Маленький', 1: 'Нормальный', 2: 'Большой' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description: 'Размер компонента: sm | (по умолчанию) | lg.',
    },
    variant: {
      control: 'select',
      description: 'Вариант оформления: outlined | filled.',
    },
    invalid: {
      control: 'boolean',
      description: 'Состояние ошибки (меняет стили).',
    },
    loading: {
      control: 'boolean',
      description: 'Отображает состояние загрузки и блокирует взаимодействие.',
    },
    checkmark: {
      control: 'boolean',
      description: 'Показывать иконку отметки у выбранной опции.',
    },
    full: {
      control: 'boolean',
      description: 'Растянуть select на всю доступную ширину.',
    },
    optionLabel: {
      control: 'text',
      description: 'Название поля для текста опции в объекте options.',
    },
    optionValue: {
      control: 'text',
      description: 'Название поля для значения опции в объекте options.',
    },
    optionDisabled: {
      control: 'text',
      description: 'Название поля, указывающего на отключённую опцию.',
    },
    filterPlaceholder: {
      control: 'text',
      description: 'Плейсхолдер в поле поиска.',
    },
    noOptionsText: {
      control: 'text',
      description: 'Текст при отсутствии доступных опций.',
    },
    loadingText: {
      control: 'text',
      description: 'Текст при загрузке опций.',
    },
    clearIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'По-умолчанию',
          1: 'Кастомная иконка',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(DeleteIcon),
      },
      description: 'Иконка для действия очистки значения.',
    },
    dropdownIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'По-умолчанию',
          1: 'Кастомная иконка',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(NextArrowIcon),
      },
      description: 'Иконка индикатора раскрывающегося списка.',
    },
    loadingIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'По-умолчанию',
          1: 'Кастомная иконка',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(SearchIcon),
      },
      description: 'Иконка состояния загрузки.',
    },
    checkmarkIcon: {
      control: {
        type: 'select',
        labels: {
          0: 'По-умолчанию',
          1: 'Кастомная иконка',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(EnvelopeIcon),
      },
      description: 'Иконка отметки выбранной опции.',
    },
    'update:modelValue': {
      description: 'Событие при изменении значения модели (v-model).',
    },
    change: {
      description: 'Событие при подтверждении выбора пользователем.',
    },
    search: {
      description: 'Событие при вводе текста в поле поиска.',
    },
    select: {
      description: 'Событие при выборе опции.',
    },
    remove: {
      description: 'Событие при удалении выбранной опции (в multiple).',
    },
    clear: {
      description: 'Событие при очистке значения.',
    },
    option: {
      control: false,
      description: 'Слот шаблона отдельной опции.',
    },
    value: {
      control: false,
      description: 'Слот значения (отображение выбранного значения в триггере).',
    },
    footer: {
      control: false,
      description: 'Слот нижней части выпадающего списка.',
    },
    header: {
      control: false,
      description: 'Слот верхней части выпадающего списка.',
    },
    noOptions: {
      control: {
        type: 'select',
        labels: {
          0: 'По-умолчанию',
          1: 'template #noOptions',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: 'Ничего не найдено',
      },
      description: 'Слот при отсутствии доступных опций.',
    },
    dropdown: {
      control: {
        type: 'select',
        labels: {
          0: 'По-умолчанию',
          1: 'template #dropdown',
        },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: 'Open',
      },
      description: 'Слот открытия выпадающего списка.',
    },
    'clear ': {
      control: false,
      table: {
        category: 'slots',
        type: {
          summary: 'any',
        },
      },
      description: 'Слот элемента очистки значения.',
    },
    'loading ': {
      control: false,
      table: {
        category: 'slots',
        type: {
          summary: 'any',
        },
      },
      description: 'Слот элемента загрузки.',
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
        args.multiple ? (args.modelValue ? ['ru', 'cn'] : []) : args.modelValue ? 'ru' : null,
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
    options: [...countries.value, { label: 'Казахстан', value: 'kz', disabled: true }],
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
          <div style="padding: 10px 10px 5px;">Список доступных стран</div>
        </template>
        <template #footer>
          <div style="padding: 8px;">
            <CButton label="Добавить" :icon="AddIcon" size="sm" style="width: 100%;" />
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
        error.value = value.value ? '' : 'Необходимо выбрать город'
      }

      return { args, value, submit, error }
    },
    template: `
      <form @submit.prevent="submit" style="width: 15rem;">
        <CFormItem required label="Выберите страну" :error-message="error" >
          <CSelect v-bind="args" v-model="value" :invalid="!!error" full />
        </CFormItem>
        <CButton label="Отправить" type="submit" style="width: 100%; margin-top: 20px;" />
      </form>
    `,
  }),
}
