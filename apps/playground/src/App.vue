<template>
  <div class="playground">
    <div class="demo-section">
      <CTabs value="1">
        <CTabList>
          <CTab value="1">Tab 1</CTab>
          <CTab value="2">Tab 2</CTab>
          <CTab value="3">Tab 3</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel value="1">Panel 1</CTabPanel>
          <CTabPanel value="2">Panel 2</CTabPanel>
          <CTabPanel value="3">Panel 3</CTabPanel>
        </CTabPanels>
      </CTabs>

      <div id="test">Radio</div>
      <div style="display: flex; gap: 10rem">
        <div style="display: flex; flex-direction: column; gap: 10px">
          <CRadio v-model="selected" value="option1" label="Опция 1"> </CRadio>
          <CRadio v-model="selected" value="option2" label="Опция 2"> </CRadio>
          <CRadio v-model="selected" value="option3" label="Опция 3"> </CRadio>
        </div>

        <CRadioGroup v-model="selectedGroup">
          <CRadio value="option1" label="Опция 1"> </CRadio>
          <CRadio value="option2" label="Опция 2"> </CRadio>
          <CRadio value="option3" label="Опция 3"> </CRadio>
        </CRadioGroup>

        <CCheckboxGroup v-model="selectedCheckboxGroup">
          <CCheckbox value="option1" label="Опция 1" />
          <CCheckbox value="option2" label="Опция 2" />
          <CCheckbox value="option3" label="Опция 3" />
        </CCheckboxGroup>

        <CCheckbox v-model="selectedCheckbox" label="Опция 1" />
      </div>

      <CPopover max-width="300px" max-height="300px" title="fdgdfg">
        <template #trigger>
          <CButton raised label="Primary" />
        </template>
      </CPopover>

      <CButton ref="test" raised label="Test" />
      <CPopover :root-el="test" max-width="300px" max-height="300px" title="fdgdfg"> </CPopover>

      <CConfirmPopup :message="'Do you want to delete this record?'">
        <template #trigger>
          <CButton label="Primary"></CButton>
        </template>
      </CConfirmPopup>

      <CButton label="Open Confirm Dialog" @click="confirmDialog?.open()" />
      <CConfirmDialog
        ref="confirmDialog"
        v-model:show="confirmDialogOpen"
        title="Подтверждение действия"
        message="Вы уверены, что хотите выполнить это действие? Это действие нельзя отменить."
      >
      </CConfirmDialog>

      <CButton label="Open Dialog" @click="dialogOpen = !dialogOpen" />
      <CDialog v-model:show="dialogOpen" title="Dialog Example">
        <p>Диалог поддерживает закрытие по клику на overlay и нажатию ESC.</p>
      </CDialog>
      <div id="switch">Switch Test</div>
      <!-- <CSwitch v-model="switchValue" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import { CTabs, CTabList, CTab, CTabPanels, CTabPanel } from 'craftvue'
// import { CTabs } from 'craftvue/tabs'
// import { CTabList } from 'craftvue/tablist'
// import { CTab } from 'craftvue/tab'
// import { CTabPanels } from 'craftvue/tabpanels'
// import { CTabPanel } from 'craftvue/tabpanel'

// import {
//   MinimizeIcon,
//   MaximizeIcon,
//   HomeIcon,
//   WarningIcon,
//   InfoIcon,
//   ErrorIcon,
//   CheckIcon,
// } from 'icons-dev'
import {
  CTab,
  CTabList,
  CTabPanel,
  CTabPanels,
  CTabs,
  CRadio,
  CRadioGroup,
  CCheckbox,
  CCheckboxGroup,
  CButton,
  CPopover,
  CConfirmPopup,
  CConfirmDialog,
  CDialog,
} from 'craftvue-dev'

const selected = ref('option1')
const selectedGroup = ref('option1')

const selectedCheckbox = ref(true)
const selectedCheckboxGroup = ref(['option1'])
const dialogOpen = ref(false)
const confirmDialogOpen = ref(false)
const confirmDialog = ref<InstanceType<typeof CConfirmDialog> | null>(null)

const test = ref()
</script>

<style scoped>
.playground {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  height: 400px;
  overflow-y: auto;
  background-color: var(--ground-back);
}

.demo-section h2 {
  margin-top: 0;
  color: #333;
}

.select {
  width: 250px;
}
</style>
