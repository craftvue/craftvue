import React from 'react'
import { useTranslation } from 'react-i18next'
import { addons, types } from 'storybook/manager-api'
import { GlobeIcon } from '../components/icons/GlobeIcon'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const api = addons.getChannel()

  const toggleLanguage = () => {
    const currentLang = i18n.language || 'en'
    const newLang = currentLang === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang).then(() => {
      if (api) {
        api.emit('LANGUAGE_CHANGED', newLang)
      }
    })
  }

  const currentLang = i18n.language || 'en'
  const isRussian = currentLang === 'ru'

  return (
    <button
      onClick={toggleLanguage}
      id="language-switcher"
      title={isRussian ? 'Switch to English' : 'Переключить на русский'}
      className="language-switcher"
    >
      <GlobeIcon />
      {isRussian ? 'EN' : 'RU'}
    </button>
  )
}

addons.register('language-switcher', () => {
  addons.add('language-switcher/tool', {
    title: 'Language',
    type: types.TOOL,
    match: () => true,
    render: () => <LanguageSwitcher />,
  })
})
