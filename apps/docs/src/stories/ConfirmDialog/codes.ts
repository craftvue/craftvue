import type {ConfirmDialogStoryName, CodeTexts} from "docs/components/CustomSource/CustomSource.types"

const confirmDialogCodeTexts: CodeTexts<ConfirmDialogStoryName> = {
  basic: {
    simple: `
      <CButton severity="secondary" @click="openDialog">
        Save changes
        <CIcon name="save" color="#bea87b" size="20" />
      </CButton>
      <CConfirmDialog
        v-model:show="isOpen"
        message="Are you sure you want to save these changes? This action cannot be undone."
        title="Save Changes"
        @confirm="handleConfirm"
        @cancel="handleCancel"
      />
    `,
    full: `
      <template>
        <CButton severity="secondary" @click="openDialog">
          Save changes
          <CIcon name="save" color="#bea87b" size="20" />
        </CButton>
        <CConfirmDialog
          v-model:show="isOpen"
          message="Are you sure you want to save these changes? This action cannot be undone."
          title="Save Changes"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        />
      </template>
      <script setup>
        import { ref } from 'vue'
        import CConfirmDialog from 'craftvue/confirmdialog'
        import CButton from 'craftvue/button'
        import CIcon from 'craftvue/icon'

        const isOpen = ref(false)

        const openDialog = () => (isOpen.value = true)
        const handleConfirm = () => console.log('confirmed')
        const handleCancel = () => console.log('cancelled')
      </script>
    `
  },
  type: {
    simple: `
      <CButton severity="secondary" @click="openDialog('warning')">
        <WarningIcon color="#fdba74" />
      </CButton>
      <CButton severity="secondary" @click="openDialog('info')">
        <InfoIcon color="#60a5fa" />
      </CButton>
      <CButton severity="secondary" @click="openDialog('success')">
        <CheckIcon color="#4ade80" />
      </CButton>
      <CButton severity="secondary" @click="openDialog('error')">
        <ErrorIcon color="#f87171" />
      </CButton>
      <CConfirmDialog
        v-model:show="isOpen"
        :width="300"
        :type="info.type"
        :title="info.title"
        :message="info.message"
      />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton severity="secondary" @click="openDialog('warning')">
            <WarningIcon color="#fdba74" />
          </CButton>
          <CButton severity="secondary" @click="openDialog('info')">
            <InfoIcon color="#60a5fa" />
          </CButton>
          <CButton severity="secondary" @click="openDialog('success')">
            <CheckIcon color="#4ade80" />
          </CButton>
          <CButton severity="secondary" @click="openDialog('error')">
            <ErrorIcon color="#f87171" />
          </CButton>
        </div>
        <CConfirmDialog
          v-model:show="isOpen"
          :width="300"
          :type="info.type"
          :title="info.title"
          :message="info.message"
        />
      </template>
      <script setup>
        import { ref } from 'vue'
        import CConfirmDialog from 'craftvue/confirmdialog'
        import CButton from 'craftvue/button'
        import { CheckIcon, InfoIcon, ErrorIcon, WarningIcon } from "@craftvue/icons"

        const isOpen = ref(false)
        const info = ref<{
          title?: string
          message?: string
          type?: 'warning' | 'error' | 'info' | 'success'
        }>({})

        const openDialog = (type: 'warning' | 'error' | 'info' | 'success') => {
          info.value.type = type
          switch (type) {
            case 'warning':
              info.value.title = 'Warning'
              info.value.message = 'This is a warning message'
              break
            case 'error':
              info.value.title = 'Error'
              info.value.message = 'This is an error message'
              break
            case 'info':
              info.value.title = 'Info'
              info.value.message = 'This is an info message'
              break
            case 'success':
              info.value.title = 'Success'
              info.value.message = 'This is a success message'
              break
          }
          isOpen.value = true
        }
      </script>
    `
  },
  template: {
    simple: `
      <CButton
        label="Template"
        severity="secondary"
        badge="NEW"
        @click="openDialog"
      />
      <CConfirmDialog
        v-model:show="isOpen"
        :width="300"
      >
        <template #header="{ close }">
          <h3>Confirmation</h3>
          <CButton severity="secondary" :icon="CloseIcon" rounded size="sm" @click="close" />
        </template>
        <div>
          <IconLogo />
          <span>Do you want to save your changes?</span>
        </div>
        <template #actions="{ confirm, cancel }">
          <CButton size="sm" severity="secondary" @click="cancel">Cancel</CButton>
          <CButton size="sm" @click="cancel">Confirm</CButton>
        </template>
      </CConfirmDialog>
    `,
    full: `
      <template>
        <CButton
          label="Template"
          severity="secondary"
          badge="NEW"
          @click="openDialog"
        />
        <CConfirmDialog
          v-model:show="isOpen"
          :width="300"
        >
          <template #header="{ close }">
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 20px; font-weight: 600; color: #bea87b;">Confirmation</h3>
              <CButton severity="secondary" :icon="CloseIcon" rounded size="sm" @click="close" />
            </div>
          </template>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
            <IconLogo style="font-size: 120px;" />
            <span>Do you want to save your changes?</span>
          </div>
          <template #actions="{ confirm, cancel }">
            <CButton size="sm" severity="secondary" @click="cancel">Cancel</CButton>
            <CButton size="sm" @click="cancel">Confirm</CButton>
          </template>
        </CConfirmDialog>
      </template>
      <script setup>
        import { ref } from 'vue'
        import CConfirmDialog from 'craftvue/confirmdialog'
        import CButton from 'craftvue/button'
        import { CloseIcon } from "@craftvue/icons"
        import IconLogo from '../components/IconLogo.vue'

        const isOpen = ref(false)
        const openDialog = () => (isOpen.value = true)
      </script>
    `
  },
  oneAction: {
    simple: `
      <CButton severity="secondary" label="Only cancel" @click="openDialogCancel" />
      <CButton label="Only confirm" @click="openDialogConfirm" />

      <CConfirmDialog
        v-model:show="isOpenCancel"
        :show-confirm="false"
        type="info"
        title="Information"
        cancel-text="Close"
        message="This dialog only has a cancel button. Use this pattern for informational messages that don't require user confirmation."
      />
      <CConfirmDialog
        v-model:show="isOpenConfirm"
        :show-cancel="false"
        :show-close="false"
        :close-on-escape="false"
        title="Confirmation Required"
        confirm-text="I agree"
        message="This dialog only has a confirm button. Use this pattern when you need to ensure the user acknowledges an important message before proceeding."
      />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton severity="secondary" label="Only cancel" @click="openDialogCancel" />
          <CButton label="Only confirm" @click="openDialogConfirm" />
        </div>

        <CConfirmDialog
          v-model:show="isOpenCancel"
          :show-confirm="false"
          type="info"
          title="Information"
          cancel-text="Close"
          message="This dialog only has a cancel button. Use this pattern for informational messages that don't require user confirmation."
        />
        <CConfirmDialog
          v-model:show="isOpenConfirm"
          :show-cancel="false"
          :show-close="false"
          :close-on-escape="false"
          title="Confirmation Required"
          confirm-text="I agree"
          message="This dialog only has a confirm button. Use this pattern when you need to ensure the user acknowledges an important message before proceeding."
        />
      </template>
      <script setup>
        import { ref } from 'vue'
        import CConfirmDialog from 'craftvue/confirmdialog'
        import CButton from 'craftvue/button'

        const isOpenConfirm = ref(false)
        const isOpenCancel = ref(false)
        const openDialogConfirm = () => (isOpenConfirm.value = true)
        const openDialogCancel = () => (isOpenCancel.value = true)
      </script>
    `
  }
}

export default confirmDialogCodeTexts
