# Roshini Venkateswaran - Portfolio

Live site: [roshinivenkateswaran.vercel.app](https://roshinivenkateswaran.vercel.app)

Modern portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Development

Prerequisites:
- Node.js 18+
- npm

Install and run:

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:5173`.

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production app
- `npm run start` - Start production server
- `npm run lint` - Run lint checks

## Project Structure

```text
app/
  layout.jsx                # Root layout and metadata
  globals.css               # Global styles
  page.jsx                  # Home route
  about/page.jsx
  projects/page.jsx
  experience/page.jsx
  skills/page.jsx
  contact/page.jsx
  components/               # Route content + shared UI
  context/                  # React context providers

public/
  images/                   # Static images
  resume.pdf
```

Notes:
- `app/` is the active application architecture.
- `src/` currently contains legacy components from a previous implementation.

## Environment Variables

Copy `.env.example` to `.env.local` and add values only when needed.

## License

MIT
