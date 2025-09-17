"use client"

import { useState, useEffect, useRef } from 'react'
import { MapPin, Building2, Mountain, Utensils, ExternalLink, Navigation, X } from 'lucide-react'

// Combined data for developments and attractions
const mapData = [
  // Real Estate Developments
  {
    id: '1',
    name: 'Sycamore Cottages',
    type: 'development',
    location: 'Kobape, Abeokuta',
    developer: 'LandXpress Real Estate Company',
    status: 'selling',
    price_per_sqm: 5000,
    size_acres: 35,
    description: 'Eco-friendly mixed residential community offering a holiday lifestyle experience',
    lat: 7.1574,
    lng: 3.3481,
    features: ['Eco-friendly', 'Holiday Lifestyle', 'Freehold Title', '35 Acres']
  },
  {
    id: '2',
    name: '2 Seasons (Regenerative Innovation & Lifestyle Village)',
    type: 'development',
    location: 'Kobape, Abeokuta',
    developer: 'Focal Point Property Development & Management Services Ltd.',
    status: 'pre-launch',
    size_acres: 74,
    description: '74-acre regenerative lifestyle city with four distinct zones',
    lat: 7.1584,
    lng: 3.3491,
    features: ['Regenerative City', '4 Zones', 'Tourism Destination', '74 Acres']
  },
  {
    id: '3',
    name: 'Oak Farms Kobape',
    type: 'development',
    location: 'Kobape / Owode axis, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Hybrid land + farming investment product with plots bundled with farm operations and yearly ROI',
    lat: 7.1594,
    lng: 3.3501,
    features: ['Hybrid Investment', 'Farming Operations', 'Yearly ROI', 'Agricultural Focus']
  },
  {
    id: '4',
    name: 'Legend City Estate / Legend City 2.0',
    type: 'development',
    location: 'Kobape, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Residential estate positioned as "live like a legend," marketed for affordability and appreciation',
    lat: 7.1604,
    lng: 3.3511,
    features: ['Affordable Housing', 'High Appreciation', 'First-time Buyers', 'Legend Lifestyle']
  },
  {
    id: '5',
    name: 'Cornwall Bay Estate',
    type: 'development',
    location: 'Kobape, Abeokuta',
    developer: 'Rolad Properties',
    status: 'selling',
    description: 'Residential estate marketed as serene and community-oriented',
    lat: 7.1614,
    lng: 3.3521,
    features: ['Serene Living', 'Community Oriented', 'Family Friendly', 'Peaceful Environment']
  },
  {
    id: '6',
    name: 'Itura Industrial City / Itura Gardens',
    type: 'development',
    location: 'Off Kobape Road',
    developer: 'Wealth Island Properties (WIP Africa)',
    status: 'pre-launch',
    description: 'Industrial and mixed-use land, marketed as "industrial city" close to Ogun industrial corridors',
    lat: 7.1624,
    lng: 3.3531,
    features: ['Industrial Focus', 'Mixed-use', 'Commercial Investment', 'Industrial Corridor']
  },
  {
    id: '7',
    name: 'Greenstone Garden',
    type: 'development',
    location: 'Off Muhammadu Buhari Road / near Governor\'s Estate & Day Waterman College, Kobape',
    developer: 'Lifescape Global Investment, PereGlobal, Ellion Global',
    status: 'selling',
    description: 'Eco-friendly residential plots; peaceful green living with titled documentation',
    lat: 7.1634,
    lng: 3.3541,
    features: ['Eco-friendly', 'Titled Documentation', 'Green Living', 'Sustainable']
  },
  {
    id: '8',
    name: 'FairView Estate',
    type: 'development',
    location: 'Kobape, near Ogun Housing Scheme, Sagamu interchange',
    developer: 'MobRealtyServices',
    status: 'selling',
    description: 'Residential estate with emphasis on proximity to government amenities',
    lat: 7.1644,
    lng: 3.3551,
    features: ['Government Proximity', 'Convenient Location', 'Accessibility', 'Housing Scheme']
  },
  {
    id: '9',
    name: 'Pelican Valley Projects (Pelican\'s Ecostay Apartments)',
    type: 'development',
    location: 'Kobape Road / behind Buckswood British Academy',
    developer: 'Pelican Valley Nigeria Ltd.',
    status: 'under development',
    description: 'Eco-focused housing/apartment projects for locals & diaspora, promoting sustainable investment',
    lat: 7.1654,
    lng: 3.3561,
    features: ['Eco-focused', 'Diaspora Friendly', 'Sustainable Investment', 'Apartments']
  },
  {
    id: '10',
    name: 'Hilltop City Estate',
    type: 'development',
    location: 'Agodo / Off Kobape Road',
    developer: 'Rehoboth Hills International, Newwine Realty',
    status: 'selling',
    description: '"Eco-luxury" residential estate with perimeter fencing, water, road, and security',
    lat: 7.1664,
    lng: 3.3571,
    features: ['Eco-luxury', 'Perimeter Fencing', 'Full Amenities', 'Security']
  },
  {
    id: '11',
    name: 'Infinity Estate',
    type: 'development',
    location: 'Agodo Village, Off Kobape Road',
    developer: 'Infinity Estate Homes (Property Links Global)',
    status: 'pre-launch',
    description: 'Residential plots, pre-launch pricing, close to Ogun Tech Hub',
    lat: 7.1674,
    lng: 3.3581,
    features: ['Pre-launch Pricing', 'Tech Hub Proximity', 'Early Investment', 'Residential Plots']
  },
  {
    id: '12',
    name: 'Green City (Mini-City Concept)',
    type: 'development',
    location: 'Kobape (marketed in social posts)',
    developer: 'Broker/consortium-driven',
    status: 'pre-launch',
    size_acres: 200,
    description: 'Mixed residential + agricultural "mini-city" on ~200 acres',
    lat: 7.1684,
    lng: 3.3591,
    features: ['Mini-City Concept', '200 Acres', 'Mixed-use', 'Large-scale Investment']
  },
  // Tourist Attractions
  {
    id: '13',
    name: 'Olumo Rock',
    type: 'attraction',
    location: 'Abeokuta, Ogun State',
    description: 'Historic granite rock formation, 137m high, with cultural and archaeological significance',
    lat: 7.1550,
    lng: 3.3450,
    features: ['Historic Landmark', '137m High', 'Cultural Site', 'Archaeological Site'],
    rating: 4.8,
    hours: '8:00 AM - 6:00 PM'
  },
  {
    id: '14',
    name: 'Olusegun Obasanjo Presidential Library (OOPL)',
    type: 'attraction',
    location: 'Presidential Boulevard Way, Oke Mosan, Abeokuta, Ogun State',
    description: 'Comprehensive historic, academic, and tourism complex with museum, library, wildlife park, and resort facilities',
    lat: 7.1530,
    lng: 3.3430,
    features: ['Museum & Archives', 'Wildlife Park', 'Resort Hotel', 'Cultural Centre', 'Auditorium', 'Research Institute'],
    rating: 4.7,
    hours: '9:00 AM - 5:00 PM'
  },
  {
    id: '15',
    name: 'Diamond Dumpling',
    type: 'restaurant',
    location: 'Block XXIII, Plot 9 Oba Alake Road, Ibara, Abeokuta',
    description: 'Multi-cuisine restaurant offering African, Chinese, and Continental dishes',
    lat: 7.1520,
    lng: 3.3420,
    features: ['Multi-cuisine', 'Indoor & Outdoor', 'Late Night', 'Chic Ambiance'],
    rating: 4.5,
    hours: '11:00 AM - 1:00 AM'
  },
  {
    id: '16',
    name: 'Tamberma Restaurant',
    type: 'restaurant',
    location: 'Abeokuta, Ogun State',
    description: 'Multi-cuisine restaurant offering Nigerian, Chinese, Indian, Continental, BBQ & Grill',
    lat: 7.1500,
    lng: 3.3400,
    features: ['Multi-cuisine', 'BBQ & Grill', 'Lounge', 'Indoor & Outdoor'],
    rating: 4.3,
    hours: '10:00 AM - 11:00 PM'
  }
]

