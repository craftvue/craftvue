/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, markRaw } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import IconLogo from 'docs/components/IconLogo.vue'
import { CButton, CTab, CTabList, CTabs } from 'craftvue'
import type { BaseButtonProps, ButtonEmits, ButtonSlots } from 'craftvue'
import {
  AddIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
  CheckIcon,
  HomeIcon,
} from '@craftvue/icons'

const icons = {
  null: undefined,
  AddIcon: markRaw(AddIcon),
  DeleteIcon: markRaw(DeleteIcon),
  EditIcon: markRaw(EditIcon),
  SaveIcon: markRaw(SaveIcon),
}

type AllKeys = keyof BaseButtonProps | keyof ButtonEmits | keyof ButtonSlots

const customArgsKeys: AllKeys[] = [
  'badge',
  'badgeSeverity',
  'icon',
  'label',
  'loading',
  'raised',
  'rounded',
  'severity',
  'variant',
  'disabled',
  'iconPos',
  'size',
  'default',
  'iconSlot',
  'click',
]

const meta = {
  title: 'Basic/Button/Button',
  component: CButton,
  args: {
    onClick: fn(),
    label: 'Button',
    severity: 'primary',
    variant: 'filled',
    raised: false,
    rounded: false,
    loading: false,
    disabled: false,
    badge: '',
    badgeSeverity: 'primary',
    // Использование строки для извлечения компонента из icons, необходимо для control
    icon: 'null' as any,
    iconPos: 'left',
    size: 1 as any,
    default: 0,
    iconSlot: 0,
  },
  parameters: {
    controls: {
      include: customArgsKeys,
    },
    layout: 'centered',
  },
  argTypes: {
    severity: {
      control: 'select',
      description:
        'Button color scheme that determines its semantic purpose. Affects background and text color.',
    },
    variant: {
      control: 'select',
      description:
        'Visual display variant of the button. Defines the style (filled, outlined, text).',
    },
    label: {
      control: 'text',
      description:
        'Button text content. Displayed as an accessible description of the action for screen readers.',
    },
    loading: {
      control: 'boolean',
      description:
        'Loading state. When activated, displays a progress indicator and blocks interaction.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Inactive state. Disables interactivity and visually indicates that the action is unavailable.',
    },
    raised: {
      control: 'boolean',
      description:
        'Elevation effect. Adds a shadow to create visual volume and separation from the background.',
    },
    rounded: {
      control: 'boolean',
      description:
        'Corner rounding. When activated, applies maximum rounding to create a pill shape.',
    },
    badge: {
      control: 'text',
      type: 'boolean',
      description:
        'Badge indicator. Displays an additional label for notifications or counters.',
    },
    badgeSeverity: {
      control: 'select',
      description:
        'Badge color scheme. Aligns with the semantic significance of the displayed information.',
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          null: 'No icon',
          AddIcon: 'Add',
          DeleteIcon: 'Delete',
          EditIcon: 'Edit',
          SaveIcon: 'Save',
        },
      },
      options: Object.keys(icons),
      mapping: icons,
      table: {
        category: 'props',
      },
      description:
        'Button icon. A graphic element that complements or replaces the text content.',
    },
    iconPos: {
      control: 'select',
      description:
        'Icon position. Determines the placement of the graphic element relative to the text.',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Small', 1: 'Normal', 2: 'Large' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description:
        'Button size. Controls the element scale through predefined size variants.',
    },
    default: {
      control: {
        type: 'select',
        labels: { 0: 'Empty slot', 1: 'template #default' },
      },
      options: [0, 1],
      mapping: { 0: undefined, 1: 'Template content' },
      type: 'boolean',
      description:
        'Default slot content. Replaces standard text content with arbitrary HTML.',
    },
    iconSlot: {
      control: {
        type: 'select',
        labels: { 0: 'Empty slot', 1: 'template #iconSlot' },
      },
      options: [0, 1],
      mapping: { 0: undefined, 1: markRaw(HomeIcon) },
      description:
        'Icon slot content. Replaces the standard icon with arbitrary graphic content.',
    },
  },
  render: (args) => ({
    components: { CButton },

    setup() {
      return { args }
    },
    template: `
      <CButton v-bind="args">
        <template #iconSlot>
          <component :is="args['iconSlot']" />
        </template>
        <span v-if="args.default">
          {{ args.default }}
        </span>
      </CButton>
    `,
  }),
} satisfies Meta<typeof CButton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const Icons: Story = {
  args: {
    label: '',
  },
  argTypes: {
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
    iconPos: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return {
        args,
        HomeIcon,
        AddIcon,
        DeleteIcon,
        EditIcon,
        SaveIcon,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <div style="display: flex; gap: 10px;">
          <CButton v-bind="args" :icon="args.icon || HomeIcon" aria-label="Home" />
          <CButton v-bind="args" :icon="args.icon || AddIcon" :label="args.label || 'Add'" />
          <CButton v-bind="args" :icon="args.icon || DeleteIcon" :label="args.label || 'Delete'" icon-pos="right" />
        </div>
        <div style="display: flex; gap: 10px;">
          <CButton v-bind="args" :icon="args.icon || EditIcon" :label="args.label || 'Edit'" icon-pos="top" />
          <CButton v-bind="args" :icon="args.icon || SaveIcon" :label="args.label || 'Save'" icon-pos="bottom" />
        </div>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
    label: '',
  },
  argTypes: {
    loading: {
      control: false,
    },
    disabled: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      const loading = ref(false)

      const load = () => {
        loading.value = true
        setTimeout(() => {
          loading.value = false
        }, 2000)
      }

      return { args, load, loading, CheckIcon }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton v-bind="args" />
        <CButton v-bind="args" :label="args.label || 'Button'" />
        <CButton
          v-bind="args"
          :icon="args.icon || CheckIcon"
          :loading="loading"
          @click="load"
          :label="args.label || 'Click me'"
        />
      </div>
    `,
  }),
}

export const Severity: Story = {
  args: {
    label: '',
  },
  argTypes: {
    severity: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton v-bind="args" :label="args.label || 'Primary'" />
        <CButton v-bind="args" :label="args.label || 'Secondary'" severity="secondary" />
        <CButton v-bind="args" :label="args.label || 'Contrast'" severity="contrast" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    label: 'Submit',
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
}

export const Raised: Story = {
  args: {
    ...Severity.args,
    raised: true,
  },
  argTypes: {
    ...Severity.argTypes,
    raised: {
      control: false,
    },
  },
  render: Severity.render,
}

export const Rounded: Story = {
  args: {
    ...Severity.args,
    rounded: true,
  },
  argTypes: {
    ...Severity.argTypes,
    rounded: {
      control: false,
    },
  },
  render: Severity.render,
}

export const Text: Story = {
  args: {
    ...Severity.args,
    variant: 'text',
  },
  argTypes: {
    ...Severity.argTypes,
    variant: {
      control: false,
    },
  },
  render: Severity.render,
}

export const RaisedText: Story = {
  args: {
    ...Severity.args,
    variant: 'text',
    raised: true,
  },
  argTypes: {
    ...Severity.argTypes,
    variant: {
      control: false,
    },
    raised: {
      control: false,
    },
  },
  render: Severity.render,
}

export const Outlined: Story = {
  args: {
    ...Severity.args,
    variant: 'outlined',
  },
  argTypes: {
    ...Severity.argTypes,
    variant: {
      control: false,
    },
  },
  render: Severity.render,
}

export const IconOnly: Story = {
  args: {
    label: '',
  },
  argTypes: {
    label: {
      control: false,
    },
    severity: {
      control: false,
    },
    variant: {
      control: false,
    },
    rounded: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
    badge: {
      control: false,
    },
    badgeSeverity: {
      control: false,
    },
    iconPos: {
      control: false,
    },
    size: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton, CTabs, CTabList, CTab },
    setup() {
      const size = ref('undefined')

      const sizeOptions = ref([
        { label: 'Small', value: 'sm' },
        { label: 'Normal', value: 'undefined' },
        { label: 'Large', value: 'lg' },
      ])

      return {
        args,
        CheckIcon,
        HomeIcon,
        AddIcon,
        size,
        sizeOptions,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <CTabs v-model:value="size">
          <CTabList>
            <CTab v-for="tab in sizeOptions" :key="tab.label" :value="tab.value">
              {{ tab.label }}
            </CTab>
          </CTabList>
        </CTabs>
        <div style="width: 100%; display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size"  :icon="args.icon || CheckIcon"  />
            <CButton v-bind="args" :size="size" severity="secondary" :icon="args.icon || HomeIcon"  />
            <CButton v-bind="args" :size="size" severity="contrast" :icon="args.icon || AddIcon"  />
          </div>
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size" rounded :icon="args.icon || CheckIcon" />
            <CButton v-bind="args" :size="size" rounded severity="secondary" :icon="args.icon || HomeIcon" />
            <CButton v-bind="args" :size="size" rounded severity="contrast" :icon="args.icon || AddIcon" />
          </div>
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size" rounded variant="outlined" :icon="args.icon || CheckIcon" />
            <CButton v-bind="args" :size="size" rounded variant="outlined" severity="secondary" :icon="args.icon || HomeIcon" />
            <CButton v-bind="args" :size="size" rounded variant="outlined" severity="contrast" :icon="args.icon || AddIcon" />
          </div>
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size" rounded variant="text" raised :icon="args.icon || CheckIcon" />
            <CButton v-bind="args" :size="size" rounded variant="text" raised severity="secondary" :icon="args.icon || HomeIcon" />
            <CButton v-bind="args" :size="size" rounded variant="text" raised severity="contrast" :icon="args.icon || AddIcon" />
          </div>
          <div style="display: flex; justify-content: space-around; gap: 10px;">
            <CButton v-bind="args" :size="size" rounded variant="text" :icon="args.icon || CheckIcon" />
            <CButton v-bind="args" :size="size" rounded variant="text" severity="secondary" :icon="args.icon || HomeIcon" />
            <CButton v-bind="args" :size="size" rounded variant="text" severity="contrast" :icon="args.icon || AddIcon" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Size: Story = {
  args: {
    icon: markRaw(AddIcon) as any,
    label: '',
  },
  argTypes: {
    size: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 10px;">
        <CButton v-bind="args" :label="args.label || 'Small'" size="sm" />
        <CButton v-bind="args" :label="args.label || 'Normal'" />
        <CButton v-bind="args" :label="args.label || 'Large'" size="lg" />
      </div>
    `,
  }),
}

