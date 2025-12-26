import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import { CRadioGroup } from 'craftvue'
import type { RadioGroupEmits } from 'craftvue'

type AllRadioGroupArgs = ComponentPropsAndSlots<typeof CRadioGroup> & RadioGroupEmits

const meta = {
  title: 'Form/Radio/RadioGroup',
  component: CRadioGroup,
  parameters: {
    controls: {
      exclude: ['$slots', 'onUpdate:modelValue', 'onChange'],
    },
  },
  argTypes: {
    modelValue: {
      description: 'Выбранное значение в группе радиокнопок',
    },
    disabled: {
      description: 'Отключает все радиокнопки в группе, делая их недоступными для взаимодействия',
    },
    invalid: {
      description: 'Помечает группу радиокнопок как невалидную',
    },
    size: {
      description:
        'Размер всех радиокнопок в группе: sm (маленький), нормальный (по умолчанию), lg (большой)',
    },
    variant: {
      description:
        'Вариант стиля всех радиокнопок в группе: outlined (с обводкой) или filled (заполненный)',
    },
    name: {
      description: 'Атрибут name для всех радиокнопок в группе',
    },
    orientation: {
      description: 'Ориентация расположения радиокнопок',
    },
    default: {
      description: 'Слот для размещения дочерних компонентов CRadio',
    },
    'update:modelValue': {
      description: 'Событие для обновления выбранного значения',
    },
    change: {
      description: 'Событие, возникающее при изменении выбранной опции в группе',
    },
  },
  tags: ['!dev'],
} satisfies Meta<AllRadioGroupArgs>

export default meta
type Story = StoryObj<AllRadioGroupArgs>

export const Basic: Story = {
  args: {},
}
