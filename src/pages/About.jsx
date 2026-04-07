import styled from '@emotion/styled'
import Heading from '../components/Heading'

const Lead = styled.p`
  font-size: 1.05rem;
  line-height: 1.55;
  max-width: 40rem;
  margin: 0 0 1rem;
  color: var(--text);
`

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
