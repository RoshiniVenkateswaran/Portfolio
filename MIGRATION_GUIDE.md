# Next.js Migration Guide

## Status
✅ Core structure created
✅ Home page converted
✅ Projects page converted
⏳ Remaining pages need conversion

## What's Been Done

1. **Next.js Setup**
   - `next.config.js` configured for static export (SSG)
   - `app/layout.jsx` with proper metadata
   - `app/globals.css` for global styles

2. **Components Converted**
   - `app/components/ClientLayout.jsx` - Main layout wrapper
   - `app/components/Navigation.jsx` - Navigation (client component)
   - `app/components/Footer.jsx` - Footer (client component)
   - `app/components/ScrollProgress.jsx` - Scroll progress (client component)
   - `app/components/HomeContent.jsx` - Home page content (client component)
   - `app/components/ProjectsContent.jsx` - Projects page content (client component)

3. **Pages Created**
   - `app/page.jsx` - Home page (server component with metadata)
   - `app/projects/page.jsx` - Projects page (server component with metadata)

## What Needs to Be Done

### Remaining Pages to Convert:
1. `app/about/page.jsx` - Convert `src/pages/About.jsx`
2. `app/experience/page.jsx` - Convert `src/pages/Experience.jsx`
3. `app/skills/page.jsx` - Convert `src/pages/Skills.jsx`
4. `app/contact/page.jsx` - Convert `src/pages/Contact.jsx`

### Steps for Each Page:
1. Read the original page from `src/pages/[PageName].jsx`
2. Create `app/components/[PageName]Content.jsx` with 'use client' directive
3. Replace `react-router-dom` imports with `next/link` and `next/navigation`
4. Replace `<Link to="...">` with `<Link href="...">`
5. Create `app/[pagename]/page.jsx` as server component with metadata
6. Import and render the Content component

### Example Pattern:
```jsx
// app/components/AboutContent.jsx
'use client'
// ... copy from src/pages/About.jsx, update imports

// app/about/page.jsx
import AboutContent from '../components/AboutContent'
export const metadata = { ... }
export const dynamic = 'force-static'
export default function About() {
  return <AboutContent />
}
```

## Next Steps

1. Install dependencies: `npm install`
2. Convert remaining pages following the pattern above
3. Test: `npm run dev`
4. Build: `npm run build`
5. Verify SSR: `curl http://localhost:3000` (should return full HTML)

## Verification Checklist

- [ ] All pages render without JavaScript
- [ ] `curl` returns full HTML
- [ ] No "JavaScript Required" message
- [ ] SEO meta tags present in HTML source
- [ ] OpenGraph tags present
- [ ] Lighthouse "No initial HTML" issue resolved

