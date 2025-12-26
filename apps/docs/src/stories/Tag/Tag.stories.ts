/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Meta, StoryObj, ComponentPropsAndSlots } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { CTag } from 'craftvue'
import type { TagEmits } from 'craftvue'
import { markRaw } from 'vue'
import { AddIcon, CheckIcon } from '@craftvue/icons'

type AllTagArgs = ComponentPropsAndSlots<typeof CTag> & TagEmits

const meta = {
  title: 'Data/Tag/Tag',
  component: CTag,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['$slots', 'onClose'],
    },
  },
  args: {
    value: 'Tag',
    severity: 'primary',
    variant: 'filled',
    size: 1 as any,
    closable: false,
    rounded: false,
    prefixIcon: 0 as any,
    suffixIcon: 0 as any,
    onClose: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Текст тега, отображаемый внутри элемента',
    },
    severity: {
      control: 'select',
      description:
        'Цветовая палитра тега: primary, secondary, contrast, success, error, warning, info',
    },
    variant: {
      control: 'select',
      description: 'Вариант стиля тега: filled (заполненный), outlined (с обводкой), soft (мягкий)',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Small', 1: 'Normal', 2: 'Large' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description: 'Размер тега: sm (маленький), нормальный (по умолчанию), lg (большой)',
    },
    closable: {
      control: 'boolean',
      description:
        'Показывать кнопку закрытия в теге (при клике на которую возникает событие close)',
    },
    rounded: {
      control: 'boolean',
      description: 'Применяет скругленные углы к тегу',
    },
    prefixIcon: {
      control: {
        type: 'select',
        labels: { 0: 'default', 1: 'custom' },
      },
      options: [0, 1],
      mapping: { 0: undefined, 1: markRaw(CheckIcon) },
      description: 'Иконка компонента Vue, отображаемая перед текстом тега',
    },
    suffixIcon: {
      control: {
        type: 'select',
        labels: { 0: 'default', 1: 'custom' },
      },
      options: [0, 1],
      mapping: { 0: undefined, 1: markRaw(AddIcon) },
      description: 'Иконка компонента Vue, отображаемая после текста тега',
    },
    close: {
      control: false,
      description: 'Событие, возникающее при клике на кнопку закрытия тега',
    },
    default: {
      control: false,
      description: 'Слот для кастомного содержимого тега',
    },
    prefix: {
      control: false,
      description:
        'Слот для кастомного содержимого перед текстом тега (имеет приоритет над prefixIcon)',
    },
    suffix: {
      control: false,
      description:
        'Слот для кастомного содержимого после текста тега (имеет приоритет над suffixIcon)',
    },
  },
} satisfies Meta<AllTagArgs>

export default meta
type Story = StoryObj<AllTagArgs>

export const Basic: Story = {
  args: {},
}

export const Severity: Story = {
  argTypes: {
    value: { control: false },
    severity: { control: false },
  },
  render: (args) => ({
    components: { CTag },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 5px;">
        <CTag v-bind="args" value="Primary" />
        <CTag v-bind="args" value="Secondary" severity="secondary" />
        <CTag v-bind="args" value="Contrast" severity="contrast" />
        <CTag v-bind="args" value="Info" severity="info" />
        <CTag v-bind="args" value="Success" severity="success" />
        <CTag v-bind="args" value="Warning" severity="warning" />
        <CTag v-bind="args" value="Error" severity="error" />
      </div>
    `,
  }),
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  argTypes: {
    value: { control: false },
    severity: { control: false },
    variant: { control: false },
  },
  render: (args) => ({
    components: { CTag },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 5px;">
        <CTag v-bind="args" value="Primary" />
        <CTag v-bind="args" value="Secondary" severity="secondary" />
        <CTag v-bind="args" value="Contrast" severity="contrast" />
        <CTag v-bind="args" value="Info" severity="info" />
        <CTag v-bind="args" value="Success" severity="success" />
        <CTag v-bind="args" value="Warning" severity="warning" />
        <CTag v-bind="args" value="Error" severity="error" />
      </div>
    `,
  }),
}

export const Soft: Story = {
  args: {
    variant: 'soft',
  },
  argTypes: {
    value: { control: false },
    severity: { control: false },
    variant: { control: false },
  },
  render: (args) => ({
    components: { CTag },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 5px;">
        <CTag v-bind="args" value="Primary" />
        <CTag v-bind="args" value="Secondary" severity="secondary" />
        <CTag v-bind="args" value="Contrast" severity="contrast" />
        <CTag v-bind="args" value="Info" severity="info" />
        <CTag v-bind="args" value="Success" severity="success" />
        <CTag v-bind="args" value="Warning" severity="warning" />
        <CTag v-bind="args" value="Error" severity="error" />
      </div>
    `,
  }),
}

export const Size: Story = {
  argTypes: {
    value: { control: false },
    size: { control: false },
  },
  render: (args) => ({
    components: { CTag },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 10px;">
        <CTag v-bind="args" value="Small" size="sm" />
        <CTag v-bind="args" value="Normal" />
        <CTag v-bind="args" value="Large" size="lg" />
      </div>
    `,
  }),
}

export const Closable: Story = {
  args: {
    closable: true,
  },
  argTypes: {
    variant: { control: false },
    closable: { control: false },
  },
  render: (args) => ({
    components: { CTag },
    setup() {
      const handleClose = (event: MouseEvent) => {
        console.log('Tag closed', event)
      }

      return { args, handleClose }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CTag v-bind="args" @close="handleClose" />
        <CTag v-bind="args" variant="outlined" @close="handleClose" />
        <CTag v-bind="args" variant="soft" @close="handleClose" />
      </div>
    `,
  }),
}

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  argTypes: {
    rounded: { control: false },
    severity: { control: false },
    value: { control: false },
  },
  render: (args) => ({
    components: { CTag },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 5px;">
        <CTag v-bind="args" value="Primary" />
        <CTag v-bind="args" value="Secondary" severity="secondary" />
        <CTag v-bind="args" value="Contrast" severity="contrast" />
        <CTag v-bind="args" value="Info" severity="info" />
        <CTag v-bind="args" value="Success" severity="success" />
        <CTag v-bind="args" value="Warning" severity="warning" />
        <CTag v-bind="args" value="Error" severity="error" />
      </div>
    `,
  }),
}

export const WithIcon: Story = {
  args: {
    prefixIcon: 1 as any,
    suffixIcon: 1 as any,
  },
  argTypes: {
    prefixIcon: { control: false },
    suffixIcon: { control: false },
    variant: { control: false },
  },
  render: (args) => ({
    components: { CTag },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CTag v-bind="args" />
        <CTag v-bind="args" variant="outlined" />
        <CTag v-bind="args" variant="soft" />
      </div>
    `,
  }),
}

export const Template: Story = {
  args: {
    severity: 'secondary',
  },
  argTypes: {
    value: { control: false },
    prefixIcon: { control: false },
    suffixIcon: { control: false },
  },
  render: (args) => ({
    components: { CTag },
    setup() {
      return { args }
    },
    template: `
      <CTag v-bind="args">
        <template #prefix>
          <span style="margin-right: 4px;">🏷️</span>
        </template>
        Template
        <template #suffix>
          <span style="margin-left: 4px;">✨</span>
        </template>
      </CTag>
    `,
  }),
}
