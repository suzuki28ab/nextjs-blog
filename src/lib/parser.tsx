const ImageRenderer = ({ src, alt }: { src: string; alt: string }): JSX.Element => {
  return (
    <img
      data-loading="lazy"
      data-orig-file={src}
      data-orig-size="1248,533"
      data-comments-opened="1"
      data-medium-file={src + '?w=300'}
      data-large-file={src + '?w=750'}
      src={src + '?w=10241'}
      alt={alt}
      srcSet={
        src +
        '?w=1024 1024w, ' +
        src +
        '?w=705 705w, ' +
        src +
        '?w=150 150w, ' +
        src +
        '?w=300 300w, ' +
        src +
        '?w=768 768w, ' +
        src +
        '?1248w'
      }
      sizes="(max-width: 707px) 100vw, 707px"
    />
  )
}

export { ImageRenderer }
