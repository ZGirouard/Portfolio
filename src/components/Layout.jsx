import { Outlet, NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
`

const Nav = styled.nav`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`

const Brand = styled.span`
  font-weight: 600;
  color: var(--text-h);
  margin-right: 0.5rem;
`

const StyledNavLink = styled(NavLink)`
  color: var(--text);
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: var(--accent);
  }

  &.active {
    color: var(--accent);
    font-weight: 600;
  }
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 1.5rem;
  max-width: 56rem;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`

export default function Layout() {
  return (
    <Shell>
      <Header>
        <Nav>
          <Brand>Portfolio</Brand>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Shell>
  )
}
