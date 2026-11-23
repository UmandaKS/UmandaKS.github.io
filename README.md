# Umanda Kumarasinghe

A modern, responsive, ink, ivory, pine & brass site built with **React + Vite** and hosted
for free on **GitHub Pages**. It includes all sections plus a
**dedicated research page** (`research.html`).

## What's included

- **Sections:** Home, About, Experience, Skills, Education, Projects, Research,
  Certificates, Learning, Gallery, Contact.
- **Dedicated research page:** `research.html` (linked from the Research
  section and project detail modal).
- **Light / dark theme** with Sun/Moon toggle, `localStorage` persistence, and
  no flash of the wrong theme on load.
- **Sticky responsive navigation** with active-section highlighting, smooth
  scrolling, and a mobile hamburger menu.
- **Auto-discovering gallery** with masonry layout, filters, lightbox, and
  keyboard navigation. See [GALLERY.md](GALLERY.md).
- **Project detail modals**, certificate cards with optional proof links,
  learning cards, scroll reveal, back-to-top, SEO metadata, favicon, and
  accessible controls.
- **No invented achievements**: content comes from the supplied CV and the
  public GitHub repositories.

## Local setup

```bash
npm install
npm run dev
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

> Node.js 20.19+ or 22.12+ is recommended (the deploy workflow uses Node 22).
> `npm audit` may report a high-severity advisory in `picomatch` through
> Vite's build-time-only `tinyglobby` dependency; there is no fixed version
> available at present. It does not affect the static files deployed to GitHub
> Pages.

## Project structure

```text
gallery/                 Photos (auto-discovered at build time)
certificates/            Optional certificate PDFs/images (auto-discovered)
public/
  documents/cv.pdf       Downloadable CV
  images/                Thumbnails, diagrams, fallback and OG image
  favicon.svg
src/
  assets/profile/        Profile photo goes here (auto-detected)
  components/            Reusable UI sections and modals
  data/                  All written content (edit these files)
  hooks/                 Theme, scroll reveal, active section
  utils/                 Build-time gallery/certificate discovery
  App.jsx                Main page composition
  index.css              Full design system (light + dark)
  research-main.jsx      Entry point for the research page
index.html               Main page
research.html            Dedicated research page
.github/workflows/       GitHub Pages deploy workflow
```

## Editing content

Most content lives in `src/data/`:

| File | What to edit |
| --- | --- |
| `profile.js` | Name, title, intro, contact details, social links, About text, interests, strengths |
| `experience.js` | Internship role, company, period, responsibilities |
| `skills.js` | Skill categories and tags |
| `education.js` | Education entries |
| `projects.js` | Project descriptions, tech, GitHub URLs, thumbnails |
| `research.js` | Research overview, problem, objectives, system, links |
| `certificates.js` | Certification titles, issuers, years, status |
| `learning.js` | Currently exploring topics |

### Profile photo

Drop a `jpg`, `jpeg`, `png`, or `webp` file into `src/assets/profile/` and it is
used automatically (it takes priority over the included `uk-avatar.svg`
placeholder). If several real photos are present, the first one alphabetically
is used. Rebuild to see the change.

### CV

The downloadable CV is `public/documents/cv.pdf`. Replace that file with an
updated CV and rebuild. The button text/link lives in `src/components/Hero.jsx`
via `profile.cvFile` in `src/data/profile.js`.

### Certificates

Certification cards are in `src/data/certificates.js`. To show a real "View
certificate" link, put a file in `certificates/` whose name contains the
certificate's `slug`, for example:

```text
certificates/aws-cloud-foundations.pdf
certificates/linux-lfs101.pdf
```

The link appears automatically after a rebuild. No files are included by
default, so no fake certificate images are shown. Azure AZ-900 is explicitly
marked **In preparation** because the CV lists it as learning, not completed.

## Contact form — connecting a real email service

The form validates inputs and then opens the visitor's email app with a
prefilled `mailto:` message. It does **not** pretend a message was sent to a
server, and it stores nothing.

To receive submissions directly on the site, connect a real service:

1. **Formspree** — create a form at <https://formspree.io>, then change the
   `<form>` in `src/components/Contact.jsx` to:
   `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"` and remove the
   `onSubmit` mailto logic (keep your own validation or use Formspree's).
2. **EmailJS** — install `emailjs-com`, initialise it with your public key,
   and call `emailjs.send(serviceId, templateId, values)` in `handleSubmit`.
3. **Own backend** — POST to an API you control (Node/Express, serverless
   function, etc.) and send email via SMTP or a provider such as Resend.

Never commit API keys or secrets to the repository. Public keys used by
client-side services are fine, but server-side keys must stay on a server and
be supplied through environment variables.

## GitHub Pages deployment

1. Create a GitHub repository and push this folder to its `main` branch.
2. In the repo, open **Settings → Pages → Build and deployment**.
   - **Source:** GitHub Actions
3. The included workflow (`.github/workflows/deploy.yml`) installs dependencies,
   runs `npm run build`, and deploys `dist/`.
4. After the first successful run, your site is live at
   `https://<username>.github.io/<repository-name>/`.

`vite.config.js` uses `base: './'` and the pages use relative asset paths, so it
works at a repository-subpath URL, a custom domain, and locally with `npm run
preview`. A `.nojekyll` file is included so Vite's output folders are not
skipped by GitHub Pages.

### Optional SEO improvement

Once the final GitHub Pages URL is known, add a `<link rel="canonical"
href="https://<username>.github.io/<repository-name>/">` to the `<head>` of
both `index.html` and `research.html`. It is left out here rather than guessing
a repository name.

## Verified GitHub links

Two repository names in the brief were missing their trailing hyphen. The
actual repositories (verified 2026-11-17) are:

- `https://github.com/UmandaKS/Final-Year-Research-` (not `Final-Year-Research`)
- `https://github.com/UmandaKS/IOT-Project-` (not `IOT-Project`)

These corrected URLs are used in `src/data/projects.js` and
`src/data/research.js`.

## Final testing checklist

- [x] `npm run build` completes without errors
- [x] All 11 navigation links resolve to section IDs
- [x] Theme toggle persists across reloads and pages
- [x] Responsive layouts for desktop, tablet, and mobile
- [x] Project GitHub links verified via GitHub API
- [x] CV download path checked in `public/documents/cv.pdf`
- [x] Gallery auto-discovery, lightbox, and keyboard navigation implemented
- [x] Adding/removing images requires only a rebuild (see GALLERY.md)
- [x] GitHub Pages workflow and relative base path configured
- [ ] Add canonical URLs after the repository name is known
- [ ] Deploy to GitHub Pages and confirm the live URL
- [ ] Replace placeholder avatar with a real portrait photo (optional)
- [ ] Add certificate files to `certificates/` if you want proof links
