/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, onMounted, onUnmounted, ref } from 'vue'
import i18n from '../../.storybook/i18n'
import { setupLanguageSync } from 'docs/utils/i18nSync'

/**
 * Composable для использования i18n в Vue компонентах
 * Обеспечивает реактивность при изменении языка
 */
export function useI18n() {
  // Реактивное состояние текущего языка
  const currentLanguage = ref(i18n.language)

  let cleanupFn: (() => void) | null = null

  onMounted(() => {
    cleanupFn = setupLanguageSync((newLang: string) => {
      currentLanguage.value = newLang
    })
  })

  onUnmounted(() => {
    if (cleanupFn) {
      cleanupFn()
    }
  })

  // Функция перевода (реактивная)
  const t = (key: string, options?: any): string => {
    const result = i18n.t(key, { ...options, lng: currentLanguage.value })
    return typeof result === 'string' ? result : key
  }

  return {
    t,
    // Возвращаем как computed для read-only доступа и автоматической реактивности
    currentLanguage: computed(() => currentLanguage.value),
    changeLanguage: (lng: string) => {
      currentLanguage.value = lng
      i18n.changeLanguage(lng)
    },
  }
}
