import { experience } from '../data/experience'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've gained hands-on experience."
          description="Real exposure to production infrastructure, support workflows, and network operations."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline__item card reveal" key={`${item.role}-${item.company}`}>
              <div className="timeline__marker" aria-hidden="true">
                <Icon name={item.icon} size={20} />
              </div>
              <div className="timeline__content">
                <div className="timeline__top">
                  <div>
                    <span className="timeline__period">{item.period}</span>
                    <h3>{item.role}</h3>
                    <p className="timeline__company">
                      <Icon name="Server" size={15} /> {item.company}
                    </p>
                  </div>
                  <span className="timeline__type">{item.type}</span>
                </div>

                <p className="timeline__summary">{item.summary}</p>

                <ul className="timeline__list">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <span className="timeline__bullet" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