export const Badge: Story = {
  args: {
    label: '',
    severity: undefined,
    variant: undefined,
  },
  argTypes: {
    badgeSeverity: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
    default: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton },
    setup() {
      return { args, HomeIcon }
    },
    template: `
      <div style="display: flex; gap: 10px;">
        <CButton
          v-bind="args"
          :label="args.label || 'Cancel'"
          :badge="args.badge || '5'"
          badgeSeverity="secondary"
        />
        <CButton
          v-bind="args"
          :severity="args.severity || 'secondary'"
          :label="args.label || 'Cancel'"
          :badge="args.badge || '99+'"
          badgeSeverity="contrast"
        />
        <CButton
          v-bind="args"
          :variant="args.variant || 'outlined'"
          :label="args.label || 'Home'"
          :icon="args.icon || HomeIcon"
          :badge="args.badge || 'NEW'"
        />
      </div>
    `,
  }),
}

export const Template: Story = {
  args: {
    default: 'default',
    variant: 'outlined',
  },
  argTypes: {
    badge: {
      control: false,
    },
    badgeSeverity: {
      control: false,
    },
    icon: {
      control: false,
    },
    iconPos: {
      control: false,
    },
    iconSlot: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CButton, IconLogo },
    setup() {
      return { args }
    },
    template: `
      <CButton v-bind="args">
        <IconLogo v-if="args.default === 'default'" style="font-size: 200px; margin: 10px;" />
        <span v-else-if="args.default">
          {{ args.default }}
        </span>
      </CButton>
    `,
  }),
}
