import ProjectsContent from '../components/ProjectsContent'

export const metadata = {
  title: 'Projects - Roshini Venkateswaran',
  description: 'A collection of projects that showcase my passion for building intelligent, human-centered technology solutions.',
  openGraph: {
    title: 'Projects - Roshini Venkateswaran',
    description: 'A collection of projects that showcase my passion for building intelligent, human-centered technology solutions.',
  },
}

export const dynamic = 'force-static'

export default function Projects() {
  return <ProjectsContent />
}

