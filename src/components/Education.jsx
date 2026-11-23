import { education } from '../data/education'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Education"
          title="The foundation behind the work."
          description="Academic background in information technology and technology-stream studies."
        />

        <div className="education__grid">
          {education.map((item) => (
            <article className="education-card card reveal" key={item.degree}>
              <div className="education-card__top">
                <span className="education-card__icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <span className="education-card__period">{item.period}</span>
              </div>
              <h3>{item.degree}</h3>
              <p className="education-card__school">
                <Icon name="School" size={15} /> {item.school}
              </p>
              <p className="education-card__detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
