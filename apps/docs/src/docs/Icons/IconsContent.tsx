/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useI18n } from 'docs/hooks/useI18n'
import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import configCodeTexts from 'docs/docs/codes'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor'
import {
  generateIdFromKey,
  parseInlineCode,
  translateCodeComments,
} from 'docs/utils'
import i18n from '../../../.storybook/i18n'

export const IconsContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { t } = useI18n()

  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('icons.title')}</Title>
        <Subtitle>{t('icons.subtitle')}</Subtitle>
        <p>&nbsp;</p>
        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('icons.download.title')}
        >
          {t('icons.download.title')}
        </HeadingWithAnchor>
        <p>{t('icons.download.description')}</p>
        <CustomSource
          code={translateCodeComments(configCodeTexts.iconsDownload, {
            usingNpm: t('codeComments.usingNpm'),
            usingYarn: t('codeComments.usingYarn'),
            usingPnpm: t('codeComments.usingPnpm'),
          })}
          actions={['copy']}
          parser="bash"
          language="apache"
        />
        <p>&nbsp;</p>
        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('icons.import.title')}
        >
          {t('icons.import.title')}
        </HeadingWithAnchor>
        <p>{t('icons.import.description')}</p>
        <CustomSource
          code={translateCodeComments(configCodeTexts.iconsImport, {
            singleImport: t('codeComments.singleImport'),
          })}
          actions={['copy']}
        />
        <p>&nbsp;</p>
        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('icons.component.title')}
        >
          {t('icons.component.title')}{' '}
          <a href="/?path=/docs/basic-icon--docs">Icon</a>
        </HeadingWithAnchor>
        <p>
          {t('icons.component.descriptionPrefix')}{' '}
          <a href="/?path=/docs/basic-icon--docs">Icon</a>{' '}
          {parseInlineCode(t('icons.component.descriptionSuffix'))}
        </p>
        {stories[0]}
        <CustomSource type="icon" name="color" />
        <p>&nbsp;</p>
        <HeadingWithAnchor level={2} id={generateIdFromKey('icons.list.title')}>
          {t('icons.list.title')}
        </HeadingWithAnchor>
        <p>{t('icons.list.description')}</p>
        {stories[1]}
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}
