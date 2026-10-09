# Padhai Point source code

React 19 + TanStack Start home-tuition website.

Main files:
- app/src/routes/index.tsx — page, subject listings, FAQ, enquiry form and SEO structured data
- app/src/styles.css — responsive branding, animations and reduced-motion support
- app/src/app-meta.json — page/social metadata
- app/src/scroll-scrub-scenes.ts — template configuration
- app/public/favicon.svg — favicon
- app/public/padhai-point-cover.svg — social cover artwork
- app/design-brief.md — design notes

Run locally: install Node.js 22+ and Bun, open the app directory, run bun install, then bun run dev.

The enquiry form prepares text in the browser; connect a backend or form provider before expecting submissions. Add a verified phone number before promoting the site.
