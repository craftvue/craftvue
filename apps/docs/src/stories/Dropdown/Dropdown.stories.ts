/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ComponentPropsAndSlots,
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { CButton, CDropdown, CInput, DropdownEmits } from 'craftvue'
import { ref, useTemplateRef, watch } from 'vue'

type AllDropdownArgs = Omit<DropdownEmits, 'show'> &
  ComponentPropsAndSlots<typeof CDropdown> & { 'show ': any }

const meta = {
  title: 'Navigation/Dropdown/Dropdown',
  component: CDropdown,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['onShow', 'onHide', '$slots'],
    },
  },
  args: {
    show: false,
    rootEl: null,
    placement: 'bottom',
    align: 'start',
    sameWidth: false,
    offset: 5,
    boundaryPadding: 5,
    zIndex: 1000,
    maxHeight: 500,
    maxWidth: 500,
    teleportTo: 'body',
    restoreFocus: false,
    animation: 'opacity',
    arrow: false,
    onHide: fn(),
    onShow: fn(),
    header: false,
    footer: false,
  },
  argTypes: {
    show: {
      control: 'boolean',
      description:
        'Controls dropdown menu visibility. In external control mode used to control open/close state',
    },
    rootEl: {
      control: false,
      description:
        'Reference to DOM element relative to which dropdown menu is positioned. Required for component to work',
    },
    placement: {
      control: 'select',
      description:
        'Dropdown menu position relative to trigger element: top | bottom (default)',
    },
    align: {
      control: 'select',
      description:
        'Dropdown menu alignment relative to trigger element: start | center | end. Default: start',
    },
    sameWidth: {
      control: 'boolean',
      description:
        'Automatically sets dropdown menu width equal to trigger element width',
    },
    offset: {
      control: 'number',
      description:
        'Distance in pixels between trigger element and dropdown menu. Default: 5. Automatically increases by arrow size if arrow is present',
    },
    boundaryPadding: {
      control: 'number',
      description:
        'Minimum padding in pixels from screen edges when positioning. Prevents menu from going outside visible area. Default: 5',
    },
    zIndex: {
      control: 'number',
      description: 'z-index value for dropdown menu. Default: 1000',
    },
    maxHeight: {
      control: 'number',
      description:
        'Maximum height of dropdown menu in pixels or CSS units. Scroll appears when exceeded',
    },
    maxWidth: {
      control: 'number',
      description:
        'Maximum width of dropdown menu in pixels or CSS units. Content wraps to new line when exceeded',
    },
    teleportTo: {
      control: 'text',
      description:
        'CSS selector or DOM element to which dropdown menu is teleported (uses Vue Teleport). Default: "body". Set false to disable teleport',
    },
    restoreFocus: {
      control: 'boolean',
      description:
        'Restore focus on trigger element after closing dropdown menu',
    },
    animation: {
      control: 'select',
      description:
        'Type of appearance and disappearance animation: zoom (scaling) | opacity (opacity change, default)',
    },
    arrow: {
      control: 'boolean',
      description:
        'Show pointer arrow directed at trigger element. Automatically increases offset by arrow size',
    },
    hide: {
      control: false,
      description: 'Event fired when dropdown menu closes',
    },
    'show ': {
      control: false,
      description: 'Event fired when dropdown menu opens',
      table: {
        category: 'events',
        type: {
          summary: '[]',
        },
      },
    },
    header: {
      control: 'boolean',
      description: 'Header slot in dropdown menu',
    },
    footer: {
      control: 'boolean',
      description: 'Footer slot in dropdown menu',
    },
    default: {
      control: false,
      description:
        'Main content of dropdown menu. Displayed between header and footer if they are set',
    },
  },
  render: (args) => ({
    components: { CDropdown, CButton, CInput },
    setup() {
      const show = ref(false)
      const input = ref('')
      const rootElRef = useTemplateRef('rootElRef')
      const keyForRerender = ref(0)

      const close = () => (show.value = false)
      const open = () => (show.value = true)

      watch(
        () => args.show,
        () => {
          show.value = args.show!
        },
      )

      watch(
        () => [
          args.placement,
          args.align,
          args.sameWidth,
          args.offset,
          args.arrow,
        ],
        () => {
          keyForRerender.value++
        },
      )

      return { args, show, rootElRef, close, open, input, keyForRerender }
    },
    template: `
      <CButton ref="rootElRef">List of available countries</CButton>
      <CDropdown
        v-bind="args"
        :show="show"
        :root-el="rootElRef?.$el"
        @hide="close"
        @show="open"
        :key="keyForRerender"
      >
        <template #header v-if="args.header">
          <div style="padding: 7px 7px 0;">
            <CInput v-model="input"/>
          </div>
        </template>
        <ul style="display: flex; flex-direction: column; padding: 4px;">
          <li style="padding: 7px 10px;">Russia</li>
          <li style="padding: 7px 10px;">USA</li>
          <li style="padding: 7px 10px;">Ukraine</li>
          <li style="padding: 7px 10px;">United Kingdom</li>
        </ul>
        <template #footer v-if="args.footer">
          <div style="padding: 0 7px 7px;">
            <CButton size="sm" style="width: 100%;">Add</CButton>
          </div>
        </template>
      </CDropdown>
    `,
  }),
} satisfies Meta<AllDropdownArgs>

