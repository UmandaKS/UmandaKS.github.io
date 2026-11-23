import { profile } from '../data/profile'
import { useScrollReveal } from '../hooks/useScrollReveal'
import BackToTop from './BackToTop'
import BackgroundFX from './BackgroundFX'
import Icon from './Icon'
import ResearchContent from './ResearchContent'

export default function ResearchPage({ theme, onToggleTheme }) {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#research-main">Skip to research content</a>
      <BackgroundFX />

      <header className="site-header is-scrolled">
        <div className="shell site-header__inner">
          <a className="brand" href="./#home" aria-label="Back to home">
            <span className="brand__text">
              <strong>{profile.name.toUpperCase()}</strong>
              <small>Cloud Engineer</small>
            </span>
          </a>

          <div className="site-header__actions">
            <button
              type="button"
              className="icon-button theme-toggle"
              onClick={onToggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              <Icon name={theme === 'light' ? 'Moon' : 'Sun'} size={19} />
            </button>
            <a className="btn btn--primary btn--small" href="./#research">
              <Icon name="ArrowRight" size={16} /> Back to home
            </a>
          </div>
        </div>
      </header>

      <main id="research-main" className="research-page">
        <div className="shell">
          <div className="research-page__intro reveal">
            <a className="research-page__crumb" href="./#research">
              <Icon name="ArrowRight" size={14} className="flip-icon" /> Home / Research
            </a>
            <h1>
              Dedicated <span className="gradient-text">Research</span> Page
            </h1>
            <p>
              Final-year research by {profile.name} — an IoT-based approach to dairy cow management.
            </p>
          </div>

          <ResearchContent standalone />

          <div className="research-page__footer reveal">
            <p>Interested in the work behind this research?</p>
            <a className="btn btn--primary" href="./#contact">
              Get in touch <Icon name="ArrowUpRight" size={17} />
            </a>
          </div>
        </div>
      </main>

      <footer className="site-footer site-footer--compact">
        <div className="shell site-footer__bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Gampaha, Sri Lanka</span>
        </div>
      </footer>
      <BackToTop />
    </>
  )
}
