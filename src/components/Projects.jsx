import { projects } from '../data/projects'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import SmartImage from './SmartImage'

export default function Projects({ onOpenProject }) {
  return (
    <section id="projects" className="section projects">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Projects"
          title="Selected work, from IoT to full-stack."
          description="University, research, and personal projects. Each card links to its source repository and opens a short detail view."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article className={`project-card card reveal project-card--${project.accent}`} key={project.id}>
              <div className="project-card__media">
                <SmartImage src={project.thumbnail} alt={`${project.title} illustration`} />
                <span className="project-card__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="project-card__subtitle">{project.subtitle}</span>
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <button type="button" className="btn btn--primary btn--small" onClick={() => onOpenProject(project)}>
                    View Details <Icon name="ArrowRight" size={16} />
                  </button>
                  {project.github && (
                    <a
                      className="btn btn--ghost btn--small"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Icon name="Github" size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footnote reveal">
          <Icon name="ArrowUpRight" size={18} />
          <span>
            Looking for the research in depth?{' '}
            <a href="./research.html">Open the dedicated research page</a>.
          </span>
        </div>
      </div>
    </section>
  )
}
