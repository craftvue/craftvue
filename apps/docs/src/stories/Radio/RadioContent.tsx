import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as RadioStories from './Radio.stories'
import * as RadioGroupStories from './RadioGroup.stories.ts'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const radioSections: SectionConfig[] = [
  { translationKey: 'radio.basic' },
  { translationKey: 'radio.filled', customSourceName: 'filled' },
  { translationKey: 'radio.size', customSourceName: 'size' },
  { translationKey: 'radio.disabled', customSourceName: 'disabled' },
  { translationKey: 'radio.invalid', customSourceName: 'invalid' },
  {
    translationKey: 'radio.group',
    customSourceName: 'group',
    customSourceParser: 'html',
  },
  {
    translationKey: 'radio.customIcon',
    customSourceName: 'customIcon',
    customSourceParser: 'html',
  },
  {
    translationKey: 'radio.customLabel',
    customSourceName: 'customLabel',
    customSourceParser: 'html',
  },
  {
    translationKey: 'radio.form',
    customSourceName: 'form',
    customSourceParser: 'html',
  },
]

export const RadioContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations(['radio', 'radiogroup'])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('radio.title')}</Title>
        <Subtitle>{t('radio.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('radio.import.title')}
        >
          {t('radio.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code={`
        import CRadio from 'craftvue/radio'
        import CRadioGroup from 'craftvue/radiogroup'
      `}
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* Radio ArgTypes */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('radio.argTypes.radio')}
        >
          {t('radio.argTypes.radio')}
        </HeadingWithAnchor>
        <CustomArgTypes of={RadioStories.default} />

        {/* RadioGroup ArgTypes */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('radio.argTypes.radioGroup')}
        >
          {t('radio.argTypes.radioGroup')}
        </HeadingWithAnchor>
        <CustomArgTypes of={RadioGroupStories.default} />

        {/* Stories */}
        {radioSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="radio"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            noSpacing={index === radioSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('radio.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
