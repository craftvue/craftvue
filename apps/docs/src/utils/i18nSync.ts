/* eslint-disable @typescript-eslint/no-explicit-any */
import { LANGUAGE_CHANGED } from 'docs/constants'
import i18n from '../../.storybook/i18n'

// Утилита для синхронизации языка между Storybook manager и preview
export function setupLanguageSync(
  onLanguageChange: (newLang: string) => void,
): () => void {
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__

  if (!channel) {
    // Fallback: polling localStorage
    const interval = setInterval(() => {
      const storedLang = localStorage.getItem('storybook-locale')
      if (storedLang) {
        if (storedLang !== i18n.language) {
          i18n.changeLanguage(storedLang)
        }
        onLanguageChange(storedLang)
      }
    }, 200)

    return () => clearInterval(interval)
  }

  // Используем Storybook channel
  const handleLanguageChanged = (newLang: string) => {
    if (!newLang) return
    if (newLang !== i18n.language) {
      i18n.changeLanguage(newLang)
    }
    onLanguageChange(newLang)
  }

  channel.on(LANGUAGE_CHANGED, handleLanguageChanged)

  return () => {
    channel.off(LANGUAGE_CHANGED, handleLanguageChanged)
  }
}
