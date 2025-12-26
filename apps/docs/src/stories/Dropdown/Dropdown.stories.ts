/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
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
        'Управляет видимостью выпадающего меню. В режиме управления извне используется для контроля состояния открытия/закрытия.',
    },
    rootEl: {
      control: false,
      description:
        'Ссылка на DOM-элемент, относительно которого позиционируется выпадающее меню. Обязателен для работы компонента.',
    },
    placement: {
      control: 'select',
      description:
        'Позиция выпадающего меню относительно элемента-триггера: top (сверху) | bottom (снизу, по умолчанию).',
    },
    align: {
      control: 'select',
      description:
        'Выравнивание выпадающего меню относительно элемента-триггера: start (начало) | center (центр) | end (конец). По умолчанию: start.',
    },
    sameWidth: {
      control: 'boolean',
      description:
        'Автоматически устанавливает ширину выпадающего меню равной ширине элемента-триггера.',
    },
    offset: {
      control: 'number',
      description:
        'Расстояние в пикселях между элементом-триггером и выпадающим меню. По умолчанию: 5. При наличии стрелки автоматически увеличивается на размер стрелки.',
    },
    boundaryPadding: {
      control: 'number',
      description:
        'Минимальный отступ в пикселях от краёв экрана при позиционировании. Предотвращает выход меню за пределы видимой области. По умолчанию: 5.',
    },
    zIndex: {
      control: 'number',
      description: 'Значение z-index для выпадающего меню. По умолчанию: 1000.',
    },
    maxHeight: {
      control: 'number',
      description:
        'Максимальная высота выпадающего меню в пикселях или CSS-единицах. При превышении появляется прокрутка.',
    },
    maxWidth: {
      control: 'number',
      description:
        'Максимальная ширина выпадающего меню в пикселях или CSS-единицах. При превышении контент переносится на новую строку.',
    },
    teleportTo: {
      control: 'text',
      description:
        'Селектор CSS или DOM-элемент, в который телепортируется выпадающее меню (использует Vue Teleport). По умолчанию: "body". Установите false для отключения телепорта.',
    },
    restoreFocus: {
      control: 'boolean',
      description: 'Восстанавливать фокус на элементе-триггере после закрытия выпадающего меню.',
    },
    animation: {
      control: 'select',
      description:
        'Тип анимации появления и исчезновения: zoom (масштабирование) | opacity (изменение прозрачности, по умолчанию).',
    },
    arrow: {
      control: 'boolean',
      description:
        'Показывать указательную стрелку, направленную на элемент-триггер. Автоматически увеличивает отступ (offset) на размер стрелки.',
    },
    hide: {
      control: false,
      description: 'Событие, срабатывающее при закрытии выпадающего меню.',
    },
    'show ': {
      control: false,
      description: 'Событие, срабатывающее при открытии выпадающего меню.',
      table: {
        category: 'events',
        type: {
          summary: '[]'
        }
      },
    },
    header: {
      control: 'boolean',
      description: 'Слот заголовка (header) в выпадающем меню.',
    },
    footer: {
      control: 'boolean',
      description: 'Слот нижней части (footer) в выпадающем меню.',
    },
    default: {
      control: false,
      description:
        'Основной контент выпадающего меню. Отображается между header и footer, если они заданы.',
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
        () => [args.placement, args.align, args.sameWidth, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      return { args, show, rootElRef, close, open, input, keyForRerender }
    },
    template: `
      <CButton ref="rootElRef">Список доступных стран</CButton>
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
          <li style="padding: 7px 10px;">Россия</li>
          <li style="padding: 7px 10px;">США</li>
          <li style="padding: 7px 10px;">Украина</li>
          <li style="padding: 7px 10px;">Великобритания</li>
        </ul>
        <template #footer v-if="args.footer">
          <div style="padding: 0 7px 7px;">
            <CButton size="sm" style="width: 100%;">Добавить</CButton>
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
        <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        placement="top"
        align="center"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef3?.$el"
        placement="top"
        align="end"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef4?.$el"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef5?.$el"
        align="center"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef6?.$el"
        align="end"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
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
        () => [args.placement, args.align, args.sameWidth, args.offset, args.arrow],
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
        <div style="padding: 5px 10px;">Содержимое выпадающего списка с анимацией 'opacity'.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        animation="zoom"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Содержимое выпадающего списка с анимацией 'zoom'.</div>
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
        () => [args.placement, args.align, args.sameWidth, args.offset, args.arrow],
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
        <CButton ref="rootElRef1">Ограничение по высоте</CButton>
        <CButton ref="rootElRef2" severity="secondary">Ограничение по ширине</CButton>
      </div>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef1?.$el"
        :max-height="150"
        :key="keyForRerender"
      >
        <ul style="display: flex; flex-direction: column; padding: 4px;">
          <li style="padding: 7px 10px;">Россия</li>
          <li style="padding: 7px 10px;">США</li>
          <li style="padding: 7px 10px;">Украина</li>
          <li style="padding: 7px 10px;">Великобритания</li>
          <li style="padding: 7px 10px;">Германия</li>
          <li style="padding: 7px 10px;">Франция</li>
          <li style="padding: 7px 10px;">Италия</li>
        </ul>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        :max-width="150"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">
          Это очень длинный текст, который будет ограничен по ширине и перенесется на новую строку при необходимости.
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
  decorators: () => ({ template: '<div style="height: 110px;"> <story/></div>' }),
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
        <CButton ref="rootElRef1">Отступ от края 5px</CButton>
      </div>
      <div style="position: fixed; top: 40px; right: 20px;">
        <CButton ref="rootElRef2">Отступ от края 15px</CButton>
      </div>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef1?.$el"
        :key="keyForRerender"
        placement="top"
        :boundaryPadding="5"
      >
        <div style="padding: 2px 7px;">Dropdown с boundaryPadding 5px.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        :key="keyForRerender"
        placement="top"
        :boundaryPadding="15"
      >
        <div style="padding: 2px 7px;">Dropdown с boundaryPadding 15px.</div>
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
        () => [args.placement, args.align, args.sameWidth, args.offset, args.arrow],
        () => {
          keyForRerender.value++
        },
      )

      return { args, rootElRef1, rootElRef2, rootElRef3, keyForRerender }
    },
    template: `
      <div style="display: flex; gap: 15px; flex-direction: column; align-items: center;">
        <CButton ref="rootElRef1">Offset: 5px (по умолчанию)</CButton>
        <CButton ref="rootElRef2">Offset: 15px</CButton>
        <CButton ref="rootElRef3">Offset: 30px</CButton>
      </div>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef1?.$el"
        :offset="5"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown с отступом 5px от триггера.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef2?.$el"
        :offset="15"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown с отступом 15px от триггера.</div>
      </CDropdown>
      <CDropdown
        v-bind="args"
        :root-el="rootElRef3?.$el"
        :offset="30"
        :key="keyForRerender"
      >
        <div style="padding: 5px 10px;">Dropdown с отступом 30px от триггера.</div>
      </CDropdown>
    `,
  }),
}
