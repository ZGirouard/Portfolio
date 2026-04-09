import { css } from '@emotion/react'
import { colors } from './colors.styles'

export const CONTENT_MAX_WIDTH_PX = 1134

export const centeredMaxWidthCss = css`
  max-width: ${CONTENT_MAX_WIDTH_PX}px;
  margin-inline: auto;
  box-sizing: border-box;
`

export const pageHorizontalGutterCss = css`
  padding: 0 1rem;
`

export const darkSurfaceInteractiveCss = css`
  &:hover {
    opacity: 0.88;
  }

  &:focus-visible {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }
`

export const footerNavLinkCss = css`
  text-decoration: none;
  display: inline-block;
  ${darkSurfaceInteractiveCss}
`