export default meta
type Story = StoryObj<AllDropdownArgs>

export const Basic: Story = {
  args: {},
}

export const Placement: Story = {
  args: {
    show: undefined,
    maxWidth: 200,
  },
  argTypes: {
    show: { control: false },
    placement: { control: false },
    align: { control: false },
    restoreFocus: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: { CDropdown, CButton },
    setup() {
      const rootElRef1 = useTemplateRef('rootElRef1')
      const rootElRef2 = useTemplateRef('rootElRef2')
      const rootElRef3 = useTemplateRef('rootElRef3')
      const rootElRef4 = useTemplateRef('rootElRef4')
      const rootElRef5 = useTemplateRef('rootElRef5')
      const rootElRef6 = useTemplateRef('rootElRef6')
      const keyForRerender = ref(0)

      watch(
        () => [args.sameWidth, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      return {
        args,
        rootElRef1,
        rootElRef2,
        rootElRef3,
        rootElRef4,
        rootElRef5,
        rootElRef6,
        keyForRerender,
      }
    },
    template: `
      <div style="display: flex; gap: 15px;">
        <CButton ref="rootElRef1">topStart</CButton>
        <CButton ref="rootElRef2">top</CButton>
        <CButton ref="rootElRef3">topEnd</CButton>
        <CButton ref="rootElRef4" severity="secondary">bottomStart</CButton>
        <CButton ref="rootElRef5" severity="secondary">bottom</CButton>
        <CButton ref="rootElRef6" severity="secondary">bottomEnd</CButton>
      </div>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef1?.$el"
        placement="top"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown content positioned above the trigger element.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        placement="top"
        align="center"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown content positioned above the trigger element.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef3?.$el"
        placement="top"
        align="end"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown content positioned above the trigger element.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef4?.$el"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown content positioned below the trigger element.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef5?.$el"
        align="center"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown content positioned below the trigger element.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef6?.$el"
        align="end"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown content positioned below the trigger element.</div>
      </CDropdown>
    `,
  }),
}

export const SameWidth: Story = {
  args: {
    sameWidth: true,
  },
  argTypes: {
    sameWidth: { control: false },
  },
}

export const Arrow: Story = {
  args: {
    arrow: true,
  },
  argTypes: {
    arrow: { control: false },
  },
}

export const Animation: Story = {
  args: {
    show: undefined,
    maxWidth: 200,
  },
  argTypes: {
    show: { control: false },
    animation: { control: false },
    restoreFocus: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: { CDropdown, CButton },
    setup() {
      const rootElRef1 = useTemplateRef('rootElRef1')
      const rootElRef2 = useTemplateRef('rootElRef2')
      const keyForRerender = ref(0)

      watch(
        () => [
          args.placement,
          args.align,
          args.sameWidth,
          args.offset,
          args.arrow,
        ],
        () => {
          keyForRerender.value++
        },
      )

      return {
        args,
        rootElRef1,
        rootElRef2,
        keyForRerender,
      }
    },
    template: `
      <div style="display: flex; gap: 15px;">
        <CButton ref="rootElRef1" variant="outlined">Opacity</CButton>
        <CButton ref="rootElRef2">Zoom</CButton>
      </div>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef1?.$el"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown content with 'opacity' animation.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        animation="zoom"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown content with 'zoom' animation.</div>
      </CDropdown>
    `,
  }),
}

export const Template: Story = {
  args: {
    header: true,
    footer: true,
  },
  argTypes: {
    header: { control: false },
    footer: { control: false },
  },
}

