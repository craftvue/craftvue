/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, markRaw } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import IconLogo from 'docs/components/IconLogo.vue'
import { CButton, CTab, CTabList, CTabs } from 'craftvue'
import type { BaseButtonProps, ButtonEmits, ButtonSlots } from 'craftvue'
import { AddIcon, DeleteIcon, EditIcon, SaveIcon, CheckIcon, HomeIcon } from '@craftvue/icons'

const icons = {
  null: undefined,
  AddIcon: markRaw(AddIcon),
  DeleteIcon: markRaw(DeleteIcon),
  EditIcon: markRaw(EditIcon),
  SaveIcon: markRaw(SaveIcon),
}

type AllKeys = keyof BaseButtonProps | keyof ButtonEmits | keyof ButtonSlots

const customArgsKeys: AllKeys[] = [
  'badge',
  'badgeSeverity',
  'icon',
  'label',
  'loading',
  'raised',
  'rounded',
  'severity',
  'variant',
  'disabled',
  'iconPos',
  'size',
  'default',
  'iconSlot',
  'click',
]

const meta = {
  title: 'Basic/Button/Button',
  component: CButton,
  args: {
    onClick: fn(),
    label: 'Button',
    severity: 'primary',
    variant: 'filled',
    raised: false,
    rounded: false,
    loading: false,
    disabled: false,
    badge: '',
    badgeSeverity: 'primary',
    // Использование строки для извлечения компонента из icons, необходимо для control
    icon: 'null' as any,
    iconPos: 'left',
    size: 1 as any,
    default: 0,
    iconSlot: 0,
  },
  parameters: {
    controls: {
      include: customArgsKeys,
    },
    layout: 'centered',
  },
  argTypes: {
    severity: {
      control: 'select',
      description:
        'Цветовая схема кнопки, определяющая ее семантическое назначение. Влияет на цвет фона и текста.',
    },
    variant: {
      control: 'select',
      description:
        'Визуальный вариант отображения кнопки. Определяет стиль оформления (заливка, контур, текст).',
    },
    label: {
      control: 'text',
      description:
        'Текстовое содержимое кнопки. Отображается как доступное для скринридеров описание действия.',
    },
    loading: {
      control: 'boolean',
      description:
        'Состояние загрузки. При активации отображает индикатор прогресса и блокирует взаимодействие.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Неактивное состояние. Отключает интерактивность и визуально указывает на недоступность действия.',
    },
    raised: {
      control: 'boolean',
      description:
        'Эффект поднятия. Добавляет тень для создания визуального объема и отделения от фона.',
    },
    rounded: {
      control: 'boolean',
      description:
        'Скругление углов. При активации применяет максимальное скругление для создания pill-формы.',
    },
    badge: {
      control: 'text',
      type: 'boolean',
      description:
        'Бейдж-индикатор. Отображает дополнительную метку для уведомлений или счетчиков.',
    },
    badgeSeverity: {
      control: 'select',
      description:
        'Цветовая схема бейджа. Согласуется с семантической значимостью отображаемой информации.',
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          null: 'Без иконки',
          AddIcon: 'Добавить',
          DeleteIcon: 'Удалить',
          EditIcon: 'Редактировать',
          SaveIcon: 'Сохранить',
        },
      },
      options: Object.keys(icons),
      mapping: icons,
      table: {
        category: 'props',
      },
      description:
        'Иконка кнопки. Графический элемент, дополняющий текстовое содержание или заменяющий его.',
    },
    iconPos: {
      control: 'select',
      description:
        'Позиция иконки. Определяет расположение графического элемента относительно текста.',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Маленький', 1: 'Нормальный', 2: 'Большой' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description:
        'Размер кнопки. Контролирует масштаб элемента через предопределенные размерные варианты.',
    },
    default: {
      control: {
        type: 'select',
        labels: { 0: 'Пустой слот', 1: 'template #default' },
      },
      options: [0, 1],
      mapping: { 0: undefined, 1: 'Содержимое template' },
      type: 'boolean',
      description:
        'Контент слота по умолчанию. Заменяет стандартное текстовое содержимое произвольным HTML.',
    },
    iconSlot: {
      control: {
        type: 'select',
        labels: { 0: 'Пустой слот', 1: 'template #iconSlot' },
      },
      options: [0, 1],
      mapping: { 0: undefined, 1: markRaw(HomeIcon) },
      description:
        'Контент слота иконки. Заменяет стандартную иконку произвольным графическим содержимым.',
    },
  },
  render: (args) => ({
    components: { CButton },

    setup() {
      return { args }
    },
    template: `
      <CButton v-bind="args">
        <template #iconSlot>
          <component :is="args['iconSlot']" />
        </template>
        <span v-if="args.default">
          {{ args.default }}
        </span>
      </CButton>
    `,
  }),
} satisfies Meta<typeof CButton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const Icons: Story = {
  args: {
    label: '',
  },
  argTypes: {
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
    iconPos: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return {
        args,
        HomeIcon,
        AddIcon,
        DeleteIcon,
        EditIcon,
        SaveIcon,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <div style="display: flex; gap: 10px;">
          <CButton v-bind="args" :icon="args.icon || HomeIcon" aria-label="Home" />
          <CButton v-bind="args" :icon="args.icon || AddIcon" :label="args.label || 'Add'" />
          <CButton v-bind="args" :icon="args.icon || DeleteIcon" :label="args.label || 'Delete'" icon-pos="right" />
        </div>
        <div style="display: flex; gap: 10px;">
          <CButton v-bind="args" :icon="args.icon || EditIcon" :label="args.label || 'Edit'" icon-pos="top" />
          <CButton v-bind="args" :icon="args.icon || SaveIcon" :label="args.label || 'Save'" icon-pos="bottom" />
        </div>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
    label: '',
  },
  argTypes: {
    loading: {
      control: false,
    },
    disabled: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      const loading = ref(false)

      const load = () => {
        loading.value = true
        setTimeout(() => {
          loading.value = false
        }, 2000)
      }

      return { args, load, loading, CheckIcon }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton v-bind="args" />
        <CButton v-bind="args" :label="args.label || 'Кнопка'" />
        <CButton
          v-bind="args"
          :icon="args.icon || CheckIcon"
          :loading="loading"
          @click="load"
          :label="args.label || 'Нажми на меня'"
        />
      </div>
    `,
  }),
}

export const Severity: Story = {
  args: {
    label: '',
  },
  argTypes: {
    severity: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton v-bind="args" :label="args.label || 'Primary'" />
        <CButton v-bind="args" :label="args.label || 'Secondary'" severity="secondary" />
        <CButton v-bind="args" :label="args.label || 'Contrast'" severity="contrast" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    label: 'Отправить',
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
}

export const Raised: Story = {
  args: {
    ...Severity.args,
    raised: true,
  },
  argTypes: {
    ...Severity.argTypes,
    raised: {
      control: false,
    },
  },
  render: Severity.render,
}

export const Rounded: Story = {
  args: {
    ...Severity.args,
    rounded: true,
  },
  argTypes: {
    ...Severity.argTypes,
    rounded: {
      control: false,
    },
  },
  render: Severity.render,
}

export const Text: Story = {
  args: {
    ...Severity.args,
    variant: 'text',
  },
  argTypes: {
    ...Severity.argTypes,
    variant: {
      control: false,
    },
  },
  render: Severity.render,
}

export const RaisedText: Story = {
  args: {
    ...Severity.args,
    variant: 'text',
    raised: true,
  },
  argTypes: {
    ...Severity.argTypes,
    variant: {
      control: false,
    },
    raised: {
      control: false,
    },
  },
  render: Severity.render,
}

export const Outlined: Story = {
  args: {
    ...Severity.args,
    variant: 'outlined',
  },
  argTypes: {
    ...Severity.argTypes,
    variant: {
      control: false,
    },
  },
  render: Severity.render,
}

export const IconOnly: Story = {
  args: {
    label: '',
  },
  argTypes: {
    label: {
      control: false,
    },
    severity: {
      control: false,
    },
    variant: {
      control: false,
    },
    rounded: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
    badge: {
      control: false,
    },
    badgeSeverity: {
      control: false,
    },
    iconPos: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton, CTabs, CTabList, CTab },
    setup() {
      const size = ref('undefined')

      const sizeOptions = ref([
        { label: 'Small', value: 'sm' },
        { label: 'Normal', value: 'undefined' },
        { label: 'Large', value: 'lg' },
      ])

      return {
        args,
        CheckIcon,
        HomeIcon,
        AddIcon,
        size,
        sizeOptions,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <CTabs v-model:value="size">
          <CTabList>
            <CTab v-for="tab in sizeOptions" :key="tab.label" :value="tab.value">
              {{ tab.label }}
            </CTab>
          </CTabList>
        </CTabs>
        <div style="width: 100%; display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size"  :icon="args.icon || CheckIcon"  />
            <CButton v-bind="args" :size="size" severity="secondary" :icon="args.icon || HomeIcon"  />
            <CButton v-bind="args" :size="size" severity="contrast" :icon="args.icon || AddIcon"  />
          </div>
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size" rounded :icon="args.icon || CheckIcon" />
            <CButton v-bind="args" :size="size" rounded severity="secondary" :icon="args.icon || HomeIcon" />
            <CButton v-bind="args" :size="size" rounded severity="contrast" :icon="args.icon || AddIcon" />
          </div>
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size" rounded variant="outlined" :icon="args.icon || CheckIcon" />
            <CButton v-bind="args" :size="size" rounded variant="outlined" severity="secondary" :icon="args.icon || HomeIcon" />
            <CButton v-bind="args" :size="size" rounded variant="outlined" severity="contrast" :icon="args.icon || AddIcon" />
          </div>
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size" rounded variant="text" raised :icon="args.icon || CheckIcon" />
            <CButton v-bind="args" :size="size" rounded variant="text" raised severity="secondary" :icon="args.icon || HomeIcon" />
            <CButton v-bind="args" :size="size" rounded variant="text" raised severity="contrast" :icon="args.icon || AddIcon" />
          </div>
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size" rounded variant="text" :icon="args.icon || CheckIcon" />
            <CButton v-bind="args" :size="size" rounded variant="text" severity="secondary" :icon="args.icon || HomeIcon" />
            <CButton v-bind="args" :size="size" rounded variant="text" severity="contrast" :icon="args.icon || AddIcon" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Size: Story = {
  args: {
    icon: markRaw(AddIcon) as any,
    label: '',
  },
  argTypes: {
    size: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 10px;">
        <CButton v-bind="args" :label="args.label || 'Small'" size="sm" />
        <CButton v-bind="args" :label="args.label || 'Normal'" />
        <CButton v-bind="args" :label="args.label || 'Large'" size="lg" />
      </div>
    `,
  }),
}

