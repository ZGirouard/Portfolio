import { Img, StyledButton, StyledFrame, StyledLink } from './WorkImage.styles'

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
