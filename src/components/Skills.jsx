import { skillGroups } from '../data/skills'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="A practical, well-rounded toolkit."
          description="Technical and interpersonal skills developed through coursework, projects, and hands-on support work. No proficiency percentages — just the tools and areas I work with."
        />

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skill-card card reveal" key={group.title}>
              <div className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={group.icon} size={21} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-card__tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
