/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { CButton, CDialog, CFormItem, CIcon, CInput } from 'craftvue'
import type { DialogEmits } from 'craftvue'
import { markRaw, ref, watch } from 'vue'
import { AddIcon, CloseIcon, ErrorIcon, MaximizeIcon, MinusIcon } from '@craftvue/icons'

type AllDialogArgs = ComponentPropsAndSlots<typeof CDialog> & {
  'show ': []
} & Omit<DialogEmits, 'show'>

const meta = {
  title: 'Feedback/Dialog/Dialog',
  component: CDialog,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: [
        '$slots',
        'open',
        'close',
        'toggleFullscreen',
        'isFullscreen',
        'isOpen',
        'onUpdate:show',
        'onShow',
        'onHide',
        'onMaximize',
        'onMinimize',
        'onOverlayClick',
        'onEscape',
      ],
    },
  },
  args: {
    show: false,
    width: 500,
    maxHeight: '90vh',
    maxWidth: '90vw',
    fullscreen: false,
    modal: true,
    closeOnOverlayClick: true,
    closeOnEscape: true,
    lockScroll: true,
    teleportTo: 'body',
    zIndex: 3000,
    title: 'Dialog Title',
    showClose: true,
    durationEnter: 300,
    durationLeave: 300,
    animation: 'fade',
    closeIcon: 0 as any,
    'onUpdate:show': fn(),
    onShow: fn(),
    onHide: fn(),
    onMaximize: fn(),
    onMinimize: fn(),
    onOverlayClick: fn(),
    onEscape: fn(),
  },
  argTypes: {
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
    fullscreen: {
      control: 'boolean',
      description:
        'Включает возможность переключения в полноэкранный режим (показывает кнопку в header для разворачивания/сворачивания)',
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
    maximizeIcon: {
      control: false,
      description: 'Иконка компонента Vue для кнопки разворачивания в полноэкранный режим',
    },
    minimizeIcon: {
      control: false,
      description: 'Иконка компонента Vue для кнопки сворачивания из полноэкранного режима',
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
    maximize: {
      control: false,
      description: 'Событие, возникающее при разворачивании диалога в полноэкранный режим',
    },
    minimize: {
      control: false,
      description: 'Событие, возникающее при сворачивании диалога из полноэкранного режима',
    },
    overlayClick: {
      control: false,
      description: 'Событие, возникающее при клике на затемненный фон (overlay)',
    },
    escape: {
      control: false,
      description: 'Событие, возникающее при нажатии клавиши Escape',
    },
    header: {
      control: false,
      description:
        'Слот для кастомного заголовка. Получает параметры: close (закрыть), toggleFullscreen (переключить полноэкранный режим), isFullscreen (состояние), fullscreenIcon (иконка)',
    },
    default: {
      control: false,
      description: 'Слот для основного содержимого диалога',
    },
    footer: {
      control: false,
      description: 'Слот для футера диалога (отображается в нижней части)',
    },
  },
  render: (args) => ({
    components: { CDialog, CButton, CIcon },
    setup() {
      const isOpen = ref(false)
      const keyForRerender = ref(0)

      const handleClick = () => {
        isOpen.value = !isOpen.value
      }

      watch(
        () => args.show,
        (newValue) => {
          isOpen.value = newValue!
        },
      )

      watch(
        () => [args.lockScroll, args.modal],
        () => {
          keyForRerender.value++
        },
      )

      return { args, isOpen, handleClick, keyForRerender }
    },
    template: `
      <CButton
        @click="handleClick"
      >
        Show dialog
      </CButton>
      <CDialog
        v-bind="args"
        v-model:show="isOpen"
        :key="keyForRerender"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </CDialog>
    `,
  }),
} satisfies Meta<AllDialogArgs>

export default meta
type Story = StoryObj<AllDialogArgs>

export const Basic: Story = {
  args: {},
}

export const Fullscreen: Story = {
  args: {
    fullscreen: true,
  },
  argTypes: {
    fullscreen: { control: false },
  },
  render: (args) => ({
    components: { CDialog, CButton, MaximizeIcon },
    setup() {
      const isOpen = ref(false)

      const handleClick = () => {
        isOpen.value = !isOpen.value
      }

      watch(
        () => args.show,
        (newValue) => {
          isOpen.value = newValue!
        },
      )

      return { args, isOpen, handleClick }
    },
    template: `
      <CButton severity="secondary" @click="handleClick">
        Open
        <MaximizeIcon style="color: #bea87b; width: 18px;" />
      </CButton>
      <CDialog
        v-bind="args"
        v-model:show="isOpen"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </CDialog>
    `,
  }),
}

export const Animation: Story = {
  argTypes: {
    animation: { control: false },
  },
  render: (args) => ({
    components: { CDialog, CButton },
    setup() {
      const isOpen = ref(false)
      const animation = ref(args.animation)

      const handleClick = (name: typeof args.animation) => {
        animation.value = name
        isOpen.value = !isOpen.value
      }

      watch(
        () => args.show,
        (newValue) => {
          isOpen.value = newValue!
        },
      )

      return { args, animation, handleClick, isOpen }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton @click="handleClick('fade')" label="Fade" />
        <CButton @click="handleClick('zoom')" label="Zoom" severity="secondary" />
        <CButton @click="handleClick('slide')" label="Slide" severity="contrast" />
      </div>
      <CDialog
        v-bind="args"
        v-model:show="isOpen"
        :animation="animation"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </CDialog>
    `,
  }),
}

export const NonModal: Story = {
  args: {
    modal: false,
  },
  argTypes: {
    modal: { control: false },
  },
}

export const Template: Story = {
  args: {
    width: 300,
  },
  argTypes: {
    fullscreen: { control: false },
    title: { control: false },
    showClose: { control: false },
    closeIcon: { control: false },
  },
  render: (args) => ({
    components: { CDialog, CButton, CFormItem, CInput },
    setup() {
      const isOpen = ref(false)
      const email = ref('')
      const password = ref('')

      const handleClick = () => {
        isOpen.value = !isOpen.value
      }

      watch(
        () => args.show,
        (newValue) => {
          isOpen.value = newValue!
        },
      )

      return { args, isOpen, handleClick, CloseIcon, email, password }
    },
    template: `
      <CButton severity="secondary" label="Template" badge="NEW" @click="handleClick" />
      <CDialog
        v-bind="args"
        v-model:show="isOpen"
      >
        <template #header="{ close }">
          <div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
            <h3 style="font-size: 24px; font-weight: 600; color: #bea87b;">Login</h3>
            <CButton severity="secondary" :icon="CloseIcon" @click="close" rounded />
          </div>
        </template>

        <CFormItem label="Email" required style="margin-bottom: 10px;">
          <CInput v-model="email" type="email" placeholder="test@gmail.com" />
        </CFormItem>
        <CFormItem label="Password" required style="margin-bottom: 10px;">
          <CInput v-model="password" type="password" placeholder="123456" />
        </CFormItem>

        <template #footer>
          <CButton severity="secondary" @click="handleClick">Cancel</CButton>
          <CButton severity="primary" @click="handleClick">Submit</CButton>
        </template>
      </CDialog>
    `,
  }),
}

export const Size: Story = {
  args: {
    width: 300,
    maxHeight: '400px',
  },
  render: (args) => ({
    components: { CDialog, CButton },
    setup() {
      const isOpen = ref(false)

      const handleClick = () => {
        isOpen.value = !isOpen.value
      }

      watch(
        () => args.show,
        (newValue) => {
          isOpen.value = newValue!
        },
      )

      return { args, isOpen, handleClick }
    },
    template: `
      <CButton variant="outlined" label="Sizes" @click="handleClick" />
      <CDialog
        v-bind="args"
        v-model:show="isOpen"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis,
          quae impedit numquam distinctio nulla quos minus ducimus similique inventore sint,
          odit aperiam quibusdam praesentium eligendi laborum ea fugiat? Voluptatem.
        </p>
      </CDialog>
    `,
  }),
}

export const WithoutHeader: Story = {
  args: {
    title: '',
    showClose: false,
  },
}

export const CustomIcons: Story = {
  args: {
    closeIcon: 1 as any,
    fullscreen: true,
    maximizeIcon: markRaw(AddIcon),
    minimizeIcon: markRaw(MinusIcon),
  },
  argTypes: {
    closeIcon: { control: false },
    fullscreen: { control: false },
  },
  render: (args) => ({
    components: { CDialog, CButton, ErrorIcon },
    setup() {
      const isOpen = ref(false)

      const handleClick = () => {
        isOpen.value = !isOpen.value
      }

      watch(
        () => args.show,
        (newValue) => {
          isOpen.value = newValue!
        },
      )

      return { args, isOpen, handleClick }
    },
    template: `
      <CButton
        variant="outlined"
        @click="handleClick"
      >
        Custom icons
        <ErrorIcon style="color: #bea87b; width: 18px;" />
      </CButton>
      <CDialog
        v-bind="args"
        v-model:show="isOpen"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </CDialog>
    `,
  }),
}
