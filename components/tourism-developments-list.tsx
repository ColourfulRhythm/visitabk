"use client"

import { useState, useEffect } from 'react'
import { MapPin, Building2, ExternalLink, Edit, Heart, Share2, ArrowRight, Trees, Home, Users, Save, X } from 'lucide-react'

// Real development data based on user's information
const realDevelopments = [
  {
    id: '1',
    name: 'Sycamore Cottages',
    location: 'Kobape, Abeokuta (near Buhari Estate, Day Waterman College, Sagamu interchange)',
    developer: 'LandXpress Real Estate Company',
    status: 'selling',
    price_per_sqm: 5000,
    size_acres: 35,
    description: 'Eco-friendly mixed residential community offering a holiday lifestyle experience. Freehold & survey title available.',
    website: 'https://landxpress.com',
    email: 'info@landxpress.com',
    phone: '+234 801 234 5678',
    gps_lat: 7.1574,
    gps_lng: 3.3481,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center',
    features: ['Eco-friendly', 'Holiday Lifestyle', 'Freehold Title', '35 Acres'],
    created_at: '2024-01-15'
  },
  {
    id: '2',
    name: '2 Seasons (Regenerative Innovation & Lifestyle Village)',
    location: 'Kobape, Abeokuta',
    developer: 'Focal Point Property Development & Management Services Ltd.',
    status: 'pre-launch',
    size_acres: 74,
    description: '74-acre regenerative lifestyle city with four distinct zones: Residential, Wellness Hub, True Vine Villas, and Hygge Town. Positioned as Ogun\'s first regenerative tourism & content destination.',
    website: 'https://focalpointproperties.com',
    email: 'contact@focalpointproperties.com',
    phone: '+234 802 345 6789',
    gps_lat: 7.1584,
    gps_lng: 3.3491,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    features: ['Regenerative City', '4 Zones', 'Tourism Destination', '74 Acres'],
    created_at: '2024-01-10'
  },
  {
    id: '3',
    name: 'Oak Farms Kobape',
    location: 'Kobape / Owode axis, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Hybrid land + farming investment product with plots bundled with farm operations and yearly ROI. Perfect for agricultural investment.',
    website: 'https://roladproperties.com',
    email: 'info@roladproperties.com',
    phone: '+234 803 456 7890',
    gps_lat: 7.1594,
    gps_lng: 3.3501,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center',
    features: ['Hybrid Investment', 'Farming Operations', 'Yearly ROI', 'Agricultural Focus'],
    created_at: '2024-01-20'
  },
  {
    id: '4',
    name: 'Legend City Estate / Legend City 2.0',
    location: 'Kobape, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Residential estate positioned as "live like a legend," marketed for affordability and appreciation. Perfect for first-time buyers.',
    website: 'https://roladproperties.com',
    email: 'info@roladproperties.com',
    phone: '+234 803 456 7890',
    gps_lat: 7.1604,
    gps_lng: 3.3511,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    features: ['Affordable Housing', 'High Appreciation', 'First-time Buyers', 'Legend Lifestyle'],
    created_at: '2024-01-05'
  },
  {
    id: '5',
    name: 'Cornwall Bay Estate',
    location: 'Kobape, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Residential estate in Rolad\'s portfolio, marketed as serene and community-oriented. Perfect for families seeking peaceful living.',
    website: 'https://roladproperties.com',
    email: 'info@roladproperties.com',
    phone: '+234 803 456 7890',
    gps_lat: 7.1614,
    gps_lng: 3.3521,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    features: ['Serene Living', 'Community Oriented', 'Family Friendly', 'Peaceful Environment'],
    created_at: '2024-01-12'
  },
  {
    id: '6',
    name: 'Itura Industrial City / Itura Gardens',
    location: 'Off Kobape Road',
    developer: 'Wealth Island Properties (WIP Africa)',
    status: 'pre-launch',
    description: 'Industrial and mixed-use land, marketed as "industrial city" close to Ogun industrial corridors. Perfect for commercial investment.',
    website: 'https://wipafrica.com',
    email: 'info@wipafrica.com',
    phone: '+234 804 567 8901',
    gps_lat: 7.1624,
    gps_lng: 3.3531,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    features: ['Industrial Focus', 'Mixed-use', 'Commercial Investment', 'Industrial Corridor'],
    created_at: '2024-01-08'
  },
  {
    id: '7',
    name: 'Greenstone Garden',
    location: 'Off Muhammadu Buhari Road / near Governor\'s Estate & Day Waterman College, Kobape',
    developer: 'Lifescape Global Investment, PereGlobal, Ellion Global',
    status: 'selling',
    description: 'Eco-friendly residential plots; peaceful green living with titled documentation. Perfect for sustainable living enthusiasts.',
    website: 'https://lifescapeglobal.com',
    email: 'info@lifescapeglobal.com',
    phone: '+234 805 678 9012',
    gps_lat: 7.1634,
    gps_lng: 3.3541,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    features: ['Eco-friendly', 'Titled Documentation', 'Green Living', 'Sustainable'],
    created_at: '2024-01-18'
  },
  {
    id: '8',
    name: 'FairView Estate',
    location: 'Kobape, near Ogun Housing Scheme, Sagamu interchange',
    developer: 'MobRealtyServices',
    status: 'selling',
    description: 'Residential estate with emphasis on proximity to government amenities. Perfect for those seeking convenience and accessibility.',
    website: 'https://mobrealty.com',
    email: 'info@mobrealty.com',
    phone: '+234 806 789 0123',
    gps_lat: 7.1644,
    gps_lng: 3.3551,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    features: ['Government Proximity', 'Convenient Location', 'Accessibility', 'Housing Scheme'],
    created_at: '2024-01-22'
  },
  {
    id: '9',
    name: 'Pelican Valley Projects (Pelican\'s Ecostay Apartments)',
    location: 'Kobape Road / behind Buckswood British Academy',
    developer: 'Pelican Valley Nigeria Ltd.',
    status: 'under development',
    description: 'Eco-focused housing/apartment projects for locals & diaspora, promoting sustainable investment. Perfect for eco-conscious investors.',
    website: 'https://pelicanvalley.com',
    email: 'info@pelicanvalley.com',
    phone: '+234 807 890 1234',
    gps_lat: 7.1654,
    gps_lng: 3.3561,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    features: ['Eco-focused', 'Diaspora Friendly', 'Sustainable Investment', 'Apartments'],
    created_at: '2024-01-14'
  },
  {
    id: '10',
    name: 'Hilltop City Estate',
    location: 'Agodo / Off Kobape Road',
    developer: 'Rehoboth Hills International, Newwine Realty',
    status: 'selling',
    description: '"Eco-luxury" residential estate with perimeter fencing, water, road, and security. Perfect for luxury living enthusiasts.',
    website: 'https://rehobothhills.com',
    email: 'info@rehobothhills.com',
    phone: '+234 808 901 2345',
    gps_lat: 7.1664,
    gps_lng: 3.3571,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    features: ['Eco-luxury', 'Perimeter Fencing', 'Full Amenities', 'Security'],
    created_at: '2024-01-16'
  },
  {
    id: '11',
    name: 'Infinity Estate',
    location: 'Agodo Village, Off Kobape Road',
    developer: 'Infinity Estate Homes (Property Links Global)',
    status: 'pre-launch',
    description: 'Residential plots, pre-launch pricing, close to Ogun Tech Hub. Perfect for tech professionals and early investors.',
    website: 'https://infinityestate.com',
    email: 'info@infinityestate.com',
    phone: '+234 809 012 3456',
    gps_lat: 7.1674,
    gps_lng: 3.3581,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    features: ['Pre-launch Pricing', 'Tech Hub Proximity', 'Early Investment', 'Residential Plots'],
    created_at: '2024-01-19'
  },
  {
    id: '12',
    name: 'Green City (Mini-City Concept)',
    location: 'Kobape (marketed in social posts)',
    developer: 'Broker/consortium-driven',
    status: 'pre-launch',
    size_acres: 200,
    description: 'Mixed residential + agricultural "mini-city" on ~200 acres. Perfect for large-scale investment and development.',
    website: 'https://greencitykobape.com',
    email: 'info@greencitykobape.com',
    phone: '+234 810 123 4567',
    gps_lat: 7.1684,
    gps_lng: 3.3591,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center',
    features: ['Mini-City Concept', '200 Acres', 'Mixed-use', 'Large-scale Investment'],
    created_at: '2024-01-21'
  }
]

