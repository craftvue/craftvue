/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CFormItem, CInput, CButton, CRadio, CRadioGroup } from 'craftvue'
import { ref } from 'vue'

const meta = {
  title: 'Form/FormItem/FormItem',
  component: CFormItem,
  args: {
    label: 'Label',
    required: false,
    for: '',
    errorMessage: 0 as any,
  },
  parameters: {
    controls: {
      exclude: ['$slots'],
    },
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст лейбла для поля формы',
    },
    required: {
      control: 'boolean',
      description: 'Обязательное поле. Добавляет звездочку (*) к лейблу',
    },
    errorMessage: {
      control: {
        type: 'select',
        labels: { 0: 'Без сообщения', 1: 'Сообщение 1', 2: 'Сообщение 2', 3: 'Сообщение 3' },
      },
      options: [0, 1, 2, 3],
      mapping: {
        0: '',
        1: 'Enter a valid email',
        2: 'This field is required',
        3: 'Password is too short',
      },
      description: 'Сообщение об ошибке валидации',
    },
    for: {
      control: 'text',
      description: 'ID элемента, с которым связан лейбл (для доступности)',
    },
    default: {
      control: false,
      description: 'Основной слот для содержимого поля формы (например, CInput, CSelect и т.д.)',
    },
    error: {
      control: false,
      description: 'Слот для кастомного отображения ошибки. Получает объект с полем error',
    },
    labelSlot: {
      control: false,
      description: 'Слот для кастомного содержимого лейбла. Получает объект с полем label',
    },
  },
} satisfies Meta<typeof CFormItem>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Username',
  },
  render: (args) => ({
    components: { CFormItem, CInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <CFormItem v-bind="args">
        <CInput v-model="value" placeholder="Enter name..." />
      </CFormItem>
    `,
  }),
}

export const WithLabel: Story = {
  args: {
    label: 'Email address',
  },
  argTypes: {
    for: { control: false },
  },
  render: (args) => ({
    components: { CFormItem, CInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <CFormItem v-bind="args">
        <CInput v-model="value" type="email" placeholder="example@email.com" />
      </CFormItem>
    `,
  }),
}

export const Required: Story = {
  args: {
    label: 'Password',
    required: true,
  },
  argTypes: {
    required: { control: false },
    for: { control: false },
  },
  render: (args) => ({
    components: { CFormItem, CInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <CFormItem v-bind="args">
        <CInput v-model="value" type="password" placeholder="Enter your password" />
      </CFormItem>
    `,
  }),
}

export const WithError: Story = {
  args: {
    label: 'Email address',
    errorMessage: 1 as any,
  },
  argTypes: {
    for: { control: false },
  },
  render: (args) => ({
    components: { CFormItem, CInput },
    setup() {
      const value = ref('craftvue@gmail.com')
      return { args, value }
    },
    template: `
      <CFormItem v-bind="args">
        <CInput v-model="value" type="email" invalid />
      </CFormItem>
    `,
  }),
}

export const CustomLabel: Story = {
  args: {
    label: 'Phone number',
  },
  argTypes: {
    for: { control: false },
  },
  render: (args) => ({
    components: { CFormItem, CInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <CFormItem v-bind="args">
        <template #labelSlot>
          <span>For example: <code style="color: var(--prime-color); padding-left: 4px;">+7(953)413-38-83</code></span>
        </template>
        <CInput v-model="value" placeholder="Enter number..." />
      </CFormItem>
    `,
  }),
}

export const CustomError: Story = {
  args: {
    label: 'Password',
    errorMessage: 'The password must contain at least 8 characters.',
  },
  argTypes: {
    for: {
      control: false,
    },
  },
  render: (args) => ({
    components: { CFormItem, CInput },
    setup() {
      const value = ref('123456')
      return { args, value }
    },
    template: `
      <CFormItem v-bind="args">
        <CInput v-model="value" type="password" invalid />
        <template #error="{ error }">
          <div style="color: var(--invalid-color); font-size: 12px; display: flex; align-items: center; gap: 4px; margin-top: 4px;">
            <span>⚠️</span>
            <span>{{ error }}</span>
          </div>
        </template>
      </CFormItem>
    `,
  }),
}

export const WithFor: Story = {
  args: {
    label: 'Phone number',
    for: 'phone-input',
  },
  argTypes: {},
  render: (args) => ({
    components: { CFormItem, CInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <CFormItem v-bind="args">
        <CInput id="phone-input" v-model="value" type="tel" placeholder="+7 (999) 123-45-67" />
      </CFormItem>
    `,
  }),
}

export const Form: Story = {
  argTypes: {
    label: { control: false },
    required: { control: false },
    errorMessage: { control: false },
    for: { control: false },
  },
  render: () => ({
    components: { CFormItem, CInput, CButton, CRadio, CRadioGroup },
    setup() {
      const form = ref({
        name: '',
        email: '',
        phone: '',
        resources: '',
      })
      const errors = ref({
        name: '',
        email: '',
        phone: '',
        resources: '',
      })

      const submit = () => {
        errors.value.name = form.value.name ? '' : 'Please enter name'
        errors.value.email = form.value.email ? '' : 'Please enter email Please enter email Please enter email'
        errors.value.resources = form.value.resources ? '' : 'Please select resource'
      }

      const reset = () => {
        form.value = {
          name: '',
          email: '',
          phone: '',
          resources: '',
        }
        errors.value = {
          name: '',
          email: '',
          phone: '',
          resources: '',
        }
      }

      return { form, errors, submit, reset }
    },
    template: `
      <form @submit.prevent="submit" style="display: flex; flex-direction: column; gap: 1rem; width: 400px; padding: 20px; border: 1px solid var(--prime-color); border-radius: 8px;">
        <h1 style="margin-bottom: 10px; font-size: 24px;">Contact form</h1>

        <CFormItem label="Name" required :errorMessage="errors.name">
          <CInput v-model="form.name" placeholder="Your name" :invalid="!!errors.name" style="width: 100%;"/>
        </CFormItem>

        <CFormItem label="Email" required :errorMessage="errors.email">
          <CInput v-model="form.email" type="email" placeholder="your@email.com" :invalid="!!errors.email" style="width: 100%;" />
        </CFormItem>

        <CFormItem label="Phone number">
          <CInput v-model="form.phone" type="tel" placeholder="+7 (999) 123-45-67" style="width: 100%;" />
        </CFormItem>

        <CFormItem label="Resources" required :errorMessage="errors.resources">
          <CRadioGroup v-model="form.resources" orientation="horizontal">
            <CRadio value="online" label="Online resource" />
            <CRadio value="offline" label="Offline resource" />
          </CRadioGroup>
        </CFormItem>

        <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr;  gap: 10px;">
          <CButton label="Submit" type="submit" />
          <CButton label="Reset" @click.prevent="reset" severity="secondary" />
        </div>
      </form>
    `,
  }),
}
