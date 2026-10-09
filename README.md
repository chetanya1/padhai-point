# Padhai Point — Vercel-ready static website

This is a standalone static site. It intentionally does not depend on Higgsfield, Quanta, Tailwind, React, or any external build packages.

## Deploy to Vercel
1. Upload these files to the root of a GitHub repository.
2. Import that repository in Vercel.
3. Framework Preset: **Other**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Install Command can remain blank/default; there are no dependencies to install.

The build script uses Node.js only and copies the static files to `dist/`.
