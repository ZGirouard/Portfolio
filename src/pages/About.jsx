import Heading from '../components/Heading'
import { Lead } from './About.styles'

export default function About() {
  return (
    <div>
      <Heading level={1}>About</Heading>
      <Lead>
        This page uses a styled component for the lead paragraph. Add more
        routes under <code>src/App.jsx</code> and pages under{' '}
        <code>src/pages/</code>.
      </Lead>
    </div>
  )
}
