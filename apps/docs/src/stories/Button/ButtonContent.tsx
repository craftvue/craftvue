import React from 'react'
import { useI18n } from 'docs/hooks/useI18n'
import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import * as ButtonStories from './Button.stories.ts'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils/index.ts'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import type { SectionConfig } from 'docs/types'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const buttonSections: SectionConfig[] = [
  { translationKey: 'button.basic' },
  { translationKey: 'button.icons', customSourceName: 'icons' },
  { translationKey: 'button.loading', customSourceName: 'loading' },
  { translationKey: 'button.severity', customSourceName: 'severity' },
  { translationKey: 'button.disabled', customSourceName: 'disabled' },
  { translationKey: 'button.raised', customSourceName: 'raised' },
  { translationKey: 'button.rounded', customSourceName: 'rounded' },
  { translationKey: 'button.text', customSourceName: 'text' },
  { translationKey: 'button.raisedText', customSourceName: 'raisedText' },
  { translationKey: 'button.outlined', customSourceName: 'outlined' },
  { translationKey: 'button.iconOnly', customSourceName: 'iconOnly' },
  { translationKey: 'button.size', customSourceName: 'size' },
  { translationKey: 'button.badge', customSourceName: 'badge' },
  {
    translationKey: 'button.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
]

export const ButtonContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('button')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('button.title')}</Title>
        <Subtitle>{t('button.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('button.import.title')}
        >
          {t('button.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CButton from 'craftvue/button'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />
        <CustomArgTypes of={ButtonStories.default} />

        {/* Stories */}
        {buttonSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="button"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            noSpacing={index === buttonSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('button.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
