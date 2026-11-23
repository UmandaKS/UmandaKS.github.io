/**
 * Optional certificate proof files are discovered at build time from /certificates.
 * Name a file with the certificate's slug (see src/data/certificates.js), e.g.
 * certificates/aws-cloud-foundations.pdf. Without a file, cards simply have no
 * "View certificate" link — no placeholder documents are generated.
 */
const proofFiles = import.meta.glob('../../certificates/*.{pdf,png,jpg,jpeg,webp,PDF,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function findCertificateFile(slug) {
  if (!slug) return null
  const match = Object.entries(proofFiles).find(([path]) =>
    path.toLowerCase().includes(slug.toLowerCase()),
  )
  return match ? match[1] : null
}
