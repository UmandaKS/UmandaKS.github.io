/**
 * Central profile content. Edit this file to update personal details,
 * navigation labels, and the About section.
 */

// A real photo dropped into src/assets/profile/ is picked up automatically.
// See GALLERY.md / README.md for details.
const profilePhotos = import.meta.glob('../assets/profile/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const fallbackAvatar = new URL('../assets/profile/uk-avatar.svg', import.meta.url).href
const photoEntries = Object.entries(profilePhotos).sort(([a], [b]) => a.localeCompare(b))

export const profile = {
  name: 'Umanda Kumarasinghe',
  firstName: 'Umanda',
  degree: 'BSc (Hons) in Information Technology',
  university: 'Sri Lanka Institute of Information Technology (SLIIT), Malabe',
  graduation: 'Graduated – October 2025',
  location: 'Gampaha, Sri Lanka',
  phone: '+94 767882314',
  phoneHref: '+94767882314',
  email: 'umakumarasinghe28@gmail.com',
  github: 'https://github.com/UmandaKS',
  linkedin: 'https://www.linkedin.com/in/umanda-kumarasinghe-86a364255/',
  cvFile: 'documents/cv.pdf',
  profileImage: photoEntries[0]?.[1] || fallbackAvatar,
  intro:
    'Motivated technology professional with hands-on experience in system support and networking, and a growing focus on cloud and DevOps technologies. Eager to apply technical skills in a dynamic environment while continuously learning and contributing to organisational success.',
  about: [
    'I completed my BSc (Hons) in Information Technology at SLIIT in October 2025. My academic journey combined software development, databases, networking, and IoT systems, with a final-year research project focused on smart dairy cow management.',
    'During my internship at Sri Lanka Telecom – IDC, I supported data centre infrastructure, troubleshot system and network issues, and worked with ticketing, IP addressing, and DCIM documentation in a live environment.',
    'I enjoy understanding how systems work end to end — from wearable sensors and cloud services to the web interfaces people use to make decisions with that data.',
    'I am currently strengthening my foundations in Linux administration, network security, cloud platforms, and container technologies while building practical projects alongside structured learning.',
  ],
  technicalInterests: [
    { icon: 'Network', label: 'Networking & security' },
    { icon: 'Server', label: 'System support' },
    { icon: 'Cloud', label: 'Cloud computing' },
    { icon: 'Cpu', label: 'IoT & embedded systems' },
    { icon: 'Code2', label: 'Full-stack development' },
    { icon: 'BrainCircuit', label: 'Applied machine learning' },
  ],
  strengths: [
    'Communication',
    'Teamwork & collaboration',
    'Problem-solving',
    'Time management',
    'Adaptability & quick learning',
    'Attention to detail',
  ],
  quickFacts: [
    { icon: 'GraduationCap', label: 'Degree', value: 'BSc (Hons) in Information Technology' },
    { icon: 'School', label: 'University', value: 'SLIIT, Malabe' },
    { icon: 'CalendarDays', label: 'Graduated', value: 'October 2025' },
    { icon: 'MapPin', label: 'Based in', value: 'Gampaha, Sri Lanka' },
  ],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'learning', label: 'Learning' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: 'Github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'Linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'Mail' },
]
