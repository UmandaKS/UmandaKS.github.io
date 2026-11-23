import { useState } from 'react'
import { profile } from '../data/profile'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

const emptyForm = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.subject.trim().length < 3) errors.subject = 'Please add a short subject (at least 3 characters).'
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  const updateField = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setNotice('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setNotice('')

    if (Object.keys(nextErrors).length) return

    const subject = values.subject.trim()
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      '',
      values.message.trim(),
    ].join('\n')

    // Honest client-side behaviour: hand off to the visitor's email app.
    // Nothing is submitted to a server, so no "message sent" claim is made.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setNotice('Your email app should open with the message ready to send. If it does not, email me directly using the address on this page.')
  }

  const contactCards = [
    {
      icon: 'Mail',
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
    },
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      value: 'umanda-kumarasinghe-86a364255',
      href: profile.linkedin,
    },
    {
      icon: 'Github',
      label: 'GitHub',
      value: 'UmandaKS',
      href: profile.github,
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: profile.location,
    },
  ]

  return (
    <section id="contact" className="section contact">
      <div className="shell">
        <SectionHeading
          index="10"
          eyebrow="Contact"
          title="Let's build something useful together."
          description="Open to graduate and entry-level IT roles, collaborations, and conversations about infrastructure, networking, and IoT."
        />

        <div className="contact__layout">
          <div className="contact__details">
            <div className="contact__cards">
              {contactCards.map((item) => {
                const content = (
                  <>
                    <span className="contact-card__icon">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <span className="contact-card__text">
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </span>
                    {item.href && <Icon name="ArrowUpRight" size={16} className="contact-card__arrow" />}
                  </>
                )
                return item.href ? (
                  <a
                    className="contact-card card reveal"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    key={item.label}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="contact-card card reveal" key={item.label}>
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="contact__note card reveal">
              <Icon name="Lightbulb" size={19} />
              <p>
                Prefer email? Write to <a href={`mailto:${profile.email}`}>{profile.email}</a>. I usually
                reply as soon as I can.
              </p>
            </div>
          </div>

          <form className="contact-form card reveal" onSubmit={handleSubmit} noValidate>
            <h3>Send a message</h3>
            <p className="contact-form__intro">Fill in the details and I&apos;ll get back to you.</p>

            <div className="form-grid">
              <label className="form-field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={updateField('name')}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                />
                {errors.name && <small id="error-name" className="form-error">{errors.name}</small>}
              </label>

              <label className="form-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={updateField('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                />
                {errors.email && <small id="error-email" className="form-error">{errors.email}</small>}
              </label>
            </div>

            <label className="form-field">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={updateField('subject')}
                placeholder="What would you like to talk about?"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'error-subject' : undefined}
              />
              {errors.subject && <small id="error-subject" className="form-error">{errors.subject}</small>}
            </label>

            <label className="form-field">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={values.message}
                onChange={updateField('message')}
                placeholder="Tell me a little about your idea, role, or question..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'error-message' : undefined}
              />
              {errors.message && <small id="error-message" className="form-error">{errors.message}</small>}
            </label>

            <button type="submit" className="btn btn--primary contact-form__submit">
              Send Message <Icon name="Send" size={17} />
            </button>

            {notice && (
              <p className="form-notice" role="status">
                <Icon name="AlertCircle" size={16} /> {notice}
              </p>
            )}
            <p className="contact-form__disclaimer">
              This form opens your email application with the message prefilled. It does not upload or
              store your details on a server.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
