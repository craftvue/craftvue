import type {
  SelectStoryName,
  CodeTexts,
} from 'docs/components/CustomSource/CustomSource.types'

const TEMPLATE_LINK = '`https://flagcdn.com/w20/${code}.png`'

const selectCodeTexts: CodeTexts<SelectStoryName> = {
  basic: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  disabled: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" disabled />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" disabled />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  disabledOption: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
          { label: 'Kazakhstan', value: 'kz', disabled: true }
        ])
      </script>
    `,
  },
  clearable: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" clearable />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" clearable />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref('ru')
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  invalid: {
    simple: `
      <CSelect v-model="value1" :options="countries" option-value="value" option-label="label" placeholder="Select country" invalid />
      <CSelect v-model="value2" :options="countries" option-value="value" option-label="label" placeholder="Select country" invalid variant="filled" />
    `,
    full: `
      <template>
        <div style="display: flex; justify-content: center; gap: 10px; width: 100%;">
          <CSelect v-model="value1" :options="countries" option-value="value" option-label="label" placeholder="Select country" invalid />
          <CSelect v-model="value2" :options="countries" option-value="value" option-label="label" placeholder="Select country" invalid variant="filled" />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"

        const value1 = ref(null)
        const value2 = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  multiple: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" multiple />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" multiple />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(['ru', 'cn'])
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  filled: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" variant="filled" />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" variant="filled" />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  fullWidth: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" full />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" full />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  loading: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" loading />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" loading />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  filter: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" searchable />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" searchable />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  size: {
    simple: `
      <CSelect v-model="value1" :options="countries" option-value="value" option-label="label" placeholder="Small" size="sm" />
      <CSelect v-model="value2" :options="countries" option-value="value" option-label="label" placeholder="Normal"  />
      <CSelect v-model="value3" :options="countries" option-value="value" option-label="label" placeholder="Large" size="lg" />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%;">
          <CSelect v-model="value1" :options="countries" option-value="value" option-label="label" placeholder="Small" size="sm" />
          <CSelect v-model="value2" :options="countries" option-value="value" option-label="label" placeholder="Normal"  />
          <CSelect v-model="value3" :options="countries" option-value="value" option-label="label" placeholder="Large" size="lg" />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"

        const value1 = ref(null)
        const value2 = ref(null)
        const value3 = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  checkmark: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" checkmark />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" checkmark />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref('ru')
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])
      </script>
    `,
  },
  template: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" >
        <template #value="{option, placeholder}">
          <div v-if="option">
            <img :src="getLink(option.value)" :alt="option.value" />
            <div>{{option.label}}</div>
          </div>
          <span v-else>
            {{placeholder}}
          </span>
        </template>
        <template #option="{option}">
          <img :src="getLink(option.value)" :alt="option.value" />
          <div>{{option.label}}</div>
        </template>
        <template #dropdown>
          <CIcon name="home" size="20" />
        </template>
        <template #header>
          <div>List of available countries</div>
        </template>
        <template #footer>
          <CButton label="Add" :icon="AddIcon" size="sm" />
        </template>
      </CSelect>
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" >
          <template #value="{option, placeholder}">
            <div v-if="option" style="display: flex; gap: 10px; align-items: center;">
              <img :src="getLink(option.value)" :alt="option.value" />
              <div>{{option.label}}</div>
            </div>
            <span v-else>
              {{placeholder}}
            </span>
          </template>
          <template #option="{option}">
            <div style="display: flex; gap: 10px; align-items: center;">
              <img :src="getLink(option.value)" :alt="option.value" />
              <div>{{option.label}}</div>
            </div>
          </template>
          <template #dropdown>
            <CIcon name="home" size="20" />
          </template>
          <template #header>
            <div style="padding: 10px 10px 5px;">List of available countries</div>
          </template>
          <template #footer>
            <div style="padding: 8px;">
              <CButton label="Add" :icon="AddIcon" size="sm" style="width: 100%;" />
            </div>
          </template>
        </CSelect>
      </template>
      <script setup>
        import { ref } from "vue"
        import AddIcon from "@craftvue/icons/add"
        import CIcon from "craftvue/icon"
        import CButton from "craftvue/button"

        const value = ref(null)
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])

        const getLink = (code: string) => {
          return ${TEMPLATE_LINK}
        }
      </script>
    `,
  },
  form: {
    simple: `
      <form @submit.prevent="submit" style="width: 15rem;">
        <CFormItem required label="Select country" :error-message="error" >
          <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" :invalid="!!error" clearable full />
        </CFormItem>
        <CButton label="Submit" type="submit" style="width: 100%; margin-top: 10px;" />
      </form>
    `,
    full: `
      <template>
        <form @submit.prevent="submit" style="width: 15rem;">
          <CFormItem required label="Select country" :error-message="error" >
            <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Select country" :invalid="!!error" clearable full />
          </CFormItem>
          <CButton label="Submit" type="submit" style="width: 100%; margin-top: 20px;" />
        </form>
      <template>
      <script setup>
        import { ref } from "vue"
        import CFormItem from "craftvue/formitem"
        import CButton from "craftvue/button"

        const value = ref(null)
        const error = ref('')
        const countries = ref([
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'Brazil', value: 'br' },
        ])

        const submit = () => {
          error.value = value.value ? '' : 'Please select a city'
        }
      </script>
    `,
  },
}

export default selectCodeTexts
