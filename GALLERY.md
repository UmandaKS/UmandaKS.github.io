# Gallery guide

The gallery is **build-time automatic**. It is a static site, so there is no admin
upload screen and nothing is written to a server when a visitor clicks anything.
You manage photos by adding files to a folder and rebuilding.

## Add a new photo

1. Copy your JPG, JPEG, PNG, WEBP, GIF, AVIF, or BMP file into the `gallery/`
   folder at the project root.
2. (Optional) Add a caption to `gallery/captions.json` — see below.
3. Rebuild and redeploy:

   ```bash
   npm run build
   # or push to main for GitHub Pages
   ```

That's it. `import.meta.glob` in `src/utils/gallery.js` discovers new files at
build time, so no component or HTML edits are needed.

> The original folder was named `gallary`. Both `gallery/` and `gallary/` are
> scanned, so old folders keep working. New photos should go in `gallery/`.

## Replace a photo

Use the same file name and overwrite the file, then rebuild. If the name changes,
delete the old file and update `captions.json` if that file had a custom caption.

## Remove a photo

Delete the image from `gallery/`, remove its entry from `captions.json` (if any),
and rebuild.

## Optional captions

`gallery/captions.json` is a plain JSON object keyed by the exact file name:

```json
{
  "IMG-20251022-WA0049.jpg": {
    "title": "Campus lab session",
    "description": "Working on the final-year IoT prototype.",
    "category": "University"
  },
  "l.jpg": {
    "title": "Portrait",
    "description": "Personal photo.",
    "category": "Personal"
  }
}
```

- `title` — shown below the image and in the lightbox.
- `description` — small caption text. If omitted, the file name is shown.
- `category` — used for the filter buttons. If omitted, `Photos` is used.

If a file has no entry, it still appears with an automatic title (`Photo 01`,
`Photo 02`, …) and its file name as the description.

## Display behaviour

- Responsive masonry layout (3 / 2 / 1 columns depending on screen width).
- Lazy loading and async decoding for fast page loads.
- Hover overlay, full-screen lightbox, previous/next buttons, arrow-key
  navigation, Escape to close, and a caption/counter in the lightbox.
- Works in both light and dark themes.

## About "upload from the browser"

A GitHub Pages site is static — it has no server, database, or file storage. A
browser-only "upload" button could only show an image temporarily on the
visitor's own device; it could not save a photo for everyone. That is why this
project uses a real, build-time folder workflow instead of a fake upload UI.

If you later want visitor uploads, you would need a backend plus persistent
storage (for example, a Node/Express API with a database and object storage,
or a service such as Firebase/Supabase), plus authentication and moderation.
That is outside the scope of free static GitHub Pages hosting.
