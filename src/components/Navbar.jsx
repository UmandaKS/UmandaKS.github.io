import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import Icon from './Icon'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar({ theme, onToggleTheme }) {
  const activeId = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell site-header__inner">
        <a className="brand" href="#home" aria-label="Umanda Kumarasinghe — home">
          <span className="brand__text">
            <strong>{profile.name.toUpperCase()}</strong>
            <small>Cloud Engineer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? 'is-active' : ''}
              aria-current={activeId === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

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

          <a className="btn btn--primary btn--small nav-cta" href="#contact">
            Let&apos;s Talk
            <Icon name="ArrowUpRight" size={16} />
          </a>

          <button
            type="button"
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-menu__index">{String(index + 1).padStart(2, '0')}</span>
              {link.label}
              <Icon name="ArrowUpRight" size={16} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <a className="btn btn--primary" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s Talk <Icon name="ArrowRight" size={17} />
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            <Icon name="Github" size={17} /> GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
