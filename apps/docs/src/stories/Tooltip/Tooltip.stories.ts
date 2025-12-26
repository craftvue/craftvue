/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { CButton, CIcon, CInput, CTooltip, TooltipEmits } from 'craftvue'
import { ref, useTemplateRef, watch } from 'vue'

type AllTooltipArgs = Omit<TooltipEmits, 'show' | 'content' | 'trigger'> &
  ComponentPropsAndSlots<typeof CTooltip> & {
    'show ': []
    'content ': any
    'trigger ': { isOpen: boolean; open: () => void; close: () => void }
  }

const meta = {
  title: 'Feedback/Tooltip/Tooltip',
  component: CTooltip,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['$slots', 'onHide', 'onShow'],
    },
  },
  args: {
    content: 'Tooltip content',
    show: undefined,
    rootEl: null,
    placement: 'bottom',
    align: 'center',
    trigger: 'hover',
    offset: 0,
    boundaryPadding: 5,
    zIndex: 2000,
    maxWidth: 200,
    teleportTo: 'body',
    autoHide: true,
    showDelay: 0,
    hideDelay: 0,
    durationEnter: 300,
    durationLeave: 0,
    onHide: fn(),
    onShow: fn(),
  },
  argTypes: {
    content: {
      control: 'text',
      description:
        'Текст подсказки, отображаемый в tooltip. Может быть переопределён через слот content.',
    },
    show: {
      control: false,
      description:
        'Управляет видимостью tooltip. В режиме управления извне используется для контроля состояния открытия/закрытия.',
    },
    rootEl: {
      control: false,
      description:
        'Ссылка на DOM-элемент, относительно которого позиционируется tooltip. Используется для явного указания элемента-триггера.',
    },
    placement: {
      control: 'select',
      description:
        'Позиция tooltip относительно элемента-триггера: top (сверху) | bottom (снизу, по умолчанию) | left (слева) | right (справа).',
    },
    align: {
      control: 'select',
      description:
        'Выравнивание tooltip относительно элемента-триггера: start (начало) | center (центр, по умолчанию) | end (конец).',
    },
    trigger: {
      control: 'select',
      description:
        'Способ активации tooltip: hover (при наведении, по умолчанию) | click (при клике).',
    },
    offset: {
      control: 'number',
      description:
        'Расстояние в пикселях между элементом-триггером и tooltip. По умолчанию: 0. При наличии стрелки автоматически увеличивается на размер стрелки.',
    },
    boundaryPadding: {
      control: 'number',
      description:
        'Минимальный отступ в пикселях от краёв экрана при позиционировании. Предотвращает выход tooltip за пределы видимой области. По умолчанию: 5.',
    },
    zIndex: {
      control: 'number',
      description: 'Значение z-index для tooltip. По умолчанию: 2000.',
    },
    maxWidth: {
      control: 'number',
      description:
        'Максимальная ширина tooltip в пикселях или CSS-единицах. При превышении контент переносится на новую строку. По умолчанию: 200.',
    },
    teleportTo: {
      control: 'text',
      description:
        'Селектор CSS или DOM-элемент, в который телепортируется tooltip (использует Vue Teleport). По умолчанию: "body". Установите false для отключения телепорта.',
    },
    autoHide: {
      control: 'boolean',
      description:
        'По умолчанию tooltip скрывается при уходе курсора с элемента-триггера. При установке в false подсказка остаётся видимой, когда курсор находится на tooltip. По умолчанию: true.',
    },
    showDelay: {
      control: 'number',
      description: 'Задержка в миллисекундах перед показом tooltip при наведении. По умолчанию: 0.',
    },
    hideDelay: {
      control: 'number',
      description:
        'Задержка в миллисекундах перед скрытием tooltip при уходе курсора. По умолчанию: 0.',
    },
    durationEnter: {
      control: 'number',
      description: 'Длительность анимации появления tooltip в миллисекундах. По умолчанию: 300.',
    },
    durationLeave: {
      control: 'number',
      description: 'Длительность анимации исчезновения tooltip в миллисекундах. По умолчанию: 0.',
    },
    default: {
      control: false,
      description:
        'Основной слот для элемента-триггера. Если не используется слот trigger, содержимое default становится триггером.',
    },
    'content ': {
      control: false,
      description:
        'Слот для кастомного содержимого tooltip. Позволяет отображать форматированный текст, иконки и другие элементы вместо простого текста из пропса content.',
      table: {
        category: 'slots',
        type: {
          summary: 'any',
        },
      },
    },
    'trigger ': {
      control: false,
      description:
        'Слот для кастомизации элемента-триггера. Предоставляет доступ к параметрам: isOpen (состояние открытия), open (функция открытия), close (функция закрытия).',
      table: {
        category: 'slots',
        type: {
          summary: '{ isOpen: boolean; open: () => void; close: () => void }',
        },
      },
    },
    hide: {
      control: false,
      description: 'Событие, срабатывающее при закрытии tooltip.',
    },
    'show ': {
      control: false,
      description: 'Событие, срабатывающее при открытии tooltip.',
      table: {
        category: 'events',
        type: {
          summary: '[]',
        }
      },
    },
  },
  render: (args) => ({
    components: { CTooltip, CButton },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [args.trigger],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender }
    },
    template: `
      <CTooltip v-bind="args" :key="keyForRerender">
        <CButton>Tooltip</CButton>
      </CTooltip>
    `,
  }),
} satisfies Meta<AllTooltipArgs>

export default meta
type Story = StoryObj<AllTooltipArgs>

export const Basic: Story = {
  args: {},
}

