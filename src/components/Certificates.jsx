import { certificates } from '../data/certificates'
import { findCertificateFile } from '../utils/certificates'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Certificates() {
  const completed = certificates.filter((item) => item.status === 'completed').length

  return (
    <section id="certificates" className="section certificates">
      <div className="shell">
        <SectionHeading
          index="07"
          eyebrow="Certificates"
          title="Continuous learning, documented."
          description="Courses and certifications from the CV. Azure AZ-900 is shown as preparation, not as a completed certificate."
        />

        <div className="certificates__meta reveal">
          <span className="pulse-dot" />
          {completed} completed certifications · 1 in preparation
        </div>

        <div className="certificates__grid">
          {certificates.map((item) => {
            const proof = findCertificateFile(item.slug)
            const learning = item.status === 'learning'
            return (
              <article
                className={`certificate-card card reveal ${learning ? 'certificate-card--learning' : ''}`}
                key={item.slug}
              >
                <div className="certificate-card__top">
                  <span className="certificate-card__icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <span className={`certificate-card__status ${learning ? 'is-learning' : ''}`}>
                    <Icon name={learning ? 'BookOpenCheck' : 'BadgeCheck'} size={13} />
                    {learning ? 'In preparation' : 'Completed'}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <div className="certificate-card__meta">
                  <span>{item.issuer}</span>
                  <span className="certificate-card__dot">·</span>
                  <span>{item.year}</span>
                </div>

                {item.note && <p className="certificate-card__note">{item.note}</p>}

                <div className="certificate-card__links">
                  {proof && (
                    <a className="certificate-card__link" href={proof} target="_blank" rel="noreferrer">
                      View certificate <Icon name="ArrowUpRight" size={15} />
                    </a>
                  )}
                  {item.reference && (
                    <a
                      className="certificate-card__link certificate-card__link--reference"
                      href={item.reference}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View credential <Icon name="ArrowUpRight" size={15} />
                    </a>
                  )}
                  {!proof && !item.reference && (
                    <span className="certificate-card__link certificate-card__link--muted">
                      {learning ? 'No certificate yet' : 'Certificate file not added'}
                    </span>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
