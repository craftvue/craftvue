import type { Meta, StoryObj, ComponentPropsAndSlots } from '@storybook/vue3-vite'
import {
  CTab,
  CTabList,
  CTabPanel,
  CTabPanels,
  CTabs,
  TabPanelProps,
  TabPanelSlots,
  TabPanelsSlots,
  TabProps,
  TabsEmits,
  TabsListSlots,
  TabSlots,
  CIcon,
  CButton,
} from 'craftvue'
import { AddPrefixKey } from 'docs/types'
import { fn } from 'storybook/test'
import { ref, watch } from 'vue'

type AllTabsArgs = ComponentPropsAndSlots<typeof CTabs> &
  AddPrefixKey<TabProps, 'Tab.'> &
  AddPrefixKey<TabSlots, 'Tab.'> &
  AddPrefixKey<TabPanelProps, 'TabPanel.'> &
  AddPrefixKey<TabPanelSlots, 'TabPanel.'> &
  AddPrefixKey<TabsListSlots, 'TabsList.'> &
  AddPrefixKey<TabPanelsSlots, 'TabPanels.'> &
  TabsEmits

const meta = {
  title: 'Navigation/Tabs/Tabs',
  component: CTabs,
  parameters: {
    controls: { exclude: ['$slots', 'onUpdate:value'] },
    layout: 'padded',
  },
  args: {
    value: '1',
    orientation: 'horizontal',
    showNavigators: true,
    lazy: false,
    tabindex: 0,
    selectOnFocus: false,
    'onUpdate:value': fn(),
    'Tab.as': 'button',
    'Tab.asChild': false,
    'Tab.disabled': false,
    'TabPanel.as': 'div',
    'TabPanel.asChild': false,
    nexticon: false,
    previcon: false,
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['1', '2', '3'],
      description: 'Активная вкладка по умолчанию',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация вкладок',
    },
    showNavigators: {
      control: 'boolean',
      description: 'Показывать кнопки навигации',
    },
    lazy: {
      control: 'boolean',
      description: 'Ленивая загрузка содержимого',
    },
    tabindex: {
      control: 'number',
      description: 'Индекс элемента в порядке табуляции.',
    },
    selectOnFocus: {
      control: 'boolean',
      description: 'Автоматически выбирать вкладку при фокусе',
    },
    'update:value': {
      description: 'Событие обновления значения активной вкладки',
      table: {
        type: {
          summary: '[value: string | number]',
        },
      },
    },
    'Tab.value': {
      control: false,
      table: {
        category: 'props',
        subcategory: 'Tab',
      },
    },
    'Tab.as': {
      control: 'select',
      options: ['button', 'a', 'div'],
      table: {
        category: 'props',
        subcategory: 'Tab',
      },
    },
    'Tab.asChild': {
      control: 'boolean',
      table: {
        category: 'props',
        subcategory: 'Tab',
      },
    },
    'Tab.disabled': {
      control: 'boolean',
      table: {
        category: 'props',
        subcategory: 'Tab',
      },
    },
    'TabPanel.value': {
      control: false,
      table: {
        category: 'props',
        subcategory: 'TabPanel',
      },
    },
    'TabPanel.as': {
      control: 'select',
      options: ['div', 'section', 'article'],
      table: {
        category: 'props',
        subcategory: 'TabPanel',
      },
    },
    default: {
      control: false,
      description: 'Слот для содержимого компонента вкладок',
    },
    nexticon: {
      control: 'boolean',
      description: 'Шаблон значка кнопки «Далее» для прокручиваемого компонента.',
    },
    previcon: {
      control: 'boolean',
      description: 'Шаблон значка кнопки «Назад» для прокручиваемого компонента.',
    },
    'TabsList.default': {
      control: false,
      table: {
        category: 'slots',
        subcategory: 'TabList',
      },
    },
    'Tab.default': {
      control: false,
      table: {
        category: 'slots',
        subcategory: 'Tab',
      },
    },
    'TabPanel.asChild': {
      control: 'boolean',
      table: {
        category: 'props',
        subcategory: 'TabPanel',
      },
    },
    'TabPanels.default': {
      control: false,
      table: {
        category: 'slots',
        subcategory: 'TabPanels',
      },
    },
    'TabPanel.default': {
      control: false,
      table: {
        category: 'slots',
        subcategory: 'TabPanel',
      },
    },
  },
  decorators: [
    () => ({
      template: `
    <div
      style="
        --c-tabs-tablist-background: #0e0e0e;
        --c-tabs-nav-button-background: #0e0e0e;
        --c-tabs-tabpanel-background: #0e0e0e;
      "
    >
      <story/>
    </div>`,
    }),
  ],
} satisfies Meta<AllTabsArgs>

