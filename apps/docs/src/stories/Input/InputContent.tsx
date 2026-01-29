import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as InputStories from './Input.stories.ts'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const inputSections: SectionConfig[] = [
  { translationKey: 'input.basic' },
  { translationKey: 'input.filled', customSourceName: 'filled' },
  { translationKey: 'input.size', customSourceName: 'size' },
  { translationKey: 'input.invalid', customSourceName: 'invalid' },
  { translationKey: 'input.disabled', customSourceName: 'disabled' },
  { translationKey: 'input.clearable', customSourceName: 'clearable' },
  {
    translationKey: 'input.customClearIcon',
    customSourceName: 'customClearIcon',
  },
  { translationKey: 'input.formatter', customSourceName: 'formatter' },
  { translationKey: 'input.password', customSourceName: 'password' },
  {
    translationKey: 'input.limitLength',
    customSourceName: 'limitLength',
  },
  {
    translationKey: 'input.withIcon',
    customSourceName: 'withIcon',
    customSourceParser: 'html',
  },
  {
    translationKey: 'input.inputGroup',
    customSourceName: 'inputGroup',
    customSourceParser: 'html',
    customSourcePrintWidth: 120
  },
]

export const InputContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('input')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('input.title')}</Title>
        <Subtitle>{t('input.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('input.import.title')}
        >
          {t('input.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CInput from 'craftvue/input'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={InputStories.default} />

        {/* Stories */}
        {inputSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="input"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            customSourcePrintWidth={section.customSourcePrintWidth}
            noSpacing={index === inputSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('input.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
