import { css, type SerializedStyles } from '@emotion/react'
import { colors, type TypeSurface } from './colors.styles'

export const headingSizePx = {
  1: 64,
  2: 48,
  3: 40,
  4: 36,
} as const

export type HeadingLevel = keyof typeof headingSizePx

export const fontWeight = {
  light: 300,
  regular: 400,
  bold: 700,
} as const

export type FontWeightName = keyof typeof fontWeight

export function headingColor(surface: TypeSurface): string {
  return surface === 'light' ? colors.black : colors.white
}

export function headingStyle(options: {
  level: HeadingLevel
  weight?: FontWeightName
  italic?: boolean
  surface?: TypeSurface
}): SerializedStyles {
  const {
    level,
    weight = 'regular',
    italic = false,
    surface = 'light',
  } = options
  const sizePx = headingSizePx[level]
  return css`
    font-family: var(--heading);
    font-size: ${sizePx}px;
    font-weight: ${fontWeight[weight]};
    font-style: ${italic ? 'italic' : 'normal'};
    color: ${headingColor(surface)};
    line-height: 1;
    margin: 0;
  `
}
