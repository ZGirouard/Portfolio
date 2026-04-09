import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import {
  centeredMaxWidthCss,
  pageHorizontalGutterCss,
} from '../styles/shared.styles'
import { colors } from '../styles/colors.styles'

const motionSafe = '@media (prefers-reduced-motion: no-preference)'

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-3rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(3rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const Divider = styled.img`
  display: block;
  width: 100%;
  ${centeredMaxWidthCss}
  height: auto;
  margin-top: none;
  margin-bottom: 2rem;

  ${motionSafe} {
    animation: ${slideInFromRight} 1.25s ease-in-out both;
  }
`

export const HeroSection = styled.section`
  ${centeredMaxWidthCss}
  ${pageHorizontalGutterCss}
  min-height: 80vh;

  ${motionSafe} {
    animation: ${slideInFromLeft} 1.25s ease-in-out both;
  }
`

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
`

export const HeroTextContainer = styled.div`
  margin-top: 9rem;
  text-align: center;

  ${motionSafe} {
    animation: ${slideInFromRight} 1.25s ease-in-out both;
    animation-delay: 1.5s;
  }
`

export const WorkTitleContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
`

export const WorkList = styled.div`
  ${centeredMaxWidthCss}
  ${pageHorizontalGutterCss}
`

export const WorkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem 2rem;
  margin-bottom: 6rem;
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
