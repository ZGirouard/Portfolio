import { css, type SerializedStyles } from '@emotion/react'
import { colors, type TypeSurface } from './colors.styles'

export type HeadingLevel = 1 | 2 | 3 | 4

const headingFluidFontSize: Record<HeadingLevel, string> = {
  1: 'clamp(1.875rem, 1.25rem + 2.5vw, 4rem)',
  2: 'clamp(1.5rem, 1rem + 2vw, 3rem)',
  3: 'clamp(1.3125rem, 0.9rem + 1.6vw, 2.5rem)',
  4: 'clamp(1.25rem, 0.85rem + 1.4vw, 2.25rem)',
}

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
  return css`
    font-family: var(--heading);
    font-size: ${headingFluidFontSize[level]};
    font-weight: ${fontWeight[weight]};
    font-style: ${italic ? 'italic' : 'normal'};
    color: ${headingColor(surface)};
    line-height: 1.05;
    margin: 0;
    max-width: 100%;
  `
}
