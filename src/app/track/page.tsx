import PoopTracker from '@/components/PoopTracker'
import Navigation from '@/components/Navigation'

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <PoopTracker />
    </div>
  )
}