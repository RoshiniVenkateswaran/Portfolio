import './globals.css'
import ClientLayout from './components/ClientLayout'

export const metadata = {
  title: 'Roshini Venkateswaran - Software Engineer & AI/ML Enthusiast',
  description: 'Portfolio showcasing projects, experience, and skills in software development, machine learning, and mobile app development.',
  keywords: ['Roshini Venkateswaran', 'Software Engineer', 'AI/ML', 'Machine Learning', 'Mobile Development', 'Flutter', 'React', 'Portfolio'],
  authors: [{ name: 'Roshini Venkateswaran' }],
  openGraph: {
    type: 'website',
    title: 'Roshini Venkateswaran - Software Engineer & AI/ML Enthusiast',
    description: 'Portfolio showcasing projects, experience, and skills in software development, machine learning, and mobile app development.',
    url: 'https://roshinivenkateswaran.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roshini Venkateswaran - Software Engineer & AI/ML Enthusiast',
    description: 'Portfolio showcasing projects, experience, and skills in software development, machine learning, and mobile app development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans" style={{ backgroundColor: '#ffffff', color: '#334155', margin: 0, padding: 0, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

