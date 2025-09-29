'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { 
  Check, Star, Package, Ruler, Droplet, Gauge, 
  Sparkles, Shield, Zap, Heart, Award, Camera 
} from 'lucide-react'

// Product data
const products = {
  'the-classic': {
    name: 'The Classic',
    tagline: 'The gold standard of poops',
    emoji: '💩',
    price: 'Free',
    tier: 'Standard',
    bristolType: '3-4',
    color: 'Classic Brown',
    gradient: 'from-amber-500 to-orange-600',
    description: 'The perfect poop. Smooth, effortless, and satisfying. This is what nature intended.',
    features: [
      'Bristol Scale Type 3-4',
      'Optimal consistency',
      'Effortless passage',
      'Ideal color spectrum',
      'No cleanup issues',
      'Perfect satisfaction',
    ],
    techSpecs: [
      { label: 'Consistency', value: 'Smooth sausage-like' },
      { label: 'Density', value: '1.06 g/cm³' },
      { label: 'pH Level', value: '6.5 - 7.5' },
      { label: 'Color Range', value: 'Light to Medium Brown' },
      { label: 'Avg Length', value: '15-20 cm' },
      { label: 'Avg Weight', value: '150-250g' },
      { label: 'Float Test', value: 'Partial sink' },
      { label: 'Odor Rating', value: '4-6/10' },
    ],
    accessories: [
      { name: 'Bristol Chart', description: 'Visual reference guide', price: 'Free' },
      { name: 'Tracking Journal', description: 'Manual logging backup', price: '$9.99' },
      { name: 'Fiber Supplement', description: 'Consistency optimizer', price: '$19.99' },
      { name: 'Bidet Upgrade', description: 'Enhanced cleanup', price: '$199.99' },
    ],
  },
  'soft-serve': {
    name: 'Soft Serve',
    tagline: 'Smooth operator',
    emoji: '🍦',
    price: 'Pro',
    tier: 'Advanced',
    bristolType: '5-6',
    color: 'Varied Browns',
    gradient: 'from-yellow-500 to-amber-600',
    description: 'Faster, softer, more frequent. For those who prefer speed and efficiency over form.',
    features: [
      'Bristol Scale Type 5-6',
      'Quick passage time',
      'Multiple daily occurrences',
      'Soft consistency',
      'Requires quick response',
      'High urgency factor',
    ],
    techSpecs: [
      { label: 'Consistency', value: 'Soft blobs to fluffy' },
      { label: 'Density', value: '0.85 g/cm³' },
      { label: 'pH Level', value: '6.0 - 7.0' },
      { label: 'Color Range', value: 'Light to Golden Brown' },
      { label: 'Avg Length', value: 'N/A (Formless)' },
      { label: 'Avg Weight', value: '100-200g' },
      { label: 'Float Test', value: 'Floats' },
      { label: 'Odor Rating', value: '6-8/10' },
    ],
    accessories: [
      { name: 'Emergency Kit', description: 'Portable cleanup essentials', price: '$14.99' },
      { name: 'Urgency Alert', description: 'Real-time notifications', price: '$4.99/mo' },
      { name: 'Probiotics Pro', description: 'Gut health optimizer', price: '$29.99' },
      { name: 'Wet Wipes Premium', description: 'Enhanced cleanup system', price: '$12.99' },
    ],
  },
  'compact-series': {
    name: 'Compact Series',
    tagline: 'Small but mighty',
    emoji: '🟤',
    price: 'Pro',
    tier: 'Specialist',
    bristolType: '1-2',
    color: 'Dark Brown',
    gradient: 'from-stone-600 to-stone-800',
    description: 'Hard, compact, and challenging. For the constipation warriors and low-fiber enthusiasts.',
    features: [
      'Bristol Scale Type 1-2',
      'Pellet formation',
      'Requires effort',
      'Infrequent occurrence',
      'Hard consistency',
      'Extended session time',
    ],
    techSpecs: [
      { label: 'Consistency', value: 'Hard lumps/pellets' },
      { label: 'Density', value: '1.2 g/cm³' },
      { label: 'pH Level', value: '7.0 - 8.0' },
      { label: 'Color Range', value: 'Dark Brown to Black' },
      { label: 'Avg Length', value: '1-5 cm (pellets)' },
      { label: 'Avg Weight', value: '50-100g' },
      { label: 'Float Test', value: 'Sinks immediately' },
      { label: 'Odor Rating', value: '3-5/10' },
    ],
    accessories: [
      { name: 'Fiber Boost Max', description: 'Extra-strength supplement', price: '$24.99' },
      { name: 'Hydration Tracker', description: 'Water intake monitor', price: '$39.99' },
      { name: 'Comfort Cushion', description: 'Extended session support', price: '$49.99' },
      { name: 'Stool Softener', description: 'Medical-grade solution', price: '$16.99' },
    ],
  },
  'emergency-release': {
    name: 'Emergency Release',
    tagline: 'When seconds count',
    emoji: '💥',
    price: 'Premium',
    tier: 'Critical',
    bristolType: '7',
    color: 'Varies',
    gradient: 'from-red-500 to-orange-600',
    description: 'The urgent, the explosive, the legendary. When your digestive system says NOW.',
    features: [
      'Bristol Scale Type 7',
      'Extreme urgency',
      'Liquid consistency',
      'Emergency protocols',
      'Location critical',
      'Cleanup intensive',
    ],
    techSpecs: [
      { label: 'Consistency', value: 'Liquid/Watery' },
      { label: 'Density', value: '0.95 g/cm³' },
      { label: 'pH Level', value: '5.0 - 6.5' },
      { label: 'Color Range', value: 'Yellow to Brown' },
      { label: 'Avg Length', value: 'N/A (Liquid)' },
      { label: 'Avg Weight', value: '200-400g' },
      { label: 'Float Test', value: 'Disperses' },
      { label: 'Odor Rating', value: '8-10/10' },
    ],
    accessories: [
      { name: 'Emergency Locator', description: 'Nearest restroom finder', price: '$9.99/mo' },
      { name: 'Premium Insurance', description: 'Accident coverage', price: '$29.99/mo' },
      { name: 'Anti-Diarrheal Kit', description: 'Fast-acting relief', price: '$19.99' },
      { name: 'Biohazard Cleanup', description: 'Professional service', price: '$99.99' },
    ],
  },
}

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = products[slug as keyof typeof products]

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            View all products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${product.gradient} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-8xl mb-6">{product.emoji}</div>
            <h1 className="text-5xl font-bold text-white mb-4">{product.name}</h1>
            <p className="text-2xl text-white/90 mb-8">{product.tagline}</p>
            <div className="flex items-center justify-center gap-4">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                Bristol Type {product.bristolType}
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                {product.tier}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <p className="text-xl text-gray-700 leading-relaxed">{product.description}</p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 mb-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Sparkles className="w-8 h-8 mr-3" />
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.techSpecs.map((spec, index) => (
              <div key={index} className="border-l-4 border-white/20 pl-4">
                <div className="text-sm text-white/60 mb-1">{spec.label}</div>
                <div className="text-lg font-semibold">{spec.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accessories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Package className="w-8 h-8 mr-3" />
            Compatible Accessories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.accessories.map((accessory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{accessory.name}</h3>
                  <span className="text-lg font-bold text-blue-600">{accessory.price}</span>
                </div>
                <p className="text-gray-600">{accessory.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className={`bg-gradient-to-r ${product.gradient} rounded-2xl shadow-lg p-8 text-center text-white`}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Track Your {product.name}?</h2>
          <p className="text-xl mb-6 text-white/90">
            Start logging this poop type and get personalized insights
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/track"
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Tracking
            </Link>
            <Link
              href="/analytics"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              View Analytics
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
