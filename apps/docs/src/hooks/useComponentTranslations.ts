import { useEffect, useState } from 'react'
import { useI18n } from './useI18n'
import { loadComponentTranslationsBatch } from 'docs/utils/loadComponentTranslations'

/**
 * Хук для загрузки переводов для компонента(ов)
 * @param componentNames - имя компонента или массив имен компонентов
 */
export function useComponentTranslations(
  componentNames: string | string[],
): boolean {
  const { currentLanguage } = useI18n()
  const [translationsLoaded, setTranslationsLoaded] = useState<boolean>(false)

  useEffect(() => {
    // Сбрасываем состояние при смене языка
    setTranslationsLoaded(false)

    const names = Array.isArray(componentNames)
      ? componentNames
      : [componentNames]

    loadComponentTranslationsBatch(names).then(() => {
      setTranslationsLoaded(true)
    })
  }, [componentNames, currentLanguage])

  return translationsLoaded
}
