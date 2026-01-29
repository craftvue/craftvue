import type { DialogStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const dialogCodeTexts: CodeTexts<DialogStoryName> = {
  basic: {
    simple: `
      <CButton @click="handleClick">
        Show dialog
      </CButton>
      <CDialog
        v-model:show="isOpen"
        title="Dialog Title"
      >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      </CDialog>
    `,
    full: `
      <template>
        <CButton @click="handleClick">
          Show dialog
        </CButton>
        <CDialog
          v-model:show="isOpen"
          title="Dialog Title"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </CDialog>
      </template>
      <script setup>
        import CDialog from 'craftvue/dialog'
        import CButton from 'craftvue/button'

        const isOpen = ref(false)

        const handleClick = () => {
          isOpen.value = !isOpen.value
        }
      </script>
    `
  },
  fullscreen: {
    simple: `
      <CButton severity="secondary" @click="handleClick">
        Open
        <MaximizeIcon />
      </CButton>
      <CDialog
        v-model:show="isOpen"
        title="Dialog Title"
        fullscreen
      >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      </CDialog>
    `,
    full: `
      <template>
        <CButton severity="secondary" @click="handleClick">
          Open
          <MaximizeIcon style="color: #bea87b; width: 18px;" />
        </CButton>
        <CDialog
          v-model:show="isOpen"
          title="Dialog Title"
          fullscreen
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </CDialog>
      </template>
      <script setup>
        import CDialog from 'craftvue/dialog'
        import CButton from 'craftvue/button'
        import { MaximizeIcon } from '@craftvue/icons'

        const isOpen = ref(false)

        const handleClick = () => {
          isOpen.value = !isOpen.value
        }
      </script>
    `
  },
  animation: {
    simple: `
      <CButton @click="handleClick('fade')" label="Fade" />
      <CButton @click="handleClick('zoom')" label="Zoom" severity="secondary" />
      <CButton @click="handleClick('slide')" label="Slide" severity="contrast" />
      <CDialog
        v-model:show="isOpen"
        title="Dialog Title"
        :animation="animation"
      >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      </CDialog>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton @click="handleClick('fade')" label="Fade" />
          <CButton @click="handleClick('zoom')" label="Zoom" severity="secondary" />
          <CButton @click="handleClick('slide')" label="Slide" severity="contrast" />
        </div>
        <CDialog
          v-model:show="isOpen"
          title="Dialog Title"
          :animation="animation"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </CDialog>
      </template>
      <script setup>
        import CDialog from 'craftvue/dialog'
        import CButton from 'craftvue/button'

        const isOpen = ref(false)
        const animation = ref('fade')

        const handleClick = (name: 'fade' | 'zoom' | 'slide') => {
          animation.value = name
          isOpen.value = !isOpen.value
        }
      </script>
    `
  },
  nonModal: {
    simple: `
      <CButton @click="handleClick">
        Show dialog
      </CButton>
      <CDialog
        v-model:show="isOpen"
        title="Dialog Title"
        :modal="false"
      >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      </CDialog>
    `,
    full: `
      <template>
        <CButton @click="handleClick">
          Show dialog
        </CButton>
        <CDialog
          v-model:show="isOpen"
          title="Dialog Title"
          :modal="false"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </CDialog>
      </template>
      <script setup>
        import CDialog from 'craftvue/dialog'
        import CButton from 'craftvue/button'

        const isOpen = ref(false)

        const handleClick = () => {
          isOpen.value = !isOpen.value
        }
      </script>
    `
  },
  template: {
    simple: `
      <CButton severity="secondary" label="Template" badge="NEW" @click="handleClick" />
      <CDialog
        v-model:show="isOpen"
        :width="300"
      >
        <template #header="{ close }">
          <h3>Login</h3>
          <CButton severity="secondary" :icon="CloseIcon" @click="close" rounded />
        </template>

        <CFormItem label="Email" required>
          <CInput v-model="email" type="email" placeholder="test@gmail.com" />
        </CFormItem>
        <CFormItem label="Password" required>
          <CInput v-model="password" type="password" placeholder="123456" />
        </CFormItem>

        <template #footer>
          <CButton severity="secondary" @click="handleClick">Cancel</CButton>
          <CButton severity="primary" @click="handleClick">Submit</CButton>
        </template>
      </CDialog>
    `,
    full: `
      <template>
        <CButton severity="secondary" label="Template" badge="NEW" @click="handleClick" />
        <CDialog
          v-model:show="isOpen"
          :width="300"
        >
          <template #header="{ close }">
            <div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
              <h3 style="font-size: 24px; font-weight: 600; color: #bea87b;">Login</h3>
              <CButton severity="secondary" :icon="CloseIcon" @click="close" rounded />
            </div>
          </template>

          <CFormItem label="Email" required style="margin-bottom: 10px;">
            <CInput v-model="email" type="email" placeholder="test@gmail.com" />
          </CFormItem>
          <CFormItem label="Password" required style="margin-bottom: 10px;">
            <CInput v-model="password" type="password" placeholder="123456" />
          </CFormItem>

          <template #footer>
            <CButton severity="secondary" @click="handleClick">Cancel</CButton>
            <CButton severity="primary" @click="handleClick">Submit</CButton>
          </template>
        </CDialog>
      </template>
      <script setup>
        import CDialog from 'craftvue/dialog'
        import CButton from 'craftvue/button'
        import CFormItem from 'craftvue/formitem'
        import CInput from 'craftvue/input'

        const isOpen = ref(false)
        const email = ref('')
        const password = ref('')

        const handleClick = () => {
          isOpen.value = !isOpen.value
        }
      </script>
    `
  },
  size: {
    simple: `
      <CButton variant="outlined" label="Sizes" @click="handleClick" />
      <CDialog
        v-model:show="isOpen"
        title="Dialog Title"
        :width="300"
        maxHeight="400px"
      >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis,
          quae impedit numquam distinctio nulla quos minus ducimus similique inventore sint,
          odit aperiam quibusdam praesentium eligendi laborum ea fugiat? Voluptatem.
      </CDialog>
    `,
    full: `
      <template>
        <CButton variant="outlined" label="Sizes" @click="handleClick" />
        <CDialog
          v-model:show="isOpen"
          title="Dialog Title"
          :width="300"
          maxHeight="400px"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis,
            quae impedit numquam distinctio nulla quos minus ducimus similique inventore sint,
            odit aperiam quibusdam praesentium eligendi laborum ea fugiat? Voluptatem.
          </p>
        </CDialog>
      </template>
      <script setup>
        import CDialog from 'craftvue/dialog'
        import CButton from 'craftvue/button'

        const isOpen = ref(false)

        const handleClick = () => {
          isOpen.value = !isOpen.value
        }
      </script>
    `
  },
  withoutHeader: {
    simple: `
      <CButton @click="handleClick">
        Show dialog
      </CButton>
      <CDialog
        v-model:show="isOpen"
        :show-close="false"
      >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      </CDialog>
    `,
    full: `
      <template>
        <CButton @click="handleClick">
          Show dialog
        </CButton>
        <CDialog
          v-model:show="isOpen"
          :show-close="false"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </CDialog>
      </template>
      <script setup>
        import CDialog from 'craftvue/dialog'
        import CButton from 'craftvue/button'

        const isOpen = ref(false)

        const handleClick = () => {
          isOpen.value = !isOpen.value
        }
      </script>
    `
  },
  customIcons: {
    simple: `
      <CButton
        variant="outlined"
        @click="handleClick"
      >
        Custom icons
        <ErrorIcon />
      </CButton>
      <CDialog
        v-model:show="isOpen"
        title="Dialog Title"
        fullscreen
        :close-icon="CloseIcon"
        :maximize-icon="AddIcon"
        :minimize-icon="MinusIcon"
      >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      </CDialog>
    `,
    full: `
      <template>
        <CButton
          variant="outlined"
          @click="handleClick"
        >
          Custom icons
          <ErrorIcon style="color: #bea87b; width: 18px;" />
        </CButton>
        <CDialog
          v-model:show="isOpen"
          title="Dialog Title"
          fullscreen
          :close-icon="CloseIcon"
          :maximize-icon="AddIcon"
          :minimize-icon="MinusIcon"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </CDialog>
      </template>
      <script setup>
        import CDialog from 'craftvue/dialog'
        import CButton from 'craftvue/button'
        import { ErrorIcon, CloseIcon, AddIcon, MinusIcon } from '@craftvue/icons'

        const isOpen = ref(false)

        const handleClick = () => {
          isOpen.value = !isOpen.value
        }
      </script>
    `
  }
}

export default dialogCodeTexts
