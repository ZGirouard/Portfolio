import { Img, WorkImageLink } from './WorkImage.styles'

export default function WorkImage({
  to,
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
}) {
  return (
    <WorkImageLink to={to} className={className}>
      <Img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
      />
    </WorkImageLink>
  )
}