export default meta
type Story = StoryObj<AllTabsArgs>

export const ArgTypes: Story = {
  args: {},
  parameters: {
    controls: {
      include: [
        'value',
        'orientation',
        'showNavigators',
        'tabindex',
        'selectOnFocus',
        'lazy',
        'default',
        'nexticon',
        'previcon',
        'update:value',
      ],
    },
  },
  tags: ['!dev'],
}

export const Basic: Story = {
  args: {},
  argTypes: {},
  render: (args) => ({
    components: { CTabs, CTab, CTabList, CTabPanel, CTabPanels, CIcon },
    setup() {
      const keyForRerender = ref(0)

      // перерендер при изменении ориентации для правильного позиционирования активного бара
      watch(
        () => [args.orientation, args['Tab.disabled'], args.nexticon, args.previcon],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender }
    },
    template: `
      <CTabs
        :key="keyForRerender"
        :value="args.value"
        :orientation="args.orientation"
        :show-navigators="args.showNavigators"
        :lazy="args.lazy"
        :tabindex="args.tabindex"
        :select-on-focus="args.selectOnFocus"
      >
        <CTabList>
          <CTab
            value="1"
            href="#"
            :disabled="args['Tab.disabled']"
            :as="args['Tab.as']"
            :as-child="args['Tab.asChild']"
          >
            Header 1
          </CTab>
          <CTab value="2">Header 2</CTab>
          <CTab value="3">Header 3</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel
            value="1"
            :as="args['TabPanel.as']"
            :as-child="args['TabPanel.asChild']"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CTabPanel>
          <CTabPanel value="2">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
          </CTabPanel>
          <CTabPanel value="3">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
          </CTabPanel>
        </CTabPanels>
        <template #nexticon v-if="args.nexticon">
          <CIcon name="add" />
        </template>
        <template #previcon v-if="args.previcon">
          <CIcon name="add" />
        </template>
      </CTabs>
    `,
  }),
}

export const Vertical: Story = {
  ...Basic,
  args: {
    orientation: 'vertical',
  },
  argTypes: {
    orientation: {
      control: false,
    },
    showNavigators: {
      control: false,
    },
    nexticon: {
      control: false,
    },
    previcon: {
      control: false,
    },
  },
}

