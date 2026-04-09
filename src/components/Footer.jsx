import { NavLink } from 'react-router-dom'
import Heading from './Heading'
import { footerNavLinkCss } from '../styles/shared.styles'
import { InstagramIcon, LinkedInIcon } from './FooterSocialIcons'
import {
  BrandColumn,
  BrandMark,
  ContactLine,
  ContactValueLink,
  FooterColumn,
  FooterRoot,
  Inner,
  SocialLink,
  SocialRow,
} from './Footer.styles'

const INSTAGRAM_URL = 'https://www.instagram.com/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/'

export default function Footer() {
  return (
    <FooterRoot>
      <Inner>
        <FooterColumn>
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
            css={footerNavLinkCss}
          >
            HOME
          </Heading>
          <Heading
            as={NavLink}
            to={{ pathname: '/', hash: 'work' }}
            level={4}
            surface="dark"
            weight="light"
            css={footerNavLinkCss}
          >
            WORK
          </Heading>
          <Heading
            as={NavLink}
            to="/contact"
            level={4}
            surface="dark"
            weight="light"
            css={footerNavLinkCss}
          >
            CONTACT
          </Heading>
        </FooterColumn>
        <FooterColumn>
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
        </FooterColumn>
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