export const Badge: Story = {
  args: {
    label: '',
    severity: undefined,
    variant: undefined,
  },
  argTypes: {
    badgeSeverity: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return { args, HomeIcon }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton
          v-bind="args"
          :label="args.label || 'Отмена'"
          :badge="args.badge || '5'"
          badgeSeverity="secondary"
        />
        <CButton
          v-bind="args"
          :severity="args.severity || 'secondary'"
          :label="args.label || 'Отмена'"
          :badge="args.badge || '99+'"
          badgeSeverity="contrast"
        />
        <CButton
          v-bind="args"
          :variant="args.variant || 'outlined'"
          :label="args.label || 'Домой'"
          :icon="args.icon || HomeIcon"
          :badge="args.badge || 'NEW'"
        />
      </div>
    `,
  }),
}

export const Template: Story = {
  args: {
    default: 'default',
    variant: 'outlined',
  },
  argTypes: {
    badge: {
      control: false,
    },
    badgeSeverity: {
      control: false,
    },
    icon: {
      control: false,
    },
    iconPos: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton, IconLogo },
    setup() {
      return { args }
    },
    template: `
      <CButton v-bind="args">
        <IconLogo v-if="args.default === 'default'" style="font-size: 200px; margin: 10px;" />
        <span v-else-if="args.default">
          {{ args.default }}
        </span>
      </CButton>
    `,
  }),
}
