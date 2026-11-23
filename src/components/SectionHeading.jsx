export default function SectionHeading({ index, eyebrow, title, description, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align} reveal`}>
      <span className="section-heading__eyebrow">
        <span className="section-heading__index">{index}</span>
        {eyebrow}
      </span>
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  )
}