export const Dynamic: Story = {
  args: {
    value: '0',
  },
  argTypes: {
    value: {
      options: ['0', '1', '2'],
    },
    showNavigators: {
      control: false,
    },
    nexticon: {
      control: false,
    },
    previcon: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CTabs, CTab, CTabList, CTabPanel, CTabPanels, CIcon },
    setup() {
      const keyForRerender = ref(0)
      const tabs = ref([
        { title: 'Tab 1', content: 'Content 1', value: '0' },
        { title: 'Tab 2', content: 'Content 2', value: '1' },
        { title: 'Tab 3', content: 'Content 3', value: '2' },
      ])

      // перерендер при изменении ориентации для правильного позиционирования активного бара
      watch(
        () => [args.orientation, args['Tab.disabled']],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender, tabs }
    },
    template: `
      <CTabs
        :key="keyForRerender"
        :value="args.value"
        :orientation="args.orientation"
        :lazy="args.lazy"
        :tabindex="args.tabindex"
        :select-on-focus="args.selectOnFocus"
      >
        <CTabList>
          <CTab
            v-for="tab in tabs"
            :key="tab.title"
            :value="tab.value"
            href="#"
            :disabled="args['Tab.disabled']"
            :as="args['Tab.as']"
            :as-child="args['Tab.asChild']"
          >
            {{ tab.title }}
          </CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel
            v-for="tab in tabs"
            :key="tab.content"
            :value="tab.value"
            :as="args['TabPanel.as']"
            :as-child="args['TabPanel.asChild']"
          >
            <p>{{ tab.content }}</p>
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
  }),
}

export const Template: Story = {
  argTypes: {
    'Tab.as': {
      control: false,
    },
    'Tab.asChild': {
      control: false,
    },
    'TabPanel.as': {
      control: false,
    },
    'TabPanel.asChild': {
      control: false,
    },
    showNavigators: {
      control: false,
    },
    nexticon: {
      control: false,
    },
    previcon: {
      control: false,
    },
    lazy: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CTabs, CTab, CTabList, CTabPanel, CTabPanels, CIcon },
    setup() {
      const keyForRerender = ref(0)

      // перерендер при изменении ориентации для правильного позиционирования активного бара
      watch(
        () => [args.orientation, args['Tab.disabled']],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender }
    },
    template: `
      <CTabs
        :key="keyForRerender"
        :value="args.value"
        :orientation="args.orientation"
        :show-navigators="args.showNavigators"
        :lazy="args.lazy"
        :tabindex="args.tabindex"
        :select-on-focus="args.selectOnFocus"
      >
        <CTabList>
          <CTab
            value="1"
            :disabled="args['Tab.disabled']"
            style="display: flex; align-items: center; gap: 7px;"
            as="div"
          >
            <CIcon name="home" :size="20" />
            <p>Home</p>
          </CTab>
          <CTab
            value="2"
            style="display: flex; align-items: center; gap: 7px;"
            as="div"
          >
            <CIcon name="envelope" :size="20" />
            <p>Email</p>
          </CTab>
          <CTab
            value="3"
            style="display: flex; align-items: center; gap: 7px;"
            asChild
            v-slot="{tabClasses, onClick, a11yAttrs}"
          >
            <div :class="tabClasses" @click="onClick" v-bind="a11yAttrs" style="display: flex; align-items: center; gap: 7px;">
              <CIcon name="save" :size="20" />
              <p>Downloads</p>
            </div>
          </CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel value="1" as="p">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CTabPanel>
          <CTabPanel value="2" as="p">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
          </CTabPanel>
          <CTabPanel value="3" asChild v-slot="{ active, a11yAttrs, tabpanelClasses }">
            <div v-show="active" v-bind="a11yAttrs" :class="tabpanelClasses">
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </div>
            </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
  }),
}

export const Controlled: Story = {
  argTypes: {
    value: {
      control: false,
    },
    showNavigators: {
      control: false,
    },
    nexticon: {
      control: false,
    },
    previcon: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CTabs, CTab, CTabList, CTabPanel, CTabPanels, CIcon, CButton },
    setup() {
      const keyForRerender = ref(0)
      const value = ref('1')

      // перерендер при изменении ориентации для правильного позиционирования активного бара
      watch(
        () => [args.orientation, args['Tab.disabled'], args.nexticon, args.previcon],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender, value }
    },
    template: `
      <div style="display: flex; gap: 7px; justify-content: end;">
        <CButton @click="value = '1'" label="1" rounded style="width: 40px; height: 40px;" :severity="value === '1' ? 'primary' : 'secondary'" />
        <CButton @click="value = '2'" label="2" rounded style="width: 40px; height: 40px;" :severity="value === '2' ? 'primary' : 'secondary'" />
        <CButton @click="value = '3'" label="3" rounded style="width: 40px; height: 40px;" :severity="value === '3' ? 'primary' : 'secondary'" />
      </div>

      <CTabs
        :key="keyForRerender"
        v-model:value="value"
        :orientation="args.orientation"
        :lazy="args.lazy"
        :tabindex="args.tabindex"
        :select-on-focus="args.selectOnFocus"
      >
        <CTabList>
          <CTab
            value="1"
            href="#"
            :disabled="args['Tab.disabled']"
            :as="args['Tab.as']"
            :as-child="args['Tab.asChild']"
          >
            Header 1
          </CTab>
          <CTab value="2">Header 2</CTab>
          <CTab value="3">Header 3</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel
            value="1"
            :as="args['TabPanel.as']"
            :as-child="args['TabPanel.asChild']"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CTabPanel>
          <CTabPanel value="2">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
          </CTabPanel>
          <CTabPanel value="3">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    `,
  }),
}

