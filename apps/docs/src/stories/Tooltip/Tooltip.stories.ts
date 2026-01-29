/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ComponentPropsAndSlots,
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
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
        'Tooltip text displayed inside tooltip. Can be overridden via `content` slot',
    },
    show: {
      control: false,
      description:
        'Controls tooltip visibility. In controlled mode used to manage open/close state',
    },
    rootEl: {
      control: false,
      description:
        'DOM element reference relative to which tooltip is positioned. Used to explicitly define trigger element',
    },
    placement: {
      control: 'select',
      description:
        'Tooltip position relative to trigger element: top, bottom (default), left, right',
    },
    align: {
      control: 'select',
      description:
        'Tooltip alignment relative to trigger element: start, center (default), end',
    },
    trigger: {
      control: 'select',
      description: 'Tooltip activation mode: hover (default) or click',
    },
    offset: {
      control: 'number',
      description:
        'Distance in pixels between trigger element and tooltip. Default is 0. When arrow is present, distance is automatically increased by arrow size',
    },
    boundaryPadding: {
      control: 'number',
      description:
        'Minimum padding in pixels from screen edges when positioning tooltip to prevent overflow. Default is 5',
    },
    zIndex: {
      control: 'number',
      description: 'Z-index value for tooltip. Default is 2000',
    },
    maxWidth: {
      control: 'number',
      description:
        'Maximum tooltip width in pixels or CSS units. If exceeded, content wraps to next line. Default is 200',
    },
    teleportTo: {
      control: 'text',
      description:
        'CSS selector or DOM element where tooltip is teleported (Vue Teleport). Default is "body". Set to false to disable teleport',
    },
    autoHide: {
      control: 'boolean',
      description:
        'By default tooltip hides when cursor leaves trigger. When false, tooltip stays visible while cursor is over it. Default is true',
    },
    showDelay: {
      control: 'number',
      description:
        'Delay in milliseconds before showing tooltip on hover. Default is 0',
    },
    hideDelay: {
      control: 'number',
      description:
        'Delay in milliseconds before hiding tooltip when cursor leaves. Default is 0',
    },
    durationEnter: {
      control: 'number',
      description:
        'Duration of tooltip appearance animation in milliseconds. Default is 300',
    },
    durationLeave: {
      control: 'number',
      description:
        'Duration of tooltip disappearance animation in milliseconds. Default is 0',
    },
    default: {
      control: false,
      description:
        'Main slot for trigger element. If `trigger` slot is not used, default content becomes trigger',
    },
    'content ': {
      control: false,
      description:
        'Slot for custom tooltip content. Allows displaying formatted text, icons and other elements instead of plain `content` text',
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
        'Slot to customize trigger element. Provides: isOpen (open state), open (open function), close (close function)',
      table: {
        category: 'slots',
        type: {
          summary: '{ isOpen: boolean; open: () => void; close: () => void }',
        },
      },
    },
    hide: {
      control: false,
      description: 'Event fired when tooltip is hidden',
    },
    'show ': {
      control: false,
      description: 'Event fired when tooltip is shown',
      table: {
        category: 'events',
        type: {
          summary: '[]',
        },
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
