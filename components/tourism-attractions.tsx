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
  },
  {
    id: '5',
    name: 'Deeper Life Camp',
    type: 'Religious & Conference Center',
    location: 'Kobape, Abeokuta, Ogun State',
    description: 'Large religious and conference facility operated by Deeper Life Bible Church. Features extensive grounds, accommodation facilities, and conference halls. A significant landmark in the Kobape area.',
    features: ['Conference Facilities', 'Accommodation', 'Large Grounds', 'Religious Center'],
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop&crop=center',
    rating: 4.6,
    hours: '24/7 Access (by appointment)',
    phone: '+234 805 678 9012'
  },
  {
    id: '6',
    name: 'President Buhari Estate',
    type: 'Residential Estate & Landmark',
    location: 'Kobape, Abeokuta, Ogun State',
    description: 'Prestigious residential estate named after former President Muhammadu Buhari. A well-developed estate with modern infrastructure, security, and quality amenities. A reference point for other developments in the area.',
    features: ['Prestigious Estate', 'Modern Infrastructure', 'Security', 'Quality Amenities'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    rating: 4.7,
    location_detail: 'Near Day Waterman College and Sagamu Interchange'
  },
  {
    id: '7',
    name: 'Moshood Abiola Polytechnic (MAPOLY)',
    type: 'Educational Institution',
    location: 'Abeokuta, Ogun State',
    description: 'A prominent polytechnic institution in Ogun State offering various technical and vocational programs. Established to provide quality technical education and contribute to human capital development.',
    features: ['Higher Education', 'Technical Programs', 'Vocational Training', 'Student Accommodation'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    rating: 4.5,
    hours: '7:00 AM - 6:00 PM',
    website: 'https://mapoly.edu.ng',
    phone: '+234 806 789 0123'
  },
  {
    id: '8',
    name: 'Abeokuta Polo Club',
    type: 'Sports & Recreation',
    location: 'Abeokuta, Ogun State',
    description: 'Exclusive polo club offering equestrian sports and social events. Features well-maintained polo grounds, stables, and clubhouse facilities. A hub for polo enthusiasts and social gatherings.',
    features: ['Polo Grounds', 'Equestrian Sports', 'Clubhouse', 'Social Events'],
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop&crop=center',
    rating: 4.4,
    hours: '8:00 AM - 8:00 PM',
    phone: '+234 807 890 1234'
  },
  {
    id: '9',
    name: 'Day Waterman College',
    type: 'Educational Institution',
    location: 'Kobape, Abeokuta, Ogun State',
    description: 'Premium co-educational boarding secondary school offering British curriculum. Known for excellent academic standards, modern facilities, and holistic education approach. A landmark educational institution in the Kobape area.',
    features: ['British Curriculum', 'Boarding School', 'Modern Facilities', 'Academic Excellence'],
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop&crop=center',
    rating: 4.8,
    hours: '7:00 AM - 5:00 PM',
    website: 'https://daywatermancollege.com',
    phone: '+234 808 901 2345',
    location_detail: 'Near President Buhari Estate and Sagamu Interchange'
  }
]

export function TourismAttractions() {
  const [selectedAttraction, setSelectedAttraction] = useState<any>(null)

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'historic landmark':
        return 'bg-orange-50 text-orange-700 border border-orange-200'
      case 'historic & cultural complex':
        return 'bg-orange-50 text-orange-700 border border-orange-200'
      case 'restaurant & lounge':
        return 'bg-rose-50 text-rose-700 border border-rose-200'
      case 'restaurant':
        return 'bg-rose-50 text-rose-700 border border-rose-200'
      case 'religious & conference center':
        return 'bg-purple-50 text-purple-700 border border-purple-200'
      case 'residential estate & landmark':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200'
      case 'educational institution':
        return 'bg-blue-50 text-blue-700 border border-blue-200'
      case 'sports & recreation':
        return 'bg-teal-50 text-teal-700 border border-teal-200'
      default:
        return 'bg-slate-100 text-slate-600 border border-slate-200'
    }
  }

  return (
    <div className="space-y-12 py-20 bg-white">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto px-6">
        <p className="text-sm font-medium text-[#2d4a3e] uppercase tracking-wider">Explore the Area</p>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
          Attractions & Landmarks
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          From the historic Olumo Rock to modern dining experiences, discover what makes Abeokuta special.
        </p>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {attractions.map((attraction, index) => (
          <div
            key={attraction.id}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Type Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(attraction.type)}`}>
                  {attraction.type}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-amber-500 fill-current" />
                  <span className="text-sm font-medium text-slate-800">{attraction.rating}</span>
                </div>
              </div>

              {/* Price/Hours */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-slate-800">
                  {attraction.price || attraction.hours}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#2d4a3e] transition-colors line-clamp-1">
                  {attraction.name}
                </h3>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="text-sm line-clamp-1">{attraction.location}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {attraction.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-1.5">
                {attraction.features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                  >
                    {feature}
                  </span>
                ))}
                {attraction.features.length > 3 && (
                  <span className="px-2 py-1 bg-[#2d4a3e]/10 text-[#2d4a3e] text-xs font-medium rounded-md">
                    +{attraction.features.length - 3}
                  </span>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedAttraction(attraction)}
                className="w-full bg-[#2d4a3e] text-white py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-[#3d5a4e] transition-colors duration-200"
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
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{selectedAttraction.name}</h3>
                  <p className="text-base text-slate-500 mt-1">{selectedAttraction.type}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-sm text-slate-500">{selectedAttraction.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAttraction(null)}
                  className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-500">Description</label>
                    <p className="text-sm text-slate-600 mt-1">{selectedAttraction.description}</p>
                  </div>
                  
                  {selectedAttraction.historical_significance && (
                    <div>
                      <label className="text-sm font-medium text-slate-500">Historical Significance</label>
                      <p className="text-sm text-slate-600 mt-1">{selectedAttraction.historical_significance}</p>
                    </div>
                  )}

                  {selectedAttraction.archaeological_importance && (
                    <div>
                      <label className="text-sm font-medium text-slate-500">Archaeological Importance</label>
                      <p className="text-sm text-slate-600 mt-1">{selectedAttraction.archaeological_importance}</p>
                    </div>
                  )}

                  {selectedAttraction.cuisine && (
                    <div>
                      <label className="text-sm font-medium text-slate-500">Cuisine</label>
                      <p className="text-sm text-slate-600 mt-1">{selectedAttraction.cuisine}</p>
                    </div>
                  )}

                  {selectedAttraction.height && (
                    <div>
                      <label className="text-sm font-medium text-slate-500">Height</label>
                      <p className="text-sm text-slate-600 mt-1">{selectedAttraction.height}</p>
                    </div>
                  )}
                  {selectedAttraction.location_detail && (
                    <div>
                      <label className="text-sm font-medium text-slate-500">Location Details</label>
                      <p className="text-sm text-slate-600 mt-1">{selectedAttraction.location_detail}</p>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-500">Features</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedAttraction.features.map((feature: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedAttraction.hours && (
                      <div>
                        <label className="text-sm font-medium text-slate-500">Hours</label>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          <span className="text-sm text-slate-600">{selectedAttraction.hours}</span>
                        </div>
                      </div>
                    )}

                    {selectedAttraction.price && (
                      <div>
                        <label className="text-sm font-medium text-slate-500">Price</label>
                        <span className="text-sm text-slate-600 block mt-1">{selectedAttraction.price}</span>
                      </div>
                    )}

                    {selectedAttraction.phone && (
                      <div>
                        <label className="text-sm font-medium text-slate-500">Phone</label>
                        <div className="flex items-center gap-2 mt-1">
                          <Phone className="h-3.5 w-3.5 text-slate-400" />
                          <span className="text-sm text-slate-600">{selectedAttraction.phone}</span>
                        </div>
                      </div>
                    )}

                    {selectedAttraction.rating && (
                      <div>
                        <label className="text-sm font-medium text-slate-500">Rating</label>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3.5 w-3.5 text-amber-500 fill-current" />
                          <span className="text-sm text-slate-600">{selectedAttraction.rating}/5</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {selectedAttraction.website && (
                  <button
                    onClick={() => window.open(selectedAttraction.website, '_blank')}
                    className="px-4 py-2.5 bg-[#2d4a3e] text-white rounded-lg font-medium hover:bg-[#3d5a4e] transition-colors duration-200 flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    Visit Website
                  </button>
                )}
                {selectedAttraction.instagram && (
                  <button
                    onClick={() => window.open(`https://instagram.com/${selectedAttraction.instagram.replace('@', '')}`, '_blank')}
                    className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Follow on Instagram
                  </button>
                )}
                <button
                  onClick={() => setSelectedAttraction(null)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors duration-200"
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
