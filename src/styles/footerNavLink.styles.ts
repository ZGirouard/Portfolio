import { css } from '@emotion/react'
import { colors } from './colors.styles'

/** Dark-surface nav links (footer LINKS column, main navbar). */
export const footerNavLinkCss = css`
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.88;
  }

  &:focus-visible {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }
`
