import type {
  ComponentPropsAndSlots,
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import {
  CBadge,
  CButton,
  CCheckbox,
  CFormItem,
  CIcon,
  CInput,
  CPopover,
  CRadio,
  CRadioGroup,
  PopoverEmits,
} from 'craftvue'
import { ref, useTemplateRef, watch } from 'vue'
import {
  CloseIcon,
  NextArrowIcon,
  PrevArrowIcon,
  UpArrowIcon,
  DownArrowIcon,
  InfoIcon,
} from '@craftvue/icons'

type AllPopoverArgs = Omit<PopoverEmits, 'show'> &
  ComponentPropsAndSlots<typeof CPopover> & {
    'show ': []
    'trigger ': { isOpen: boolean; open: () => void; close: () => void }
  }

const meta = {
  title: 'Feedback/Popover/Popover',
  component: CPopover,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['$slots', 'onShow', 'onHide'],
    },
  },
  args: {
    title: '',
    show: false,
    rootEl: null,
    placement: 'bottom',
    align: 'start',
    trigger: 'click',
    offset: 5,
    sameWidth: false,
    boundaryPadding: 5,
    zIndex: 2000,
    maxHeight: 500,
    maxWidth: 500,
    teleportTo: 'body',
    restoreFocus: false,
    animation: 'zoom',
    arrow: true,
    showDelay: 0,
    hideDelay: 0,
    durationEnter: 300,
    durationLeave: 300,
    onHide: fn(),
    onShow: fn(),
    header: false,
    footer: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Popover title displayed at the top',
    },
    show: {
      control: 'boolean',
      description: 'Controls popover visibility',
    },
    rootEl: {
      control: false,
      description:
        'Element relative to which popover is positioned (HTMLElement or Vue component)',
    },
    placement: {
      control: 'select',
      description:
        'Popover position relative to element: bottom, top, left, right',
    },
    align: {
      control: 'select',
      description: 'Popover alignment: start, center, end',
    },
    trigger: {
      control: 'select',
      description: 'Popover opening method: click or hover',
    },
    offset: {
      control: 'number',
      description: 'Spacing in pixels between element and popover',
    },
    sameWidth: {
      control: 'boolean',
      description: 'Set popover width equal to trigger element width',
    },
    boundaryPadding: {
      control: 'number',
      description:
        'Padding in pixels from viewport bounds to prevent popover from going off screen',
    },
    zIndex: {
      control: 'number',
      description: 'Z-index for popover (used to control stacking order)',
    },
    maxHeight: {
      control: 'number',
      description:
        'Maximum popover height in pixels (number) or string with units',
    },
    maxWidth: {
      control: 'number',
      description:
        'Maximum popover width in pixels (number) or string with units',
    },
    teleportTo: {
      control: 'text',
      description:
        'Selector or element to which popover is teleported (default "body", false - no teleport)',
    },
    restoreFocus: {
      control: 'boolean',
      description: 'Restore focus to trigger element after popover closes',
    },
    animation: {
      control: 'select',
      description:
        'Type of appearance/disappearance animation: zoom or opacity',
    },
    arrow: {
      control: 'boolean',
      description: 'Show arrow pointing to trigger element',
    },
    showDelay: {
      control: 'number',
      description:
        'Delay in milliseconds before showing popover (for trigger="hover")',
    },
    hideDelay: {
      control: 'number',
      description:
        'Delay in milliseconds before hiding popover (for trigger="hover")',
    },
    durationEnter: {
      control: 'number',
      description: 'Duration of appearance animation in milliseconds',
    },
    durationLeave: {
      control: 'number',
      description: 'Duration of disappearance animation in milliseconds',
    },
    hide: {
      control: false,
      description: 'Event fired when popover is hidden',
    },
    'show ': {
      control: false,
      description: 'Event fired when popover is shown',
      table: {
        category: 'events',
        type: {
          summary: '[]',
        },
      },
    },
    default: {
      control: false,
      description: 'Slot for main popover content',
    },
    header: {
      control: 'boolean',
      description: 'Slot for popover header (displayed at the top)',
    },
    footer: {
      control: 'boolean',
      description: 'Slot for popover footer (displayed at the bottom)',
    },
    'trigger ': {
      control: false,
      description:
        'Slot for custom trigger element. Receives: isOpen (state), open (open), close (close)',
      table: {
        category: 'slots',
        type: {
          summary: '{ isOpen: boolean; open: () => void; close: () => void }',
        },
      },
    },
  },
  render: (args) => ({
    components: {
      CPopover,
      CButton,
      CInput,
      CIcon,
      CRadio,
      CRadioGroup,
      CFormItem,
      CCheckbox,
    },
    setup() {
      const show = ref(false)
      const rootElRef = useTemplateRef('rootElRef')
      const email = ref('')
      const password = ref('')
      const rememder = ref(false)
      const keyForRerender = ref(0)

      watch(
        () => args.show,
        (newValue) => {
          show.value = newValue!
        },
      )

      watch(
        () => [
          args.placement,
          args.align,
          args.trigger,
          args.offset,
          args.arrow,
        ],
        () => {
          keyForRerender.value++
        },
      )

      const close = () => (show.value = false)
      const open = () => (show.value = true)

      return {
        args,
        show,
        rootElRef,
        close,
        open,
        email,
        password,
        rememder,
        CloseIcon,
        keyForRerender,
      }
    },
    template: `
      <CButton ref="rootElRef" label="Click to Open Popover" />
      <CPopover
        v-bind="args"
        :show="show"
        :root-el="rootElRef?.$el"
        @hide="close"
        @show="open"
        :key="keyForRerender"
      >
        <template #header v-if="args.header">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="font-size: 24px; font-weight: 600;">
              Login
            </h3>
            <CButton
              severity="secondary"
              variant="text"
              rounded
              :icon="CloseIcon"
              @click="close"
            />
          </div>
        </template>

        <CFormItem label="Email" required style="margin-bottom: 10px;">
          <CInput v-model="email" type="email" placeholder="test@gmail.com" />
        </CFormItem>
        <CFormItem label="Password" required style="margin-bottom: 10px;">
          <CInput v-model="password" type="password" placeholder="123456" />
        </CFormItem>
        <CCheckbox v-model="rememder" label="Remember me" />
        <CButton style="width: 100%; margin-top: 10px;">Submit</CButton>

        <template #footer v-if="args.footer">
          <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
            <CButton
              severity="secondary"
              size="sm"
              @click="close"
            >
              Cancel
            </CButton>
            <CButton size="sm" @click="close">Next</CButton>
          </div>
        </template>
      </CPopover>
    `,
  }),
} satisfies Meta<AllPopoverArgs>

