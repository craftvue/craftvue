<template>
  <div class="gallery">
    <CInput
      v-model="search"
      :placeholder="t('icons.gallery.searchPlaceholder')"
      class="gallery-input"
    />

    <ul ref="parent" class="gallery__list">
      <template v-for="(IconComponent, name) in icons" :key="name">
        <li v-if="showIcon(name)" class="gallery__item">
          <CIcon class="gallery__item-icon">
            <component :is="IconComponent" />
          </CIcon>
          <p class="gallery__item-text">
            {{ removeEntryName(name)[0]
            }}<span class="text-highlighted">{{ search }}</span
            >{{ removeEntryName(name)[1] }}
          </p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CIcon, CInput } from 'craftvue'
import * as icons from '@craftvue/icons'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { useI18n } from 'docs/composables/useI18n'

const { t } = useI18n()
const [parent] = useAutoAnimate()

const search = ref('')

const formateName = (name: string): string =>
  name.replace('Icon', '').toLowerCase()
const showIcon = (name: string): boolean =>
  !search.value || formateName(name).includes(search.value)
const removeEntryName = (name: string) =>
  formateName(name).replace(search.value, ' ').split(' ')
</script>

<style scoped lang="scss">
.gallery {
  padding: 20px;
  background-color: var(--ground-back);
}
.gallery-input {
  width: 100%;
  margin-bottom: 15px;
}

.gallery__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}
.gallery__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #414141;
  border-radius: 8px;
  padding: 10px;
  background-color: #ffffff0a;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:hover {
    border-color: var(--prime-color);
    box-shadow: 0 0 10px #525252;
  }
}

.gallery__item-icon {
  font-size: 32px;
  margin-bottom: 5px;
}

.gallery__item-text {
  font-size: 12px;
  color: #8f8f8f;
  word-break: break-word;

  .text-highlighted {
    font-weight: 500;
    color: var(--prime-color-light);
  }
}
</style>
