import type { SwitchStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const switchCodeTexts: CodeTexts<SwitchStoryName> = {
  basic: {
    simple: `
      <CSwitch v-model="value" />
    `,
    full: `
      <template>
        <CSwitch v-model="value" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value = ref(false)
      </script>
    `,
  },
  withLabel: {
    simple: `
      <CSwitch v-model="value" label="Switch to dark theme" />
    `,
    full: `
      <template>
        <CSwitch v-model="value" label="Switch to dark theme" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value = ref(false)
      </script>
    `,
  },
  filled: {
    simple: `
      <CSwitch v-model="value1" label="Outlined" />
      <CSwitch v-model="value2" label="Filled" variant="filled" />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <CSwitch v-model="value1" label="Outlined" />
          <CSwitch v-model="value2" label="Filled" variant="filled" />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value1 = ref(false)
        const value2 = ref(false)
      </script>
    `,
  },
  size: {
    simple: `
      <CSwitch v-model="value1" label="Small" size="sm" />
      <CSwitch v-model="value2" label="Normal" />
      <CSwitch v-model="value3" label="Large" size="lg" />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <CSwitch v-model="value1" label="Small" size="sm" />
          <CSwitch v-model="value2" label="Normal" />
          <CSwitch v-model="value3" label="Large" size="lg" />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value1 = ref(false)
        const value2 = ref(false)
        const value3 = ref(false)
      </script>
    `,
  },
  disabled: {
    simple: `
      <CSwitch v-model="value1" label="Checked" disabled />
      <CSwitch v-model="value2" label="No checked" disabled />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <CSwitch v-model="value1" label="Checked" disabled />
          <CSwitch v-model="value2" label="No checked" disabled />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value1 = ref(true)
        const value2 = ref(false)
      </script>
    `,
  },
  invalid: {
    simple: `
      <CSwitch v-model="value" :invalid="!value" />
    `,
    full: `
      <template>
        <CSwitch v-model="value" :invalid="!value" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value = ref(false)
      </script>
    `,
  },
  loading: {
    simple: `
      <CSwitch v-model="value" label="Loading" loading />
    `,
    full: `
      <template>
        <CSwitch v-model="value" label="Loading" loading />
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value = ref(false)
      </script>
    `,
  },
  customLabel: {
    simple: `
      <CSwitch v-model="value" label="Switch to dark theme">
        <template #default="{checked}">
          <span>
            {{ checked ? 'Checked' : 'No checked' }}
          </span>
        </template>
      </CSwitch>
    `,
    full: `
      <template>
        <CSwitch v-model="value" label="Switch to dark theme">
          <template #default="{checked}">
            <span style="color: #bea87b; font-weight: 500;">
              {{ checked ? 'Checked' : 'No checked' }}
            </span>
          </template>
        </CSwitch>
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value = ref(false)
      </script>
    `,
  },
  template: {
    simple: `
      <CSwitch v-model="value" label="Switch to dark theme">
        <template #thumb="{checked}" >
          <CIcon :name="checked ? 'add' : 'minus'" />
        </template>
      </CSwitch>
    `,
    full: `
      <template>
        <CSwitch v-model="value" label="Switch to dark theme">
          <template #thumb="{checked}" >
            <CIcon :name="checked ? 'add' : 'minus'" />
          </template>
        </CSwitch>
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value = ref(true)
      </script>
    `,
  },
  customValues: {
    simple: `
      <CSwitch v-model="value1" label="Custom value (no)" true-value="yes" false-value="no" />
      <CSwitch v-model="value2" label="Custom value (yes)" true-value="yes" false-value="no" />

      <div>
        <div>Value 1: {{ value1 }}</div>
        <div>Value 2: {{ value2 }}</div>
      </div>
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <CSwitch v-model="value1" label="Custom value (no)" true-value="yes" false-value="no" />
          <CSwitch v-model="value2" label="Custom value (yes)" true-value="yes" false-value="no" />
        </div>
        <div style="margin-top: 10px; padding: 10px; background-color: #262626; border-radius: var(--c-border-radius);">
          <div>Value 1: {{ value1 }}</div>
          <div>Value 2: {{ value2 }}</div>
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"

        const value1 = ref('no')
        const value2 = ref('yes')
      </script>
    `,
  },
  form: {
    simple: `
      <CFormItem
        label="Please check to agree"
        required
        :errorMessage="error"
      >
        <CSwitch
          v-model="value"
          :invalid="!!error"
          label="Accept Terms & Conditions"
          @change="handleChange"
        />
      </CFormItem>
      <CButton
        label="Submit"
        severity="secondary"
        @click="submit"
      />
    `,
    full: `
      <template>
        <CFormItem
          label="Please check to agree"
          required
          :errorMessage="error"
        >
          <CSwitch
            v-model="value"
            :invalid="!!error"
            label="Accept Terms & Conditions"
            @change="handleChange"
          />
        </CFormItem>
        <CButton
          label="Submit"
          severity="secondary"
          style="width: 100%; margin-top: 20px;"
          @click="submit"
        />
      </template>
      <script setup>
        import { ref } from "vue"
        import CSwitch from "craftvue/switch"
        import CFormItem from "craftvue/formitem"
        import CButton from "craftvue/button"

        const value = ref(false)
        const error = ref('')

        const submit = () => {
          error.value = value.value ? '' : 'Must be checked'
        }

        const handleChange = () => {
          if (value.value) {
            error.value = ''
          }
        }
      </script>
    `,
  },
}

export default switchCodeTexts