export function TourismMapView() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [filterType, setFilterType] = useState('all')

  useEffect(() => {
    const initMap = async () => {
      if (mapRef.current && !mapLoaded) {
        try {
          console.log('Initializing map...')
          // Dynamic import of MapTiler GL
          const maplibregl = await import('maplibre-gl')
          console.log('MapLibre GL loaded successfully')
          
          const map = new maplibregl.Map({
            container: mapRef.current,
            style: process.env.NEXT_PUBLIC_MAPTILER_STYLE_URL || 'https://api.maptiler.com/maps/streets-v2/style.json?key=Pd85kmLr2NsBZ7APc3eK',
            center: [3.3450, 7.1550], // [lng, lat] for Abeokuta
            zoom: 12
          })

          console.log('Map created, adding controls...')
          // Add navigation controls
          map.addControl(new maplibregl.NavigationControl(), 'top-right')

          // Wait for map to load before adding markers
          map.on('load', () => {
            console.log('Map loaded, adding markers...')
            setMapLoaded(true)
            
            // Add markers for each item
            mapData.forEach((item, index) => {
              console.log(`Adding marker ${index + 1}: ${item.name}`)
              // Create a custom marker element
              const markerElement = document.createElement('div')
              markerElement.className = 'custom-marker'
              
              // Different icons for different types
              let iconColor = 'from-green-600 to-blue-600'
              let iconSvg = `<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>`
              
              if (item.type === 'attraction') {
                iconColor = 'from-orange-600 to-red-600'
                iconSvg = `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`
              } else if (item.type === 'restaurant') {
                iconColor = 'from-blue-600 to-cyan-600'
                iconSvg = `<path d="M3 2h18l-2 18H5L3 2zm2.2 2l1.6 14h8.4l1.6-14H5.2z"/>`
              }

              markerElement.innerHTML = `
                <div class="w-12 h-12 bg-gradient-to-r ${iconColor} rounded-full border-4 border-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    ${iconSvg}
                  </svg>
                </div>
              `

              // Add click event to marker
              markerElement.addEventListener('click', () => {
                setSelectedItem(item)
              })

              // Create marker
              new maplibregl.Marker(markerElement)
                .setLngLat([item.lng, item.lat])
                .addTo(map)
            })
            console.log('All markers added successfully')
          })

          map.on('error', (e) => {
            console.error('Map error:', e)
          })

        } catch (error) {
          console.error('Error loading MapTiler:', error)
          // Fallback to OpenStreetMap
          try {
            console.log('Trying OpenStreetMap fallback...')
            const maplibregl = await import('maplibre-gl')
            
            const map = new maplibregl.Map({
              container: mapRef.current,
              style: {
                version: 8,
                sources: {
                  'osm': {
                    type: 'raster',
                    tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    attribution: '© OpenStreetMap contributors'
                  }
                },
                layers: [
                  {
                    id: 'osm',
                    type: 'raster',
                    source: 'osm'
                  }
                ]
              },
              center: [3.3450, 7.1550],
              zoom: 12
            })

            map.addControl(new maplibregl.NavigationControl(), 'top-right')
            setMapLoaded(true)
            console.log('OpenStreetMap fallback loaded successfully')
          } catch (fallbackError) {
            console.error('Fallback map also failed:', fallbackError)
            setMapLoaded(true)
          }
        }
      }
    }

    initMap()
  }, [mapLoaded])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'development':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
      case 'attraction':
        return 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
      case 'restaurant':
        return 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-600 text-white'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'development':
        return Building2
      case 'attraction':
        return Mountain
      case 'restaurant':
        return Utensils
      default:
        return MapPin
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

  const filteredData = filterType === 'all' ? mapData : mapData.filter(item => item.type === filterType)

  return (
    <div className="relative h-full">
      {/* Map Container */}
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-green-50"
      >
        {!mapLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto animate-ping opacity-20"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Loading Interactive Map
                </h3>
                <p className="text-gray-600">
                  Discovering Abeokuta's real estate and attractions
                </p>
                <div className="text-sm text-gray-500">
                  Coordinates: 7.1550°N, 3.3450°E
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter Controls */}
      <div className="absolute top-6 left-6">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Filter by Type</h3>
          <div className="space-y-2">
            {[
              { id: 'all', label: 'All', icon: MapPin },
              { id: 'development', label: 'Real Estate', icon: Building2 },
              { id: 'attraction', label: 'Attractions', icon: Mountain },
              { id: 'restaurant', label: 'Restaurants', icon: Utensils }
            ].map((filter) => {
              const Icon = filter.icon
              return (
                <button
                  key={filter.id}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    filterType === filter.id
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-600 hover:bg-white/80'
                  }`}
                  onClick={() => setFilterType(filter.id)}
                >
                  <Icon className="h-4 w-4" />
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="absolute top-6 right-6 w-80 max-h-96 overflow-y-auto">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            {filterType === 'all' ? 'All Locations' : `${filterType.charAt(0).toUpperCase() + filterType.slice(1)}s`}
          </h3>
          <div className="space-y-3">
            {filteredData.map((item) => {
              const Icon = getTypeIcon(item.type)
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedItem?.id === item.id
                      ? 'bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-gray-600" />
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {item.location}
                  </div>
                  {item.price_per_sqm && (
                    <div className="text-sm font-semibold text-green-600">
                      {formatCurrency(item.price_per_sqm)}/sqm
                    </div>
                  )}
                  {item.rating && (
                    <div className="text-sm text-gray-500">
                      ⭐ {item.rating}/5
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Selected Item Details */}
      {selectedItem && (
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = getTypeIcon(selectedItem.type)
                  return <Icon className="h-6 w-6 text-gray-600" />
                })()}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedItem.name}</h3>
                  <p className="text-sm text-gray-600">{selectedItem.location}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">{selectedItem.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedItem.features.map((feature: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-xs font-medium rounded-full border border-green-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-sm">
                  <ExternalLink className="h-3 w-3 inline mr-1" />
                  View Details
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
                  <Navigation className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
        © MapTiler © OpenStreetMap contributors
      </div>
    </div>
  )
}
