<template>
  <div class="palette">
    <div v-for="color in value" :key="color.title" class="palette__color">
      <h1 class="palette__color-title">{{ t(color.title) }}</h1>
      <ul class="palette__list">
        <li
          v-for="(shade, key) in color.colors"
          :key="key"
          class="palette__item"
          :style="{ backgroundColor: shade }"
        >
          <span
            class="palette__item-text"
            :style="{ ...getStyleText(shade) }"
            >{{ key }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getLuminance } from 'docs/utils'
import { CSSProperties } from 'vue'
import { useI18n } from 'docs/composables/useI18n'

defineProps<{ value: { title: string; colors: Record<number, string> }[] }>()

const { t } = useI18n()

const getStyleText = (color: string): CSSProperties => {
  const luminance = getLuminance(color)

  if (luminance > 150) {
    return { color: '#000', fontWeight: 500 }
  } else {
    return { color: '#fff', fontWeight: 400 }
  }
}
</script>

<style scoped lang="scss">
.palette {
  &__color {
    & + & {
      margin-top: 10px;
    }
  }

  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    grid-template-rows: 30px;
    gap: 10px;
  }

  &__item {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--secondary-back);
  }

  &__item-text {
    font-size: 12px;
  }
}
.palette__color-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #fff;
}
</style>
