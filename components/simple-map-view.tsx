"use client"

import { MapPin, Building2, Mountain, Utensils } from 'lucide-react'

export function SimpleMapView() {
  return (
    <div className="relative h-full">
      {/* Static Map Placeholder */}
      <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
          <div className="text-center space-y-6 p-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-12 w-12 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Interactive Map</h3>
              <p className="text-gray-600 max-w-md">
                Explore all 16+ locations in Abeokuta including real estate developments, 
                tourist attractions, and restaurants.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <Building2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-semibold text-green-600">12+</div>
                <div className="text-sm text-gray-600">Developments</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <Mountain className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-lg font-semibold text-orange-600">2</div>
                <div className="text-sm text-gray-600">Attractions</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 text-center">
                <Utensils className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-semibold text-blue-600">2</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
            </div>
            <div className="mt-8">
              <div className="bg-white/60 rounded-lg p-4 text-sm text-gray-600">
                🗺️ Interactive map with markers for all locations<br/>
                📍 GPS coordinates and detailed information<br/>
                🔍 Filter by development type and status
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
