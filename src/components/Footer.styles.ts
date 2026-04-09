import styled from '@emotion/styled'
import { colors } from '../styles/colors.styles'

export const FooterRoot = styled.footer`
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.black};
  border-top: 4px solid ${colors.darkRed};
  flex-shrink: 0;
`

export const Inner = styled.div`
  box-sizing: border-box;
  max-width: 1134px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 1.5rem)
    clamp(2.5rem, 6vw, 5rem);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(2rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2rem);
  align-content: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: clamp(1.75rem, 5vw, 2.5rem);
  }
`

const Column = styled.div`
  min-width: 0;
  color: ${colors.white};
`

export const LinksColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const ContactColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const ContactLine = styled.p`
  margin: 0;
  font-family: var(--sans);
  font-size: 1.125rem;
  font-weight: 300;
  color: ${colors.white};
  line-height: 1.45;
`

export const ContactValueLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.88;
  }

  &:focus-visible {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }
`

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 0.25rem;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: ${colors.white};
  text-decoration: none;

  &:hover {
    opacity: 0.88;
  }

  &:focus-visible {
    outline: 2px solid ${colors.white};
    outline-offset: 2px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

export const BrandColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const BrandMark = styled.img`
  display: block;
  width: 100%;
  max-width: 160px;
  height: auto;
`
