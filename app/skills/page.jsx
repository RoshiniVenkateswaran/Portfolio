import SkillsContent from '../components/SkillsContent'

export const metadata = {
  title: 'Skills - Roshini Venkateswaran',
  description: 'Technical expertise and technologies including Programming Languages, Mobile Development, AI/ML, Backend & Databases, Frontend & Design, and Soft Skills.',
  openGraph: {
    title: 'Skills - Roshini Venkateswaran',
    description: 'Technical expertise and technologies that drive my work.',
  },
}

export const dynamic = 'force-static'

export default function Skills() {
  return <SkillsContent />
}

