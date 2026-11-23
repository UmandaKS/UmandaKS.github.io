/**
 * Build-time gallery discovery.
 *
 * Every supported image in /gallery (and the legacy /gallary folder) is
 * bundled automatically. Add or remove files and rebuild; no JS edits needed.
 *
 * Optional captions: gallery/captions.json maps a file name to
 * { "title": "...", "description": "...", "category": "..." }.
 */
const galleryModules = import.meta.glob('../../gallery/*.{jpg,jpeg,png,webp,gif,avif,bmp,JPG,JPEG,PNG,WEBP,GIF,AVIF,BMP}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const legacyModules = import.meta.glob('../../gallary/*.{jpg,jpeg,png,webp,gif,avif,bmp,JPG,JPEG,PNG,WEBP,GIF,AVIF,BMP}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const captionModules = import.meta.glob(
  ['../../gallery/captions.json', '../../gallary/captions.json'],
  { eager: true, import: 'default' },
)

const captions = Object.values(captionModules).reduce(
  (all, file) => ({ ...all, ...(file || {}) }),
  {},
)

const fileEntries = [...Object.entries(galleryModules), ...Object.entries(legacyModules)]
  .map(([path, url]) => ({ fileName: path.split('/').pop(), url }))
  .sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true }))

export const gallery = fileEntries.map((file, index) => {
  const meta = captions[file.fileName] || {}
  return {
    id: `${file.fileName}-${index}`,
    src: file.url,
    fileName: file.fileName,
    title: meta.title || `Photo ${String(index + 1).padStart(2, '0')}`,
    description: meta.description || file.fileName,
    category: meta.category || 'Photos',
  }
})

export const galleryCategories = [
  'All',
  ...Array.from(new Set(gallery.map((item) => item.category))).sort(),
]
