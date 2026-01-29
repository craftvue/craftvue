import i18n from '../../.storybook/i18n'

const loadedComponents = new Map<string, Set<string>>()

/**
 * Загружает переводы для указанного компонента
 * @param componentName - имя компонента
 */
export async function loadComponentTranslations(
  componentName: string,
): Promise<void> {
  const lang = i18n.language || 'en'

  // Инициализируем Set для языка, если его нет
  if (!loadedComponents.has(lang)) {
    loadedComponents.set(lang, new Set())
  }

  const langSet = loadedComponents.get(lang)!

  // Проверяем, не загружены ли уже переводы для этого компонента
  if (langSet.has(componentName)) {
    return
  }

  try {
    const translations = await import(
      `../../.storybook/locales/${lang}/${componentName}.json`
    )

    i18n.addResourceBundle(
      lang,
      'translation',
      translations.default,
      false, 
      true,
    )

    // Помечаем как загруженный
    langSet.add(componentName)
  } catch (e) {
    console.warn(
      `Failed to load translations for component "${componentName}" in language "${lang}":`,
      e,
    )
  }
}

/**
 * Загружает переводы для нескольких компонентов
 * @param componentNames - имена компонентов
 */
export async function loadComponentTranslationsBatch(
  componentNames: string[],
): Promise<void> {
  await Promise.all(
    componentNames.map((name) => loadComponentTranslations(name)),
  )
}
