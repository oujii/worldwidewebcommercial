# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start local dev server on port 4321
- `npm run build` - Type-check and build static site to `dist/`
- `npm run preview` - Preview production build locally
- `netlify deploy --prod --dir dist` - Deploy to Netlify production

## Architecture

### Content Collections with JSON Frontmatter

This project uses Astro content collections with **JSON frontmatter** (not YAML). Content files in `src/content/works/` must use JSON format:

```markdown
---
{
  "title": "Work Title",
  "year": 2024,
  "images": [
    {"image": "/images/filename.jpg"}
  ],
  "tags": []
}
---
```

**Critical:** YAML frontmatter caused parsing issues (zod version conflicts). Always use JSON format for new content files.

### Content Schema

Defined in `src/content/config.ts`:
- `title`: string (required)
- `year`: number (required)
- `description`: string (optional)
- `images`: array of objects with `image` (required) and `alt` (optional) strings
- `tags`: array of strings (defaults to empty)

### Decap CMS Configuration

Located in `public/admin/config.yml`:
- Backend: `git-gateway` (requires Netlify Identity + Git Gateway)
- Media folder: `public/images`
- Content folder: `src/content/works`
- Slug pattern: `{{year}}-{{slug}}`

### Static Site Generation

`astro.config.mjs` uses `output: 'static'`. All pages are pre-rendered at build time. The `src/pages/work/[slug].astro` dynamic route generates individual work pages.

### Styling

Scoped CSS within `.astro` files using CSS custom properties:
- `--bg`: #fafafa
- `--text`: #444444
- `--accent`: #74828b
- `--border`: #e0e0e0

### Deployment

Netlify configuration in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Image caching: `/images/*` cached for 1 year

## Known Issues

### Content Schema + YAML

When creating/editing content files in `src/content/works/`, **always use JSON frontmatter**. YAML frontmatter causes build failures due to zod version conflicts between Astro and netlify dependencies. The issue manifests as "Expected type 'number', received 'nan'" errors even when the YAML appears correct.

### Decap CMS Git Gateway

Decap CMS requires Netlify Identity and Git Gateway to be enabled on the Netlify project. Without these, the `/admin/` route will not function for content editing.
