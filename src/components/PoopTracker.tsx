'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, MapPin, Calendar, User, Dog, CheckCircle } from 'lucide-react'

export default function PoopTracker() {
  const [formData, setFormData] = useState({
    species: 'human',
    consistency: 4,
    size: 'medium',
    color: 'brown',
    smell: 5,
    effort: 5,
    satisfaction: 5,
    length: '',
    width: '',
    weight: '',
    location: '',
    mood: 'neutral',
    blood: false,
    mucus: false,
    undigested: false,
    pain: false,
    urgency: 5,
    wipeCount: '',
    cleanupTime: '',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Prepare data for API
      const apiData = {
        userId: 'user1', // TODO: Replace with actual user ID from auth
        petId: formData.species === 'dog' ? 'pet1' : null, // TODO: Replace with actual pet ID
        species: formData.species,
        consistency: formData.consistency,
        size: formData.size,
        color: formData.color,
        smell: formData.smell,
        effort: formData.effort,
        satisfaction: formData.satisfaction,
        urgency: formData.urgency,
        length: formData.length ? parseFloat(formData.length) : null,
        width: formData.width ? parseFloat(formData.width) : null,
        weight: formData.weight ? parseFloat(formData.weight) : null,
        location: formData.location || null,
        mood: formData.mood,
        blood: formData.blood,
        mucus: formData.mucus,
        undigested: formData.undigested,
        pain: formData.pain,
        wipeCount: formData.wipeCount ? parseInt(formData.wipeCount) : null,
        cleanupTime: formData.cleanupTime ? parseInt(formData.cleanupTime) : null,
        notes: formData.notes || null,
      }

      // Submit to API
      const response = await fetch('/api/poops', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to save poop entry')
      }

      console.log('Poop entry saved:', result.data)
      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          species: 'human',
          consistency: 4,
          size: 'medium',
          color: 'brown',
          smell: 5,
          effort: 5,
          satisfaction: 5,
          length: '',
          width: '',
          weight: '',
          location: '',
          mood: 'neutral',
          blood: false,
          mucus: false,
          undigested: false,
          pain: false,
          urgency: 5,
          wipeCount: '',
          cleanupTime: '',
          notes: ''
        })
      }, 3000)
    } catch (err) {
      console.error('Error saving poop entry:', err)
      setError(err instanceof Error ? err.message : 'Failed to save poop entry')
    } finally {
      setIsSubmitting(false)
    }
  }

  const consistencyLabels = [
    'Hard lumps',
    'Lumpy sausage',
    'Cracked sausage',
    'Smooth sausage',
    'Soft blobs',
    'Fluffy pieces',
    'Watery liquid'
  ]

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Poop Logged Successfully! 💩</h2>
          <p className="text-gray-600">Your data has been recorded and analytics are being updated.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Track Your <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">Poop</span>
        </h1>
        <p className="text-gray-600">
          Log comprehensive data for advanced analytics and insights
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Species Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Who pooped?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, species: 'human' })}
              className={`p-4 rounded-xl border-2 transition-all ${
                formData.species === 'human'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <User className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="font-semibold">Matthew Klose</div>
              <div className="text-sm text-gray-500">Human</div>
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, species: 'dog' })}
              className={`p-4 rounded-xl border-2 transition-all ${
                formData.species === 'dog'
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Dog className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="font-semibold">Ozzie Klose</div>
              <div className="text-sm text-gray-500">Dog</div>
            </button>
          </div>
        </motion.div>

        {/* Bristol Stool Scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Consistency (Bristol Scale)
          </h3>
          <div className="space-y-3">
            <input
              type="range"
              min="1"
              max="7"
              value={formData.consistency}
              onChange={(e) => setFormData({ ...formData, consistency: parseInt(e.target.value) })}
              className="w-full h-2 bg-gradient-to-r from-amber-900 via-amber-600 to-yellow-300 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>
            <div className="text-center mt-2">
              <div className="text-2xl font-bold text-gray-900">Type {formData.consistency}</div>
              <div className="text-sm text-gray-600">{consistencyLabels[formData.consistency - 1]}</div>
            </div>
          </div>
        </motion.div>

        {/* Size & Color */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Size & Color</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size
              </label>
              <select
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="small">Small (Petit)</option>
                <option value="medium">Medium (Classic)</option>
                <option value="large">Large (Grande)</option>
                <option value="xl">Extra Large (Venti)</option>
                <option value="monster">Monster (Trenta)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <select
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="brown">🤎 Brown (Classic)</option>
                <option value="light-brown">🟤 Light Brown</option>
                <option value="dark-brown">🟫 Dark Brown</option>
                <option value="green">🟢 Green</option>
                <option value="yellow">🟡 Yellow</option>
                <option value="red">🔴 Red (Alert!)</option>
                <option value="black">⚫ Black (Alert!)</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Rating Scales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Experience Ratings</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Smell Intensity</label>
                <span className="text-sm font-bold text-gray-900">{formData.smell}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.smell}
                onChange={(e) => setFormData({ ...formData, smell: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Effort Required</label>
                <span className="text-sm font-bold text-gray-900">{formData.effort}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.effort}
                onChange={(e) => setFormData({ ...formData, effort: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Satisfaction Level</label>
                <span className="text-sm font-bold text-gray-900">{formData.satisfaction}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.satisfaction}
                onChange={(e) => setFormData({ ...formData, satisfaction: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Urgency</label>
                <span className="text-sm font-bold text-gray-900">{formData.urgency}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </motion.div>

        {/* Technical Measurements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Technical Specifications (Optional)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length (cm)
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.length}
                onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Width (cm)
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.width}
                onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (g)
              </label>
              <input
                type="number"
                step="1"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>
        </motion.div>

        {/* Health Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Health Indicators</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.blood}
                onChange={(e) => setFormData({ ...formData, blood: e.target.checked })}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Blood</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.mucus}
                onChange={(e) => setFormData({ ...formData, mucus: e.target.checked })}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Mucus</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.undigested}
                onChange={(e) => setFormData({ ...formData, undigested: e.target.checked })}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Undigested Food</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.pain}
                onChange={(e) => setFormData({ ...formData, pain: e.target.checked })}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Pain</span>
            </label>
          </div>
        </motion.div>

        {/* Additional Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Home, Office, Park"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wipe Count
                </label>
                <input
                  type="number"
                  value={formData.wipeCount}
                  onChange={(e) => setFormData({ ...formData, wipeCount: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cleanup Time (seconds)
                </label>
                <input
                  type="number"
                  value={formData.cleanupTime}
                  onChange={(e) => setFormData({ ...formData, cleanupTime: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any additional observations..."
              />
            </div>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Log Poop Entry 💩
          </button>
        </motion.div>
      </form>
    </div>
  )
}