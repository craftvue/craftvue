import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import { CustomArgTypes } from 'docs/components/CustomArgTypes/CustomArgTypes.tsx'
import * as TabsStories from './Tabs.stories'
import * as TabListStories from './TabList.stories.ts'
import * as TabStories from './Tab.stories.ts'
import * as TabPanelsStories from './TabPanels.stories.ts'
import * as TabPanelStories from './TabPanel.stories.ts'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey } from 'docs/utils'
import type { SectionConfig } from 'docs/types'
import { DocSection } from 'docs/components/DocSection/DocSection.tsx'
import i18n from '../../../.storybook/i18n'
import { useComponentTranslations } from 'docs/hooks/useComponentTranslations'

const tabsSections: SectionConfig[] = [
  {
    translationKey: 'tabs.basic',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'tabs.vertical',
    customSourceName: 'vertical',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'tabs.dynamic',
    customSourceName: 'dynamic',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tabs.template',
    customSourceName: 'template',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'tabs.controlled',
    customSourceName: 'controlled',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'tabs.scrollable',
    customSourceName: 'scrollable',
    customSourceParser: 'html',
  },
  {
    translationKey: 'tabs.disabled',
    customSourceName: 'disabled',
    customSourceParser: 'html',
    customSourcePrintWidth: 250,
  },
  {
    translationKey: 'tabs.navigation',
    customSourceName: 'navigation',
    customSourceParser: 'html',
  },
]

export const TabsContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()
  const translationsLoaded = useComponentTranslations([
    'tabs',
    'tablist',
    'tab',
    'tabpanels',
    'tabpanel',
  ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  if (!translationsLoaded) {
    return null
  }

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('tabs.title')}</Title>
        <Subtitle>{t('tabs.subtitle')}</Subtitle>

        {/* Import */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('tabs.import.title')}
        >
          {t('tabs.import.title')}
        </HeadingWithAnchor>
        <CustomSource
          code={`
        import CTabs from 'craftvue/tabs'
        import CTabList from 'craftvue/tablist'
        import CTab from 'craftvue/tab'
        import CTabPanels from 'craftvue/tabpanels'
        import CTabPanel from 'craftvue/tabpanel'
      `}
          actions={['copy']}
          parser="babel"
          language="javascript"
        />

        {/* ArgTypes */}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('tabs.argTypes.tabs')}
        >
          Tabs
        </HeadingWithAnchor>
        <CustomArgTypes of={TabsStories.default} />

        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('tabs.argTypes.tabList')}
        >
          TabList
        </HeadingWithAnchor>
        <CustomArgTypes of={TabListStories.default} />

        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('tabs.argTypes.tab')}
        >
          Tab
        </HeadingWithAnchor>
        <CustomArgTypes of={TabStories.default} />

        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('tabs.argTypes.tabPanels')}
        >
          TabPanels
        </HeadingWithAnchor>
        <CustomArgTypes of={TabPanelsStories.default} />

        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('tabs.argTypes.tabPanel')}
        >
          TabPanel
        </HeadingWithAnchor>
        <CustomArgTypes of={TabPanelStories.default} />

        {/* Stories */}
        {tabsSections.map((section, index) => (
          <DocSection
            key={section.translationKey}
            translationKey={section.translationKey}
            story={stories[index]}
            customSourceType="tabs"
            customSourceName={section.customSourceName}
            customSourceParser={section.customSourceParser}
            customSourcePrintWidth={section.customSourcePrintWidth}
            noSpacing={index === tabsSections.length - 1}
          />
        ))}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('tabs.tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
