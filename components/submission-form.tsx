"use client"

import { useState } from 'react'
import { Send, Plus, X, Building2, Mountain, Utensils, MapPin } from 'lucide-react'

interface SubmissionFormProps {
  onClose: () => void
  isModal?: boolean
}

export function SubmissionForm({ onClose, isModal = true }: SubmissionFormProps) {
  const [formData, setFormData] = useState({
    type: 'development', // development, attraction, restaurant
    name: '',
    location: '',
    developer: '',
    description: '',
    website: '',
    email: '',
    phone: '',
    features: '',
    submitter_name: '',
    submitter_email: '',
    submitter_phone: '',
    additional_info: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create email content
      const emailContent = `
New ${formData.type} submission from VisitABK:

=== ${formData.type.toUpperCase()} INFORMATION ===
Name: ${formData.name}
Location: ${formData.location}
${formData.type === 'development' ? `Developer: ${formData.developer}` : ''}
Description: ${formData.description}
Website: ${formData.website || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Features: ${formData.features || 'Not provided'}

=== SUBMITTER INFORMATION ===
Name: ${formData.submitter_name}
Email: ${formData.submitter_email}
Phone: ${formData.submitter_phone || 'Not provided'}

=== ADDITIONAL INFORMATION ===
${formData.additional_info || 'None provided'}

---
Submitted via VisitABK website
Date: ${new Date().toLocaleString()}
      `

      // Use mailto for now (can be upgraded to a proper email service later)
      const subject = `New ${formData.type} submission: ${formData.name}`
      const mailtoLink = `mailto:godunderGod100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`
      
      window.open(mailtoLink, '_blank')
      
      setSubmitted(true)
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={isModal ? "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" : "flex items-center justify-center p-4"}>
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Submission Sent!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for your submission. Your {formData.type} information has been sent for review.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700 transition-colors"
          >
            {isModal ? 'Close' : 'Back to Home'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={isModal ? "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" : ""}>
      <div className={isModal ? "bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" : "bg-white rounded-3xl p-8 w-full shadow-2xl"}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Submit New Listing</h2>
              <p className="text-gray-600">Add a development, attraction, or restaurant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: 'development', icon: Building2, label: 'Development' },
                { value: 'attraction', icon: Mountain, label: 'Attraction' },
                { value: 'restaurant', icon: Utensils, label: 'Restaurant' }
              ].map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: value })}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    formData.type === value
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${
                    formData.type === value ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <div className={`text-sm font-medium ${
                    formData.type === value ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder={`${formData.type} name`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Address or area in Abeokuta"
              />
            </div>
          </div>

          {formData.type === 'development' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Developer/Company</label>
              <input
                type="text"
                name="developer"
                value={formData.developer}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Developer or company name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder={`Describe the ${formData.type}...`}
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="contact@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="+234..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Key Features</label>
            <input
              type="text"
              name="features"
              value={formData.features}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Separate features with commas (e.g., Eco-friendly, Luxury, Waterfront)"
            />
          </div>

          {/* Submitter Information */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="submitter_name"
                  required
                  value={formData.submitter_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                <input
                  type="email"
                  name="submitter_email"
                  required
                  value={formData.submitter_email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone</label>
                <input
                  type="tel"
                  name="submitter_phone"
                  value={formData.submitter_phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+234..."
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
            <textarea
              name="additional_info"
              rows={3}
              value={formData.additional_info}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Any additional details you'd like to share..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Submit for Review
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
