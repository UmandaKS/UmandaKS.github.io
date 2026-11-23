import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'

export default function Lightbox({ items, index, onClose, onIndexChange }) {
  const closeRef = useRef(null)
  const isOpen = index !== null && index >= 0 && index < items.length

  const goNext = useCallback(() => {
    onIndexChange((current) => (current + 1) % items.length)
  }, [items.length, onIndexChange])

  const goPrev = useCallback(() => {
    onIndexChange((current) => (current - 1 + items.length) % items.length)
  }, [items.length, onIndexChange])

  useEffect(() => {
    if (!isOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') goNext()
      if (event.key === 'ArrowLeft') goPrev()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose, goNext, goPrev])

  if (!isOpen) return null
  const item = items[index]

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
      <div className="lightbox__topbar">
        <span className="lightbox__counter">
          {index + 1} / {items.length}
        </span>
        <button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label="Close image preview">
          <Icon name="X" size={22} />
        </button>
      </div>

      <div className="lightbox__stage" onMouseDown={onClose}>
        <figure onMouseDown={(event) => event.stopPropagation()}>
          <img src={item.src} alt={item.title} />
          <figcaption>
            <strong>{item.title}</strong>
            {item.description && <span>{item.description}</span>}
          </figcaption>
        </figure>
      </div>

      {items.length > 1 && (
        <>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous image">
            <Icon name="ChevronLeft" size={26} />
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next image">
            <Icon name="ChevronRight" size={26} />
          </button>
        </>
      )}

      <p className="lightbox__hint">Use ← → keys to browse · Esc to close</p>
    </div>,
    document.body,
  )
}
