import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from '../styles/colors.styles'

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

/**
 * Clickable square work tile: responsive up to 593px, 16px radius, 4px black border.
 * Pass `href` for a link; pass `onClick` (without `href`) for a button; omit both for a static frame.
 *
 * @param {object} props
 * @param {string} props.src
 * @param {string} props.alt
 * @param {string} [props.href]
 * @param {(e: import('react').MouseEvent) => void} [props.onClick]
 * @param {string} [props.className]
 * @param {number} [props.width] — intrinsic width for CLS (e.g. 593)
 * @param {number} [props.height] — intrinsic height for CLS (e.g. 593)
 * @param {'lazy'|'eager'} [props.loading]
 */
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
