import Icon from './Icon'
import Modal from './Modal'
import SmartImage from './SmartImage'

export default function ProjectModal({ project, onClose }) {
  return (
    <Modal open={Boolean(project)} onClose={onClose} labelledBy="project-modal-title">
      {project && (
        <div className="project-modal">
          <div className="project-modal__media">
            <SmartImage src={project.thumbnail} alt={`${project.title} illustration`} />
          </div>
          <div className="project-modal__body">
            <span className="card__tag">
              <Icon name="Layers" size={15} /> {project.subtitle}
            </span>
            <h2 id="project-modal-title">{project.title}</h2>
            <p className="project-modal__overview">{project.overview}</p>

            {project.screenshots?.length > 1 && (
              <>
                <h3 className="block-title">
                  <Icon name="Images" size={17} /> Screenshots
                </h3>
                <div className="project-modal__screenshots">
                  {project.screenshots
                    .filter((src) => src !== project.thumbnail)
                    .map((src) => (
                      <SmartImage key={src} src={src} alt={`${project.title} screenshot`} loading="lazy" />
                    ))}
                </div>
              </>
            )}

            <h3 className="block-title">
              <Icon name="Check" size={17} /> What it involves
            </h3>
            <ul className="project-modal__list">
              {project.highlights.map((item) => (
                <li key={item}>
                  <Icon name="CircleCheck" size={16} /> {item}
                </li>
              ))}
            </ul>

            <h3 className="block-title">
              <Icon name="Code2" size={17} /> Technologies
            </h3>
            <div className="skill-card__tags">
              {project.tech.map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="project-modal__actions">
              {project.github && (
                <a className="btn btn--primary" href={project.github} target="_blank" rel="noreferrer">
                  <Icon name="Github" size={17} /> View on GitHub <Icon name="ArrowUpRight" size={16} />
                </a>
              )}
              {project.researchLink && (
                <a className="btn btn--ghost" href="./research.html">
                  <Icon name="FileText" size={17} /> Full research page
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}
