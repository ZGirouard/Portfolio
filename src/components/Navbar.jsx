import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import Heading from './Heading'
import { colors } from '../styles/colors.styles'
import { footerNavLinkCss } from '../styles/footerNavLink.styles'

const Bar = styled.header`
  height: 150px; 
  box-sizing: border-box;
  background-color: ${colors.black};
  border-bottom: 4px solid ${colors.red};
  flex-shrink: 0;
`

const Inner = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: 1134px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem 3.5rem;
`

const Logo = styled.img`
  display: block;
  width: 89px;
  height: 96px;
  flex-shrink: 0;
`

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
        </NavLinks>
        <Logo src="/ZachGirouard.svg" alt="Zach Girouard" width={89} height={96} />
      </Inner>
    </Bar>
  )
}
