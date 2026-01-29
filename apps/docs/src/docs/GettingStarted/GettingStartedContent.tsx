/* eslint-disable @typescript-eslint/no-explicit-any */
import i18n from '../../../.storybook/i18n'
import { I18nextProvider } from 'react-i18next'
import { Title, Subtitle, TableOfContents } from '@storybook/addon-docs/blocks'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import configCodeTexts from 'docs/docs/codes'
import {
  generateIdFromKey,
  parseInlineCode,
  translateCodeComments,
} from 'docs/utils'
import { useI18n } from 'docs/hooks/useI18n'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor'

const GettingStartedContentInner = () => {
  const { t } = useI18n()

  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('gettingStarted.title')}</Title>
        <Subtitle>{t('gettingStarted.subtitle')}</Subtitle>

        <p>&nbsp;</p>

        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('gettingStarted.download.title')}
        >
          {t('gettingStarted.download.title')}
        </HeadingWithAnchor>
        <p>{t('gettingStarted.download.description')}</p>
        <CustomSource
          code={translateCodeComments(configCodeTexts.download, {
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
          id={generateIdFromKey('gettingStarted.connection.title')}
        >
          {t('gettingStarted.connection.title')}
        </HeadingWithAnchor>
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('gettingStarted.connection.basicUsage.title')}
        >
          {t('gettingStarted.connection.basicUsage.title')}
        </HeadingWithAnchor>
        <p>
          {parseInlineCode(
            t('gettingStarted.connection.basicUsage.description'),
          )}
        </p>
        <p>{t('gettingStarted.connection.basicUsage.singleImport')}</p>
        <CustomSource
          code={translateCodeComments(configCodeTexts.basicUsage, {
            singleImport: t('codeComments.singleImport'),
          })}
          actions={['copy']}
        />

        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey(
            'gettingStarted.connection.globalRegistration.title',
          )}
        >
          {t('gettingStarted.connection.globalRegistration.title')}
        </HeadingWithAnchor>
        <p>
          {parseInlineCode(
            t('gettingStarted.connection.globalRegistration.description'),
          )}
        </p>
        <CustomSource
          code={configCodeTexts.globalReg}
          actions={['copy']}
          parser="babel"
          language="typescript"
        />

        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('gettingStarted.connection.autoImport.title')}
        >
          {t('gettingStarted.connection.autoImport.title')}
        </HeadingWithAnchor>
        <p>{t('gettingStarted.connection.autoImport.description')}</p>
        <p>{t('gettingStarted.connection.autoImport.install')}</p>
        <CustomSource
          code={configCodeTexts.autoImport}
          actions={['copy']}
          parser="babel"
          language="typescript"
        />

        <p>&nbsp;</p>

        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('gettingStarted.styling.title')}
        >
          {t('gettingStarted.styling.title')}
        </HeadingWithAnchor>
        <p>{parseInlineCode(t('gettingStarted.styling.description'))}</p>
        <CustomSource
          code={configCodeTexts.styles}
          actions={['copy']}
          parser="babel"
          language="typescript"
        />
      </div>

      <div>
        <TableOfContents
          key={i18n.language}
          className="sb-docs-toc sb-unstyled"
          title={t('tableOfContents')}
          contentsSelector=".sb-docs-content"
          headingSelector="h2, h3"
          ignoreSelector=".sbdocs-subtitle"
          channel={channel}
        />
      </div>
    </div>
  )
}

export const GettingStartedContent = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <GettingStartedContentInner />
    </I18nextProvider>
  )
}
