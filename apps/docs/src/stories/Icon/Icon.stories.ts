import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CIcon } from 'craftvue'
import IconLogo from 'docs/components/IconLogo.vue'

const meta = {
  title: 'Basic/Icon/Icon',
  component: CIcon,
  parameters: {
    controls: {
      exclude: ['$slots'],
    },
    layout: 'centered',
  },
  args: {
    size: '40',
    name: 'home',
    // color: '#ffffff',
    default: 0,
  },
  argTypes: {
    name: {
      control: 'select',
      description: 'Название встроенной иконки (home, delete, envelope, save, search и др.)',
    },
    size: {
      control: 'text',
      description: 'Размер иконки в пикселях (число) или с единицами измерения (строка)',
    },
    color: {
      control: 'color',
      description: 'Цвет иконки в любом CSS формате (hex, rgb, hsl, названия цветов)',
    },
    default: {
      control: {
        type: 'select',
        labels: { 0: 'Default slot', 1: 'Custom slot' },
      },
      options: [0, 1],
      mapping: {
        0: undefined,
        1: IconLogo,
      },
      description: 'Слот для кастомной иконки. Позволяет вставлять собственные SVG компоненты',
    },
  },
  decorators: [
    () => ({
      template: '<div style="display: flex; align-items: center; gap: 10px;"><story/></div>',
    }),
  ],
  render: (args) => ({
    components: { CIcon },
    setup() {
      return { args, IconLogo }
    },
    template: `
      <CIcon v-bind="args">
        <component :is="IconLogo" v-if="args.default" />
      </CIcon>
    `,
  }),
} satisfies Meta<typeof CIcon>

export default meta
type Story = StoryObj<typeof CIcon>

export const Basic: Story = {
  args: {},
}

export const Name: Story = {
  argTypes: {
    name: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CIcon },
    setup() {
      return { args }
    },
    template: `
      <CIcon v-bind="args" name="home"/>
      <CIcon v-bind="args" name="delete"/>
      <CIcon v-bind="args" name="envelope"/>
      <CIcon v-bind="args" name="save"/>
      <CIcon v-bind="args" name="search"/>
    `,
  }),
}

export const Color: Story = {
  argTypes: {
    color: {
      control: false,
    },
    name: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CIcon },
    setup() {
      return { args }
    },
    template: `
      <CIcon v-bind="args" name="search"/>
      <CIcon v-bind="args" name="home" color="#E2D5B9"/>
      <CIcon v-bind="args" color="#D1C2A1" name="delete"/>
      <CIcon v-bind="args" color="#bea87b" name="envelope"/>
      <CIcon v-bind="args" color="#B59A6A" name="save"/>
    `,
  }),
}

export const Size: Story = {
  args: {
    name: 'save',
  },
  argTypes: {
    size: {
      control: false,
    },
    color: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CIcon },
    setup() {
      return { args }
    },
    template: `
      <CIcon v-bind="args" size="30" />
      <CIcon v-bind="args" size="40" color="#E2D5B9"/>
      <CIcon v-bind="args" size="50" color="#D1C2A1"/>
      <CIcon v-bind="args" size="60" color="#bea87b"/>
      <CIcon v-bind="args" size="70" color="#B59A6A"/>
    `,
  }),
}

export const Template: Story = {
  args: {
    default: 1,
    size: '200',
  },
  argTypes: {
    name: {
      control: false,
    },
    default: {
      control: false,
    },
  },
}
