/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CBadge, CButton, CIcon } from 'craftvue'
import DeleteIcon from '@craftvue/icons/delete'
import { ref, watch } from 'vue'

const meta = {
  title: 'Data/Badge/Badge',
  component: CBadge,
  args: {
    value: '5',
    size: 1 as any,
    severity: 'primary',
    location: 'top-right',
    bordered: false,
    max: undefined,
    content: false,
    default: false,
  },
  parameters: {
    controls: {
      exclude: ['$slots'],
    },
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Badge value. Can be string or number',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Small', 1: 'Normal', 2: 'Large' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description: 'Badge size. Affects font size and padding',
    },
    severity: {
      control: 'select',
      description: 'Badge color scheme. Determines main color and style',
    },
    location: {
      control: 'select',
      description:
        'Badge position relative to parent element. Used only when there is content in default slot',
    },
    bordered: {
      control: 'boolean',
      description: 'Adds border around badge for better visibility',
    },
    max: {
      control: 'number',
      description:
        'Maximum value for numeric badges. If value exceeds max, displayed as "max+"',
    },
    content: {
      control: 'boolean',
      description:
        'Shows custom content in content slot instead of standard value',
    },
    default: {
      control: 'boolean',
      description:
        'Shows content in default slot (e.g., button), relative to which badge is positioned',
    },
  },
  render: (args) => ({
    components: { CBadge, CButton, CIcon },

    setup() {
      const key = ref(0)

      // rerender
      watch(
        () => [args.content, args.default],
        () => {
          key.value++
        },
      )

      return { args, key }
    },
    template: `
      <CBadge :key="key" v-bind="args">
        <template #content v-if="args.content">
          <div style="display: flex; align-items: center; gap: 4px;">
            <CIcon name="envelope" :size="13" />
            99
          </div>
        </template>
        <template #default v-if="args.default">
          <CButton label="Button" severity="secondary" />
        </template>
      </CBadge>
    `,
  }),
} satisfies Meta<typeof CBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const Severity: Story = {
  argTypes: {
    severity: {
      control: false,
    },
    content: {
      control: false,
    },
    default: {
      control: false,
    },
    location: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CBadge },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CBadge v-bind="args" />
        <CBadge v-bind="args" severity="secondary" />
        <CBadge v-bind="args" severity="contrast" />
      </div>
    `,
  }),
}

export const Size: Story = {
  argTypes: {
    severity: {
      control: false,
    },
    size: {
      control: false,
    },
    content: {
      control: false,
    },
    default: {
      control: false,
    },
    location: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CBadge },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: flex-end; gap: 10px;">
        <CBadge v-bind="args" size="lg" />
        <CBadge v-bind="args" severity="secondary" />
        <CBadge v-bind="args" severity="contrast" size="sm" />
      </div>
    `,
  }),
}

export const MaxValue: Story = {
  args: {
    max: 99,
    value: '100',
  },
}

export const Customizations: Story = {
  argTypes: {
    severity: {
      control: false,
    },
    value: {
      control: false,
    },
    content: {
      control: false,
    },
    default: {
      control: false,
    },
    location: {
      control: false,
    },
    max: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CBadge, CIcon },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 10px;" >
        <CBadge v-bind="args" severity="contrast" value="NEW" />
        <CBadge v-bind="args" severity="secondary" value="hot" />
        <CBadge v-bind="args">
          <template #content>
            <div style="display: flex; align-items: center; gap: 4px;">
              <CIcon name="envelope" />
              99
            </div>
          </template>
        </CBadge>
      </div>
    `,
  }),
}

export const Overlay: Story = {
  args: {
    value: '',
    bordered: true,
  },
  argTypes: {
    content: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CBadge, CIcon, CButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 20px;">
        <CBadge v-bind="args" :value="args.value || '9'">
          <template #default >
            <CButton label="Button" severity="secondary" />
          </template>
        </CBadge>
        <CBadge v-bind="args" :value="args.value || '5'">
          <template #default >
            <CIcon name="delete" :size="30" />
          </template>
        </CBadge>
        <CBadge v-bind="args" :value="args.value || undefined">
          <template #default >
            <CIcon name="envelope" :size="30" />
          </template>
        </CBadge>
      </div>
    `,
  }),
}

export const PositionOverlay: Story = {
  args: {
    bordered: true,
  },
  argTypes: {
    location: {
      control: false,
    },
    content: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CBadge, CButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <CBadge v-bind="args" location="top-left">
          <template #default >
            <CButton label="Button" severity="secondary" />
          </template>
        </CBadge>
        <CBadge v-bind="args">
          <template #default >
            <CButton label="Button" severity="secondary" />
          </template>
        </CBadge>
        <CBadge v-bind="args" location="bottom-left">
          <template #default >
            <CButton label="Button" severity="secondary" />
          </template>
        </CBadge>
        <CBadge v-bind="args" location="bottom-right">
          <template #default >
            <CButton label="Button" severity="secondary" />
          </template>
        </CBadge>
      </div>
    `,
  }),
}

export const Button: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return { args, DeleteIcon }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton label="Delete" :icon="DeleteIcon" badge="2" badge-severity="secondary" />
        <CButton label="Submit" badge="2" severity="secondary" />
      </div>
    `,
  }),
}
