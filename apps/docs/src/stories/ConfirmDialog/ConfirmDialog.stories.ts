/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { CButton, CConfirmDialog, CIcon, ConfirmDialogEmits } from 'craftvue'
import { markRaw, ref, watch } from 'vue'
import { CheckIcon, CloseIcon, ErrorIcon, InfoIcon, WarningIcon } from '@craftvue/icons'
import IconLogo from 'docs/components/IconLogo.vue'

type AllConfirmDialogArgs = ComponentPropsAndSlots<typeof CConfirmDialog> &
  Omit<ConfirmDialogEmits, 'show'> & { 'show ': [] }

const meta = {
  title: 'Feedback/ConfirmDialog/ConfirmDialog',
  component: CConfirmDialog,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: [
        '$slots',
        'onConfirm',
        'onCancel',
        'onUpdate:show',
        'onShow',
        'onHide',
        'onOverlayClick',
        'onEscape',
        'dialogRef',
        'open',
        'close',
        'isOpen',
      ],
    },
  },
  args: {
    message: 'Are you sure you want to save these changes? This action cannot be undone.',
    type: 0 as any,
    icon: 0 as any,
    iconColor: undefined,
    confirmText: 'Yes',
    cancelText: 'No',
    confirmSeverity: 'primary',
    cancelSeverity: 'secondary',
    confirmVariant: 'filled',
    cancelVariant: 'outlined',
    showCancel: true,
    showConfirm: true,
    closeOnConfirm: true,
    closeOnCancel: true,
    show: false,
    width: 420,
    maxWidth: '90vw',
    maxHeight: '90vh',
    modal: true,
    closeOnOverlayClick: false,
    closeOnEscape: true,
    lockScroll: true,
    teleportTo: 'body',
    zIndex: 3000,
    title: 'Save Changes',
    showClose: true,
    durationEnter: 300,
    durationLeave: 300,
    animation: 'zoom',
    closeIcon: 0 as any,
    onConfirm: fn(),
    onCancel: fn(),
    'onUpdate:show': fn(),
    onShow: fn(),
    onHide: fn(),
    onOverlayClick: fn(),
    onEscape: fn(),
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Текст сообщения подтверждения, отображаемый в диалоге',
    },
    type: {
      control: {
        type: 'select',
        labels: { 0: 'none', 1: 'warning', 2: 'success', 3: 'error', 4: 'info' },
      },
      options: [0, 1, 2, 3, 4],
      mapping: {
        0: undefined,
        1: 'warning',
        2: 'success',
        3: 'error',
        4: 'info',
      },
      description:
        'Тип диалога, определяющий предустановленную иконку и стиль: warning, success, error, info',
    },
    icon: {
      control: {
        type: 'select',
        labels: { 0: 'none', 1: 'warning', 2: 'success', 3: 'error', 4: 'info' },
      },
      options: [0, 1, 2, 3, 4],
      mapping: {
        0: undefined,
        1: markRaw(WarningIcon),
        2: markRaw(CheckIcon),
        3: markRaw(ErrorIcon),
        4: markRaw(InfoIcon),
      },
      description:
        'Иконка компонента Vue, отображаемая рядом с сообщением (имеет приоритет над type)',
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
    showCancel: {
      control: 'boolean',
      description: 'Показывать кнопку отмены',
    },
    showConfirm: {
      control: 'boolean',
      description: 'Показывать кнопку подтверждения',
    },
    closeOnConfirm: {
      control: 'boolean',
      description: 'Автоматически закрывать диалог при нажатии на кнопку подтверждения',
    },
    closeOnCancel: {
      control: 'boolean',
      description: 'Автоматически закрывать диалог при нажатии на кнопку отмены',
    },
    show: {
      control: 'boolean',
      description: 'Управляет видимостью диалога',
    },
    width: {
      control: 'number',
      description: 'Ширина диалога в пикселях (число) или строка с единицами измерения',
    },
    maxHeight: {
      control: 'text',
      description:
        'Максимальная высота диалога (число в пикселях или строка с единицами, например "90vh")',
    },
    maxWidth: {
      control: 'text',
      description:
        'Максимальная ширина диалога (число в пикселях или строка с единицами, например "90vw")',
    },
    modal: {
      control: 'boolean',
      description:
        'Делает диалог модальным (с затемненным фоном, блокирующим взаимодействие с остальным контентом)',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Закрывает диалог при клике на затемненный фон (overlay)',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Закрывает диалог при нажатии клавиши Escape',
    },
    lockScroll: {
      control: 'boolean',
      description: 'Блокирует прокрутку страницы при открытом диалоге',
    },
    teleportTo: {
      control: 'text',
      description:
        'Селектор или элемент, в который телепортируется диалог (по умолчанию "body", false - без телепорта)',
    },
    zIndex: {
      control: 'number',
      description: 'Z-index для диалога (используется для управления порядком наложения)',
    },
    title: {
      control: 'text',
      description: 'Заголовок диалога, отображаемый в header (если не используется слот header)',
    },
    showClose: {
      control: 'boolean',
      description: 'Показывать кнопку закрытия в header',
    },
    durationEnter: {
      control: 'number',
      description: 'Длительность анимации появления в миллисекундах',
    },
    durationLeave: {
      control: 'number',
      description: 'Длительность анимации исчезновения в миллисекундах',
    },
    animation: {
      control: 'select',
      description:
        'Тип анимации появления/исчезновения: fade (затухание), zoom (масштабирование), slide (слайд)',
    },
    closeIcon: {
      control: {
        type: 'select',
        labels: { 0: 'default', 1: 'custom' },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: markRaw(ErrorIcon),
      },
      description:
        'Иконка компонента Vue для кнопки закрытия (если не указана, используется иконка по умолчанию)',
    },
    header: {
      control: false,
      description: 'Слот для кастомного заголовка. Получает параметр: close (закрыть)',
    },
    default: {
      control: false,
      description: 'Слот для кастомного содержимого диалога (вместо message)',
    },
    actions: {
      control: false,
      description:
        'Слот для кастомных кнопок действий. Получает параметры: confirm (функция подтверждения), cancel (функция отмены)',
    },
    confirm: {
      control: false,
      description: 'Событие, возникающее при нажатии на кнопку подтверждения',
    },
    cancel: {
      control: false,
      description: 'Событие, возникающее при нажатии на кнопку отмены',
    },
    'update:show': {
      control: false,
      description: 'Событие для обновления видимости диалога',
    },
    'show ': {
      control: false,
      description: 'Событие, возникающее при показе диалога',
      table: {
        category: 'events',
        type: {
          summary: '[]',
        },
      },
    },
    hide: {
      control: false,
      description: 'Событие, возникающее при скрытии диалога',
    },
    overlayClick: {
      control: false,
      description: 'Событие, возникающее при клике на затемненный фон (overlay)',
    },
    escape: {
      control: false,
      description: 'Событие, возникающее при нажатии клавиши Escape',
    },
  },
  render: (args) => ({
    components: { CConfirmDialog, CButton, CIcon },
    setup() {
      const isOpen = ref(false)
      const keyForRerender = ref(0)

      const openDialog = () => (isOpen.value = true)
      const handleConfirm = () => console.log('confirmed')
      const handleCancel = () => console.log('cancelled')

      watch(
        () => args.show,
        () => (isOpen.value = args.show!),
      )

      watch(
        () => [args.lockScroll, args.modal],
        () => {
          keyForRerender.value++
        },
      )

      return { args, isOpen, openDialog, handleConfirm, handleCancel, keyForRerender }
    },
    template: `
      <CButton severity="secondary" @click="openDialog">
        Save changes
        <CIcon name="save" color="#bea87b" size="20" />
      </CButton>
      <CConfirmDialog
        v-bind="args"
        v-model:show="isOpen"
        :key="keyForRerender"
        @confirm="handleConfirm"
        @cancel="handleCancel"
      />
    `,
  }),
} satisfies Meta<AllConfirmDialogArgs>

