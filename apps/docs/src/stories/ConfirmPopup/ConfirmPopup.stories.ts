/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { CButton, CConfirmPopup, CIcon, CSwitch } from 'craftvue'
import type { ConfirmPopupEmits } from 'craftvue'
import {
  WarningIcon,
  CheckIcon,
  ErrorIcon,
  InfoIcon,
  DeleteIcon,
  SaveIcon,
  EditIcon,
  SearchIcon,
} from '@craftvue/icons'
import { markRaw, ref, useTemplateRef, watch } from 'vue'
import IconLogo from 'docs/components/IconLogo.vue'

type AllConfirmPopupArgs = ComponentPropsAndSlots<typeof CConfirmPopup> & {
  'show ': []
  'trigger ': { isOpen: boolean; open: () => void; close: () => void }
} & Omit<ConfirmPopupEmits, 'show'>

const meta = {
  title: 'Feedback/ConfirmPopup/ConfirmPopup',
  component: CConfirmPopup,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['$slots', 'onConfirm', 'onCancel', 'onHide', 'onShow'],
    },
  },
  args: {
    message: 'Do you really want to delete this item?',
    icon: 0 as any,
    iconColor: '',
    confirmText: 'Yes',
    cancelText: 'No',
    show: undefined,
    rootEl: null,
    placement: 'bottom',
    align: 'start',
    trigger: 'click',
    offset: 5,
    sameWidth: false,
    boundaryPadding: 5,
    zIndex: 2000,
    maxHeight: 500,
    maxWidth: 200,
    teleportTo: 'body',
    restoreFocus: false,
    animation: 'opacity',
    arrow: true,
    showDelay: 0,
    hideDelay: 0,
    durationEnter: 300,
    durationLeave: 300,
    confirmSeverity: 'primary',
    cancelSeverity: 'secondary',
    confirmVariant: 'filled',
    cancelVariant: 'outlined',
    onConfirm: fn(),
    onCancel: fn(),
    onHide: fn(),
    onShow: fn(),
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Текст сообщения подтверждения, отображаемый в поповере',
    },
    icon: {
      control: {
        type: 'select',
        labels: { 0: 'warning', 1: 'check', 2: 'error', 3: 'info' },
      },
      options: [0, 1, 2, 3],
      mapping: {
        0: markRaw(WarningIcon),
        1: markRaw(CheckIcon),
        2: markRaw(ErrorIcon),
        3: markRaw(InfoIcon),
      },
      description: 'Иконка компонента Vue, отображаемая рядом с сообщением',
    },
    iconColor: {
      control: 'color',
      description: 'Цвет иконки (CSS-цвет в любом формате)',
    },
    confirmText: {
      control: 'text',
      description: 'Текст на кнопке подтверждения',
    },
    cancelText: {
      control: 'text',
      description: 'Текст на кнопке отмены',
    },
    show: {
      control: false,
      description: 'Управляет видимостью поповера',
    },
    rootEl: {
      control: false,
      description:
        'Элемент, относительно которого позиционируется поповер (HTMLElement или Vue компонент)',
    },
    placement: {
      control: 'select',
      description:
        'Позиция поповера относительно элемента: bottom (снизу), top (сверху), left (слева), right (справа)',
    },
    align: {
      control: 'select',
      description: 'Выравнивание поповера: start (начало), center (центр), end (конец)',
    },
    trigger: {
      control: 'select',
      description: 'Способ открытия поповера: click (по клику) или hover (при наведении)',
    },
    offset: {
      control: 'number',
      description: 'Отступ в пикселях между элементом и поповером',
    },
    sameWidth: {
      control: 'boolean',
      description: 'Устанавливает одинаковую ширину поповера с элементом-триггером',
    },
    boundaryPadding: {
      control: 'number',
      description:
        'Отступ в пикселях от границ viewport для предотвращения выхода поповера за пределы экрана',
    },
    zIndex: {
      control: 'number',
      description: 'Z-index для поповера (используется для управления порядком наложения)',
    },
    maxHeight: {
      control: 'number',
      description:
        'Максимальная высота поповера в пикселях (число) или строка с единицами измерения',
    },
    maxWidth: {
      control: 'number',
      description:
        'Максимальная ширина поповера в пикселях (число) или строка с единицами измерения',
    },
    teleportTo: {
      control: 'text',
      description:
        'Селектор или элемент, в который телепортируется поповер (по умолчанию "body", false - без телепорта)',
    },
    restoreFocus: {
      control: 'boolean',
      description: 'Восстанавливает фокус на элементе-триггере после закрытия поповера',
    },
    animation: {
      control: 'select',
      description:
        'Тип анимации появления/исчезновения: zoom (масштабирование) или opacity (прозрачность)',
    },
    arrow: {
      control: 'boolean',
      description: 'Показывать стрелку, указывающую на элемент-триггер',
    },
    showDelay: {
      control: 'number',
      description: 'Задержка в миллисекундах перед показом поповера (для trigger="hover")',
    },
    hideDelay: {
      control: 'number',
      description: 'Задержка в миллисекундах перед скрытием поповера (для trigger="hover")',
    },
    durationEnter: {
      control: 'number',
      description: 'Длительность анимации появления в миллисекундах',
    },
    durationLeave: {
      control: 'number',
      description: 'Длительность анимации исчезновения в миллисекундах',
    },
    confirmSeverity: {
      control: 'select',
      description: 'Цветовая палитра кнопки подтверждения: primary, secondary, contrast',
    },
    cancelSeverity: {
      control: 'select',
      description: 'Цветовая палитра кнопки отмены: primary, secondary, contrast',
    },
    confirmVariant: {
      control: 'select',
      description: 'Вариант стиля кнопки подтверждения: filled, outlined, text',
    },
    cancelVariant: {
      control: 'select',
      description: 'Вариант стиля кнопки отмены: filled, outlined, text',
    },
    confirm: {
      control: false,
      description: 'Событие, возникающее при нажатии на кнопку подтверждения',
    },
    cancel: {
      control: false,
      description: 'Событие, возникающее при нажатии на кнопку отмены',
    },
    hide: {
      control: false,
      description: 'Событие, возникающее при скрытии поповера',
    },
    'show ': {
      control: false,
      description: 'Событие, возникающее при показе поповера',
      table: {
        category: 'events',
        type: {
          summary: '[]',
        },
      },
    },
    default: {
      control: false,
      description: 'Слот для кастомного содержимого поповера (вместо message)',
    },
    actions: {
      control: false,
      description:
        'Слот для кастомных кнопок действий. Получает параметры: confirm (функция подтверждения), cancel (функция отмены)',
    },
    'trigger ': {
      control: false,
      description:
        'Слот для кастомного элемента-триггера. Получает параметры: isOpen (состояние), open (открыть), close (закрыть)',
      table: {
        category: 'slots',
        type: {
          summary: '{ isOpen: boolean; open: () => void; close: () => void }',
        },
      },
    },
  },
  render: (args) => ({
    components: { CConfirmPopup, CButton, CIcon },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [args.placement, args.align, args.trigger, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      const handleDelete = () => {
        console.log('Item has been deleted')
      }

      return { args, DeleteIcon, handleDelete, keyForRerender }
    },
    template: `
      <CConfirmPopup
        v-bind="args"
        @confirm="handleDelete"
        :key="keyForRerender"
      >
        <template #trigger>
          <CButton severity="secondary">
            Delete
            <CIcon name="delete" size="18" color="var(--c-prime-color)" />
          </CButton>
        </template>
      </CConfirmPopup>
    `,
  }),
} satisfies Meta<AllConfirmPopupArgs>

