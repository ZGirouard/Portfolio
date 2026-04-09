import styled from '@emotion/styled'
import { css } from '@emotion/react'

const MAX_PX = 593

const frameCss = css`
  display: block;
  width: 100%;
  max-width: ${MAX_PX}px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
  margin: 0;
  background: none;
`

export const StyledLink = styled.a`
  ${frameCss}
`

export const StyledButton = styled.button`
  ${frameCss}
`

export const StyledFrame = styled.div`
  ${frameCss}
  cursor: default;
`

export const Img = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  height: auto;
  vertical-align: top;
`
