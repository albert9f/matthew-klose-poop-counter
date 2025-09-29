'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProductLineup() {
  const products = [
    {
      id: 'the-classic',
      name: 'The Classic',
      description: 'The gold standard of poop tracking',
      emoji: '💩',
      color: 'from-amber-400 to-orange-500',
      features: ['Bristol Scale 3-4', 'Premium Brown Finish', 'Optimal Size'],
      price: 'Free',
      badge: null
    },
    {
      id: 'soft-serve',
      name: 'Soft Serve',
      description: 'Smooth and creamy texture analysis',
      emoji: '🍦',
      color: 'from-blue-400 to-indigo-500',
      features: ['Bristol Scale 5-6', 'Creamy Consistency', 'Quick Release'],
      price: 'Pro',
      badge: 'Popular'
    },
    {
      id: 'compact-series',
      name: 'Compact Series',
      description: 'Small but mighty pellet tracking',
      emoji: '🥜',
      color: 'from-green-400 to-emerald-500',
      features: ['Bristol Scale 1-2', 'Compact Design', 'Long Lasting'],
      price: 'Pro',
      badge: null
    },
    {
      id: 'emergency-release',
      name: 'Emergency Release',
      description: 'Critical situation monitoring',
      emoji: '💥',
      color: 'from-red-400 to-rose-500',
      features: ['Bristol Scale 7', 'Urgent Alerts', 'Damage Assessment'],
      price: 'Premium',
      badge: 'New'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The Complete
            <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
              {" "}Poop Lineup
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From casual tracking to professional analysis. 
            Find the perfect poop classification for every situation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 h-full">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}

                {/* Product Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg`}>
                  {product.emoji}
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-500 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-lg font-bold text-gray-900">{product.price}</div>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-block mt-3 w-full bg-gray-900 text-white py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compare Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/compare"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            <span>Compare All Models</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}