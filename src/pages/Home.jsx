import Heading from '../components/Heading'

export default function Home() {
  return (
    <div>
      <Heading level={1} surface="light">
        Home
      </Heading>
      <p>
        Typography tokens come from{' '}
        <code>src/styles/typography.styles.ts</code> and colors from{' '}
        <code>src/styles/colors.styles.ts</code> via <code>&lt;Heading /&gt;</code>
        .
      </p>
    </div>
  )
}
