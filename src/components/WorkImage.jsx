import styled from '@emotion/styled'
import { css } from '@emotion/react'

const MAX_PX = 593

const frameCss = css`
  display: block;
  width: 100%;
  max-width: ${MAX_PX}px;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
  margin: 0;
  background: none;
`

const StyledLink = styled.a`
  ${frameCss}
`

const StyledButton = styled.button`
  ${frameCss}
`

const StyledFrame = styled.div`
  ${frameCss}
  cursor: default;
`

const Img = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  height: auto;
  vertical-align: top;
`

export default function WorkImage({
  src,
  alt,
  href,
  onClick,
  className,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
}) {
  const image = (
    <Img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
    />
  )

  if (href != null && href !== '') {
    return (
      <StyledLink href={href} className={className} onClick={onClick}>
        {image}
      </StyledLink>
    )
  }

  if (onClick != null) {
    return (
      <StyledButton
        type="button"
        className={className}
        onClick={onClick}
        aria-label={alt ? undefined : 'Open work'}
      >
        {image}
      </StyledButton>
    )
  }

  return <StyledFrame className={className}>{image}</StyledFrame>
}
