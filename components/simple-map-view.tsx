"use client"

import { useState } from 'react'
import { MapPin, Building2, Mountain, Utensils, ExternalLink } from 'lucide-react'

// Sample locations data
const locations = [
  { id: 1, name: 'Sycamore Cottages', type: 'development', lat: 7.1574, lng: 3.3481, color: 'green' },
  { id: 2, name: '2 Seasons Village', type: 'development', lat: 7.1584, lng: 3.3491, color: 'green' },
  { id: 3, name: 'Oak Farms Kobape', type: 'development', lat: 7.1594, lng: 3.3501, color: 'green' },
  { id: 4, name: 'Olumo Rock', type: 'attraction', lat: 7.1550, lng: 3.3450, color: 'orange' },
  { id: 5, name: 'OOPL', type: 'attraction', lat: 7.1530, lng: 3.3430, color: 'orange' },
  { id: 6, name: 'Diamond Dumpling', type: 'restaurant', lat: 7.1520, lng: 3.3420, color: 'blue' },
]

export function SimpleMapView() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null)

  return (
    <div className="relative h-full">
      {/* Interactive Map */}
      <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 relative">
        {/* Map Background with Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Abeokuta Map Representation */}
        <div className="relative w-full h-full p-8">
          {/* Map Title */}
          <div className="absolute top-4 left-4 bg-white/90 rounded-lg px-4 py-2 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900">Abeokuta, Ogun State</h3>
            <p className="text-sm text-gray-600">16+ Locations</p>
          </div>

          {/* Legend */}
          <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-4 shadow-lg">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Legend</h4>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-xs text-gray-600">Developments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                <span className="text-xs text-gray-600">Attractions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-xs text-gray-600">Restaurants</span>
              </div>
            </div>
          </div>

          {/* Location Markers */}
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg hover:scale-125 transition-all duration-300 ${
                location.color === 'green' ? 'bg-green-600' :
                location.color === 'orange' ? 'bg-orange-600' : 'bg-blue-600'
              }`}
              style={{
                left: `${((location.lng - 3.34) * 2000) + 200}px`,
                top: `${(400 - (location.lat - 7.15) * 2000)}px`,
              }}
              title={location.name}
            />
          ))}

          {/* Center Info */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center space-y-4 bg-white/80 rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Interactive Map</h3>
                <p className="text-gray-600 max-w-sm text-sm">
                  Click on markers to explore developments, attractions, and restaurants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Location Details */}
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${
                  selectedLocation.color === 'green' ? 'bg-green-600' :
                  selectedLocation.color === 'orange' ? 'bg-orange-600' : 'bg-blue-600'
                } flex items-center justify-center`}>
                  {selectedLocation.type === 'development' ? (
                    <Building2 className="h-4 w-4 text-white" />
                  ) : selectedLocation.type === 'attraction' ? (
                    <Mountain className="h-4 w-4 text-white" />
                  ) : (
                    <Utensils className="h-4 w-4 text-white" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{selectedLocation.name}</h4>
                  <p className="text-sm text-gray-600 capitalize">{selectedLocation.type}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
