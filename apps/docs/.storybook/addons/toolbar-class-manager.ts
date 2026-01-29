import {
  DOCS_RENDERED,
  STORY_RENDERED,
} from '@storybook/core-events'
import { addons } from 'storybook/manager-api'

addons.register('toolbar-class-manager', (api) => {
  const updateToolbarClass = () => {
    const toolbar = document.querySelector(
      'section.sb-bar[data-test-id="sb-preview-toolbar"]',
    )

    if (toolbar) {
      try {
        const storyData = api.getCurrentStoryData()
        const isDocs = storyData.type === 'docs'

        if (isDocs) {
          toolbar.classList.add('sb-toolbar-docs')
          toolbar.classList.remove('sb-toolbar-story')
        } else {
          toolbar.classList.add('sb-toolbar-story')
          toolbar.classList.remove('sb-toolbar-docs')
        }
      } catch {
        // по умолчанию - режим story
        toolbar.classList.add('sb-toolbar-story')
        toolbar.classList.remove('sb-toolbar-docs')
      }
    }
  }

  // Начальная установка
  api.on(STORY_RENDERED, () => {
    setTimeout(updateToolbarClass, 0)
  })
  api.on(DOCS_RENDERED, () => {
    setTimeout(updateToolbarClass, 0)
  })
})
