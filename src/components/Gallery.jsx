import { useCallback, useMemo, useState } from 'react'
import { gallery, galleryCategories } from '../utils/gallery'
import Icon from './Icon'
import Lightbox from './Lightbox'
import SectionHeading from './SectionHeading'
import SmartImage from './SmartImage'

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const visibleItems = useMemo(
    () => (category === 'All' ? gallery : gallery.filter((item) => item.category === category)),
    [category],
  )

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  return (
    <section id="gallery" className="section gallery">
      <div className="shell">
        <SectionHeading
          index="09"
          eyebrow="Gallery"
          title="Moments & visuals."
          description="Photos are discovered automatically from the /gallery folder at build time. Add a new image and rebuild — the gallery updates itself."
        />

        <div className="gallery__toolbar reveal">
          <div className="filter-bar" role="group" aria-label="Filter gallery">
            {galleryCategories.map((item) => {
              const count = item === 'All' ? gallery.length : gallery.filter((photo) => photo.category === item).length
              return (
                <button
                  type="button"
                  key={item}
                  className={category === item ? 'is-active' : ''}
                  onClick={() => {
                    setCategory(item)
                    setLightboxIndex(null)
                  }}
                  aria-pressed={category === item}
                >
                  {item} <span>{count}</span>
                </button>
              )
            })}
          </div>
          <span className="gallery__count">
            <Icon name="Images" size={16} /> {visibleItems.length} {visibleItems.length === 1 ? 'image' : 'images'}
          </span>
        </div>

        {visibleItems.length ? (
          <div className="gallery__grid">
            {visibleItems.map((item, index) => (
              <button
                type="button"
                className={`gallery-card reveal ${index % 5 === 0 ? 'gallery-card--wide' : ''}`}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                aria-label={`Open ${item.title} in full screen`}
              >
                <span className="gallery-card__media">
                  <SmartImage src={item.src} alt={item.title} />
                  <span className="gallery-card__overlay">
                    <Icon name="Eye" size={18} /> View image
                  </span>
                  <span className="gallery-card__category">{item.category}</span>
                </span>
                <span className="gallery-card__body">
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="empty-state card reveal">
            <Icon name="Images" size={26} />
            <p>No images found. Add JPG, PNG, or WEBP files to the <code>gallery/</code> folder and rebuild.</p>
          </div>
        )}

        <p className="gallery__hint reveal">
          <Icon name="ChevronLeft" size={15} /> Click any photo for full-screen preview with arrow navigation.
          <Icon name="ChevronRight" size={15} />
        </p>
      </div>

      <Lightbox items={visibleItems} index={lightboxIndex} onClose={closeLightbox} onIndexChange={setLightboxIndex} />
    </section>
  )
}
