import { metadata } from './layout'
import HomeContent from './components/HomeContent'

export const dynamic = 'force-static'

export default function Home() {
  return <HomeContent />
}

