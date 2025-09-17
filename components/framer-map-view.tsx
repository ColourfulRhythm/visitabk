"use client"

import { useState, useEffect, useRef } from 'react'
import { MapPin, Building2, ExternalLink, Navigation, X } from 'lucide-react'

// Mock development data
const mockDevelopments = [
  {
    id: '1',
    name: 'Oak Farms Estate',
    location: 'Kobape, Abeokuta',
    developer: 'Oak Properties Ltd',
    status: 'selling',
    price_min: 1500000,
    price_max: 3500000,
    lat: 7.1574,
    lng: 3.3481,
    description: 'Premium residential estate with modern amenities'
  },
  {
    id: '2',
    name: 'Legend City',
    location: 'Kobape, Abeokuta',
    developer: 'Legend Properties',
    status: 'under development',
    price_min: 2000000,
    price_max: 5000000,
    lat: 7.1584,
    lng: 3.3491,
    description: 'Mixed-use development with commercial and residential units'
  },
  {
    id: '3',
    name: 'Cornwall Bay',
    location: 'Kobape, Abeokuta',
    developer: 'Cornwall Developments',
    status: 'pre-launch',
    price_min: 1800000,
    price_max: 4000000,
    lat: 7.1594,
    lng: 3.3501,
    description: 'Waterfront luxury estate with lake views'
  },
  {
    id: '4',
    name: 'Greenstone Garden',
    location: 'Kobape, Abeokuta',
    developer: 'Greenstone Properties',
    status: 'completed',
    price_min: 1200000,
    price_max: 2800000,
    lat: 7.1604,
    lng: 3.3511,
    description: 'Eco-friendly residential community'
  },
  {
    id: '5',
    name: 'FairView Estate',
    location: 'Kobape, Abeokuta',
    developer: 'FairView Homes',
    status: 'selling',
    price_min: 1600000,
    price_max: 3200000,
    lat: 7.1614,
    lng: 3.3521,
    description: 'Family-oriented community with excellent facilities'
  }
]

export function FramerMapView() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedDevelopment, setSelectedDevelopment] = useState<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    const initMap = async () => {
      if (mapRef.current && !mapLoaded) {
        try {
          // Dynamic import of MapTiler GL
          const maplibregl = await import('maplibre-gl')
          
          const map = new maplibregl.Map({
            container: mapRef.current,
            style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=Pd85kmLr2NsBZ7APc3eK',
            center: [3.3481, 7.1574], // [lng, lat] for Kobape, Abeokuta
            zoom: 13
          })

          // Add navigation controls
          map.addControl(new maplibregl.NavigationControl(), 'top-right')

          // Wait for map to load before adding markers
          map.on('load', () => {
            setMapLoaded(true)
            
            // Add markers for each development
            mockDevelopments.forEach(dev => {
              // Create a custom marker element
              const markerElement = document.createElement('div')
              markerElement.className = 'custom-marker'
              markerElement.innerHTML = `
                <div class="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
              `

              // Add click event to marker
              markerElement.addEventListener('click', () => {
                setSelectedDevelopment(dev)
              })

              // Create marker
              new maplibregl.Marker(markerElement)
                .setLngLat([dev.lng, dev.lat])
                .addTo(map)
            })
          })

        } catch (error) {
          console.error('Error loading MapTiler:', error)
          setMapLoaded(true)
        }
      }
    }

    initMap()
  }, [mapLoaded])

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
                  Initializing MapTiler integration for Kobape, Abeokuta
                </p>
                <div className="text-sm text-gray-500">
                  Coordinates: 7.1574°N, 3.3481°E
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Development List Overlay */}
      <div className="absolute top-6 left-6 w-80 max-h-96 overflow-y-auto">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Developments on Map
          </h3>
          <div className="space-y-3">
            {mockDevelopments.map((dev) => (
              <div
                key={dev.id}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedDevelopment?.id === dev.id
                    ? 'bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                onClick={() => setSelectedDevelopment(dev)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{dev.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(dev.status)}`}>
                    {dev.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {dev.developer}
                </div>
                <div className="text-sm font-semibold text-green-600">
                  {formatCurrency(dev.price_min!)} - {formatCurrency(dev.price_max!)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Development Details */}
      {selectedDevelopment && (
        <div className="absolute bottom-6 right-6 w-80">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">{selectedDevelopment.name}</h3>
              <button
                onClick={() => setSelectedDevelopment(null)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                {selectedDevelopment.location}
              </div>
              <div className="text-gray-600">{selectedDevelopment.developer}</div>
              <div className="text-lg font-bold text-green-600">
                {formatCurrency(selectedDevelopment.price_min)} - {formatCurrency(selectedDevelopment.price_max)}
              </div>
              <p className="text-gray-600 text-xs">
                {selectedDevelopment.description}
              </p>
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
