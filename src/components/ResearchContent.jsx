import { research } from '../data/research'
import Icon from './Icon'
import SmartImage from './SmartImage'

export default function ResearchContent({ standalone = false }) {
  return (
    <div className="research-content">
      <div className="research-content__head reveal">
        <div>
          <span className="card__tag">
            <Icon name="FileText" size={15} /> Final Year Research · Group {research.id}
          </span>
          <h3>{research.projectName}</h3>
          <p className="research-content__tagline">{research.tagline}</p>
        </div>
        <div className="research-content__head-actions">
          <a className="btn btn--primary btn--small" href={research.links.github} target="_blank" rel="noreferrer">
            <Icon name="Github" size={16} /> Repository
          </a>
          <a className="btn btn--ghost btn--small" href={research.links.demo} target="_blank" rel="noreferrer">
            <Icon name="ExternalLink" size={16} /> {research.links.demoLabel}
          </a>
        </div>
      </div>

      <div className="research-content__columns">
        <div className="research-content__main">
          <article className="card research-card reveal">
            <h4 className="block-title">
              <Icon name="Lightbulb" size={18} /> Research overview
            </h4>
            <div className="research-card__paragraphs">
              {research.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="card research-card research-card--problem reveal">
            <h4 className="block-title">
              <Icon name="Target" size={18} /> {research.problem.title}
            </h4>
            <p>{research.problem.text}</p>
          </article>

          <figure className="research-figure card reveal">
            <SmartImage src={research.diagram} alt="Conceptual diagram of the MOOTECH system architecture" />
            <figcaption>
              <Icon name="Layers" size={15} /> {research.diagramCaption}
            </figcaption>
          </figure>
        </div>

        <aside className="research-content__aside">
          <article className="card research-card reveal">
            <h4 className="block-title">
              <Icon name="Check" size={18} /> Objectives
            </h4>
            <ul className="research-objectives">
              {research.objectives.map((objective) => (
                <li key={objective}>
                  <span className="timeline__bullet" /> {objective}
                </li>
              ))}
            </ul>
          </article>

          <article className="card research-card reveal">
            <h4 className="block-title">
              <Icon name="Code2" size={18} /> Technologies used
            </h4>
            <div className="skill-card__tags">
              {research.technologies.map((tech) => (
                <span className="skill-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>

          {standalone && (
            <article className="card research-card research-card--note reveal">
              <h4 className="block-title">
                <Icon name="BadgeCheck" size={18} /> About this page
              </h4>
              <p>
                Content is based on the project README and CV. The diagram illustrates the described
                data flow; it is not a measured experimental result.
              </p>
            </article>
          )}
        </aside>
      </div>

      <div className="research-system reveal">
        <h4 className="block-title">
          <Icon name="Sparkles" size={18} /> System overview
        </h4>
        <div className="research-system__grid">
          {research.system.map((item) => (
            <div className="research-system__item card" key={item.title}>
              <span className="research-system__icon">
                <Icon name={item.icon} size={20} />
              </span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
