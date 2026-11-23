import { learningTopics } from '../data/learning'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Learning() {
  return (
    <section id="learning" className="section learning">
      <div className="shell">
        <SectionHeading
          index="08"
          eyebrow="Currently exploring"
          title="Skills I'm actively building."
          description="Areas I am studying and practising right now. These are learning interests, not claims of advanced expertise."
        />

        <div className="learning__grid">
          {learningTopics.map((topic) => (
            <article className="learning-card card reveal" key={topic.title}>
              <div className="learning-card__head">
                <span className="learning-card__icon">
                  <Icon name={topic.icon} size={20} />
                </span>
                <span className="learning-card__level">{topic.level}</span>
              </div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span className="learning-card__bar" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
