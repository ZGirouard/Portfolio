import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import Heading from './Heading'
import { colors } from '../styles/colors.styles'

const FOOTER_HEIGHT_PX = 763

const FooterRoot = styled.footer`
  width: 100%;
  box-sizing: border-box;
  height: ${FOOTER_HEIGHT_PX}px;
  background-color: ${colors.black};
  border-top: 4px solid ${colors.darkRed};
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: auto;
    min-height: ${FOOTER_HEIGHT_PX}px;
  }
`

const Inner = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: 1134px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 2rem;
  align-content: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Column = styled.div`
  min-width: 0;
  color: ${colors.white};
`

const LinksColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

const ContactColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

const ContactLine = styled.p`
  margin: 0;
  font-family: var(--sans);
  font-size: 1.125rem;
  font-weight: 300;
  color: ${colors.white};
  line-height: 1.45;
`

const ContactValueLink = styled.a`
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

const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 0.25rem;
`

const SocialLink = styled.a`
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

const BrandColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

const BrandMark = styled.img`
  display: block;
  width: 100%;
  max-width: 160px;
  height: auto;
`

const FooterNavLinkCss = css`
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

/** Replace with your public profile URLs */
const INSTAGRAM_URL = 'https://www.instagram.com/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  )
}

/**
 * Full-width footer: black background, dark red top border, three columns.
 * Add content inside each column as needed.
 */
export default function Footer() {
  return (
    <FooterRoot>
      <Inner>
        <LinksColumn>
          <Heading level={3} surface="dark" weight="bold">
            LINKS
          </Heading>
          <Heading
            as={NavLink}
            to="/"
            end
            level={4}
            surface="dark"
            weight="light"
            css={FooterNavLinkCss}
          >
            HOME
          </Heading>
          <Heading
            as={NavLink}
            to={{ pathname: '/', hash: 'work' }}
            level={4}
            surface="dark"
            weight="light"
            css={FooterNavLinkCss}
          >
            WORK
          </Heading>
          <Heading
            as={NavLink}
            to="/contact"
            level={4}
            surface="dark"
            weight="light"
            css={FooterNavLinkCss}
          >
            CONTACT
          </Heading>
        </LinksColumn>
        <ContactColumn>
          <Heading level={3} surface="dark" weight="bold">
            CONTACT
          </Heading>
          <ContactLine>
            PHONE:{' '}
            <ContactValueLink href="tel:+16059290041">
              (605) 929-0041
            </ContactValueLink>
          </ContactLine>
          <ContactLine>
            EMAIL:{' '}
            <ContactValueLink href="mailto:zgirouard2@huskers.unl.edu">
              zgirouard2@huskers.unl.edu
            </ContactValueLink>
          </ContactLine>
          <SocialRow>
            <SocialLink
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialLink>
          </SocialRow>
        </ContactColumn>
        <BrandColumn>
          <BrandMark
            src="/ZachGirouard.svg"
            alt="Zach Girouard"
            width={89}
            height={96}
            loading="lazy"
            decoding="async"
          />
        </BrandColumn>
      </Inner>
    </FooterRoot>
  )
}
