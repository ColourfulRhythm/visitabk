"use client"

import { useState } from 'react'
import { MapPin, Building2, ExternalLink, Edit, Heart, Share2, ArrowRight } from 'lucide-react'

// Mock data
const mockDevelopments = [
  {
    id: '1',
    name: 'Oak Farms Estate',
    location: 'Kobape, Abeokuta',
    developer: 'Oak Properties Ltd',
    status: 'selling',
    price_min: 1500000,
    price_max: 3500000,
    description: 'Premium residential estate with modern amenities and excellent facilities',
    website: 'https://oakfarms.com',
    instagram: '@oakfarms',
    email: 'info@oakfarms.com',
    phone: '+234 801 234 5678',
    gps_lat: 7.1574,
    gps_lng: 3.3481,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center',
    created_at: '2024-01-15'
  },
  {
    id: '2',
    name: 'Legend City',
    location: 'Kobape, Abeokuta',
    developer: 'Legend Properties',
    status: 'under development',
    price_min: 2000000,
    price_max: 5000000,
    description: 'Mixed-use development with commercial and residential units',
    website: 'https://legendcity.com',
    instagram: '@legendcity',
    email: 'contact@legendcity.com',
    phone: '+234 802 345 6789',
    gps_lat: 7.1584,
    gps_lng: 3.3491,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    created_at: '2024-01-10'
  },
  {
    id: '3',
    name: 'Cornwall Bay',
    location: 'Kobape, Abeokuta',
    developer: 'Cornwall Developments',
    status: 'pre-launch',
    price_min: 1800000,
    price_max: 4000000,
    description: 'Waterfront luxury estate with lake views and premium amenities',
    website: 'https://cornwallbay.com',
    instagram: '@cornwallbay',
    email: 'info@cornwallbay.com',
    phone: '+234 803 456 7890',
    gps_lat: 7.1594,
    gps_lng: 3.3501,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=center',
    created_at: '2024-01-20'
  },
  {
    id: '4',
    name: 'Greenstone Garden',
    location: 'Kobape, Abeokuta',
    developer: 'Greenstone Properties',
    status: 'completed',
    price_min: 1200000,
    price_max: 2800000,
    description: 'Eco-friendly residential community with sustainable building practices',
    website: 'https://greenstonegarden.com',
    instagram: '@greenstonegarden',
    email: 'hello@greenstonegarden.com',
    phone: '+234 804 567 8901',
    gps_lat: 7.1604,
    gps_lng: 3.3511,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=center',
    created_at: '2024-01-05'
  },
  {
    id: '5',
    name: 'FairView Estate',
    location: 'Kobape, Abeokuta',
    developer: 'FairView Homes',
    status: 'selling',
    price_min: 1600000,
    price_max: 3200000,
    description: 'Family-oriented community with excellent facilities and security',
    website: 'https://fairviewestate.com',
    instagram: '@fairviewestate',
    email: 'sales@fairviewestate.com',
    phone: '+234 805 678 9012',
    gps_lat: 7.1614,
    gps_lng: 3.3521,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    created_at: '2024-01-12'
  }
]

export function FramerDevelopmentsList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedDevelopment, setSelectedDevelopment] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<any>({})
  const [developments, setDevelopments] = useState(mockDevelopments)

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
          Featured Developments
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the finest real estate projects in Kobape, Abeokuta
        </p>
      </div>

      {/* Developments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDevelopments.map((development, index) => (
          <div
            key={development.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={development.image}
                alt={development.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(development.status)}`}>
                  {development.status}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {development.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{development.location}</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">{development.developer}</p>
              </div>

              <p className="text-gray-600 line-clamp-2 leading-relaxed">
                {development.description}
              </p>

              <div className="space-y-3">
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(development.price_min)} - {formatCurrency(development.price_max)}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedDevelopment(development)}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedDevelopment(development)
                      setIsEditing(true)
                      setEditData({ ...development })
                    }}
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
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
                  <div>
                    <label className="text-sm font-medium text-gray-500">Price Range</label>
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(selectedDevelopment.price_min)} - {formatCurrency(selectedDevelopment.price_max)}
                    </p>
                  </div>
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
                    <label className="text-sm font-medium text-gray-500">Website</label>
                    {selectedDevelopment.website ? (
                      <a href={selectedDevelopment.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                        {selectedDevelopment.website}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-400">Not provided</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedDevelopment(null)
                    setIsEditing(true)
                    setEditData({ ...selectedDevelopment })
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Edit Development
                </button>
                {selectedDevelopment.website && (
                  <button
                    onClick={() => window.open(selectedDevelopment.website, '_blank')}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
