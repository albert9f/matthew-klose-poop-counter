import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import ProductLineup from '@/components/ProductLineup'
import Features from '@/components/Features'
import Analytics from '@/components/Analytics'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductLineup />
      <Features />
      <Analytics />
      <Footer />
    </main>
  )
}
