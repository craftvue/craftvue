import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as FormItemStories from './FormItem.stories.ts'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const formItemSections: SectionConfig[] = [
  { translationKey: 'formitem.basic', customSourceParser: 'html' },
  {
    translationKey: 'formitem.withLabel',
    customSourceName: 'withLabel',
    customSourceParser: 'html',
  },
  {
    translationKey: 'formitem.required',
    customSourceName: 'required',
    customSourceParser: 'html',
  },
  {
    translationKey: 'formitem.withError',
    customSourceName: 'withError',
    customSourceParser: 'html',
  },
  {
    translationKey: 'formitem.customLabel',
    customSourceName: 'customLabel',
    customSourceParser: 'html',
  },
  {
    translationKey: 'formitem.customError',
    customSourceName: 'customError',
    customSourceParser: 'html',
    customSourcePrintWidth: 150,
  },
  {
    translationKey: 'formitem.withFor',
    customSourceName: 'withFor',
    customSourceParser: 'html',
  },
  {
    translationKey: 'formitem.form',
    customSourceName: 'form',
    customSourceParser: 'html',
    customSourcePrintWidth: 120
  },
]

export const FormItemContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('formitem')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('formitem.title')}</Title>
        <Subtitle>{t('formitem.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('formitem.import.title')}
        >
          {t('formitem.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CFormItem from 'craftvue/formitem'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={FormItemStories.default} />

        {/* Stories */}
        {formItemSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="formItem"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            customSourcePrintWidth={section.customSourcePrintWidth}
            noSpacing={index === formItemSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('formitem.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
