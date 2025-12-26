import type { CheckboxStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const checkboxCodeTexts: CodeTexts<CheckboxStoryName> = {
  basic: {
    simple: `
      <CCheckbox v-model="value" />
    `,
    full: `
      <template>
        <CCheckbox v-model="value" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value = ref(false)
      </script>
    `,
  },
  withLabel: {
    simple: `
      <CCheckbox v-model="value" label="Agree to terms" />
    `,
    full: `
      <template>
        <CCheckbox v-model="value" label="Agree to terms" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value = ref(false)
      </script>
    `,
  },
  filled: {
    simple: `
      <CCheckbox v-model="value" variant="filled" />
    `,
    full: `
      <template>
        <CCheckbox v-model="value" variant="filled" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value = ref(false)
      </script>
    `,
  },
  size: {
    simple: `
      <CCheckbox v-model="value1" size="sm" label="Small" />
      <CCheckbox v-model="value2" label="Normal" />
      <CCheckbox v-model="value3" size="lg" label="Large" />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 20px;">
          <CCheckbox v-model="value1" size="sm" label="Small" />
          <CCheckbox v-model="value2" label="Normal" />
          <CCheckbox v-model="value3" size="lg" label="Large" />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value1 = ref(false)
        const value2 = ref(false)
        const value3 = ref(false)
      </script>
    `,
  },
  indeterminate: {
    simple: `
      <CCheckbox v-model="checkAll" :indeterminate="isIndeterminate" label="Check all" @change="handleCheckAllChange" />
      <CCheckboxGroup v-model="checkedCountries" orientation="horizontal" @change="handleCheckedCountriesChange">
        <CCheckbox v-for="country in countries" :key="country" :label="country" :value="country" />
      </CCheckboxGroup>
    `,
    full: `
      <template>
        <CCheckbox v-model="checkAll" :indeterminate="isIndeterminate" label="Check all" @change="handleCheckAllChange" />
        <CCheckboxGroup v-model="checkedCountries" orientation="horizontal" @change="handleCheckedCountriesChange">
          <CCheckbox v-for="country in countries" :key="country" :label="country" :value="country" />
        </CCheckboxGroup>
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"
        import CCheckboxGroup from "craftvue/checkboxgroup"

        const checkAll = ref(false)
        const isIndeterminate = ref(true)
        const checkedCountries = ref(['Russia', 'USA'])
        const countries = ref(['Russia', 'USA', 'Japan', 'China'])

        const handleCheckAllChange = (value: boolean) => {
          checkedCountries.value = value ? countries.value : []
          isIndeterminate.value = false

        const handleCheckedCountriesChange = (value: string[]) => {
          const checkedCount = value.length
          checkAll.value = checkedCount === countries.value.length
          isIndeterminate.value = checkedCount > 0 && checkedCount < countries.value.length
        }
      </script>
    `,
  },
  disabled: {
    simple: `
      <CCheckbox v-model="value1" disabled />
      <CCheckbox v-model="value2" disabled />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 10px;">
          <CCheckbox v-model="value1" disabled />
          <CCheckbox v-model="value2" disabled />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value1 = ref(false)
        const value2 = ref(true)
      </script>
    `,
  },
  invalid: {
    simple: `
      <CCheckbox v-model="value" :invalid="!value" />
    `,
    full: `
      <template>
        <CCheckbox v-model="value" :invalid="!value" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value = ref(false)
      </script>
    `,
  },
  group: {
    simple: `
      <CCheckboxGroup v-model="checkedCountries">
        <CCheckbox
          v-for="country in countries"
          :key="country"
          :value="country"
          :label="country"
        />
      </CCheckboxGroup>

      <div>
        {{ checkedCountries }}
      </div>
    `,
    full: `
      <template>
        <CCheckboxGroup v-model="checkedCountries">
          <CCheckbox
            v-for="country in countries"
            :key="country"
            :value="country"
            :label="country"
          />
        </CCheckboxGroup>

        <div style="margin-top: 20px;padding: 10px; background-color: #262626; border-radius: var(--c-border-radius);">
          {{ checkedCountries }}
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"
        import CCheckboxGroup from "craftvue/checkboxgroup"

        const checkedCountries = ref(args['Group.modelValue'] || [])
        const countries = ['Russia', 'USA', 'Japan', 'China']
      </script>
    `,
  },
  customIcon: {
    simple: `
      <CCheckbox v-model="value" label="Agree to terms">
        <template #icon="{ checked, indeterminate, iconClass }">
          <span v-if="checked" :class="iconClass">✓</span>
          <span v-else-if="indeterminate" :class="iconClass">○</span>
        </template>
      </CCheckbox>
    `,
    full: `
      <template>
        <CCheckbox v-model="value" label="Agree to terms">
          <template #icon="{ checked, indeterminate, iconClass }">
            <span v-if="checked" :class="iconClass">✓</span>
            <span v-else-if="indeterminate" :class="iconClass">○</span>
          </template>
        </CCheckbox>
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value = ref(true)
      </script>
    `,
  },
  customLabel: {
    simple: `
      <CCheckbox v-model="value">
        <template #default>
          <span>Default slot</span>
        </template>
      </CCheckbox>
    `,
    full: `
      <template>
        <CCheckbox v-model="value">
          <template #default>
            <span style="color: var(--prime-color); font-weight: 500;">Default slot</span>
          </template>
        </CCheckbox>
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value = ref(true)
      </script>
    `,
  },
  customValues: {
    simple: `
      <CCheckbox v-model="value1" label="Custom value (no)" true-value="yes" false-value="no" />
      <CCheckbox v-model="value2" label="Custom value (yes)" true-value="yes" false-value="no" />

      <div>
        <div>Value 1: {{ value1 }}</div>
        <div>Value 2: {{ value2 }}</div>
      </div>
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <CCheckbox v-model="value1" label="Custom value (no)" true-value="yes" false-value="no" />
          <CCheckbox v-model="value2" label="Custom value (yes)" true-value="yes" false-value="no" />
        </div>
        <div style="margin-top: 10px; padding: 10px; background-color: #262626; border-radius: var(--c-border-radius);">
          <div>Value 1: {{ value1 }}</div>
          <div>Value 2: {{ value2 }}</div>
        </div>
      </template>
      <script setup>
        import { ref } from "vue"
        import CCheckbox from "craftvue/checkbox"

        const value1 = ref('no')
        const value2 = ref('yes')
      </script>
    `,
  },
  form: {
    simple: `
      <CFormItem label="Check options" required :errorMessage="error">
        <CCheckboxGroup
          v-model="checkedCountries"
          :invalid="!!error"
          orientation="horizontal"
          @change="handleChange"
        >
          <CCheckbox
            v-for="country in countries"
            :key="country"
            :value="country"
            :label="country"
          />
        </CCheckboxGroup>
      </CFormItem>
      <CButton label="Submit" severity="secondary" @click="submit" />
    `,
    full: `
      <template>
        <CFormItem label="Check options" required :errorMessage="error">
          <CCheckboxGroup
            v-model="checkedCountries"
            :invalid="!!error"
            orientation="horizontal"
            @change="handleChange"
          >
            <CCheckbox
              v-for="country in countries"
              :key="country"
              :value="country"
              :label="country"
            />
          </CCheckboxGroup>
        </CFormItem>
      <CButton label="Submit" severity="secondary" style="width: 100%; margin-top: 20px;" @click="submit" />
      </template>
      <script setup>
        import { ref } from "vue"
        import CFormItem from "craftvue/formitem"
        import CButton from "craftvue/button"
        import CCheckbox from "craftvue/checkbox"
        import CCheckboxGroup from "craftvue/checkboxgroup"

        const checkedCountries = ref([])
        const countries = ['Russia', 'USA', 'Japan', 'China']
        const error = ref('')

        const submit = () => {
          error.value = checkedCountries.value.length ? '' : 'Check at least 1 option'
        }

        const handleChange = () => {
          if (checkedCountries.value.length) {
            error.value = ''
          }
        }
      </script>
    `,
  },
}

export default checkboxCodeTexts
