import AboutContent from '../components/AboutContent'

export const metadata = {
  title: 'About - Roshini Venkateswaran',
  description: 'Learn more about Roshini Venkateswaran, a Software Developer and AI/ML Enthusiast pursuing MS in Computer Science at George Washington University.',
  openGraph: {
    title: 'About - Roshini Venkateswaran',
    description: 'Learn more about Roshini Venkateswaran, a Software Developer and AI/ML Enthusiast.',
  },
}

export const dynamic = 'force-static'

export default function About() {
  return <AboutContent />
}