export const Scrollable: Story = {
  args: {
    value: '0',
  },
  argTypes: {
    value: { control: 'text' },
    'Tab.as': { control: false },
    'Tab.asChild': { control: false },
    'Tab.disabled': { control: false },
    'TabPanel.as': { control: false },
    'TabPanel.asChild': { control: false },
  },
  render: (args) => ({
    components: { CTabs, CTab, CTabList, CTabPanel, CTabPanels, CIcon },
    setup() {
      const keyForRerender = ref(0)
      const tabs = ref(
        Array.from({ length: 50 }, (_, i) => ({
          title: `Tab ${i}`,
          content: `Content ${i}`,
          value: `${i}`,
        })),
      )

      watch(
        () => [args.orientation, args.nexticon, args.previcon],
        () => {
          keyForRerender.value++
        },
      )

      return { args, keyForRerender, tabs }
    },
    template: `
      <CTabs
        :key="keyForRerender"
        :value="args.value"
        :orientation="args.orientation"
        :lazy="args.lazy"
        :tabindex="args.tabindex"
        :select-on-focus="args.selectOnFocus"
        :show-navigators="args.showNavigators"
        style="max-height: 250px;"
      >
        <CTabList>
          <CTab
            v-for="tab in tabs"
            :key="tab.title"
            :value="tab.value"
          >
            {{ tab.title }}
          </CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel
            v-for="tab in tabs"
            :key="tab.content"
            :value="tab.value"
          >
            <p>{{ tab.content }}</p>
          </CTabPanel>
        </CTabPanels>
        <template #nexticon v-if="args.nexticon">
          <CIcon name="add" />
        </template>
        <template #previcon v-if="args.previcon">
          <CIcon name="add" />
        </template>
      </CTabs>
    `,
  }),
}

export const Disabled: Story = {
  ...Basic,
  args: {
    'Tab.disabled': true,
    value: '2',
  },
  argTypes: {
    'Tab.disabled': { control: false },
    showNavigators: { control: false },
    nexticon: { control: false },
    previcon: { control: false },
  },
}

export const Navigation: Story = {
  argTypes: {
    value: { control: false },
    showNavigators: { control: false },
    nexticon: { control: false },
    previcon: { control: false },
    lazy: { control: false },
    'Tab.as': { control: false },
    'Tab.asChild': { control: false },
    'TabPanel.as': { control: false },
    'TabPanel.asChild': { control: false },
  },
  render: (args) => ({
    components: { CTabs, CTabList, CTab, CIcon },
    setup() {
      const activeRoute = ref('HomePage')

      interface MenuItem {
        label: string
        icon: string
        route: string
      }

      const menuItems = ref<MenuItem[]>([
        { label: 'Home', icon: 'home', route: 'HomePage' },
        { label: 'Catalog', icon: 'search', route: 'CatalogPage' },
        { label: 'Contacts', icon: 'envelope', route: 'ContactsPage' },
        { label: 'Delivery', icon: 'check', route: 'DeliveryPage' },
        { label: 'Payment', icon: 'save', route: 'PaymentPage' },
      ])

      return { args, menuItems, activeRoute }
    },
    template: `
      <CTabs
        :value="activeRoute"
        :orientation="args.orientation"
        :tabindex="args.tabindex"
        :select-on-focus="args.selectOnFocus"
      >
        <CTabList>
          <CTab
            v-for="tab in menuItems"
            v-slot="{ tabClasses, a11yAttrs, onClick }"
            :key="tab.label"
            :value="tab.route"
            :disabled="args['Tab.disabled']"
            as-child
          >
            <a
              v-bind="a11yAttrs"
              :class="tabClasses"
              @click="onClick"
              style="display: flex; align-items: center; gap: 7px;"
            >
              <CIcon :name="tab.icon" :size="20" />
              {{ tab.label }}
            </a>
          </CTab>
        </CTabList>
      </CTabs>
    `,
  }),
}
