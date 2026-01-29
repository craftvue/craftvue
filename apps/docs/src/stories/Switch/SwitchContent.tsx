import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as SwitchStories from './Switch.stories'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const switchSections: SectionConfig[] = [
  { translationKey: 'switch.basic' },
  { translationKey: 'switch.withLabel', customSourceName: 'withLabel' },
  { translationKey: 'switch.filled', customSourceName: 'filled' },
  { translationKey: 'switch.size', customSourceName: 'size' },
  { translationKey: 'switch.disabled', customSourceName: 'disabled' },
  { translationKey: 'switch.invalid', customSourceName: 'invalid' },
  { translationKey: 'switch.loading', customSourceName: 'loading' },
  {
    translationKey: 'switch.customLabel',
    customSourceName: 'customLabel',
    customSourceParser: 'html',
  },
  {
    translationKey: 'switch.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
  {
    translationKey: 'switch.customValues',
    customSourceName: 'customValues',
    customSourceParser: 'html',
  },
  {
    translationKey: 'switch.form',
    customSourceName: 'form',
    customSourceParser: 'html',
  },
]

export const SwitchContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('switch')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('switch.title')}</Title>
        <Subtitle>{t('switch.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('switch.import.title')}
        >
          {t('switch.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CSwitch from 'craftvue/switch'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={SwitchStories.default} />

        {/* Stories */}
        {switchSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="switch"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            noSpacing={index === switchSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('switch.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