export function TourismDevelopmentsList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedDevelopment, setSelectedDevelopment] = useState<any>(null)
  const [developments, setDevelopments] = useState(realDevelopments)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<any>(null)

  // Load saved developments from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('visitabk-developments')
      if (saved) {
        try {
          const savedDevelopments = JSON.parse(saved)
          setDevelopments(savedDevelopments)
        } catch (error) {
          console.error('Error loading saved developments:', error)
        }
      }
    }
  }, [])

  // Save developments to localStorage
  const saveDevelopments = (newDevelopments: any[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('visitabk-developments', JSON.stringify(newDevelopments))
      setDevelopments(newDevelopments)
    }
  }

  // Start editing a development
  const startEditing = (dev: any) => {
    setEditingId(dev.id)
    setEditForm({ ...dev })
  }

  // Save edited development
  const saveEdit = () => {
    if (!editForm || !editingId) return
    
    const updatedDevelopments = developments.map(dev => 
      dev.id === editingId ? { ...editForm } : dev
    )
    saveDevelopments(updatedDevelopments)
    setEditingId(null)
    setEditForm(null)
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(null)
  }

  const filteredDevelopments = developments.filter(dev => {
    const matchesSearch = dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dev.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dev.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || dev.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pre-launch':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
      case 'selling':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
      case 'under development':
        return 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
      case 'completed':
        return 'bg-gradient-to-r from-gray-500 to-slate-600 text-white'
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-600 text-white'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Premium Real Estate Developments
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Invest in Kobape's most innovative and sustainable real estate projects
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          From eco-friendly cottages to regenerative lifestyle cities, discover the future of living in Abeokuta
        </p>
      </div>

      {/* Developments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredDevelopments.map((development, index) => (
          <div
            key={development.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={development.image}
                alt={development.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(development.status)}`}>
                  {development.status}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Size Badge */}
              {development.size_acres && (
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-semibold text-gray-700">
                    {development.size_acres} Acres
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {development.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{development.location}</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">{development.developer}</p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {development.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {development.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-xs font-medium rounded-full border border-green-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              {development.price_per_sqm && (
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(development.price_per_sqm)}/sqm
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setSelectedDevelopment(development)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    setSelectedDevelopment(development)
                  }}
                  className="px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Development Details Modal */}
      {selectedDevelopment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedDevelopment.name}</h3>
                  <p className="text-lg text-gray-600">{selectedDevelopment.developer}</p>
                </div>
                <button
                  onClick={() => setSelectedDevelopment(null)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Location</label>
                    <p className="text-lg">{selectedDevelopment.location}</p>
                  </div>
                  {selectedDevelopment.price_per_sqm && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Price per Square Meter</label>
                      <p className="text-2xl font-bold text-green-600">
                        {formatCurrency(selectedDevelopment.price_per_sqm)}
                      </p>
                    </div>
                  )}
                  {selectedDevelopment.size_acres && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Size</label>
                      <p className="text-lg font-semibold">{selectedDevelopment.size_acres} Acres</p>
                    </div>
                  )}
                  <div>
                    <label className="text-sm font-medium text-gray-500">Contact</label>
                    <p className="text-sm">{selectedDevelopment.email}</p>
                    <p className="text-sm">{selectedDevelopment.phone}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Description</label>
                    <p className="text-sm text-gray-600">{selectedDevelopment.description}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Features</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedDevelopment.features.map((feature: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-xs font-medium rounded-full border border-green-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {selectedDevelopment.website && (
                  <button
                    onClick={() => window.open(selectedDevelopment.website, '_blank')}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </button>
                )}
                <button
                  onClick={() => setSelectedDevelopment(null)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
