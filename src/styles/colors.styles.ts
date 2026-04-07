/**
 * Color tokens for typography and UI. Heading black / white variants map to
 * on-light (dark ink on light surfaces) and on-dark (light ink on dark surfaces).
 */
export const colors = {
  black: '#000000',
  white: '#ffffff',
  offWhite: '#F0ECEC',
  red: '#BB2023',
  offBlack: '#030717',
  darkRed: '#BE0439',
  yellow: '#FFD200',
} as const

export type TypeSurface = 'light' | 'dark'
