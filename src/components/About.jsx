import { profile } from '../data/profile'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="About me"
          title="Building reliable systems, one problem at a time."
          description="A little about my background, the technologies I enjoy, and the kind of work I want to do."
        />

        <div className="about__layout">
          <div className="about__media reveal">
            <div className="about__facts">
              {profile.quickFacts.map((fact) => (
                <div className="about__fact" key={fact.label}>
                  <span className="about__fact-icon">
                    <Icon name={fact.icon} size={18} />
                  </span>
                  <span>
                    <small>{fact.label}</small>
                    <strong>{fact.value}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__content">
            <div className="card about__intro reveal">
              <span className="card__tag">
                <Icon name="BriefcaseBusiness" size={16} /> Professional profile
              </span>
              <div className="about__paragraphs">
                {profile.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="about__block reveal">
              <h3 className="block-title">
                <Icon name="Target" size={18} /> Technical interests
              </h3>
              <div className="interest-grid">
                {profile.technicalInterests.map((interest) => (
                  <div className="interest-chip" key={interest.label}>
                    <Icon name={interest.icon} size={18} />
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about__block reveal">
              <h3 className="block-title">
                <Icon name="Users" size={18} /> Personal strengths
              </h3>
              <div className="strength-list">
                {profile.strengths.map((strength) => (
                  <span className="strength-pill" key={strength}>
                    <Icon name="Check" size={14} /> {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
