import React from 'react'
import { useTranslation } from 'react-i18next'
import { BookmarkIcon } from './components/icons/BookmarkIcon'
import { ComponentsIcon } from './components/icons/ComponentsIcon'
import { EyeIcon } from './components/icons/EyeIcon'
import { FileIcon } from './components/icons/FileIcon'
import { FolderIcon } from './components/icons/FolderIcon'
import { HexagonsIcon } from './components/icons/HexagonsIcon'
import { HomeIcon } from './components/icons/HomeIcon'
import { PaletteIcon } from './components/icons/PaletteIcon'
import { RocketIcon } from './components/icons/RocketIcon'

const ICONS_MAP = {
  Introduction: <HomeIcon />,
  'Getting Started': <RocketIcon />,
  Icons: <EyeIcon />,
  Overview: <HexagonsIcon />,
  Theming: <PaletteIcon />,
  Changelog: <FileIcon />,
}

const renderIcon = (item) => {
  const { type, name, parent } = item

  switch (type) {
    case 'docs': {
      return ICONS_MAP[name] || <FileIcon />
    }
    case 'component': {
      if (parent && parent.includes('components')) {
        return <FolderIcon />
      }

      return <FolderIcon />
    }
    case 'story': {
      return <BookmarkIcon />
    }
    case 'group': {
      return <ComponentsIcon />
    }
    default:
      return null
  }
}

const RenderLabelComponent = (item) => {
  const { t } = useTranslation()

  const translatedName = t(`sidebar.${item.type}.${item.id}`, { defaultValue: item.name })

  return (
    <span className="item-label">
      {renderIcon(item)}
      <span>{translatedName}</span>
    </span>
  )
}

export const renderLabel = (item) => <RenderLabelComponent {...item} />