export default meta
type Story = StoryObj<AllConfirmPopupArgs>

export const Basic: Story = {
  args: {},
}

export const Placement: Story = {
  argTypes: {
    placement: { control: false },
    align: { control: false },
    trigger: { control: false },
  },
  render: (args) => ({
    components: { CConfirmPopup, CButton },
    setup() {
      return { args, DeleteIcon, SaveIcon, EditIcon, SearchIcon }
    },
    template: `
      <div style="width: 400px; display: flex; flex-direction: column; ">
        <div style="display: flex; justify-content: center; gap: 10px;">
          <CConfirmPopup v-bind="args" placement="top">
            <template #trigger>
              <CButton :icon="DeleteIcon" rounded />
            </template>
          </CConfirmPopup>
          <CConfirmPopup v-bind="args" placement="top" align="center">
            <template #trigger>
              <CButton :icon="DeleteIcon" rounded />
            </template>
          </CConfirmPopup>
          <CConfirmPopup v-bind="args" placement="top" align="end">
            <template #trigger>
              <CButton :icon="DeleteIcon" rounded />
            </template>
          </CConfirmPopup>
        </div>

        <div style="display: flex; justify-content: space-between;">
          <CConfirmPopup v-bind="args" placement="left">
            <template #trigger>
              <CButton :icon="EditIcon" rounded />
            </template>
          </CConfirmPopup>
          <CConfirmPopup v-bind="args" placement="right">
            <template #trigger>
              <CButton :icon="SaveIcon" rounded />
            </template>
          </CConfirmPopup>
        </div>

        <div style="display: flex; justify-content: space-between; padding: 10px 0;">
          <CConfirmPopup v-bind="args" placement="left" align="center">
            <template #trigger>
              <CButton :icon="EditIcon" rounded />
            </template>
          </CConfirmPopup>
          <CConfirmPopup v-bind="args" placement="right" align="center">
            <template #trigger>
              <CButton :icon="SaveIcon" rounded />
            </template>
          </CConfirmPopup>
        </div>

        <div style="display: flex; justify-content: space-between;">
          <CConfirmPopup v-bind="args" placement="left" align="end">
            <template #trigger>
              <CButton :icon="EditIcon" rounded />
            </template>
          </CConfirmPopup>
          <CConfirmPopup v-bind="args" placement="right" align="end">
            <template #trigger>
              <CButton :icon="SaveIcon" rounded />
            </template>
          </CConfirmPopup>
        </div>

        <div style="display: flex; justify-content: center; gap: 10px;">
          <CConfirmPopup v-bind="args">
            <template #trigger>
              <CButton :icon="SearchIcon" rounded />
            </template>
          </CConfirmPopup>
          <CConfirmPopup v-bind="args" align="center">
            <template #trigger>
              <CButton :icon="SearchIcon" rounded />
            </template>
          </CConfirmPopup>
          <CConfirmPopup v-bind="args" align="end">
            <template #trigger>
              <CButton :icon="SearchIcon" rounded />
            </template>
          </CConfirmPopup>
        </div>
      </div>
    `,
  }),
}

