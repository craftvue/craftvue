/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ComponentPropsAndSlots,
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
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
      description: 'Confirmation message text displayed in popup',
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
      description: 'Vue component icon displayed next to message',
    },
    iconColor: {
      control: 'color',
      description: 'Icon color (CSS color in any format)',
    },
    confirmText: {
      control: 'text',
      description: 'Text on confirm button',
    },
    cancelText: {
      control: 'text',
      description: 'Text on cancel button',
    },
    show: {
      control: false,
      description: 'Controls popup visibility',
    },
    rootEl: {
      control: false,
      description:
        'Element relative to which popup is positioned (HTMLElement or Vue component)',
    },
    placement: {
      control: 'select',
      description:
        'Popup position relative to element: bottom, top, left, right',
    },
    align: {
      control: 'select',
      description: 'Popup alignment: start, center, end',
    },
    trigger: {
      control: 'select',
      description: 'Popup opening method: click or hover',
    },
    offset: {
      control: 'number',
      description: 'Spacing in pixels between trigger element and popup',
    },
    sameWidth: {
      control: 'boolean',
      description: 'Set popup width equal to trigger element width',
    },
    boundaryPadding: {
      control: 'number',
      description: 'Padding in pixels from viewport bounds to prevent overflow',
    },
    zIndex: {
      control: 'number',
      description: 'Z-index for popup (used to control stacking order)',
    },
    maxHeight: {
      control: 'number',
      description:
        'Maximum popup height in pixels (number) or string with units',
    },
    maxWidth: {
      control: 'number',
      description:
        'Maximum popup width in pixels (number) or string with units',
    },
    teleportTo: {
      control: 'text',
      description:
        'Selector or element to which popup is teleported (default "body", false - no teleport)',
    },
    restoreFocus: {
      control: 'boolean',
      description: 'Restore focus to trigger element after popup closes',
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
        'Delay in milliseconds before showing popup (for trigger="hover")',
    },
    hideDelay: {
      control: 'number',
      description:
        'Delay in milliseconds before hiding popup (for trigger="hover")',
    },
    durationEnter: {
      control: 'number',
      description: 'Duration of appearance animation in milliseconds',
    },
    durationLeave: {
      control: 'number',
      description: 'Duration of disappearance animation in milliseconds',
    },
    confirmSeverity: {
      control: 'select',
      description: 'Confirm button color palette: primary, secondary, contrast',
    },
    cancelSeverity: {
      control: 'select',
      description: 'Cancel button color palette: primary, secondary, contrast',
    },
    confirmVariant: {
      control: 'select',
      description: 'Confirm button style variant: filled, outlined, text',
    },
    cancelVariant: {
      control: 'select',
      description: 'Cancel button style variant: filled, outlined, text',
    },
    confirm: {
      control: false,
      description: 'Event fired when confirm button is clicked',
    },
    cancel: {
      control: false,
      description: 'Event fired when cancel button is clicked',
    },
    hide: {
      control: false,
      description: 'Event fired when popup is hidden',
    },
    'show ': {
      control: false,
      description: 'Event fired when popup is shown',
      table: {
        category: 'events',
        type: {
          summary: '[]',
        },
      },
    },
    default: {
      control: false,
      description: 'Slot for custom popup content (instead of message)',
    },
    actions: {
      control: false,
      description:
        'Slot for custom action buttons. Receives parameters: confirm (confirm function), cancel (cancel function)',
    },
    'trigger ': {
      control: false,
      description:
        'Slot for custom trigger element. Receives parameters: isOpen (state), open (open), close (close)',
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
        CheckIcon,
        InfoIcon,
        ErrorIcon,
        WarningIcon,
        keyForRerender,
      }
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
