import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'

const MAX_PX = 500

const workImageFrameCss = css`
  display: block;
  width: 100%;
  max-width: ${MAX_PX}px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
  margin: 0;
  background: none;
  text-decoration: none;
  color: inherit;
`

export const WorkImageLink = styled(Link)`
  ${workImageFrameCss}
`

export const Img = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  height: auto;
`