export const Controlled: Story = {
  args: {
    message: 'Are you sure?',
  },
  render: (args) => ({
    components: { CConfirmPopup, CSwitch },
    setup() {
      const rootElRef = useTemplateRef<HTMLElement>('rootElRef')
      const show = ref(false)
      const value = ref(false)
      const keyForRerender = ref(0)

      watch(
        () => [args.placement, args.align, args.trigger, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      const close = () => {
        show.value = false
      }
      const open = () => (show.value = true)

      const handleConfirm = () => {
        value.value = !value.value
      }

      return {
        args,
        value,
        rootElRef,
        close,
        open,
        show,
        handleConfirm,
        keyForRerender,
      }
    },
    template: `
      <CSwitch
        ref="rootElRef"
        :model-value="value"
        label="Update app"
        @click="(e) => e.preventDefault()"
      />
      <CConfirmPopup
        v-bind="args"
        :show="show"
        :root-el="rootElRef?.$el"
        @show="open"
        @hide="close"
        @confirm="handleConfirm"
        :key="keyForRerender"
      />
    `,
  }),
}

export const Customization: Story = {
  argTypes: {
    message: { control: false },
    icon: { control: false },
    iconColor: { control: false },
    confirmText: { control: false },
    cancelText: { control: false },
    confirmVariant: { control: false },
    cancelVariant: { control: false },
    confirmSeverity: { control: false },
    cancelSeverity: { control: false },
  },
  render: (args) => ({
    components: {
      CConfirmPopup,
      CButton,
    },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [args.placement, args.align, args.trigger, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      return { args, CheckIcon, InfoIcon, ErrorIcon, WarningIcon, keyForRerender }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CConfirmPopup
          v-bind="args"
          message="Success confirmpopup"
          :icon="CheckIcon"
          iconColor="#4ade80"
          confirmText="Update"
          cancelText="Later"
          cancelVariant="filled"
          :key="keyForRerender"
        >
          <template #trigger>
            <CButton :icon="CheckIcon" rounded severity="secondary" style="color: #4ade80;" />
          </template>
        </CConfirmPopup>
        <CConfirmPopup
          v-bind="args"
          message="Info confirmpopup"
          :icon="InfoIcon"
          iconColor="#60a5fa"
          confirmText="Got it"
          cancelText="Close"
          cancelVariant="text"
          confirmVariant="text"
          :key="keyForRerender"
        >
          <template #trigger>
            <CButton :icon="InfoIcon" rounded severity="secondary" style="color: #60a5fa;" />
          </template>
        </CConfirmPopup>
        <CConfirmPopup
          v-bind="args"
          message="Error confirmpopup"
          :icon="ErrorIcon"
          iconColor="#f87171"
          confirmText="Delete"
          cancelText="Cancel"
          cancelVariant="text"
          :key="keyForRerender"
        >
          <template #trigger>
            <CButton :icon="ErrorIcon" rounded severity="secondary" style="color: #f87171;" />
          </template>
        </CConfirmPopup>
        <CConfirmPopup
          v-bind="args"
          message="Warning confirmpopup"
          :key="keyForRerender"
        >
          <template #trigger>
            <CButton :icon="WarningIcon" rounded severity="secondary" style="color: #fdba74;" />
          </template>
        </CConfirmPopup>
      </div>
    `,
  }),
}

export const Template: Story = {
  argTypes: {
    message: { control: false },
    icon: { control: false },
    iconColor: { control: false },
    confirmText: { control: false },
    cancelText: { control: false },
    confirmVariant: { control: false },
    cancelVariant: { control: false },
    confirmSeverity: { control: false },
    cancelSeverity: { control: false },
  },
  render: (args) => ({
    components: { CConfirmPopup, CButton, IconLogo, CIcon },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [args.placement, args.align, args.trigger, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender }
    },
    template: `
      <CConfirmPopup v-bind="args" :key="keyForRerender">
        <template #trigger>
          <CButton label="Save image" variant="outlined" raised rounded />
        </template>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;" >
          <IconLogo style="font-size: 90px;" />
          <span>Custom template</span>
        </div>
        <template #actions="{confirm, cancel}">
          <div style="width: 100%; display: flex; justify-content: space-between; gap: 10px;">
            <CButton  size="sm" severity="secondary" @click="cancel" style="flex: 1;"><CIcon name="close" size="18" /></CButton>
            <CButton  size="sm" @click="confirm" style="flex: 1;"><CIcon name="save" size="18" /></CButton>
          </div>
        </template>
      </CConfirmPopup>
    `,
  }),
}
