/* eslint-disable @typescript-eslint/no-explicit-any */
import { Title, Subtitle } from '@storybook/addon-docs/blocks'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../.storybook/i18n'
import { useI18n } from 'docs/hooks/useI18n'

const OverviewContentInner = () => {
  const { t } = useI18n()

  return (
    <div className="sb-docs-wrapper">
      <div className="sb-docs-content">
        <Title>{t('overview.title')}</Title>

        <p>&nbsp;</p>

        <Subtitle>{t('overview.subtitle')}</Subtitle>
      </div>
    </div>
  )
}

export const OverviewContent = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <OverviewContentInner />
    </I18nextProvider>
  )
}
