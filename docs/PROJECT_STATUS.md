# Project Status

This repository has completed a migration to Next.js App Router.

## Source of Truth

- Active app code lives in `app/`.
- Static assets live in `public/`.
- Root configuration is driven by `package.json`, `next.config.js`, `tailwind.config.js`, and `postcss.config.js`.

## Legacy Code

`src/` is legacy from an earlier React/Vite structure and is currently not imported by the Next.js app.

Recommended follow-up:
1. Remove `src/` after confirming no content still needs to be migrated.
2. Keep new development inside `app/` and `public/`.

## Documentation Policy

Keep root docs minimal:
- `README.md` for setup and architecture
- focused docs inside `docs/` for status/migration notes
