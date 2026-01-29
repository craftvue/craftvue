import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as ConfirmPopupStories from './ConfirmPopup.stories'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const confirmPopupSections: SectionConfig[] = [
  { translationKey: 'confirmpopup.basic', customSourceParser: 'html' },
  {
    translationKey: 'confirmpopup.placement',
    customSourceName: 'placement',
    customSourceParser: 'html',
  },
  {
    translationKey: 'confirmpopup.controlled',
    customSourceName: 'controlled',
    customSourceParser: 'html',
    customSourcePrintWidth: 140
  },
  {
    translationKey: 'confirmpopup.customization',
    customSourceName: 'customization',
    customSourceParser: 'html',
    customSourcePrintWidth: 180
  },
  {
    translationKey: 'confirmpopup.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
]

export const ConfirmPopupContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('confirmpopup')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('confirmpopup.title')}</Title>
        <Subtitle>{t('confirmpopup.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('confirmpopup.import.title')}
        >
          {t('confirmpopup.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CConfirmPopup from 'craftvue/confirmpopup'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={ConfirmPopupStories.default} />

        {/* Stories */}
        {confirmPopupSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="confirmPopup"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            customSourcePrintWidth={section.customSourcePrintWidth}
            noSpacing={index === confirmPopupSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('confirmpopup.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
