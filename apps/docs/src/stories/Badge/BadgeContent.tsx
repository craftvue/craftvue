import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as BadgeStories from './Badge.stories.ts'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const badgeSections: SectionConfig[] = [
  { translationKey: 'badge.basic' },
  { translationKey: 'badge.severity', customSourceName: 'severity' },
  { translationKey: 'badge.size', customSourceName: 'size' },
  { translationKey: 'badge.maxValue', customSourceName: 'maxValue' },
  {
    translationKey: 'badge.customizations',
    customSourceName: 'customizations',
    customSourceParser: 'html',
  },
  {
    translationKey: 'badge.overlay',
    customSourceName: 'overlay',
    customSourceParser: 'html',
  },
  {
    translationKey: 'badge.positionOverlay',
    customSourceName: 'positionOverlay',
    customSourceParser: 'html',
  },
  { translationKey: 'badge.button', customSourceName: 'button' },
]

export const BadgeContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('badge')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('badge.title')}</Title>
        <Subtitle>{t('badge.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('badge.import.title')}
        >
          {t('badge.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CBadge from 'craftvue/badge'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={BadgeStories.default} />

        {/* Stories */}
        {badgeSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="badge"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            noSpacing={index === badgeSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('badge.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
