import ExperienceContent from '../components/ExperienceContent'

export const metadata = {
  title: 'Experience - Roshini Venkateswaran',
  description: 'Professional journey and career milestones of Roshini Venkateswaran, including internships at Prommuni, Medica, Advantage Capital, and Etuper Technologies.',
  openGraph: {
    title: 'Experience - Roshini Venkateswaran',
    description: 'Professional journey and career milestones.',
  },
}

export const dynamic = 'force-static'

export default function Experience() {
  return <ExperienceContent />
}

