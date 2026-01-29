import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as DropdownStories from './Dropdown.stories.ts'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const dropdownSections: SectionConfig[] = [
  { translationKey: 'dropdown.basic', customSourceParser: 'html' },
  {
    translationKey: 'dropdown.placement',
    customSourceName: 'placement',
    customSourceParser: 'html',
  },
  {
    translationKey: 'dropdown.sameWidth',
    customSourceName: 'sameWidth',
    customSourceParser: 'html',
  },
  {
    translationKey: 'dropdown.arrow',
    customSourceName: 'arrow',
    customSourceParser: 'html',
  },
  {
    translationKey: 'dropdown.animation',
    customSourceName: 'animation',
    customSourceParser: 'html',
  },
  {
    translationKey: 'dropdown.maxSize',
    customSourceName: 'maxSize',
    customSourceParser: 'html',
  },
  {
    translationKey: 'dropdown.boundaryPadding',
    customSourceName: 'boundaryPadding',
    customSourceParser: 'html',
  },
  {
    translationKey: 'dropdown.offset',
    customSourceName: 'offset',
    customSourceParser: 'html',
  },
  {
    translationKey: 'dropdown.template',
    customSourceName: 'template',
    customSourceParser: 'html',
  },
]

export const DropdownContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations('dropdown')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('dropdown.title')}</Title>
        <Subtitle>{t('dropdown.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('dropdown.import.title')}
        >
          {t('dropdown.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code="import CDropdown from 'craftvue/dropdown'"
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <CustomArgTypes of={DropdownStories.default} />

        {/* Stories */}
        {dropdownSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="dropdown"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            noSpacing={index === dropdownSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('dropdown.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
