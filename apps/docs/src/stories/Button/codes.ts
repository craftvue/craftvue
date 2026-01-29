import type {
  ButtonStoryName,
  CodeTexts,
} from 'docs/components/CustomSource/CustomSource.types'

const buttonCodeTexts: CodeTexts<ButtonStoryName> = {
  basic: {
    simple: '<CButton label="Button" />',
    full: `
      <template>
        <CButton label='Button' />
      </template>
      <script setup></script>
    `,
  },
  icons: {
    simple: `
      <CButton :icon="HomeIcon" aria-label="Home" />
      <CButton :icon="AddIcon" label="Add" />
      <CButton :icon="DeleteIcon" label="Delete" icon-pos="right" />
      <CButton :icon="EditIcon" label="Edit" icon-pos="top" />
      <CButton :icon="SaveIcon" label="Save" icon-pos="bottom" />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
          <div style="display: flex; gap: 10px;">
            <CButton :icon="HomeIcon" aria-label="Home" />
            <CButton :icon="AddIcon" label="Add" />
            <CButton :icon="DeleteIcon" label="Delete" icon-pos="right" />
          </div>
          <div style="display: flex; gap: 10px;">
            <CButton :icon="EditIcon" label="Edit" icon-pos="top" />
            <CButton :icon="SaveIcon" label="Save" icon-pos="bottom" />
          </div>
        </div>
      </template>
      <script setup>
        import { AddIcon, DeleteIcon, EditIcon, SaveIcon, HomeIcon } from '@craftvue/icons'
      </script>
    `,
  },
  loading: {
    simple: `
      <CButton loading />
      <CButton loading label="Button" />
      <CButton
        :icon="CheckIcon"
        :loading="loading"
        @click="load"
        label="Click me"
      />`,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton loading />
          <CButton loading label="Button" />
          <CButton
            :icon="CheckIcon"
            :loading="loading"
            @click="load"
            label="Click me"
          />
        </div>
      </template>
      <script setup>
        import { ref } from 'vue'
        import CheckIcon from '@craftvue/icons/check'

        const loading = ref(false)

        const load = () => {
          loading.value = true
          setTimeout(() => {
            loading.value = false
          }, 2000)
        }
      </script>
    `,
  },
  severity: {
    simple: `
      <CButton label="Primary" />
      <CButton label="Secondary" severity="secondary" />
      <CButton label="Contrast" severity="contrast" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton label="Primary" />
          <CButton label="Secondary" severity="secondary" />
          <CButton label="Contrast" severity="contrast" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  disabled: {
    simple: '<CButton disabled label="Submit" />',
    full: `
      <template>
        <CButton disabled label="Submit" />
      </template>
      <script setup></script>
    `,
  },
  raised: {
    simple: `
      <CButton raised label="Primary" />
      <CButton raised label="Secondary" severity="secondary" />
      <CButton raised label="Contrast" severity="contrast" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton raised label="Primary" />
          <CButton raised label="Secondary" severity="secondary" />
          <CButton raised label="Contrast" severity="contrast" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  rounded: {
    simple: `
      <CButton rounded label="Primary" />
      <CButton rounded label="Secondary" severity="secondary" />
      <CButton rounded label="Contrast" severity="contrast" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton rounded label="Primary" />
          <CButton rounded label="Secondary" severity="secondary" />
          <CButton rounded label="Contrast" severity="contrast" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  text: {
    simple: `
      <CButton variant="text" label="Primary" />
      <CButton variant="text" label="Secondary" severity="secondary" />
      <CButton variant="text" label="Contrast" severity="contrast" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton variant="text" label="Primary" />
          <CButton variant="text" label="Secondary" severity="secondary" />
          <CButton variant="text" label="Contrast" severity="contrast" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  raisedText: {
    simple: `
      <CButton raised variant="text" label="Primary" />
      <CButton raised variant="text" label="Secondary" severity="secondary" />
      <CButton raised variant="text" label="Contrast" severity="contrast" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton raised variant="text" label="Primary" />
          <CButton raised variant="text" label="Secondary" severity="secondary" />
          <CButton raised variant="text" label="Contrast" severity="contrast" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  outlined: {
    simple: `
      <CButton variant="outlined" label="Primary" />
      <CButton variant="outlined" label="Secondary" severity="secondary" />
      <CButton variant="outlined" label="Contrast" severity="contrast" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton variant="outlined" label="Primary" />
          <CButton variant="outlined" label="Secondary" severity="secondary" />
          <CButton variant="outlined" label="Contrast" severity="contrast" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  iconOnly: {
    simple: `
      <CButton :size="size"  :icon="CheckIcon"  />
      <CButton :size="size" severity="secondary" :icon="HomeIcon"  />
      <CButton :size="size" severity="contrast" :icon="AddIcon"  />

      <CButton :size="size" rounded :icon="CheckIcon" />
      <CButton :size="size" rounded severity="secondary" :icon="HomeIcon" />
      <CButton :size="size" rounded severity="contrast" :icon="AddIcon" />

      <CButton :size="size" rounded variant="outlined" :icon="CheckIcon" />
      <CButton :size="size" rounded variant="outlined" severity="secondary" :icon="HomeIcon" />
      <CButton :size="size" rounded variant="outlined" severity="contrast" :icon="AddIcon" />

      <CButton :size="size" rounded variant="text" raised :icon="CheckIcon" />
      <CButton :size="size" rounded variant="text" raised severity="secondary" :icon="HomeIcon" />
      <CButton :size="size" rounded variant="text" raised severity="contrast" :icon="AddIcon" />

      <CButton :size="size" rounded variant="text" :icon="CheckIcon" />
      <CButton :size="size" rounded variant="text" severity="secondary" :icon="HomeIcon" />
      <CButton :size="size" rounded variant="text" severity="contrast" :icon="AddIcon" />
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
          <CTabs v-model:value="size">
            <CTabList>
              <CTab v-for="tab in sizeOptions" :key="tab.label" :value="tab.value">
                {{ tab.label }}
              </CTab>
            </CTabList>
          </CTabs>
          <div style="width: 100%; display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; justify-content: space-around; gap: 10px;">
              <CButton :size="size"  :icon="CheckIcon"  />
              <CButton :size="size" severity="secondary" :icon="HomeIcon"  />
              <CButton :size="size" severity="contrast" :icon="AddIcon"  />
            </div>
            <div style="display: flex; justify-content: space-around; gap: 10px;">
              <CButton :size="size" rounded :icon="CheckIcon" />
              <CButton :size="size" rounded severity="secondary" :icon="HomeIcon" />
              <CButton :size="size" rounded severity="contrast" :icon="AddIcon" />
            </div>
            <div style="display: flex; justify-content: space-around; gap: 10px;">
              <CButton :size="size" rounded variant="outlined" :icon="CheckIcon" />
              <CButton :size="size" rounded variant="outlined" severity="secondary" :icon="HomeIcon" />
              <CButton :size="size" rounded variant="outlined" severity="contrast" :icon="AddIcon" />
            </div>
            <div style="display: flex; justify-content: space-around; gap: 10px;">
              <CButton :size="size" rounded variant="text" raised :icon="CheckIcon" />
              <CButton :size="size" rounded variant="text" raised severity="secondary" :icon="HomeIcon" />
              <CButton :size="size" rounded variant="text" raised severity="contrast" :icon="AddIcon" />
            </div>
            <div style="display: flex; justify-content: space-around; gap: 10px;">
              <CButton :size="size" rounded variant="text" :icon="CheckIcon" />
              <CButton :size="size" rounded variant="text" severity="secondary" :icon="HomeIcon" />
              <CButton :size="size" rounded variant="text" severity="contrast" :icon="AddIcon" />
            </div>
          </div>
        </div>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { AddIcon, CheckIcon, HomeIcon } from '@craftvue/icons'
        import CTab from 'craftvue/tab'
        import CTabList from 'craftvue/tablist'
        import CTabs from 'craftvue/tabs'

        const size = ref(undefined)

        const sizeOptions = ref([
          { label: 'Small', value: 'sm' },
          { label: 'Normal', value: undefined },
          { label: 'Large', value: 'lg' },
        ])
      </script>
    `,
  },
  size: {
    simple: `
      <CButton :icon="AddIcon" label="Small" size="sm" />
      <CButton :icon="AddIcon" label="Normal" />
      <CButton :icon="AddIcon" label="Large" size="lg" />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 10px;">
          <CButton :icon="AddIcon" label="Small" size="sm" />
          <CButton :icon="AddIcon" label="Normal" />
          <CButton :icon="AddIcon" label="Large" size="lg" />
        </div>
      </template>
      <script setup>
        import AddIcon from '@craftvue/icons/add'
      </script>
    `,
  },
  badge: {
    simple: `
      <CButton
        label="Cancel"
        badge="5"
        badgeSeverity="secondary"
      />
      <CButton
        severity="secondary"
        label="Cancel"
        badge="99+"
        badgeSeverity="contrast"
      />
      <CButton
        variant="outlined"
        label="Home"
        :icon="HomeIcon"
        badge="NEW"
      />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton
            label="Cancel"
            badge="5"
            badgeSeverity="secondary"
          />
          <CButton
            severity="secondary"
            label="Cancel"
            badge="99+"
            badgeSeverity="contrast"
          />
          <CButton
            variant="outlined"
            label="Home"
            :icon="HomeIcon"
            badge="NEW"
          />
        </div>
      </template>
      <script setup>
        import HomeIcon from '@craftvue/icons/home'
      </script>
    `,
  },
  template: {
    simple: `
      <CButton variant="outlined">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" rx="60"/><path fill="#41b883" d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36z"/><path fill="#41b883" d="m38 50l90 155.25L218 50h-36l-54 93.15L73.55 50z"/><path fill="#35495e" d="M73.55 50L128 143.6L182 50h-33.3L128 86l-21.15-36z"/></g></svg>
      </CButton>
    `,
    full: `
      <template>
        <CButton variant="outlined">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" rx="60"/><path fill="#41b883" d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36z"/><path fill="#41b883" d="m38 50l90 155.25L218 50h-36l-54 93.15L73.55 50z"/><path fill="#35495e" d="M73.55 50L128 143.6L182 50h-33.3L128 86l-21.15-36z"/></g></svg>
        </CButton>
      </template>
      <script setup></script>
    `,
  },
}

export default buttonCodeTexts