export const MaxSize: Story = {
  args: {
    show: undefined,
  },
  argTypes: {
    show: { control: false },
    maxHeight: { control: false },
    maxWidth: { control: false },
    restoreFocus: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: { CDropdown, CButton },
    setup() {
      const rootElRef1 = useTemplateRef('rootElRef1')
      const rootElRef2 = useTemplateRef('rootElRef2')
      const keyForRerender = ref(0)

      watch(
        () => [
          args.placement,
          args.align,
          args.sameWidth,
          args.offset,
          args.arrow,
        ],
        () => {
          keyForRerender.value++
        },
      )

      return {
        args,
        rootElRef1,
        rootElRef2,
        keyForRerender,
      }
    },
    template: `
      <div style="display: flex; gap: 15px;">
        <CButton ref="rootElRef1">Height limit</CButton>
        <CButton ref="rootElRef2" severity="secondary">Width limit</CButton>
      </div>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef1?.$el"
        :max-height="150"
        :key="keyForRerender"
      >
        <ul style="display: flex; flex-direction: column; padding: 4px;">
          <li style="padding: 7px 10px;">Russia</li>
          <li style="padding: 7px 10px;">USA</li>
          <li style="padding: 7px 10px;">Ukraine</li>
          <li style="padding: 7px 10px;">United Kingdom</li>
          <li style="padding: 7px 10px;">Germany</li>
          <li style="padding: 7px 10px;">France</li>
          <li style="padding: 7px 10px;">Italy</li>
        </ul>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        :max-width="150"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">
          This is a very long text that will be limited by width and wrapped to a new line if necessary.
        </div>
      </CDropdown>
    `,
  }),
}

export const BoundaryPadding: Story = {
  args: {
    show: undefined,
    boundaryPadding: 10,
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: () => ({
    template: '<div style="height: 110px;"> <story/></div>',
  }),
  argTypes: {
    show: { control: false },
    boundaryPadding: { control: false },
    placement: { control: false },
    restoreFocus: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: { CDropdown, CButton },
    setup() {
      const rootElRef1 = useTemplateRef('rootElRef1')
      const rootElRef2 = useTemplateRef('rootElRef2')
      const keyForRerender = ref(0)

      watch(
        () => [args.align, args.sameWidth, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      return { args, rootElRef1, rootElRef2, keyForRerender }
    },
    template: `
      <div style="position: fixed; top: 40px; left: 20px;">
        <CButton ref="rootElRef1">Edge padding 5px</CButton>
      </div>
      <div style="position: fixed; top: 40px; right: 20px;">
        <CButton ref="rootElRef2">Edge padding 15px</CButton>
      </div>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef1?.$el"
        :key="keyForRerender"
        placement="top"
        :boundaryPadding="5"
      >
        <div style="padding: 2px 7px;">Dropdown with boundaryPadding 5px.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        :key="keyForRerender"
        placement="top"
        :boundaryPadding="15"
      >
        <div style="padding: 2px 7px;">Dropdown with boundaryPadding 15px.</div>
      </CDropdown>
    `,
  }),
}

export const Offset: Story = {
  args: {
    show: undefined,
    maxWidth: 200,
  },
  argTypes: {
    show: { control: false },
    offset: { control: false },
    restoreFocus: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: { CDropdown, CButton },
    setup() {
      const rootElRef1 = useTemplateRef('rootElRef1')
      const rootElRef2 = useTemplateRef('rootElRef2')
      const rootElRef3 = useTemplateRef('rootElRef3')
      const keyForRerender = ref(0)

      watch(
        () => [
          args.placement,
          args.align,
          args.sameWidth,
          args.offset,
          args.arrow,
        ],
        () => {
          keyForRerender.value++
        },
      )

      return { args, rootElRef1, rootElRef2, rootElRef3, keyForRerender }
    },
    template: `
      <div style="display: flex; gap: 15px; flex-direction: column; align-items: center;">
        <CButton ref="rootElRef1">Offset: 5px (default)</CButton>
        <CButton ref="rootElRef2">Offset: 15px</CButton>
        <CButton ref="rootElRef3">Offset: 30px</CButton>
      </div>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef1?.$el"
        :offset="5"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown with 5px offset from trigger.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        :offset="15"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown with 15px offset from trigger.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef3?.$el"
        :offset="30"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown with 30px offset from trigger.</div>
      </CDropdown>
    `,
  }),
}
