import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as ConfirmDialogStories from './ConfirmDialog.stories'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const confirmDialogSections: SectionConfig[] = [
  { translationKey: 'confirmdialog.basic', customSourceParser: 'html' },
  {
    translationKey: 'confirmdialog.type',
    customSourceName: 'type',
    customSourceParser: 'html',
  },
  {
    translationKey: 'confirmdialog.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
  {
    translationKey: 'confirmdialog.oneAction',
    customSourceName: 'oneAction',
    customSourceParser: 'html',
  },
]

export const ConfirmDialogContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('confirmdialog')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('confirmdialog.title')}</Title>
        <Subtitle>{t('confirmdialog.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('confirmdialog.import.title')}
        >
          {t('confirmdialog.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CConfirmDialog from 'craftvue/confirmdialog'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={ConfirmDialogStories.default} />

        {/* Stories */}
        {confirmDialogSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="confirmDialog"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            noSpacing={index === confirmDialogSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('confirmdialog.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