export const Placement: Story = {
  argTypes: {
    placement: { control: false },
    align: { control: false },
    trigger: { control: false },
    maxWidth: { control: false },
  },
  render: (args) => ({
    components: { CTooltip, CButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; width: 500px;">
        <div style="display: flex; justify-content: center; gap: 10px;">
          <CTooltip v-bind="args" placement="top" align="start">
            <CButton label="Top Start" />
          </CTooltip>
          <CTooltip v-bind="args" placement="top">
            <CButton label="Top" />
          </CTooltip>
          <CTooltip v-bind="args" placement="top" align="end">
            <CButton label="Top End" />
          </CTooltip>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <CTooltip v-bind="args" placement="left" align="start" max-width="80px">
            <CButton label="Left Start" />
          </CTooltip>
          <CTooltip v-bind="args" placement="right" align="start" max-width="80px">
            <CButton label="Right Start" />
          </CTooltip>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 10px 0;">
          <CTooltip v-bind="args" placement="left" max-width="80px">
            <CButton label="Left" />
          </CTooltip>
          <CTooltip v-bind="args" placement="right" max-width="80px">
            <CButton label="Right" />
          </CTooltip>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <CTooltip v-bind="args" placement="left" align="end" max-width="80px">
            <CButton label="Left End" />
          </CTooltip>
          <CTooltip v-bind="args" placement="right" align="end" max-width="80px">
            <CButton label="Right End" />
          </CTooltip>
        </div>
        <div style="display: flex; justify-content: center; gap: 10px;">
          <CTooltip v-bind="args" align="start">
            <CButton label="Bot Start" />
          </CTooltip>
          <CTooltip v-bind="args">
            <CButton label="Bottom" />
          </CTooltip>
          <CTooltip v-bind="args" align="end">
            <CButton label="Bot End" />
          </CTooltip>
        </div>
      </div>
    `,
  }),
}

export const Trigger: Story = {
  argTypes: {
    trigger: { control: false },
  },
  render: (args) => ({
    components: { CTooltip, CButton },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [args.placement, args.align, args.offset],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CTooltip v-bind="args" :key="keyForRerender">
          <CButton>Hover On Me</CButton>
        </CTooltip>
        <CTooltip v-bind="args" trigger="click" :key="keyForRerender">
          <CButton severity="secondary">Click On Me</CButton>
        </CTooltip>
      </div>
    `,
  }),
}

export const AutoHide: Story = {
  argTypes: {
    content: { control: false },
    autoHide: { control: false },
  },
  render: (args) => ({
    components: { CTooltip, CInput },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [args.trigger],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CTooltip v-bind="args" content="Enter your password" :auto-hide="false" :key="keyForRerender" >
          <CInput placeholder="Password" />
        </CTooltip>
        <CTooltip v-bind="args" content="Enter your email" :key="keyForRerender" >
          <CInput placeholder="Email"/>
        </CTooltip>
      </div>
    `,
  }),
}

export const Delay: Story = {
  args: {
    showDelay: 1000,
    hideDelay: 500,
  },
  argTypes: {
    showDelay: { control: false },
    hideDelay: { control: false },
  },
}

export const Template: Story = {
  args: {
    maxWidth: 250,
  },
  argTypes: {
    content: { control: false },
  },
  render: (args) => ({
    components: { CTooltip, CButton, CIcon },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [args.trigger],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender }
    },
    template: `
      <CTooltip v-bind="args" :key="keyForRerender" >
        <template #content>
          <div style="display: flex; gap: 10px; align-items: center;">
            <CIcon name="envelope" color="#B59A6A" size="20" />
            <span>craftvue151@gmail.com</span>
          </div>
        </template>
        <CButton>Custom Template</CButton>
      </CTooltip>
    `,
  }),
}

export const TriggerSlot: Story = {
  args: {
    trigger: 'click',
  },
  argTypes: {
    showDelay: { control: false },
    hideDelay: { control: false },
  },
  render: (args) => ({
    components: { CTooltip, CButton, CIcon },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [args.trigger],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender }
    },
    template: `
      <CTooltip v-bind="args" :key="keyForRerender">
        <template #trigger="{ isOpen }">
          <CButton severity="secondary">
            <span>Trigger Slot</span>
            <CIcon :name="isOpen ? 'uparrow' : 'downarrow'" color="#B59A6A" size="16" />
          </CButton>
        </template>
      </CTooltip>
    `,
  }),
}

export const Controlled: Story = {
  args: {
    content: 'Enter your password',
  },
  argTypes: {
    trigger: { control: false },
  },
  render: (args) => ({
    components: { CTooltip, CButton, CInput },
    setup() {
      const isOpen = ref(false)
      const keyForRerender = ref(0)

      const open = () => (isOpen.value = true)
      const close = () => (isOpen.value = false)

      watch(
        () => [args.offset, args.placement, args.align],
        () => {
          keyForRerender.value++
        },
      )

      return { args, isOpen, open, close, keyForRerender }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton @click="isOpen = !isOpen">Toggle Tooltip</CButton>
        <CTooltip
          v-bind="args"
          :show="isOpen"
          @hide="close"
          @show="open"
          :key="keyForRerender"
        >
          <CInput placeholder="Password" />
        </CTooltip>
      </div>
    `,
  }),
}

export const RootEl: Story = {
  render: (args) => ({
    components: { CTooltip, CButton },
    setup() {
      const rootElRef = useTemplateRef('rootElRef')
      const keyForRerender = ref(0)

      watch(
        () => [args.trigger],
        () => {
          keyForRerender.value++
        },
      )

      return { args, rootElRef, keyForRerender }
    },
    template: `
      <CButton ref="rootElRef">Root El</CButton>
      <CTooltip v-bind="args" :root-el="rootElRef?.$el" :key="keyForRerender" />
    `,
  }),
}
