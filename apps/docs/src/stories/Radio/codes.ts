import type { RadioStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const radioCodeTexts: CodeTexts<RadioStoryName> = {
  basic: {
    simple: `
      <CRadio v-model="value" value="option1" label="Option 1" />
      <CRadio v-model="value" value="option2" label="Option 2" />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <CRadio
            v-model="value"
            value="option1"
            label="Option 1"
          />
          <CRadio
            v-model="value"
            value="option2"
            label="Option 2"
          />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CRadio from "craftvue/radio"

        const value = ref('option1')
      </script>
    `,
  },
  filled: {
    simple: `
      <CRadio v-model="value" value="option1" label="Outlined" />
      <CRadio v-model="value" value="option2" label="Filled" variant="filled" />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 20px;">
          <CRadio v-model="value" value="option1" label="Outlined" />
          <CRadio v-model="value" value="option2" label="Filled" variant="filled" />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CRadio from "craftvue/radio"

        const value = ref(undefined)
      </script>
    `,
  },
  size: {
    simple: `
      <CRadio
        v-model="value"
        value="option1"
        size="sm"
        label="Small"
      />
      <CRadio
        v-model="value"
        value="option2"
        label="Normal"
      />
      <CRadio
        v-model="value"
        value="option3"
        size="lg"
        label="Large"
      />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 20px;">
          <CRadio
            v-model="value"
            value="option1"
            size="sm"
            label="Small"
          />
          <CRadio
            v-model="value"
            value="option2"
            label="Normal"
          />
          <CRadio
            v-model="value"
            value="option3"
            size="lg"
            label="Large"
          />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CRadio from "craftvue/radio"

        const value = ref('option2')
      </script>
    `,
  },
  disabled: {
    simple: `
      <CRadio v-model="value" value="option1" label="Option 1" disabled />
      <CRadio v-model="value" value="option2" label="Option 2" disabled />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <CRadio
            v-model="value"
            value="option1"
            label="Option 1"
            disabled
          />
          <CRadio
            v-model="value"
            value="option2"
            label="Option 2"
            disabled
          />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CRadio from "craftvue/radio"

        const value = ref('option1')
      </script>
    `,
  },
  invalid: {
    simple: `
      <CRadio v-model="value" value="option1" label="Option 1" :invalid="!value" />
    `,
    full: `
      <template>
        <CRadio v-model="value" value="option1" label="Option 1" :invalid="!value" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CRadio from "craftvue/radio"

        const value = ref(undefined)
      </script>
    `,
  },
  group: {
    simple: `
      <CRadioGroup v-model="selectedCountry" orientation="horizontal">
        <CRadio
          v-for="country in countries"
          :key="country"
          :value="country"
          :label="country"
        />
      </CRadioGroup>

      <div>{{ selectedCountry }}</div>
    `,
    full: `
      <template>
        <CRadioGroup v-model="selectedCountry" orientation="horizontal">
          <CRadio
            v-for="country in countries"
            :key="country"
            :value="country"
            :label="country"
          />
        </CRadioGroup>

        <div style="margin-top: 20px; padding: 10px; background-color: #262626; border-radius: var(--c-border-radius);">
          {{ selectedCountry }}
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CRadio from "craftvue/radio"
        import CRadioGroup from "craftvue/radiogroup"

        const selectedCountry = ref('Russia')
        const countries = ['Russia', 'USA', 'Japan', 'China']
      </script>
    `,
  },
  customIcon: {
    simple: `
      <CRadio v-model="value" value="option1" label="Option 1" >
        <template #icon="{ checked, iconClass }">
          <span v-if="checked" :class="iconClass">✓</span>
        </template>
      </CRadio>
      <CRadio v-model="value" value="option2" label="Option 2" >
        <template #icon="{ checked, iconClass }">
          <span v-if="checked" :class="iconClass">✓</span>
        </template>
      </CRadio>
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <CRadio
            v-model="value"
            value="option1"
            label="Option 1"
          >
            <template #icon="{ checked, iconClass }">
              <span v-if="checked" :class="iconClass">✓</span>
            </template>
          </CRadio>
          <CRadio
            v-model="value"
            value="option2"
            label="Option 2"
          >
            <template #icon="{ checked, iconClass }">
              <span v-if="checked" :class="iconClass">✓</span>
            </template>
          </CRadio>
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CRadio from "craftvue/radio"

        const value = ref('option1')
      </script>
    `,
  },
  customLabel: {
    simple: `
      <CRadio v-model="value" value="option1" label="Option 1" >
        <template #default>
          <span>Default slot</span>
        </template>
      </CRadio>
      <CRadio v-model="value" value="option2" label="Option 2" />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <CRadio
            v-model="value"
            value="option1"
            label="Option 1"
          >
            <template #default>
              <span style="color: #bea87b; font-weight: 500;">Default slot</span>
            </template>
          </CRadio>
          <CRadio
            v-model="value"
            value="option2"
            label="Option 2"
          />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CRadio from "craftvue/radio"

        const value = ref('option1')
      </script>
    `,
  },
  form: {
    simple: `
      <CFormItem label="Select country" required :errorMessage="error">
        <CRadioGroup
          v-model="selectedCountry"
          :invalid="!!error"
          orientation="horizontal"
          @change="handleChange"
        >
          <CRadio
            v-for="country in countries"
            :key="country"
            :value="country"
            :label="country"
          />
        </CRadioGroup>
      </CFormItem>
      <CButton
        label="Submit"
        severity="secondary"
        @click="submit"
      />
    `,
    full: `
      <template>
        <CFormItem label="Select country" required :errorMessage="error">
          <CRadioGroup
            v-model="selectedCountry"
            :invalid="!!error"
            orientation="horizontal"
            @change="handleChange"
          >
            <CRadio
              v-for="country in countries"
              :key="country"
              :value="country"
              :label="country"
            />
          </CRadioGroup>
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
        import CRadio from "craftvue/radio"
        import CRadioGroup from "craftvue/radiogroup"
        import CFormItem from "craftvue/formitem"
        import CButton from "craftvue/button"

        const selectedCountry = ref(undefined)
        const countries = ['Russia', 'USA', 'Japan', 'China']
        const error = ref('')

        const submit = () => {
          error.value = selectedCountry.value ? '' : 'Please select a country'
        }

        const handleChange = () => {
          error.value = ''
        }
      </script>
    `,
  },
}

export default radioCodeTexts
