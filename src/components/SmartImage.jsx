import { useState } from 'react'

/** Image with a local fallback so a missing file never shows a broken icon. */
export default function SmartImage({ src, alt, className = '', ...props }) {
  const [failed, setFailed] = useState(false)

  return (
    <img
      src={failed ? 'images/fallback.svg' : src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
