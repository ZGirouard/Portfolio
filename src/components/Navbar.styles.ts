import styled from '@emotion/styled'
import { colors } from '../styles/colors.styles'
import {
  centeredMaxWidthCss,
  pageHorizontalGutterCss,
} from '../styles/shared.styles'

export const Bar = styled.header`
  height: 150px;
  background-color: ${colors.black};
  border-bottom: 4px solid ${colors.red};
`

export const Inner = styled.div`
  ${centeredMaxWidthCss}
  ${pageHorizontalGutterCss}
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem 4rem;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 1rem 2rem;
  }
`

export const Logo = styled.img`
  display: block;
  flex-shrink: 0;
`
