# World Wide Web Commercial

Portfolio site for Cecilia Pfaff, built with Astro and Decap CMS, deployed on Netlify.

## Site

- **Live URL:** https://worldwidewebcommercial.netlify.app
- **GitHub:** https://github.com/oujii/worldwidewebcommercial
- **Admin:** https://worldwidewebcommercial.netlify.app/admin/

## Setup

### Local Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

## Decap CMS (Content Management)

### First-time Setup

1. Go to https://app.netlify.com/projects/worldwidewebcommercial/settings/identity
2. Enable Netlify Identity
3. Under "Identity" > "Settings", enable "Git Gateway"
4. Invite yourself as a user under "Identity" > "Invite"

### Managing Content

1. Visit https://worldwidewebcommercial.netlify.app/admin/
2. Log in with your Netlify Identity credentials
3. Add/edit works under the "Works" collection

### Adding Images

1. Upload images to `/public/images/` directory
2. In the CMS, reference them as `/images/filename.jpg`
3. Or upload directly through the CMS media library

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Native CSS
- **CMS:** Decap CMS (via Netlify Identity)
- **Hosting:** Netlify
- **Content:** JSON frontmatter markdown files

## Content Structure

```
src/content/works/
├── 2025-crochet-world-2024.md
├── 2022-worm-wide-web-2022.md
├── 2022-brorsorna-2022.md
└── ...
```

Each work file contains:
- `title`: Work title
- `year`: Year created
- `images`: Array of image paths
- `tags`: Optional tags
