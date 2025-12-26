export const capitalizeFirstLetter = (string: string): string =>
  string && string.charAt(0).toUpperCase() + string.slice(1)

export const getImageUrl = (module: string, path: string): string => {
  return new URL(`/src/assets/${module}/${path}`, import.meta.url).href
}

export const hexToRgb = (hex: string, alpha: number = 1): number[] => {
  const cleanHex = hex.replace('#', '')

  if (cleanHex.length !== 3 && cleanHex.length !== 6) {
    throw new Error('Invalid hex color format')
  }

  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split('')
          .map((char) => char + char)
          .join('')
      : cleanHex

  const r = parseInt(fullHex.substring(0, 2), 16)
  const g = parseInt(fullHex.substring(2, 4), 16)
  const b = parseInt(fullHex.substring(4, 6), 16)

  return [r, g, b, alpha]
}

export const parseColor = (color: string): number[] => {
  // Hex
  if (color.startsWith('#')) {
    return hexToRgb(color)
  }

  // RGB/RGBA
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
  if (rgbMatch) {
    return [
      parseInt(rgbMatch[1]),
      parseInt(rgbMatch[2]),
      parseInt(rgbMatch[3]),
      parseFloat(rgbMatch[4] || '1'),
    ]
  }

  throw new Error(`Unsupported color format: ${color}`)
}

export const getLuminance = (color: string): number => {
  try {
    const [r, g, b] = parseColor(color)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  } catch {
    return 0
  }
}

export const generateId = () => Math.random().toString(36).slice(2, 8)
