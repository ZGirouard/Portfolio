import styled from '@emotion/styled'
import {
  centeredMaxWidthCss,
  pageHorizontalGutterCss,
} from '../styles/shared.styles'

export const Divider = styled.img`
  display: block;
  width: 100%;
  ${centeredMaxWidthCss}
  height: auto;
  margin-block: 1.5rem;
`

export const HeroSection = styled.section`
  ${centeredMaxWidthCss}
  ${pageHorizontalGutterCss}
`

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
`

export const WorkList = styled.div`
  ${centeredMaxWidthCss}
  ${pageHorizontalGutterCss}
`

export const WorkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const WorkItemMedia = styled.div`
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
`

export const WorkItemText = styled.div`
  flex: 1 1 240px;
  min-width: 0;
  max-width: 100%;
`
