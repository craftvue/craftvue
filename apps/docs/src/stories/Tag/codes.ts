import type { TagStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const tagCodeTexts: CodeTexts<TagStoryName> = {
  basic: {
    simple: `
      <CTag value="Tag" />
    `,
    full: `
      <template>
        <CTag value="Tag" />
      </template>
      <script setup>
        import CTag from 'craftvue/tag'
      </script>
    `,
  },
  severity: {
    simple: `
      <CTag value="Primary" />
      <CTag value="Secondary" severity="secondary" />
      <CTag value="Contrast" severity="contrast" />
      <CTag value="Info" severity="info" />
      <CTag value="Success" severity="success" />
      <CTag value="Warning" severity="warning" />
      <CTag value="Error" severity="error" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 5px;">
          <CTag value="Primary" />
          <CTag value="Secondary" severity="secondary" />
          <CTag value="Contrast" severity="contrast" />
          <CTag value="Info" severity="info" />
          <CTag value="Success" severity="success" />
          <CTag value="Warning" severity="warning" />
          <CTag value="Error" severity="error" />
        </div>
      </template>
      <script setup>
        import CTag from 'craftvue/tag'
      </script>
    `,
  },
  outlined: {
    simple: `
      <CTag value="Primary" variant="outlined" />
      <CTag value="Secondary" severity="secondary" variant="outlined" />
      <CTag value="Contrast" severity="contrast" variant="outlined" />
      <CTag value="Info" severity="info" variant="outlined" />
      <CTag value="Success" severity="success" variant="outlined" />
      <CTag value="Warning" severity="warning" variant="outlined" />
      <CTag value="Error" severity="error" variant="outlined" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 5px;">
          <CTag value="Primary" variant="outlined" />
          <CTag value="Secondary" severity="secondary" variant="outlined" />
          <CTag value="Contrast" severity="contrast" variant="outlined" />
          <CTag value="Info" severity="info" variant="outlined" />
          <CTag value="Success" severity="success" variant="outlined" />
          <CTag value="Warning" severity="warning" variant="outlined" />
          <CTag value="Error" severity="error" variant="outlined" />
        </div>
      </template>
      <script setup>
        import CTag from 'craftvue/tag'
      </script>
    `,
  },
  soft: {
    simple: `
      <CTag value="Primary" variant="soft" />
      <CTag value="Secondary" severity="secondary" variant="soft" />
      <CTag value="Contrast" severity="contrast" variant="soft" />
      <CTag value="Info" severity="info" variant="soft" />
      <CTag value="Success" severity="success" variant="soft" />
      <CTag value="Warning" severity="warning" variant="soft" />
      <CTag value="Error" severity="error" variant="soft" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 5px;">
          <CTag value="Primary" variant="soft" />
          <CTag value="Secondary" severity="secondary" variant="soft" />
          <CTag value="Contrast" severity="contrast" variant="soft" />
          <CTag value="Info" severity="info" variant="soft" />
          <CTag value="Success" severity="success" variant="soft" />
          <CTag value="Warning" severity="warning" variant="soft" />
          <CTag value="Error" severity="error" variant="soft" />
        </div>
      </template>
      <script setup>
        import CTag from 'craftvue/tag'
      </script>
    `,
  },
  size: {
    simple: `
      <CTag value="Small" size="sm" />
      <CTag value="Normal" />
      <CTag value="Large" size="lg" />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 10px;">
          <CTag value="Small" size="sm" />
          <CTag value="Normal" />
          <CTag value="Large" size="lg" />
        </div>
      </template>
      <script setup>
        import CTag from 'craftvue/tag'
      </script>
    `,
  },
  closable: {
    simple: `
      <CTag value="Tag" closable @close="handleClose" />
      <CTag value="Tag" variant="outlined" closable @close="handleClose" />
      <CTag value="Tag" variant="soft" closable @close="handleClose" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CTag value="Tag" closable @close="handleClose" />
          <CTag value="Tag" variant="outlined" closable @close="handleClose" />
          <CTag value="Tag" variant="soft" closable @close="handleClose" />
        </div>
      </template>
      <script setup>
        import CTag from 'craftvue/tag'

        const handleClose = (event: MouseEvent) => {
          console.log('Tag closed', event)
        }
      </script>
    `,
  },
  rounded: {
    simple: `
      <CTag value="Primary" rounded />
      <CTag value="Secondary" severity="secondary" rounded />
      <CTag value="Contrast" severity="contrast" rounded />
      <CTag value="Info" severity="info" rounded />
      <CTag value="Success" severity="success" rounded />
      <CTag value="Warning" severity="warning" rounded />
      <CTag value="Error" severity="error" rounded />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 5px;">
          <CTag value="Primary" rounded />
          <CTag value="Secondary" severity="secondary" rounded />
          <CTag value="Contrast" severity="contrast" rounded />
          <CTag value="Info" severity="info" rounded />
          <CTag value="Success" severity="success" rounded />
          <CTag value="Warning" severity="warning" rounded />
          <CTag value="Error" severity="error" rounded />
        </div>
      </template>
      <script setup>
        import CTag from 'craftvue/tag'
      </script>
    `,
  },
  withIcon: {
    simple: `
      <CTag value="Tag" :prefix-icon="CheckIcon" :suffix-icon="AddIcon" />
      <CTag value="Tag" variant="outlined" :prefix-icon="CheckIcon" :suffix-icon="AddIcon" />
      <CTag value="Tag" variant="soft" :prefix-icon="CheckIcon" :suffix-icon="AddIcon" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CTag value="Tag" :prefix-icon="CheckIcon" :suffix-icon="AddIcon" />
          <CTag value="Tag" variant="outlined" :prefix-icon="CheckIcon" :suffix-icon="AddIcon" />
          <CTag value="Tag" variant="soft" :prefix-icon="CheckIcon" :suffix-icon="AddIcon" />
        </div>
      </template>
      <script setup>
        import CTag from 'craftvue/tag'
        import { CheckIcon, AddIcon } from '@craftvue/icons'
      </script>
    `,
  },
  template: {
    simple: `
      <CTag severity="secondary">
        <template #prefix>
          <span>🏷️</span>
        </template>
        Template
        <template #suffix>
          <span>✨</span>
        </template>
      </CTag>
    `,
    full: `
      <template>
        <CTag severity="secondary">
          <template #prefix>
            <span style="margin-right: 4px;">🏷️</span>
          </template>
          Template
          <template #suffix>
            <span style="margin-left: 4px;">✨</span>
          </template>
        </CTag>
      </template>
      <script setup>
        import CTag from 'craftvue/tag'
      </script>
    `,
  },
}

export default tagCodeTexts
