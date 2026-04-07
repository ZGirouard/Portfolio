import { headingStyle } from '../styles/typography.styles'

const tags = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
}

export default function Heading({
  level = 1,
  weight = 'regular',
  italic = false,
  surface = 'light',
  children,
  ...rest
}) {
  const Tag = tags[level] ?? 'h1'
  return (
    <Tag
      css={headingStyle({ level, weight, italic, surface })}
      {...rest}
    >
      {children}
    </Tag>
  )
}
