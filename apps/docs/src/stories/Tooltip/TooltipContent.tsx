import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as TooltipStories from './Tooltip.stories'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const tooltipSections: SectionConfig[] = [
  { translationKey: 'tooltip.basic', customSourceParser: 'html' },
  {
    translationKey: 'tooltip.placement',
    customSourceName: 'placement',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tooltip.trigger',
    customSourceName: 'trigger',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tooltip.autoHide',
    customSourceName: 'autoHide',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tooltip.delay',
    customSourceName: 'delay',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tooltip.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tooltip.triggerSlot',
    customSourceName: 'triggerSlot',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tooltip.controlled',
    customSourceName: 'controlled',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tooltip.rootEl',
    customSourceName: 'rootEl',
    customSourceParser: 'html',
  },
]

export const TooltipContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('tooltip')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if(!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('tooltip.title')}</Title>
        <Subtitle>{t('tooltip.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('tooltip.import.title')}
        >
          {t('tooltip.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CTooltip from 'craftvue/tooltip'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={TooltipStories.default} />

        {/* Stories */}
        {tooltipSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="tooltip"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            noSpacing={index === tooltipSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('tooltip.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
