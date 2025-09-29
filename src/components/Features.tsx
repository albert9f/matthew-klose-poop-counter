'use client'

import { motion } from 'framer-motion'
import { BarChart3, Camera, MapPin, Users, Zap, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights with charts, trends, and AI-powered health predictions.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Camera,
      title: 'Photo Documentation',
      description: 'Capture and catalog with automatic poop classification using computer vision.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Location Tracking',
      description: 'GPS-enabled location mapping for optimal bathroom spotting.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Users,
      title: 'Multi-Species Support',
      description: 'Track both human and pet poops with species-specific analytics.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description: 'Instant synchronization across all devices with offline support.',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your poop data stays private with end-to-end encryption.',
      color: 'from-red-400 to-red-600'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Engineered for
            <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
              {" "}Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature designed with precision and care. 
            This is poop tracking reimagined.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Specs Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Technical Specifications
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Bristol Scale Support</span>
                    <span className="font-semibold">1-7 Complete Range</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Data Points Per Entry</span>
                    <span className="font-semibold">30+ Measurements</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Photo Resolution</span>
                    <span className="font-semibold">Up to 4K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Comparison Algorithms</span>
                    <span className="font-semibold">Advanced AI</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Species Compatibility</span>
                    <span className="font-semibold">Human & Canine</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-block bg-white rounded-2xl p-8 text-gray-900">
                  <div className="text-6xl mb-4">🔬</div>
                  <div className="text-2xl font-bold mb-2">Lab-Grade Precision</div>
                  <div className="text-gray-600">Built for scientific accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}