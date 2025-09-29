'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-purple-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-400/20 to-purple-400/20 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 text-sm"
          >
            <span className="text-orange-600 font-medium">New</span>
            <span className="text-gray-600">Advanced AI Analytics</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Think Different
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                About Poop
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              The world's most advanced poop tracking experience. 
              <br />
              Designed for Matthew Klose and Ozzie Klose.
            </motion.p>
          </div>

          {/* Hero Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="relative mx-auto w-80 h-80 rounded-3xl bg-gradient-to-br from-orange-400 to-purple-600 p-1 shadow-2xl"
          >
            <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-8xl">💩</div>
                <div className="text-2xl font-bold text-gray-800">Poop Pro</div>
                <div className="text-gray-600">The Classic</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link
              href="/track"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Tracking Free
            </Link>
            <Link
              href="/products"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              View Products
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">Species Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">∞</div>
              <div className="text-sm text-gray-600">Comparisons</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-4xl opacity-30"
      >
        🐕
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 left-20 text-4xl opacity-30"
      >
        📊
      </motion.div>
    </section>
  )
}