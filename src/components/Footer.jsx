import { navLinks, profile, socialLinks } from '../data/profile'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__brand">
          <a className="brand" href="#home" aria-label="Back to top">
            <span className="brand__text">
              <strong>{profile.name.toUpperCase()}</strong>
            </span>
          </a>
        </div>

        <nav className="site-footer__links" aria-label="Footer navigation">
          {navLinks.slice(0, 6).map((link) => (
            <a href={`#${link.id}`} key={link.id}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__social">
          <span>Connect</span>
          <div>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={link.label}
              >
                <Icon name={link.icon} size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Gampaha, Sri Lanka</span>
      </div>
    </footer>
  )
}