export default meta
type Story = StoryObj<AllConfirmDialogArgs>

export const Basic: Story = {
  args: {},
}

export const Type: Story = {
  args: {
    width: 300,
  },
  argTypes: {
    message: { control: false },
    type: { control: false },
    title: { control: false },
  },
  render: (args) => ({
    components: { CConfirmDialog, CButton, WarningIcon, InfoIcon, CheckIcon, ErrorIcon },
    setup() {
      const isOpen = ref(false)
      const info = ref<{
        title?: string
        message?: string
        type?: 'warning' | 'error' | 'info' | 'success'
      }>({
        title: args.title,
        message: args.message,
        type: args.type,
      })

      const openDialog = (type: 'warning' | 'error' | 'info' | 'success') => {
        info.value.type = type
        switch (type) {
          case 'warning':
            info.value.title = 'Warning'
            info.value.message = 'This is a warning message'
            break
          case 'error':
            info.value.title = 'Error'
            info.value.message = 'This is an error message'
            break
          case 'info':
            info.value.title = 'Info'
            info.value.message = 'This is an info message'
            break
          case 'success':
            info.value.title = 'Success'
            info.value.message = 'This is a success message'
            break
        }
        isOpen.value = true
      }

      watch(
        () => args.show,
        () => (isOpen.value = args.show!),
      )

      return { args, isOpen, openDialog, info }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton severity="secondary" @click="openDialog('warning')">
          <WarningIcon color="#fdba74" />
        </CButton>
        <CButton severity="secondary" @click="openDialog('info')">
          <InfoIcon color="#60a5fa" />
        </CButton>
        <CButton severity="secondary" @click="openDialog('success')">
          <CheckIcon color="#4ade80" />
        </CButton>
        <CButton severity="secondary" @click="openDialog('error')">
          <ErrorIcon color="#f87171" />
        </CButton>
      </div>
      <CConfirmDialog
        v-bind="args"
        v-model:show="isOpen"
        :type="info.type"
        :title="info.title"
        :message="info.message"
      />
    `,
  }),
}

export const Template: Story = {
  args: {
    width: 300,
  },
  argTypes: {
    message: { control: false },
    type: { control: false },
    icon: { control: false },
    iconColor: { control: false },
    confirmText: { control: false },
    cancelText: { control: false },
    confirmVariant: { control: false },
    cancelVariant: { control: false },
    confirmSeverity: { control: false },
    cancelSeverity: { control: false },
    showCancel: { control: false },
    showConfirm: { control: false },
    title: { control: false },
    showClose: { control: false },
    closeIcon: { control: false },
  },
  render: (args) => ({
    components: { CConfirmDialog, CButton, IconLogo },
    setup() {
      const isOpen = ref(false)
      const openDialog = () => (isOpen.value = true)

      watch(
        () => args.show,
        () => (isOpen.value = args.show!),
      )

      return { args, isOpen, openDialog, CloseIcon }
    },
    template: `
      <CButton
        label="Template"
        severity="secondary"
        badge="NEW"
        @click="openDialog"
      />
      <CConfirmDialog
        v-bind="args"
        v-model:show="isOpen"
      >
        <template #header="{ close }">
          <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="font-size: 20px; font-weight: 600; color: #bea87b;">Confirmation</h3>
            <CButton severity="secondary" :icon="CloseIcon" rounded size="sm" @click="close" />
          </div>
        </template>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
          <IconLogo style="font-size: 120px;" />
          <span>Do you want to save your changes?</span>
        </div>
        <template #actions="{ confirm, cancel }">
          <CButton size="sm" severity="secondary" @click="cancel">Cancel</CButton>
          <CButton size="sm" @click="cancel">Confirm</CButton>
        </template>
      </CConfirmDialog>
    `,
  }),
}

export const OneAction: Story = {
  argTypes: {
    message: { control: false },
    type: { control: false },
    confirmText: { control: false },
    cancelText: { control: false },
    showCancel: { control: false },
    showConfirm: { control: false },
    show: { control: false },
    closeOnEscape: { control: false },
    title: { control: false },
    showClose: { control: false },
    closeIcon: { control: false },
  },
  render: (args) => ({
    components: { CConfirmDialog, CButton, CIcon },
    setup() {
      const isOpenConfirm = ref(false)
      const isOpenCancel = ref(false)
      const openDialogConfirm = () => (isOpenConfirm.value = true)
      const openDialogCancel = () => (isOpenCancel.value = true)

      return { args, isOpenCancel, isOpenConfirm, openDialogConfirm, openDialogCancel }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton severity="secondary" label="Only cancel" @click="openDialogCancel" />
        <CButton label="Only confirm" @click="openDialogConfirm" />
      </div>

      <CConfirmDialog
        v-bind="args"
        v-model:show="isOpenCancel"
        :show-confirm="false"
        type="info"
        title="Information"
        cancel-text="Close"
        message="This dialog only has a cancel button. Use this pattern for informational messages that don't require user confirmation."
      />
      <CConfirmDialog
        v-bind="args"
        v-model:show="isOpenConfirm"
        :show-cancel="false"
        :show-close="false"
        :close-on-escape="false"
        title="Confirmation Required"
        confirm-text="I agree"
        message="This dialog only has a confirm button. Use this pattern when you need to ensure the user acknowledges an important message before proceeding."
      />
    `,
  }),
}
