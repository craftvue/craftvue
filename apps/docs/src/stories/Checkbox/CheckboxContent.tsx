import React from 'react'
import { useI18n } from 'docs/hooks/useI18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'
import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as CheckboxStories from './Checkbox.stories'
import * as CheckboxGroupStories from './CheckboxGroup.stories.ts'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import type { SectionConfig } from 'docs/types'
import i18n from '../../../.storybook/i18n'

const checkboxSections: SectionConfig[] = [
  { translationKey: 'checkbox.basic' },
  { translationKey: 'checkbox.withLabel', customSourceName: 'withLabel' },
  { translationKey: 'checkbox.filled', customSourceName: 'filled' },
  { translationKey: 'checkbox.size', customSourceName: 'size' },
  {
    translationKey: 'checkbox.indeterminate',
    customSourceName: 'indeterminate',
    customSourceParser: 'html',
  },
  { translationKey: 'checkbox.disabled', customSourceName: 'disabled' },
  { translationKey: 'checkbox.invalid', customSourceName: 'invalid' },
  {
    translationKey: 'checkbox.group',
    customSourceName: 'group',
    customSourceParser: 'html',
  },
  {
    translationKey: 'checkbox.customIcon',
    customSourceName: 'customIcon',
    customSourceParser: 'html',
  },
  {
    translationKey: 'checkbox.customLabel',
    customSourceName: 'customLabel',
    customSourceParser: 'html',
  },
  {
    translationKey: 'checkbox.customValues',
    customSourceName: 'customValues',
    customSourceParser: 'html',
  },
  {
    translationKey: 'checkbox.form',
    customSourceName: 'form',
    customSourceParser: 'html',
  },
]

export const CheckboxContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations(['checkbox', 'checkboxgroup'])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('checkbox.title')}</Title>
        <Subtitle>{t('checkbox.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('checkbox.import.title')}
        >
          {t('checkbox.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code={`
            import CCheckbox from 'craftvue/checkbox'
            import CCheckboxGroup from 'craftvue/checkboxgroup'
          `}
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* Checkbox ArgTypes */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('checkbox.argTypes.checkbox')}
        >
          {t('checkbox.argTypes.checkbox')}
        </HeadingWithAnchor>
        <CustomArgTypes of={CheckboxStories.default} />

        {/* CheckboxGroup ArgTypes */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('checkbox.argTypes.checkboxGroup')}
        >
          {t('checkbox.argTypes.checkboxGroup')}
        </HeadingWithAnchor>
        <CustomArgTypes of={CheckboxGroupStories.default} />

        {/* Stories */}
        {checkboxSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="checkbox"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            noSpacing={index === checkboxSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('checkbox.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
