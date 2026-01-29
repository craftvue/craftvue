import type { AllStoryNames } from "docs/components/CustomSource/CustomSource.types"

export interface SectionConfig {
  translationKey: string
  customSourceName?: AllStoryNames
  customSourceParser?: 'babel' | 'vue' | 'markdown' | 'html' | 'bash'
  customSourcePrintWidth?: number
}
