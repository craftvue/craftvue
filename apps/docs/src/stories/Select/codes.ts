import type { SelectStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const TEMPLATE_LINK = '`https://flagcdn.com/w20/${code}.png`'

const selectCodeTexts: CodeTexts<SelectStoryName> = {
  basic: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  disabled: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" disabled />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" disabled />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  disabledOption: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
          { label: 'Казахстан', value: 'kz', disabled: true }
        ])
      </script>
    `,
  },
  clearable: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" clearable />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" clearable />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref('ru')
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  invalid: {
    simple: `
      <CSelect v-model="value1" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" invalid />
      <CSelect v-model="value2" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" invalid variant="filled" />
    `,
    full: `
      <template>
        <div style="display: flex; justify-content: center; gap: 10px; width: 100%;">
          <CSelect v-model="value1" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" invalid />
          <CSelect v-model="value2" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" invalid variant="filled" />
        </div>
      </template>
      <script setup>
        import { ref } from "vue"

        const value1 = ref(null)
        const value2 = ref(null)
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  multiple: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" multiple />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" multiple />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(['ru', 'cn'])
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  filled: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" variant="filled" />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" variant="filled" />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  fullWidth: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" full />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" full />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  loading: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" loading />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" loading />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  filter: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" searchable />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" searchable />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref(null)
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
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
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  checkmark: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" checkmark />
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" checkmark />
      </template>
      <script setup>
        import { ref } from "vue"

        const value = ref('ru')
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])
      </script>
    `,
  },
  template: {
    simple: `
      <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" >
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
          <div>
            <img :src="getLink(option.value)" :alt="option.value" />
            <div>{{option.label}}</div>
          </div>
        </template>
        <template #dropdown>
          <CIcon name="home" size="20" />
        </template>
        <template #header>
          <div>Список доступных стран</div>
        </template>
        <template #footer>
          <div>
            <CButton label="Добавить" :icon="AddIcon" size="sm" />
          </div>
        </template>
      </CSelect>
    `,
    full: `
      <template>
        <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" >
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
            <div style="padding: 10px 10px 5px;">Список доступных стран</div>
          </template>
          <template #footer>
            <div style="padding: 8px;">
              <CButton label="Добавить" :icon="AddIcon" size="sm" style="width: 100%;" />
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
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
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
        <CFormItem required label="Выберите страну" :error-message="error" >
          <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" :invalid="!!error" clearable full />
        </CFormItem>
        <CButton label="Отправить" type="submit" style="width: 100%; margin-top: 10px;" />
      </form>
    `,
    full: `
      <template>
        <form @submit.prevent="submit" style="width: 15rem;">
          <CFormItem required label="Выберите страну" :error-message="error" >
            <CSelect v-model="value" :options="countries" option-value="value" option-label="label" placeholder="Выберите страну" :invalid="!!error" clearable full />
          </CFormItem>
          <CButton label="Отправить" type="submit" style="width: 100%; margin-top: 20px;" />
        </form>
      <template>
      <script setup>
        import { ref } from "vue"
        import CFormItem from "craftvue/formitem"
        import CButton from "craftvue/button"

        const value = ref(null)
        const error = ref('')
        const countries = ref([
          { label: 'Россия', value: 'ru' },
          { label: 'США', value: 'us' },
          { label: 'Япония', value: 'jp' },
          { label: 'Китай', value: 'cn' },
          { label: 'Бразилия', value: 'br' },
        ])

        const submit = () => {
          error.value = value.value ? '' : 'Необходимо выбрать город'
        }
      </script>
    `,
  },
}

export default selectCodeTexts
