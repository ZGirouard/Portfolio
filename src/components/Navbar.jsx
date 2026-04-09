import { NavLink } from 'react-router-dom'
import Heading from './Heading'
import { footerNavLinkCss } from '../styles/shared.styles'
import { Bar, Inner, Logo, NavLinks } from './Navbar.styles'

export default function Navbar() {
  return (
    <Bar>
      <Inner>
        <NavLinks aria-label="Primary">
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
            to="/work"
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
        </NavLinks>
        <Logo src="/ZachGirouard.svg" alt="Zach Girouard" width={89} height={96} />
      </Inner>
    </Bar>
  )
}
