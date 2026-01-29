import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as SelectStories from './Select.stories.ts'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const selectSections: SectionConfig[] = [
  { translationKey: 'select.basic' },
  { translationKey: 'select.disabled', customSourceName: 'disabled' },
  {
    translationKey: 'select.disabledOption',
    customSourceName: 'disabledOption',
  },
  { translationKey: 'select.clearable', customSourceName: 'clearable' },
  { translationKey: 'select.invalid', customSourceName: 'invalid' },
  { translationKey: 'select.multiple', customSourceName: 'multiple' },
  { translationKey: 'select.filled', customSourceName: 'filled' },
  { translationKey: 'select.fullWidth', customSourceName: 'fullWidth' },
  { translationKey: 'select.loading', customSourceName: 'loading' },
  { translationKey: 'select.filter', customSourceName: 'filter' },
  {
    translationKey: 'select.size',
    customSourceName: 'size',
    customSourcePrintWidth: 150,
  },
  { translationKey: 'select.checkmark', customSourceName: 'checkmark' },
  {
    translationKey: 'select.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
  {
    translationKey: 'select.form',
    customSourceName: 'form',
    customSourceParser: 'html',
  },
]

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('select')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('select.title')}</Title>
        <Subtitle>{t('select.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('select.import.title')}
        >
          {t('select.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CSelect from 'craftvue/select'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={SelectStories.default} />

        {/* Stories */}
        {selectSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="select"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            customSourcePrintWidth={section.customSourcePrintWidth}
            noSpacing={index === selectSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('select.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
