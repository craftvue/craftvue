import i18n from '../../.storybook/i18n'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { setupLanguageSync } from 'docs/utils/i18nSync'

/**
 * React хук для использования i18n в TSX комопнентах
 * Обеспечивает реактивность при изменении языка
 * Использует react-i18next под капотом для совместимости
 */
export function useI18n() {
  const { t } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  useEffect(() => {
    const cleanup = setupLanguageSync((newLang: string) => {
      setCurrentLanguage(newLang)
    })

    return cleanup
  }, [])

  return {
    t,
    currentLanguage,
    changeLanguage: (lng: string) => {
      setCurrentLanguage(lng)
      i18n.changeLanguage(lng)
    },
  }
}
