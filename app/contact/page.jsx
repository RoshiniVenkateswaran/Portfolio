import ContactContent from '../components/ContactContent'

export const metadata = {
  title: 'Contact - Roshini Venkateswaran',
  description: 'Get in touch with Roshini Venkateswaran. Open to discussing new opportunities, collaborations, or conversations about technology.',
  openGraph: {
    title: 'Contact - Roshini Venkateswaran',
    description: 'Get in touch and let\'s build something amazing together!',
  },
}

export const dynamic = 'force-static'

export default function Contact() {
  return <ContactContent />
}

