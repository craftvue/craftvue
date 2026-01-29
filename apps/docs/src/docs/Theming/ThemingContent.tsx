/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import i18n from '../../../.storybook/i18n'
import {
  Title,
  Subtitle,
  TableOfContents,
  Typeset,
} from '@storybook/addon-docs/blocks'
import { useI18n } from 'docs/hooks/useI18n'
import { I18nextProvider } from 'react-i18next'
import configCodeTexts from 'docs/docs/codes'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor'
import {
  generateIdFromKey,
  parseInlineCode,
  translateCodeComments,
} from 'docs/utils'

const typography = {
  type: {
    primary: 'Montserrat',
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    xxs: '11px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '24px',
  },
}

const ThemingContentInner = ({ children }: { children: React.ReactNode }) => {
  const { t } = useI18n()

  const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__
  const stories = React.Children.toArray(children)

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('theming.title')}</Title>
        <Subtitle>{t('theming.subtitle')}</Subtitle>
        <p>&nbsp;</p>
        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('theming.connection.title')}
        >
          {t('theming.connection.title')}
        </HeadingWithAnchor>
        <p>{parseInlineCode(t('theming.connection.description'))}</p>
        <CustomSource
          code={configCodeTexts.styles}
          actions={['copy']}
          parser="babel"
          language="typescript"
        />
        <p>&nbsp;</p>
        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('theming.typography.title')}
        >
          {t('theming.typography.title')}
        </HeadingWithAnchor>
        <p>{t('theming.typography.description')}</p>
        <CustomSource
          code={configCodeTexts.themingFont}
          actions={['copy']}
          parser="html"
          language="xml"
        />
        <p>{parseInlineCode(t('theming.typography.montserratSetup'))}</p>
        <CustomSource
          code={configCodeTexts.themingFontSetup}
          actions={['copy']}
          parser="html"
          language="xml"
        />
        <p>{parseInlineCode(t('theming.typography.fontDownload'))}</p>
        <Typeset
          fontSizes={[
            typography.size.xxs,
            typography.size.xs,
            typography.size.s,
            typography.size.m,
            typography.size.l,
            typography.size.xl,
            typography.size.xxl,
          ]}
          fontWeight={typography.weight.regular}
          sampleText={t('theming.typography.typesetSample')}
          fontFamily={typography.type.primary}
        />
        <p>&nbsp;</p>
        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('theming.colors.title')}
        >
          {t('theming.colors.title')}
        </HeadingWithAnchor>
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('theming.colors.basic.title')}
        >
          {t('theming.colors.basic.title')}
        </HeadingWithAnchor>
        <p>{parseInlineCode(t('theming.colors.basic.description'))}</p>
        <CustomSource
          code={configCodeTexts.themingColorBasic}
          actions={['copy']}
          parser="html"
          language="tsx"
        />
        {stories[0]}
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('theming.colors.components.title')}
        >
          {t('theming.colors.components.title')}
        </HeadingWithAnchor>
        <p>{parseInlineCode(t('theming.colors.components.description'))}</p>
        <CustomSource
          code={configCodeTexts.themingColorComponent}
          actions={['copy']}
          parser="html"
          language="tsx"
        />
        <HeadingWithAnchor
          level={3}
          id={generateIdFromKey('theming.colors.palette.title')}
        >
          {t('theming.colors.palette.title')}
        </HeadingWithAnchor>
        <p>{t('theming.colors.palette.description')}</p>
        <CustomSource
          code={translateCodeComments(configCodeTexts.themingColorPalette, {
            usage: t('codeComments.usage'),
          })}
          actions={['copy']}
          parser="html"
          language="xml"
        />
        {stories[1]}
        <p>&nbsp;</p>
        <HeadingWithAnchor
          level={2}
          id={generateIdFromKey('theming.cssVars.title')}
        >
          {t('theming.cssVars.title')}
        </HeadingWithAnchor>
        <p>{parseInlineCode(t('theming.cssVars.description'))}</p>
        <CustomSource
          code={configCodeTexts.themingCssProperties}
          actions={['copy']}
          parser="html"
          language="xml"
        />
        <p>{parseInlineCode(t('theming.cssVars.varsFile'))}</p>
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

export const ThemingContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemingContentInner>{children}</ThemingContentInner>
    </I18nextProvider>
  )
}
