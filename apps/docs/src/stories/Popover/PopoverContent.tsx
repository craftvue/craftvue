import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as PopoverStories from './Popover.stories'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const popoverSections: SectionConfig[] = [
  { translationKey: 'popover.basic', customSourceParser: 'html' },
  {
    translationKey: 'popover.placement',
    customSourceName: 'placement',
    customSourceParser: 'html',
  },
  {
    translationKey: 'popover.trigger',
    customSourceName: 'trigger',
    customSourceParser: 'html',
  },
  {
    translationKey: 'popover.arrow',
    customSourceName: 'arrow',
    customSourceParser: 'html',
  },
  {
    translationKey: 'popover.triggerSlot',
    customSourceName: 'triggerSlot',
    customSourceParser: 'html',
    customSourcePrintWidth: 150,
  },
  {
    translationKey: 'popover.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
]

export const PopoverContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('popover')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('popover.title')}</Title>
        <Subtitle>{t('popover.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('popover.import.title')}
        >
          {t('popover.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CPopover from 'craftvue/popover'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={PopoverStories.default} />

        {/* Stories */}
        {popoverSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="popover"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            customSourcePrintWidth={section.customSourcePrintWidth}
            noSpacing={index === popoverSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('popover.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
