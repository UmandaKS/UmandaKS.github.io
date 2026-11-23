import { profile, socialLinks } from '../data/profile'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="shell hero__inner">
        <div className="hero__content reveal">
          <span className="hero__eyebrow">
            <span className="pulse-dot" />
            Open to Work
          </span>

          <h1 className="hero__title">
            <span className="hero__name">UMANDA</span>
            <span className="hero__title-line">KUMARASINGHE</span>
          </h1>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View My Projects <Icon name="ArrowRight" size={18} />
            </a>
            <a className="btn btn--ghost" href={profile.cvFile} download="Umanda-Kumarasinghe-CV.pdf">
              <Icon name="Download" size={18} /> Download CV
            </a>
            <a className="btn btn--text" href="#contact">
              Contact Me <Icon name="ArrowUpRight" size={17} />
            </a>
          </div>

          <div className="hero__socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <Icon name={link.icon} size={19} />
              </a>
            ))}
            <span className="hero__socials-label">Find me online</span>
          </div>
        </div>

        <div className="hero__visual reveal">
          <figure className="hero__portrait-frame">
            <img src={profile.profileImage} alt={`${profile.name} profile portrait`} />
          </figure>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About section">
        <span>Scroll to explore</span>
        <Icon name="ArrowDown" size={17} />
      </a>
    </section>
  )
}
