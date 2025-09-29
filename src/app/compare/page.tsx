'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { 
  Users, Dog, TrendingUp, Award, Calendar, 
  Activity, BarChart3, Target, Zap, Clock 
} from 'lucide-react'
import {
  LineChart, Line, BarChart, Bar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

export default function ComparePage() {
  const [comparisonType, setComparisonType] = useState('matthew-vs-ozzie')

  // Mock comparison data
  const weeklyComparison = [
    { day: 'Mon', matthew: 2, ozzie: 4, avg: 3 },
    { day: 'Tue', matthew: 3, ozzie: 3, avg: 3 },
    { day: 'Wed', matthew: 1, ozzie: 5, avg: 3 },
    { day: 'Thu', matthew: 2, ozzie: 4, avg: 3 },
    { day: 'Fri', matthew: 3, ozzie: 3, avg: 3 },
    { day: 'Sat', matthew: 2, ozzie: 4, avg: 3 },
    { day: 'Sun', matthew: 3, ozzie: 5, avg: 4 },
  ]

  const performanceMetrics = [
    { metric: 'Consistency', matthew: 85, ozzie: 78, avg: 75 },
    { metric: 'Satisfaction', matthew: 90, ozzie: 95, avg: 80 },
    { metric: 'Frequency', matthew: 70, ozzie: 92, avg: 85 },
    { metric: 'Health', matthew: 88, ozzie: 85, avg: 82 },
    { metric: 'Timing', matthew: 75, ozzie: 80, avg: 78 },
    { metric: 'Effort', matthew: 82, ozzie: 88, avg: 80 },
  ]

  const timeDistribution = [
    { hour: '6 AM', matthew: 15, ozzie: 25 },
    { hour: '8 AM', matthew: 35, ozzie: 30 },
    { hour: '10 AM', matthew: 20, ozzie: 15 },
    { hour: '12 PM', matthew: 10, ozzie: 10 },
    { hour: '2 PM', matthew: 5, ozzie: 5 },
    { hour: '4 PM', matthew: 5, ozzie: 5 },
    { hour: '6 PM', matthew: 10, ozzie: 10 },
  ]

  const comparisonStats = [
    {
      label: 'Matthew Total',
      value: '147',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      percentage: '42%',
    },
    {
      label: 'Ozzie Total',
      value: '200',
      icon: Dog,
      color: 'from-orange-500 to-orange-600',
      percentage: '58%',
    },
    {
      label: 'Winner This Week',
      value: 'Ozzie',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
      badge: '🏆',
    },
    {
      label: 'Best Streak',
      value: '21 days',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      subtext: 'Matthew',
    },
  ]

  const insights = [
    {
      title: 'Frequency Champion',
      description: 'Ozzie leads with 58% of total entries. Dogs typically have higher frequency.',
      icon: TrendingUp,
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Consistency King',
      description: 'Matthew has 15% better consistency ratings. Human diet control shows benefits.',
      icon: Target,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Morning Routine',
      description: 'Both peak between 6-10 AM. Early morning shows optimal digestive activity.',
      icon: Clock,
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Health Correlation',
      description: 'Both show positive health trends. Regular tracking correlates with awareness.',
      icon: Activity,
      color: 'from-green-400 to-green-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-blue-500 to-orange-600 bg-clip-text text-transparent">
              Comparison
            </span> Tools
          </h1>
          <p className="text-gray-600">
            Advanced analytics comparing Matthew and Ozzie's poop data
          </p>
        </motion.div>

        {/* Comparison Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Compare</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setComparisonType('matthew-vs-ozzie')}
              className={`p-4 rounded-xl border-2 transition-all ${
                comparisonType === 'matthew-vs-ozzie'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">vs</span>
                <Dog className="w-5 h-5 text-orange-600" />
              </div>
              <div className="font-semibold text-gray-900">Matthew vs Ozzie</div>
              <div className="text-sm text-gray-500">Head-to-head comparison</div>
            </button>

            <button
              onClick={() => setComparisonType('human-avg')}
              className={`p-4 rounded-xl border-2 transition-all ${
                comparisonType === 'human-avg'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="font-semibold text-gray-900">Matthew vs Average</div>
              <div className="text-sm text-gray-500">Compare to human baseline</div>
            </button>

            <button
              onClick={() => setComparisonType('dog-breed')}
              className={`p-4 rounded-xl border-2 transition-all ${
                comparisonType === 'dog-breed'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Dog className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="font-semibold text-gray-900">Ozzie vs Breed Avg</div>
              <div className="text-sm text-gray-500">Compare to breed standards</div>
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {comparisonStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                {stat.percentage && (
                  <span className="text-sm font-semibold text-gray-600">{stat.percentage}</span>
                )}
                {stat.badge && <span className="text-2xl">{stat.badge}</span>}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
              {stat.subtext && (
                <div className="text-xs text-gray-500 mt-1">{stat.subtext}</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Weekly Frequency Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Weekly Frequency Comparison
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={weeklyComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFF', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px' 
                }}
              />
              <Legend />
              <Bar dataKey="matthew" name="Matthew" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="ozzie" name="Ozzie" fill="#F97316" radius={[8, 8, 0, 0]} />
              <Bar dataKey="avg" name="Average" fill="#94A3B8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Performance Radar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Performance Comparison
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={performanceMetrics}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis dataKey="metric" stroke="#6B7280" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6B7280" />
              <Radar
                name="Matthew"
                dataKey="matthew"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.6}
                strokeWidth={2}
              />
              <Radar
                name="Ozzie"
                dataKey="ozzie"
                stroke="#F97316"
                fill="#F97316"
                fillOpacity={0.6}
                strokeWidth={2}
              />
              <Radar
                name="Average"
                dataKey="avg"
                stroke="#94A3B8"
                fill="#94A3B8"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Time Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Time of Day Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="hour" stroke="#6B7280" />
              <YAxis stroke="#6B7280" label={{ value: '% of Daily Total', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFF', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px' 
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="matthew" 
                name="Matthew"
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="ozzie" 
                name="Ozzie"
                stroke="#F97316" 
                strokeWidth={3}
                dot={{ fill: '#F97316', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${insight.color} mb-4`}>
                  <insight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">{insight.title}</h4>
                <p className="text-white/80 text-sm">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Side-by-Side Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Matthew Stats */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Matthew Klose</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-white/80">Total Entries</span>
                <span className="text-2xl font-bold">147</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-white/80">Avg Per Day</span>
                <span className="text-2xl font-bold">2.1</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-white/80">Best Consistency</span>
                <span className="text-2xl font-bold">Type 4</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-white/80">Satisfaction Avg</span>
                <span className="text-2xl font-bold">8.7/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Current Streak</span>
                <span className="text-2xl font-bold">14 days</span>
              </div>
            </div>
          </div>

          {/* Ozzie Stats */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <Dog className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Ozzie Klose</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-white/80">Total Entries</span>
                <span className="text-2xl font-bold">200</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-white/80">Avg Per Day</span>
                <span className="text-2xl font-bold">3.6</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-white/80">Best Consistency</span>
                <span className="text-2xl font-bold">Type 3</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/20">
                <span className="text-white/80">Satisfaction Avg</span>
                <span className="text-2xl font-bold">9.2/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Current Streak</span>
                <span className="text-2xl font-bold">21 days 🏆</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
