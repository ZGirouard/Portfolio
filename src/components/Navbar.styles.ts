import styled from '@emotion/styled'
import { colors } from '../styles/colors.styles'
import {
  centeredMaxWidthCss,
  pageHorizontalGutterCss,
} from '../styles/shared.styles'

export const Bar = styled.header`
  height: 150px;
  box-sizing: border-box;
  background-color: ${colors.black};
  border-bottom: 4px solid ${colors.red};
  flex-shrink: 0;
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
  flex-wrap: wrap;
  gap: 1rem 3.5rem;
`

export const Logo = styled.img`
  display: block;
  width: 89px;
  height: 96px;
  flex-shrink: 0;
`
