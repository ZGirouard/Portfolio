import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import { Main, Shell } from './Layout.styles'

export default function Layout() {
  return (
    <Shell>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Shell>
  )
}
