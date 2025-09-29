'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Target, Award } from 'lucide-react'

export default function Analytics() {
  const stats = [
    {
      icon: TrendingUp,
      number: "97%",
      label: "Accuracy Rate",
      description: "AI-powered poop classification"
    },
    {
      icon: Users,
      number: "2",
      label: "Active Users",
      description: "Matthew & Ozzie Klose"
    },
    {
      icon: Target,
      number: "∞",
      label: "Comparisons",
      description: "Unlimited cross-analysis"
    },
    {
      icon: Award,
      number: "#1",
      label: "Poop Tracker",
      description: "In advanced analytics"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful
            <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
              {" "}Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your data into actionable insights with the most comprehensive 
            poop analytics platform ever created.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Analytics Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Advanced Comparison Tools
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Human vs Pet Analysis</h4>
                      <p className="text-gray-600 text-sm">Side-by-side comparisons between Matthew and Ozzie with detailed metrics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Trend Prediction</h4>
                      <p className="text-gray-600 text-sm">AI-powered forecasting for optimal bathroom timing and health insights.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Health Correlations</h4>
                      <p className="text-gray-600 text-sm">Connect poop patterns with diet, exercise, and wellness indicators.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Matthew's Daily Average</span>
                    <span className="text-lg font-bold text-gray-900">2.3 💩</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '76%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-gray-600">Ozzie's Daily Average</span>
                    <span className="text-lg font-bold text-gray-900">3.7 💩</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">🏆</div>
                      <div className="text-sm text-gray-600 mt-1">Ozzie leads this week!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}