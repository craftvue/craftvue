/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Title, TableOfContents } from '@storybook/addon-docs/blocks'
import changelogContent from '../../../../../CHANGELOG.md?raw'
import { marked } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import { useI18n } from 'docs/hooks/useI18n'

marked.use(gfmHeadingId())

export const ChangelogContent: React.FC = () => {
  const { t } = useI18n()

  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('changelog.title')}</Title>

        <p>&nbsp;</p>

        <div
          className="changelog"
          dangerouslySetInnerHTML={{ __html: marked.parse(changelogContent) }}
        />
      </div>

      <div>
        <TableOfContents
          className="sb-docs-toc sb-unstyled"
          title={t('changelog.versions')}
          contentsSelector=".changelog"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