export default meta
type Story = StoryObj<AllPopoverArgs>

export const Basic: Story = {
  args: {},
}

export const Placement: Story = {
  args: {
    show: undefined,
  },
  argTypes: {
    title: { control: false },
    show: { control: false },
    placement: { control: false },
    restoreFocus: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: { CPopover, CButton },
    setup() {
      const rootElRef1 = useTemplateRef('rootElRef1')
      const rootElRef2 = useTemplateRef('rootElRef2')
      const rootElRef3 = useTemplateRef('rootElRef3')
      const rootElRef4 = useTemplateRef('rootElRef4')
      const keyForRerender = ref(0)

      watch(
        () => [
          args.align,
          args.trigger,
          args.offset,
          args.boundaryPadding,
          args.arrow,
        ],
        () => {
          keyForRerender.value++
        },
      )

      return {
        args,
        NextArrowIcon,
        PrevArrowIcon,
        UpArrowIcon,
        DownArrowIcon,
        rootElRef1,
        rootElRef2,
        rootElRef3,
        rootElRef4,
        keyForRerender,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center;">
        <CButton ref="rootElRef1" :icon="UpArrowIcon" rounded />
        <div style="width: 200px; display: flex; justify-content: space-between; padding: 30px 0;">
          <CButton ref="rootElRef2" :icon="PrevArrowIcon" rounded />
          <CButton ref="rootElRef3" :icon="NextArrowIcon" rounded />
        </div>
        <CButton ref="rootElRef4" :icon="DownArrowIcon" rounded />
      </div>
      <CPopover
        v-bind="args"
        :root-el="rootElRef1?.$el"
        title="Top"
        placement="top"
        :key="keyForRerender"
      >
        <span>Popover on top</span>
      </CPopover>
      <CPopover
        v-bind="args"
        :root-el="rootElRef2?.$el"
        title="Left"
        placement="left"
        :key="keyForRerender"
      >
        <span>Popover on left</span>
      </CPopover>
      <CPopover
        v-bind="args"
        :root-el="rootElRef3?.$el"
        title="Right"
        placement="right"
        :key="keyForRerender"
      >
        <span>Popover on right</span>
      </CPopover>
      <CPopover
        v-bind="args"
        :root-el="rootElRef4?.$el"
        title="Bottom"
        :key="keyForRerender"
      >
        <span>Popover on bottom</span>
      </CPopover>
    `,
  }),
}

export const Trigger: Story = {
  args: {
    show: undefined,
  },
  argTypes: {
    title: { control: false },
    show: { control: false },
    trigger: { control: false },
    restoreFocus: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: {
      CPopover,
      CBadge,
      CIcon,
    },
    setup() {
      const rootElRefHover = useTemplateRef('rootElRefHover')
      const rootElRefClick = useTemplateRef('rootElRefClick')
      const keyForRerender = ref(0)

      watch(
        () => [args.placement, args.align, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      return {
        args,
        rootElRefHover,
        rootElRefClick,
        keyForRerender,
      }
    },
    template: `
      <div style="display: flex; gap: 50px;">
        <CBadge ref="rootElRefHover" value="HOVER">
          <CIcon name="envelope" size="40" />
        </CBadge>
        <CBadge ref="rootElRefClick" value="CLICK">
          <CIcon name="delete" size="40" />
        </CBadge>
      </div>

      <CPopover
        v-bind="args"
        :root-el="rootElRefHover?.$el"
        :key="keyForRerender"
        trigger="hover"
        title="Hover"
      >
        <span>Opens when you hover over the button</span>
      </CPopover>
      <CPopover
        v-bind="args"
        :root-el="rootElRefClick?.$el"
        :key="keyForRerender"
        title="Click"
      >
        <span>Opens when you click the button</span>
      </CPopover>
    `,
  }),
}

export const Arrow: Story = {
  args: {
    show: undefined,
  },
  argTypes: {
    arrow: { control: false },
    show: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: {
      CPopover,
      CButton,
      CInput,
      CRadioGroup,
      CRadio,
    },
    setup() {
      const rootElRef1 = useTemplateRef('rootElRef1')
      const rootElRef2 = useTemplateRef('rootElRef2')
      const choice1 = ref('arrow')
      const choice2 = ref('withoutArrow')
      const keyForRerender = ref(0)

      watch(
        () => [args.placement, args.align, args.trigger, args.offset],
        () => {
          keyForRerender.value++
        },
      )

      return {
        args,
        rootElRef1,
        rootElRef2,
        keyForRerender,
        choice1,
        choice2,
      }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton ref="rootElRef1" label="With arrow" />
        <CButton ref="rootElRef2" label="Without arrow" severity="secondary" />
      </div>
      <CPopover
        v-bind="args"
        :root-el="rootElRef1?.$el"
        :key="keyForRerender"
      >
        <CRadioGroup v-model="choice1">
          <CRadio label="Popover with arrow" value="arrow" />
          <CRadio label="Popover without arrow" value="withoutArrow" />
        </CRadioGroup>
        <CButton style="width: 100%; margin-top: 10px;">Submit</CButton>
      </CPopover>
      <CPopover
        v-bind="args"
        :root-el="rootElRef2?.$el"
        :key="keyForRerender"
        :arrow="false"
      >
        <CRadioGroup v-model="choice2">
          <CRadio label="Popover with arrow" value="arrow" />
          <CRadio label="Popover without arrow" value="withoutArrow" />
        </CRadioGroup>
        <CButton style="width: 100%; margin-top: 10px;">Submit</CButton>
      </CPopover>
    `,
  }),
}

export const TriggerSlot: Story = {
  args: {
    show: undefined,
    maxWidth: 300,
  },
  argTypes: {
    show: { control: false },
    restoreFocus: { control: false },
    header: { control: false },
    footer: { control: false },
  },
  render: (args) => ({
    components: {
      CPopover,
      CButton,
      CInput,
    },
    setup() {
      const keyForRerender = ref(0)

      watch(
        () => [
          args.placement,
          args.align,
          args.trigger,
          args.offset,
          args.arrow,
        ],
        () => {
          keyForRerender.value++
        },
      )

      return {
        args,
        keyForRerender,
        UpArrowIcon,
        DownArrowIcon,
        InfoIcon,
      }
    },
    template: `
      <CPopover
        v-bind="args"
        :key="keyForRerender"
      >
        <template #trigger="{ isOpen, open, close }">
          <div @click.stop>
            <CInput
              placeholder="Enter text..."
              style="--c-border-radius: 9999px;"
            >
              <template #suffix>
                <CButton
                  @click="isOpen ? close() : open()"
                  :icon="InfoIcon"
                  rounded
                  size="sm"
                  severity="secondary"
                  style="margin-right: -4px;"
                />
              </template>
            </CInput>
          </div>
        </template>

        <div>
          <h4 style="margin: 0 0 4px; font-weight: 600; color: var(--c-prime-color);">
            What can you type here?
          </h4>
          <p style="margin: 0 0 8px; font-size: 12px; color: var(--c-text-secondary);">
            Describe what you need help with in one short sentence.
          </p>
          <div style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--c-prime-color);">
            Examples
          </div>
          <ul style="padding-left: 10px; font-size: 12px; color: var(--c-text-secondary);">
            <li><strong>Project name ideas</strong> for a task management app</li>
            <li><strong>Short description</strong> for a pricing card subtitle</li>
            <li><strong>Tooltip text</strong> explaining an advanced setting</li>
          </ul>
        </div>
      </CPopover>
    `,
  }),
}

export const Template: Story = {
  args: {
    header: true,
    footer: true,
  },
  argTypes: {
    title: { control: false },
    header: { control: false },
    footer: { control: false },
  },
}
