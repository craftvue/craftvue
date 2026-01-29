import type {
  UIComponentType,
  AllStoryNames,
} from 'docs/components/CustomSource/CustomSource.types'
import { useI18n } from 'docs/hooks/useI18n'
import React from 'react'
import HeadingWithAnchor from 'docs/components/HeadingWithAnchor/HeadingWithAnchor.tsx'
import { generateIdFromKey, parseInlineCode } from 'docs/utils/index.ts'
import { CustomSource } from 'docs/components/CustomSource/CustomSource'

interface DocSectionProps {
  translationKey: string
  story: React.ReactNode
  customSourceType: UIComponentType
  customSourceName?: AllStoryNames
  customSourceParser?: 'babel' | 'vue' | 'markdown' | 'html' | 'bash'
  customSourcePrintWidth?: number
  level?: 2 | 3
  noSpacing?: boolean
}

export const DocSection: React.FC<DocSectionProps> = ({
  translationKey,
  story,
  customSourceType,
  customSourceName,
  customSourceParser,
  customSourcePrintWidth,
  level = 2,
  noSpacing = false,
}) => {
  const { t } = useI18n()
  return (
    <>
      <HeadingWithAnchor
        level={level}
        id={generateIdFromKey(`${translationKey}.title`)}
      >
        {t(`${translationKey}.title`)}
      </HeadingWithAnchor>
      <p>{parseInlineCode(t(`${translationKey}.description`))}</p>
      {story}
      <CustomSource
        type={customSourceType}
        name={customSourceName}
        parser={customSourceParser}
        printWidth={customSourcePrintWidth}
      />
      {noSpacing ? null : <p>&nbsp;</p>}
    </>
  )
}
