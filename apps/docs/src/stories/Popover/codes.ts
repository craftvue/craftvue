import type { PopoverStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const popoverCodeTexts: CodeTexts<PopoverStoryName> = {
  basic: {
    simple: `
      <CButton ref="rootElRef" label="Click to Open Popover" />
      <CPopover
        :show="show"
        :root-el="rootElRef?.$el"
        @hide="close"
        @show="open"
      >
        <CFormItem label="Email" required>
          <CInput v-model="email" type="email" placeholder="test@gmail.com" />
        </CFormItem>
        <CFormItem label="Password" required>
          <CInput v-model="password" type="password" placeholder="123456" />
        </CFormItem>
        <CCheckbox v-model="rememder" label="Remember me" />
        <CButton>Submit</CButton>
      </CPopover>
    `,
    full: `
      <template>
        <CButton ref="rootElRef" label="Click to Open Popover" />
        <CPopover
          :show="show"
          :root-el="rootElRef?.$el"
          @hide="close"
          @show="open"
        >
          <CFormItem label="Email" required style="margin-bottom: 10px;">
            <CInput v-model="email" type="email" placeholder="test@gmail.com" />
          </CFormItem>
          <CFormItem label="Password" required style="margin-bottom: 10px;">
            <CInput v-model="password" type="password" placeholder="123456" />
          </CFormItem>
          <CCheckbox v-model="rememder" label="Remember me" />
          <CButton style="width: 100%; margin-top: 10px;">Submit</CButton>
        </CPopover>
      </template>
      <script setup>
        import { ref, useTemplateRef } from "vue"
        import CPopover from 'craftvue/popover'
        import CButton from 'craftvue/button'
        import CFormItem from "craftvue/formitem"
        import CInput from "craftvue/input"
        import CCheckbox from "craftvue/checkbox"

        const show = ref(false)
        const rootElRef = useTemplateRef('rootElRef')
        const email = ref('')
        const password = ref('')
        const rememder = ref(false)

        const close = () => (show.value = false)
        const open = () => (show.value = true)
      </script>
    `,
  },
  placement: {
    simple: `
      <CButton ref="rootElRef1" :icon="UpArrowIcon" rounded />
      <CButton ref="rootElRef2" :icon="PrevArrowIcon" rounded />
      <CButton ref="rootElRef3" :icon="NextArrowIcon" rounded />
      <CButton ref="rootElRef4" :icon="DownArrowIcon" rounded />

      <CPopover
        :root-el="rootElRef1?.$el"
        title="Top"
        placement="top"
      >
        <span>Popover on top</span>
      </CPopover>
      <CPopover
        :root-el="rootElRef2?.$el"
        title="Left"
        placement="left"
      >
        <span>Popover on left</span>
      </CPopover>
      <CPopover
        :root-el="rootElRef3?.$el"
        title="Right"
        placement="right"
      >
        <span>Popover on right</span>
      </CPopover>
      <CPopover
        :root-el="rootElRef4?.$el"
        title="Bottom"
      >
        <span>Popover on bottom</span>
      </CPopover>
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <CButton ref="rootElRef1" :icon="UpArrowIcon" rounded />
          <div style="width: 200px; display: flex; justify-content: space-between; padding: 30px 0;">
            <CButton ref="rootElRef2" :icon="PrevArrowIcon" rounded />
            <CButton ref="rootElRef3" :icon="NextArrowIcon" rounded />
          </div>
          <CButton ref="rootElRef4" :icon="DownArrowIcon" rounded />
        </div>
        <CPopover
          :root-el="rootElRef1?.$el"
          title="Top"
          placement="top"
        >
          <span>Popover on top</span>
        </CPopover>
        <CPopover
          :root-el="rootElRef2?.$el"
          title="Left"
          placement="left"
        >
          <span>Popover on left</span>
        </CPopover>
        <CPopover
          :root-el="rootElRef3?.$el"
          title="Right"
          placement="right"
        >
          <span>Popover on right</span>
        </CPopover>
        <CPopover
          :root-el="rootElRef4?.$el"
          title="Bottom"
        >
          <span>Popover on bottom</span>
        </CPopover>
      </template>
      <script setup>
        import { useTemplateRef } from "vue"
        import CPopover from 'craftvue/popover'
        import CButton from 'craftvue/button'
        import { UpArrowIcon, PrevArrowIcon, NextArrowIcon, DownArrowIcon } from '@craftvue/icons'

        const rootElRef1 = useTemplateRef('rootElRef1')
        const rootElRef2 = useTemplateRef('rootElRef2')
        const rootElRef3 = useTemplateRef('rootElRef3')
        const rootElRef4 = useTemplateRef('rootElRef4')
      </script>
    `,
  },
  trigger: {
    simple: `
      <CBadge ref="rootElRefHover" value="HOVER">
        <CIcon name="envelope" size="40" />
      </CBadge>
      <CBadge ref="rootElRefClick" value="CLICK">
        <CIcon name="delete" size="40" />
      </CBadge>

      <CPopover
        :root-el="rootElRefHover?.$el"
        trigger="hover"
        title="Hover"
      >
        <span>Opens when you hover over the button</span>
      </CPopover>
      <CPopover
        :root-el="rootElRefClick?.$el"
        title="Click"
      >
        <span>Opens when you click the button</span>
      </CPopover>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 50px;">
          <CBadge ref="rootElRefHover" value="HOVER">
            <CIcon name="envelope" size="40" />
          </CBadge>
          <CBadge ref="rootElRefClick" value="CLICK">
            <CIcon name="delete" size="40" />
          </CBadge>
        </div>

        <CPopover
          :root-el="rootElRefHover?.$el"
          trigger="hover"
          title="Hover"
        >
          <span>Opens when you hover over the button</span>
        </CPopover>
        <CPopover
          :root-el="rootElRefClick?.$el"
          title="Click"
        >
          <span>Opens when you click the button</span>
        </CPopover>
      </template>
      <script setup>
        import { useTemplateRef } from "vue"
        import CPopover from 'craftvue/popover'
        import CBadge from 'craftvue/badge'
        import CIcon from 'craftvue/icon'

        const rootElRefHover = useTemplateRef('rootElRefHover')
        const rootElRefClick = useTemplateRef('rootElRefClick')
      </script>
    `,
  },
  arrow: {
    simple: `
      <CButton ref="rootElRef1" label="With arrow" />
      <CButton ref="rootElRef2" label="Without arrow" severity="secondary" />

      <CPopover :root-el="rootElRef1?.$el">
        <CRadioGroup v-model="choice1">
          <CRadio label="Popover with arrow" value="arrow" />
          <CRadio label="Popover without arrow" value="withoutArrow" />
        </CRadioGroup>
        <CButton>Submit</CButton>
      </CPopover>
      <CPopover
        :root-el="rootElRef2?.$el"
        :arrow="false"
      >
        <CRadioGroup v-model="choice2">
          <CRadio label="Popover with arrow" value="arrow" />
          <CRadio label="Popover without arrow" value="withoutArrow" />
        </CRadioGroup>
        <CButton>Submit</CButton>
      </CPopover>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton ref="rootElRef1" label="With arrow" />
          <CButton ref="rootElRef2" label="Without arrow" severity="secondary" />
        </div>

        <CPopover :root-el="rootElRef1?.$el">
          <CRadioGroup v-model="choice1">
            <CRadio label="Popover with arrow" value="arrow" />
            <CRadio label="Popover without arrow" value="withoutArrow" />
          </CRadioGroup>
          <CButton style="width: 100%; margin-top: 10px;">Submit</CButton>
        </CPopover>
        <CPopover
          :root-el="rootElRef2?.$el"
          :arrow="false"
        >
          <CRadioGroup v-model="choice2">
            <CRadio label="Popover with arrow" value="arrow" />
            <CRadio label="Popover without arrow" value="withoutArrow" />
          </CRadioGroup>
          <CButton style="width: 100%; margin-top: 10px;">Submit</CButton>
        </CPopover>
      </template>
      <script setup>
        import { useTemplateRef, ref } from "vue"
        import CPopover from 'craftvue/popover'
        import CButton from 'craftvue/button'
        import CRadio from "craftvue/radio"
        import CRadioGroup from "craftvue/radiogroup"

        const rootElRef1 = useTemplateRef('rootElRef1')
        const rootElRef2 = useTemplateRef('rootElRef2')
        const choice1 = ref('arrow')
        const choice2 = ref('withoutArrow')
      </script>
    `,
  },
  triggerSlot: {
    simple: `
      <CPopover>
        <template #trigger="{ isOpen, open, close }">
          <CInput placeholder="Enter text...">
            <template #suffix>
              <CButton
                @click="isOpen ? close() : open()"
                :icon="InfoIcon"
                rounded
                size="sm"
                severity="secondary"
              />
            </template>
          </CInput>
        </template>

        <div>
          <h4>What can you type here?</h4>
          <p>Describe what you need help with in one short sentence.</p>
          <div>Examples</div>
          <ul>
            <li><strong>Project name ideas</strong> for a task management app</li>
            <li><strong>Short description</strong> for a pricing card subtitle</li>
            <li><strong>Tooltip text</strong> explaining an advanced setting</li>
          </ul>
        </div>
      </CPopover>
    `,
    full: `
      <template>
        <CPopover :max-width="300">
          <template #trigger="{ isOpen, open, close }">
            <div @click.stop>
              <CInput
                placeholder="Enter text..."
                style="--c-border-radius: 9999px;"
              >
                <template #suffix>
                  <CButton
                    @click="isOpen ? close() : open()"
                    :icon="InfoIcon"
                    rounded
                    size="sm"
                    severity="secondary"
                    style="margin-right: -4px;"
                  />
                </template>
              </CInput>
            </div>
          </template>

          <div>
            <h4 style="margin: 0 0 4px; font-weight: 600; color: var(--c-prime-color);">
              What can you type here?
            </h4>
            <p style="margin: 0 0 8px; font-size: 12px; color: var(--c-text-secondary);">
              Describe what you need help with in one short sentence.
            </p>
            <div style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--c-prime-color);">
              Examples
            </div>
            <ul style="padding-left: 10px; font-size: 12px; color: var(--c-text-secondary);">
              <li><strong>Project name ideas</strong> for a task management app</li>
              <li><strong>Short description</strong> for a pricing card subtitle</li>
              <li><strong>Tooltip text</strong> explaining an advanced setting</li>
            </ul>
          </div>
        </CPopover>
      </template>
      <script setup>
        import CPopover from 'craftvue/popover'
        import CButton from 'craftvue/button'
        import CInput from 'craftvue/input'
        import InfoIcon from '@craftvue/icons/info'
      </script>
    `,
  },
  template: {
    simple: `
      <CButton ref="rootElRef" label="Click to Open Popover" />
      <CPopover
        :show="show"
        :root-el="rootElRef?.$el"
        @hide="close"
        @show="open"
      >
        <template #header>
          <h3>Login</h3>
          <CButton
            severity="secondary"
            variant="text"
            rounded
            :icon="CloseIcon"
            @click="close"
          />
        </template>

        <CFormItem label="Email" required>
          <CInput v-model="email" type="email" placeholder="test@gmail.com" />
        </CFormItem>
        <CFormItem label="Password" required>
          <CInput v-model="password" type="password" placeholder="123456" />
        </CFormItem>
        <CCheckbox v-model="rememder" label="Remember me" />
        <CButton>Submit</CButton>

        <template #footer>
          <CButton
            severity="secondary"
            size="sm"
            @click="close"
          >
            Cancel
          </CButton>
          <CButton size="sm" @click="close">Next</CButton>
        </template>
      </CPopover>
    `,
    full: `
      <template>
        <CButton ref="rootElRef" label="Click to Open Popover" />
        <CPopover
          :show="show"
          :root-el="rootElRef?.$el"
          @hide="close"
          @show="open"
        >
          <template #header>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 24px; font-weight: 600;">
                Login
              </h3>
              <CButton
                severity="secondary"
                variant="text"
                rounded
                :icon="CloseIcon"
                @click="close"
              />
            </div>
          </template>

          <CFormItem label="Email" required style="margin-bottom: 10px;">
            <CInput v-model="email" type="email" placeholder="test@gmail.com" />
          </CFormItem>
          <CFormItem label="Password" required style="margin-bottom: 10px;">
            <CInput v-model="password" type="password" placeholder="123456" />
          </CFormItem>
          <CCheckbox v-model="rememder" label="Remember me" />
          <CButton style="width: 100%; margin-top: 10px;">Submit</CButton>

          <template #footer>
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
              <CButton
                severity="secondary"
                size="sm"
                @click="close"
              >
                Cancel
              </CButton>
              <CButton size="sm" @click="close">Next</CButton>
            </div>
          </template>
        </CPopover>
      </template>
      <script setup>
        import { ref, useTemplateRef } from "vue"
        import CPopover from 'craftvue/popover'
        import CButton from 'craftvue/button'
        import CFormItem from "craftvue/formitem"
        import CInput from "craftvue/input"
        import CCheckbox from "craftvue/checkbox"
        import CloseIcon from '@craftvue/icons/close'

        const show = ref(false)
        const rootElRef = useTemplateRef('rootElRef')
        const email = ref('')
        const password = ref('')
        const rememder = ref(false)

        const close = () => (show.value = false)
        const open = () => (show.value = true)
      </script>
    `,
  },
}

export default popoverCodeTexts
