import type {
  ConfirmPopupStoryName,
  CodeTexts,
} from 'docs/components/CustomSource/CustomSource.types'

const confirmPopupCodeTexts: CodeTexts<ConfirmPopupStoryName> = {
  basic: {
    simple: `
      <CConfirmPopup
        message="Do you really want to delete this item?"
        @confirm="handleDelete"
      >
        <template #trigger>
          <CButton severity="secondary">
            Delete
            <CIcon name="delete" size="18" color="#bea87b" />
          </CButton>
        </template>
      </CConfirmPopup>
    `,
    full: `
      <template>
        <CConfirmPopup
          message="Do you really want to delete this item?"
          @confirm="handleDelete"
        >
          <template #trigger>
            <CButton severity="secondary">
              Delete
              <CIcon name="delete" size="18" color="#bea87b" />
            </CButton>
          </template>
        </CConfirmPopup>
      </template>
      <script setup>
        import CConfirmPopup from 'craftvue/confirmpopup'
        import CButton from 'craftvue/button'
        import CIcon from 'craftvue/icon'

        const handleDelete = () => {
          console.log('Item has been deleted')
        }
      </script>
    `,
  },
  placement: {
    simple: `
      <CConfirmPopup placement="top" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="DeleteIcon" rounded />
        </template>
      </CConfirmPopup>
      <CConfirmPopup placement="top" align="center" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="DeleteIcon" rounded />
        </template>
      </CConfirmPopup>
      <CConfirmPopup placement="top" align="end" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="DeleteIcon" rounded />
        </template>
      </CConfirmPopup>

      <CConfirmPopup placement="left" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="EditIcon" rounded />
        </template>
      </CConfirmPopup>
      <CConfirmPopup placement="right" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="SaveIcon" rounded />
        </template>
      </CConfirmPopup>

      <CConfirmPopup placement="left" align="center" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="EditIcon" rounded />
        </template>
      </CConfirmPopup>
      <CConfirmPopup placement="right" align="center" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="SaveIcon" rounded />
        </template>
      </CConfirmPopup>

      <CConfirmPopup placement="left" align="end" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="EditIcon" rounded />
        </template>
      </CConfirmPopup>
      <CConfirmPopup placement="right" align="end" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="SaveIcon" rounded />
        </template>
      </CConfirmPopup>

      <CConfirmPopup message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="SearchIcon" rounded />
        </template>
      </CConfirmPopup>
      <CConfirmPopup align="center" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="SearchIcon" rounded />
        </template>
      </CConfirmPopup>
      <CConfirmPopup align="end" message="Do you really want to delete this item?">
        <template #trigger>
          <CButton :icon="SearchIcon" rounded />
        </template>
      </CConfirmPopup>
    `,
    full: `
      <template>
        <div style="width: 400px; display: flex; flex-direction: column; ">
          <div style="display: flex; justify-content: center; gap: 10px;">
            <CConfirmPopup placement="top" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="DeleteIcon" rounded />
              </template>
            </CConfirmPopup>
            <CConfirmPopup placement="top" align="center" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="DeleteIcon" rounded />
              </template>
            </CConfirmPopup>
            <CConfirmPopup placement="top" align="end" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="DeleteIcon" rounded />
              </template>
            </CConfirmPopup>
          </div>

          <div style="display: flex; justify-content: space-between;">
            <CConfirmPopup placement="left" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="EditIcon" rounded />
              </template>
            </CConfirmPopup>
            <CConfirmPopup placement="right" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="SaveIcon" rounded />
              </template>
            </CConfirmPopup>
          </div>


          <div style="display: flex; justify-content: space-between; padding: 10px 0;">
            <CConfirmPopup placement="left" align="center" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="EditIcon" rounded />
              </template>
            </CConfirmPopup>
            <CConfirmPopup placement="right" align="center" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="SaveIcon" rounded />
              </template>
            </CConfirmPopup>
          </div>

          <div style="display: flex; justify-content: space-between;">
            <CConfirmPopup placement="left" align="end" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="EditIcon" rounded />
              </template>
            </CConfirmPopup>
            <CConfirmPopup placement="right" align="end" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="SaveIcon" rounded />
              </template>
            </CConfirmPopup>
          </div>

          <div style="display: flex; justify-content: center; gap: 10px;">
            <CConfirmPopup message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="SearchIcon" rounded />
              </template>
            </CConfirmPopup>
            <CConfirmPopup align="center" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="SearchIcon" rounded />
              </template>
            </CConfirmPopup>
            <CConfirmPopup align="end" message="Do you really want to delete this item?">
              <template #trigger>
                <CButton :icon="SearchIcon" rounded />
              </template>
            </CConfirmPopup>
          </div>
        </div>
      </template>
      <script setup>
        import CConfirmPopup from 'craftvue/confirmpopup'
        import CButton from 'craftvue/button'
        import { DeleteIcon, SaveIcon, EditIcon, SearchIcon } from '@craftvue/icons'
      </script>
    `,
  },
  controlled: {
    simple: `
      <CSwitch
        ref="rootElRef"
        :model-value="value"
        label="Update app"
        @click="(e) => e.preventDefault()"
      />
      <CConfirmPopup
        :show="show"
        :root-el="rootElRef?.$el"
        message="Are you sure?"
        @show="open"
        @hide="close"
        @confirm="handleConfirm"
      />
    `,
    full: `
      <template>
        <CSwitch
          ref="rootElRef"
          :model-value="value"
          label="Update app"
          @click="(e) => e.preventDefault()"
        />
        <CConfirmPopup
          :show="show"
          :root-el="rootElRef?.$el"
          message="Are you sure?"
          @show="open"
          @hide="close"
          @confirm="handleConfirm"
        />
      </template>
      <script setup>
        import { ref, useTemplateRef } from "vue"
        import CConfirmPopup from 'craftvue/confirmpopup'
        import CSwitch from 'craftvue/switch'

        const rootElRef = useTemplateRef<HTMLElement>('rootElRef')
        const show = ref(false)
        const value = ref(false)

        const close = () => (show.value = false)
        const open = () => (show.value = true)

        const handleConfirm = () => {
          value.value = !value.value
        }
      </script>
    `,
  },
  customization: {
    simple: `
      <CConfirmPopup
        message="Success confirmpopup"
        :icon="CheckIcon"
        iconColor="#4ade80"
        confirmText="Update"
        cancelText="Later"
        cancelVariant="filled"
      >
        <template #trigger>
          <CButton :icon="CheckIcon" rounded severity="secondary" />
        </template>
      </CConfirmPopup>
      <CConfirmPopup
        message="Info confirmpopup"
        :icon="InfoIcon"
        iconColor="#60a5fa"
        confirmText="Got it"
        cancelText="Close"
        cancelVariant="text"
        confirmVariant="text"
      >
        <template #trigger>
          <CButton :icon="InfoIcon" rounded severity="secondary" />
        </template>
      </CConfirmPopup>
      <CConfirmPopup
        message="Error confirmpopup"
        :icon="ErrorIcon"
        iconColor="#f87171"
        confirmText="Delete"
        cancelText="Cancel"
        cancelVariant="text"
      >
        <template #trigger>
          <CButton :icon="ErrorIcon" rounded severity="secondary" />
        </template>
      </CConfirmPopup>
      <CConfirmPopup
        message="Warning confirmpopup"
      >
        <template #trigger>
          <CButton :icon="WarningIcon" rounded severity="secondary" />
        </template>
      </CConfirmPopup>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CConfirmPopup
            message="Success confirmpopup"
            :icon="CheckIcon"
            iconColor="#4ade80"
            confirmText="Update"
            cancelText="Later"
            cancelVariant="filled"
          >
            <template #trigger>
              <CButton :icon="CheckIcon" rounded severity="secondary" style="color: #4ade80;" />
            </template>
          </CConfirmPopup>
          <CConfirmPopup
            message="Info confirmpopup"
            :icon="InfoIcon"
            iconColor="#60a5fa"
            confirmText="Got it"
            cancelText="Close"
            cancelVariant="text"
            confirmVariant="text"
          >
            <template #trigger>
              <CButton :icon="InfoIcon" rounded severity="secondary" style="color: #60a5fa;" />
            </template>
          </CConfirmPopup>
          <CConfirmPopup
            message="Error confirmpopup"
            :icon="ErrorIcon"
            iconColor="#f87171"
            confirmText="Delete"
            cancelText="Cancel"
            cancelVariant="text"
          >
            <template #trigger>
              <CButton :icon="ErrorIcon" rounded severity="secondary" style="color: #f87171;" />
            </template>
          </CConfirmPopup>
          <CConfirmPopup
            message="Warning confirmpopup"
          >
            <template #trigger>
              <CButton :icon="WarningIcon" rounded severity="secondary" style="color: #fdba74;" />
            </template>
          </CConfirmPopup>
        </div>
      </template>
      <script setup>
        import CConfirmPopup from 'craftvue/confirmpopup'
        import CButton from 'craftvue/button'
        import { CheckIcon, InfoIcon, ErrorIcon, WarningIcon } from '@craftvue/icons'
      </script>
    `,
  },
  template: {
    simple: `
      <CConfirmPopup>
        <template #trigger>
          <CButton label="Save image" variant="outlined" raised rounded />
        </template>
        <div>
          <IconLogo />
          <span>Custom template</span>
        </div>
        <template #actions="{confirm, cancel}">
          <CButton  size="sm" severity="secondary" @click="cancel"><CIcon name="close" size="18" /></CButton>
          <CButton  size="sm" @click="confirm"><CIcon name="save" size="18" /></CButton>
        </template>
      </CConfirmPopup>
    `,
    full: `
      <template>
        <CConfirmPopup>
          <template #trigger>
            <CButton label="Save image" variant="outlined" raised rounded />
          </template>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;" >
            <IconLogo style="font-size: 90px;" />
            <span>Custom template</span>
          </div>
          <template #actions="{confirm, cancel}">
            <div style="width: 100%; display: flex; justify-content: space-between; gap: 10px;">
              <CButton  size="sm" severity="secondary" @click="cancel" style="flex: 1;"><CIcon name="close" size="18" /></CButton>
              <CButton  size="sm" @click="confirm" style="flex: 1;"><CIcon name="save" size="18" /></CButton>
            </div>
          </template>
        </CConfirmPopup>
      </template>
      <script setup>
        import CConfirmPopup from 'craftvue/confirmpopup'
        import CButton from 'craftvue/button'
        import IconLogo from '../components/IconLogo.vue'
      </script>
    `,
  },
}

export default confirmPopupCodeTexts
