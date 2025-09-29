'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { 
  BarChart3, TrendingUp, Calendar, Award, Activity, 
  Clock, Target, Zap, Users, Dog 
} from 'lucide-react'
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts'

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d')
  const [selectedUser, setSelectedUser] = useState('both')

  // Mock data - in production this would come from API
  const weeklyData = [
    { day: 'Mon', matthew: 2, ozzie: 4 },
    { day: 'Tue', matthew: 3, ozzie: 3 },
    { day: 'Wed', matthew: 1, ozzie: 5 },
    { day: 'Thu', matthew: 2, ozzie: 4 },
    { day: 'Fri', matthew: 3, ozzie: 3 },
    { day: 'Sat', matthew: 2, ozzie: 4 },
    { day: 'Sun', matthew: 3, ozzie: 5 },
  ]

  const consistencyData = [
    { type: 'Type 1', matthew: 5, ozzie: 8 },
    { type: 'Type 2', matthew: 12, ozzie: 15 },
    { type: 'Type 3', matthew: 25, ozzie: 18 },
    { type: 'Type 4', matthew: 35, ozzie: 28 },
    { type: 'Type 5', matthew: 15, ozzie: 20 },
    { type: 'Type 6', matthew: 6, ozzie: 8 },
    { type: 'Type 7', matthew: 2, ozzie: 3 },
  ]

  const colorDistribution = [
    { name: 'Brown', value: 65, color: '#8B4513' },
    { name: 'Light Brown', value: 20, color: '#A0522D' },
    { name: 'Dark Brown', value: 10, color: '#654321' },
    { name: 'Green', value: 3, color: '#22C55E' },
    { name: 'Other', value: 2, color: '#94A3B8' },
  ]

  const performanceMetrics = [
    { metric: 'Consistency', matthew: 85, ozzie: 78 },
    { metric: 'Satisfaction', matthew: 90, ozzie: 95 },
    { metric: 'Frequency', matthew: 70, ozzie: 92 },
    { metric: 'Health', matthew: 88, ozzie: 85 },
    { metric: 'Timing', matthew: 75, ozzie: 80 },
  ]

  const stats = [
    {
      label: 'Total Entries',
      value: '347',
      change: '+12%',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Avg Per Day',
      value: '5.2',
      change: '+0.3',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'Perfect Poops',
      value: '89',
      change: '+7',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'Current Streak',
      value: '14 days',
      change: 'Record!',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
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
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Analytics
            </span> Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive insights and trends for Matthew & Ozzie
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Range
              </label>
              <div className="flex gap-2">
                {['7d', '30d', '90d', '1y'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      timeRange === range
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {range === '7d' && '7 Days'}
                    {range === '30d' && '30 Days'}
                    {range === '90d' && '90 Days'}
                    {range === '1y' && '1 Year'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Compare
              </label>
              <div className="flex gap-2">
                {['both', 'matthew', 'ozzie'].map((user) => (
                  <button
                    key={user}
                    onClick={() => setSelectedUser(user)}
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                      selectedUser === user
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {user === 'matthew' && <Users className="w-4 h-4" />}
                    {user === 'ozzie' && <Dog className="w-4 h-4" />}
                    {user === 'both' && <><Users className="w-4 h-4" /><Dog className="w-4 h-4" /></>}
                    {user.charAt(0).toUpperCase() + user.slice(1)}
                  </button>
                ))}
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
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-600">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Weekly Frequency Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Weekly Frequency
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
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
              {(selectedUser === 'both' || selectedUser === 'matthew') && (
                <Bar dataKey="matthew" name="Matthew" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              )}
              {(selectedUser === 'both' || selectedUser === 'ozzie') && (
                <Bar dataKey="ozzie" name="Ozzie" fill="#F97316" radius={[8, 8, 0, 0]} />
              )}
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Consistency Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Bristol Scale Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={consistencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="type" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFF', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px' 
                }}
              />
              <Legend />
              {(selectedUser === 'both' || selectedUser === 'matthew') && (
                <Line 
                  type="monotone" 
                  dataKey="matthew" 
                  name="Matthew"
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', r: 5 }}
                />
              )}
              {(selectedUser === 'both' || selectedUser === 'ozzie') && (
                <Line 
                  type="monotone" 
                  dataKey="ozzie" 
                  name="Ozzie"
                  stroke="#F97316" 
                  strokeWidth={3}
                  dot={{ fill: '#F97316', r: 5 }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Color Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={colorDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: { name: string; percent: number }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {colorDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Performance Radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Performance Comparison
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceMetrics}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis dataKey="metric" stroke="#6B7280" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6B7280" />
                <Radar
                  name="Matthew"
                  dataKey="matthew"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.5}
                />
                <Radar
                  name="Ozzie"
                  dataKey="ozzie"
                  stroke="#F97316"
                  fill="#F97316"
                  fillOpacity={0.5}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            AI-Powered Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="font-semibold text-gray-900">Healthy Trend</span>
              </div>
              <p className="text-sm text-gray-600">
                Matthew's consistency has improved 15% this week. Type 4 is the ideal Bristol scale rating.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="font-semibold text-gray-900">High Frequency</span>
              </div>
              <p className="text-sm text-gray-600">
                Ozzie is 37% more frequent than average. This is normal for active dogs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="font-semibold text-gray-900">Best Time</span>
              </div>
              <p className="text-sm text-gray-600">
                Peak performance occurs between 7-9 AM for both users. Morning routine is optimal.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                <span className="font-semibold text-gray-900">Streak Alert</span>
              </div>
              <p className="text-sm text-gray-600">
                Current 14-day logging streak! Keep up the consistent tracking for better insights.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
