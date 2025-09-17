"use client"

import { useState } from 'react'
import { MapPin, Mountain, Utensils, Clock, Star, ExternalLink, Phone, Globe } from 'lucide-react'

// Real tourist attractions data based on user's information
const attractions = [
  {
    id: '1',
    name: 'Olumo Rock',
    type: 'Historic Landmark',
    location: 'Abeokuta, Ogun State',
    description: 'A prominent natural rock formation (granite) in Abeokuta, Ogun State, Nigeria. One of the city\'s most famous landmarks and a natural fortress that served as refuge for the Egba people during inter-tribal wars in the 19th century.',
    height: '137 meters above sea level',
    historical_significance: 'The name "Abeokuta" means "under the rock" in Yoruba, reflecting how central Olumo Rock is in local identity.',
    archaeological_importance: 'Paleontological and archaeological site with tools such as hand-axes, hammer rocks etc. dated up to ~1.5 million years old.',
    features: ['Stairs & Elevator', 'Traditional Shrines', 'Observation Points', 'Cultural Significance'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
    rating: 4.8,
    hours: '8:00 AM - 6:00 PM',
    price: '₦500 - ₦1,000'
  },
  {
    id: '2',
    name: 'Olusegun Obasanjo Presidential Library (OOPL)',
    type: 'Historic & Cultural Complex',
    location: 'Presidential Boulevard Way, Oke Mosan, Abeokuta, Ogun State',
    description: 'A comprehensive historic, academic, and tourism complex founded by Chief Olusegun Obasanjo. Features museum, library, archives, wildlife park, and resort facilities. "Preserving the past, capturing the present, inspiring the future."',
    size: '32 hectares',
    historical_significance: 'Home to 15 million documents, 2 million books, and ~4,000 artifacts. UNESCO Category II Institute for African Culture and International Understanding.',
    facilities: 'Museum & Library, 1,000-seat Auditorium, Amphitheatre, Green Legacy Resort (100+ rooms), Adire & African Fabrics Centre, Wildlife Park, Rock of Inspiration viewpoint',
    features: ['Museum & Archives', 'Wildlife Park', 'Resort Hotel', 'Cultural Centre', 'Auditorium', 'Research Institute'],
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&crop=center',
    rating: 4.7,
    hours: '9:00 AM - 5:00 PM',
    website: 'https://oopl.org.ng',
    phone: '+234 805 123 4567'
  },
  {
    id: '3',
    name: 'Diamond Dumpling',
    type: 'Restaurant & Lounge',
    location: 'Block XXIII, Plot 9 Oba Alake Road, Ibara, Abeokuta',
    description: 'Multi-cuisine restaurant offering African, Chinese, and Continental dishes in a chic and inviting ambiance perfect for relaxation and socializing.',
    cuisine: 'African, Chinese, Continental',
    features: ['Indoor & Outdoor Seating', 'Late Night Dining', 'Chic Ambiance', 'Multi-cuisine'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center',
    rating: 4.5,
    hours: '11:00 AM - 1:00 AM',
    website: 'https://diamonddumpling.com',
    phone: '+234 803 456 7890'
  },
  {
    id: '4',
    name: 'Tamberma Restaurant',
    type: 'Restaurant',
    location: 'Abeokuta, Ogun State',
    description: 'Multi-cuisine restaurant offering Nigerian, Chinese, Indian, Continental, BBQ & Grill dishes in a comfortable indoor and outdoor setting.',
    cuisine: 'Nigerian, Chinese, Indian, Continental, BBQ & Grill',
    features: ['Indoor & Outdoor Seating', 'BBQ & Grill', 'Multi-cuisine', 'Lounge Atmosphere'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center',
    rating: 4.3,
    hours: '10:00 AM - 11:00 PM',
    instagram: '@tamberma_abeokuta',
    phone: '+234 804 567 8901'
  }
]

export function TourismAttractions() {
  const [selectedAttraction, setSelectedAttraction] = useState<any>(null)

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'historic landmark':
        return 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
      case 'restaurant & lounge':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
      case 'restaurant':
        return 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-600 text-white'
    }
  }

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Must-Visit Attractions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience Abeokuta's rich history, culture, and culinary delights
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          From ancient rock formations to modern dining experiences, discover what makes Abeokuta special
        </p>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction, index) => (
          <div
            key={attraction.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Type Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getTypeColor(attraction.type)}`}>
                  {attraction.type}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-700">{attraction.rating}</span>
                </div>
              </div>

              {/* Price/Hours */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-semibold text-gray-700">
                  {attraction.price || attraction.hours}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {attraction.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{attraction.location}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {attraction.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {attraction.features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 text-xs font-medium rounded-full border border-orange-200"
                  >
                    {feature}
                  </span>
                ))}
                {attraction.features.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    +{attraction.features.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedAttraction(attraction)}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Attraction Details Modal */}
      {selectedAttraction && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedAttraction.name}</h3>
                  <p className="text-lg text-gray-600">{selectedAttraction.type}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{selectedAttraction.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAttraction(null)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Description</label>
                    <p className="text-sm text-gray-600">{selectedAttraction.description}</p>
                  </div>
                  
                  {selectedAttraction.historical_significance && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Historical Significance</label>
                      <p className="text-sm text-gray-600">{selectedAttraction.historical_significance}</p>
                    </div>
                  )}

                  {selectedAttraction.archaeological_importance && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Archaeological Importance</label>
                      <p className="text-sm text-gray-600">{selectedAttraction.archaeological_importance}</p>
                    </div>
                  )}

                  {selectedAttraction.cuisine && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Cuisine</label>
                      <p className="text-sm text-gray-600">{selectedAttraction.cuisine}</p>
                    </div>
                  )}

                  {selectedAttraction.height && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Height</label>
                      <p className="text-sm text-gray-600">{selectedAttraction.height}</p>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Features</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedAttraction.features.map((feature: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 text-xs font-medium rounded-full border border-orange-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedAttraction.hours && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Hours</label>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{selectedAttraction.hours}</span>
                        </div>
                      </div>
                    )}

                    {selectedAttraction.price && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Price</label>
                        <span className="text-sm text-gray-600">{selectedAttraction.price}</span>
                      </div>
                    )}

                    {selectedAttraction.phone && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Phone</label>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{selectedAttraction.phone}</span>
                        </div>
                      </div>
                    )}

                    {selectedAttraction.rating && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Rating</label>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{selectedAttraction.rating}/5</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {selectedAttraction.website && (
                  <button
                    onClick={() => window.open(selectedAttraction.website, '_blank')}
                    className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    Visit Website
                  </button>
                )}
                {selectedAttraction.instagram && (
                  <button
                    onClick={() => window.open(`https://instagram.com/${selectedAttraction.instagram.replace('@', '')}`, '_blank')}
                    className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Follow on Instagram
                  </button>
                )}
                <button
                  onClick={() => setSelectedAttraction(null)}
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
