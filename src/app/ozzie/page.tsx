'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { 
  Dog, Heart, TrendingUp, Award, Calendar, Activity, 
  MapPin, Clock, Star, Trophy, Target, Zap 
} from 'lucide-react'
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

export default function OzziePage() {
  // Mock data for Ozzie
  const weeklyActivity = [
    { day: 'Mon', poops: 4, ideal: 3 },
    { day: 'Tue', poops: 3, ideal: 3 },
    { day: 'Wed', poops: 5, ideal: 3 },
    { day: 'Thu', poops: 4, ideal: 3 },
    { day: 'Fri', poops: 3, ideal: 3 },
    { day: 'Sat', poops: 4, ideal: 3 },
    { day: 'Sun', poops: 5, ideal: 3 },
  ]

  const consistencyBreakdown = [
    { name: 'Type 2', value: 15, color: '#92400E' },
    { name: 'Type 3', value: 35, color: '#B45309' },
    { name: 'Type 4', value: 30, color: '#D97706' },
    { name: 'Type 5', value: 15, color: '#F59E0B' },
    { name: 'Type 6', value: 5, color: '#FCD34D' },
  ]

  const locationData = [
    { location: 'Backyard', count: 120 },
    { location: 'Park', count: 45 },
    { location: 'Walk Route', count: 30 },
    { location: 'Other', count: 5 },
  ]

  const achievements = [
    { name: 'Perfect Week', description: 'Ideal consistency for 7 days', icon: Trophy, unlocked: true },
    { name: 'Early Bird', description: '50 morning poops before 8 AM', icon: Clock, unlocked: true },
    { name: 'Good Boy', description: '100 total entries logged', icon: Heart, unlocked: true },
    { name: 'Streak Master', description: '21 day logging streak', icon: Zap, unlocked: true },
    { name: 'Explorer', description: 'Pooped in 10 different locations', icon: MapPin, unlocked: true },
    { name: 'Century Club', description: '200 total entries', icon: Award, unlocked: false },
  ]

  const stats = [
    {
      label: 'Total Poops',
      value: '200',
      change: '+12 this week',
      icon: Dog,
      color: 'from-orange-500 to-orange-600',
    },
    {
      label: 'Daily Average',
      value: '3.6',
      change: 'Above average',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'Current Streak',
      value: '21 days',
      change: 'Personal best!',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Health Score',
      value: '94/100',
      change: '+3 points',
      icon: Heart,
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-8xl mb-4">🐕</div>
            <h1 className="text-5xl font-bold text-white mb-4">Ozzie Klose</h1>
            <p className="text-2xl text-white/90 mb-6">The Goodest Boy & Poop Champion</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                🏆 #1 Frequency
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                ⭐ 94 Health Score
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                🔥 21 Day Streak
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Dog className="w-6 h-6 mr-2" />
                About Ozzie
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Species</span>
                  <span className="font-semibold text-gray-900">Dog</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Breed</span>
                  <span className="font-semibold text-gray-900">Mixed (Best Boy Mix)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Age</span>
                  <span className="font-semibold text-gray-900">3 years</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Weight</span>
                  <span className="font-semibold text-gray-900">25 kg</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Favorite Spot</span>
                  <span className="font-semibold text-gray-900">Backyard</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Owner</span>
                  <span className="font-semibold text-gray-900">Matthew Klose</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Activity className="w-6 h-6 mr-2" />
                Recent Activity
              </h2>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-900">Perfect Poop</span>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-600">Type 4, Backyard, 10/10 satisfaction</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-900">Morning Routine</span>
                    <span className="text-xs text-gray-500">7:30 AM</span>
                  </div>
                  <p className="text-sm text-gray-600">Type 3, Backyard, Excellent consistency</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-900">Park Adventure</span>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-sm text-gray-600">Type 4, Dog Park, New location!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-xs text-green-600 font-semibold">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Weekly Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Weekly Activity
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyActivity}>
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
              <Bar dataKey="poops" name="Ozzie's Poops" fill="#F97316" radius={[8, 8, 0, 0]} />
              <Bar dataKey="ideal" name="Ideal Range" fill="#94A3B8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Consistency Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Consistency Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={consistencyBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: { name: string; percent: number }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {consistencyBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Location Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Favorite Locations
            </h3>
            <div className="space-y-4">
              {locationData.map((location, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{location.location}</span>
                    <span className="text-sm font-bold text-gray-900">{location.count} poops</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full"
                      style={{ width: `${(location.count / 200) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Trophy className="w-6 h-6 mr-2" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className={`p-6 rounded-xl border-2 ${
                  achievement.unlocked
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
              >
                <div className={`p-3 rounded-lg inline-flex mb-4 ${
                  achievement.unlocked
                    ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                    : 'bg-gray-300'
                }`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{achievement.name}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                {achievement.unlocked && (
                  <div className="mt-3 text-xs font-semibold text-orange-600">
                    ✓ Unlocked
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="mt-8 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl shadow-lg p-8 text-center text-white"
        >
          <Dog className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Track Ozzie's Next Poop</h2>
          <p className="text-xl mb-6 text-white/90">
            Keep the streak going and help Ozzie reach new achievements!
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/track"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Log Poop for Ozzie
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              Compare with Matthew
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
