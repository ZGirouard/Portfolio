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
  as: AsComponent,
  css: userCss,
  children,
  ...rest
}) {
  const Tag = AsComponent ?? tags[level] ?? 'h1'
  const baseCss = headingStyle({ level, weight, italic, surface })
  return (
    <Tag
      css={userCss != null ? [baseCss, userCss] : baseCss}
      {...rest}
    >
      {children}
    </Tag>
  )
}
