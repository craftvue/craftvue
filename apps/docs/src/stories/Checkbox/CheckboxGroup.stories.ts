import type { ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite'
import { CCheckboxGroup } from 'craftvue'
import type { CheckboxGroupEmits } from 'craftvue'

type AllCheckboxGroupArgs = ComponentPropsAndSlots<typeof CCheckboxGroup> & CheckboxGroupEmits

const meta = {
  title: 'Form/Checkbox/CheckboxGroup',
  component: CCheckboxGroup,
  parameters: {
    controls: {
      exclude: ['$slots', 'onUpdate:modelValue', 'onChange'],
    },
  },
  argTypes: {
    modelValue: {
      description: 'Массив выбранных значений чекбоксов в группе',
    },
    disabled: {
      description: 'Отключает все чекбоксы в группе, делая их недоступными для взаимодействия',
    },
    invalid: {
      description: 'Помечает группу чекбоксов как невалидную',
    },
    size: {
      description:
        'Размер всех чекбоксов в группе: sm (маленький), нормальный (по умолчанию), lg (большой)',
    },
    variant: {
      description:
        'Вариант стиля всех чекбоксов в группе: outlined (с обводкой) или filled (заполненный)',
    },
    name: {
      description:
        'Атрибут name для всех чекбоксов в группе (используется для группировки в формах)',
    },
    orientation: {
      description: 'Ориентация расположения чекбоксов',
    },
    default: {
      description: 'Слот для размещения дочерних компонентов CCheckbox',
    },
    'update:modelValue': {
      description: 'Событие для обновления массива выбранных значений',
    },
    change: {
      description: 'Событие, возникающее при изменении выбранных значений в группе',
    },
  },
  tags: ['!dev'],
} satisfies Meta<AllCheckboxGroupArgs>

export default meta
type Story = StoryObj<AllCheckboxGroupArgs>

export const Basic: Story = {
  args: {},
}
