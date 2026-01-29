import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as DialogStories from './Dialog.stories'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const dialogSections: SectionConfig[] = [
  {
    translationKey: 'dialog.basic',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'dialog.fullscreen',
    customSourceName: 'fullscreen',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'dialog.animation',
    customSourceName: 'animation',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'dialog.nonModal',
    customSourceName: 'nonModal',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'dialog.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
  {
    translationKey: 'dialog.size',
    customSourceName: 'size',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'dialog.withoutHeader',
    customSourceName: 'withoutHeader',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'dialog.customIcons',
    customSourceName: 'customIcons',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
]

export const DialogContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('dialog')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('dialog.title')}</Title>
        <Subtitle>{t('dialog.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('dialog.import.title')}
        >
          {t('dialog.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CDialog from 'craftvue/dialog'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={DialogStories.default} />

        {/* Stories */}
        {dialogSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="dialog"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            customSourcePrintWidth={section.customSourcePrintWidth}
            noSpacing={index === dialogSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('dialog.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
