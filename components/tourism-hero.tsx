"use client"

import { MapPin, Building2, Mountain, Utensils } from 'lucide-react'

export function TourismHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-orange-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-green-600 to-orange-600 bg-clip-text text-transparent leading-tight">
              Visit Abeokuta
            </h1>
              <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                Explore the Gateway City
              </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover historic landmarks, authentic Yoruba culture, vibrant markets, traditional cuisine, and sustainable investment opportunities in Nigeria's cultural heartland
            </p>
          </div>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600">12+</div>
              <div className="text-sm text-gray-600 font-medium">Premium Developments</div>
              <div className="text-xs text-gray-500">In Kobape</div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600">137m</div>
              <div className="text-sm text-gray-600 font-medium">Olumo Rock</div>
              <div className="text-xs text-gray-500">Historic Landmark</div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600">10+</div>
              <div className="text-sm text-gray-600 font-medium">Restaurants</div>
              <div className="text-xs text-gray-500">Multi-cuisine</div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600">1.5M</div>
              <div className="text-sm text-gray-600 font-medium">Years of History</div>
              <div className="text-xs text-gray-500">Archaeological Site</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => {
                  const mapSection = document.getElementById('map-section')
                  mapSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Explore Real Estate
              </button>
              <button 
                onClick={() => {
                  const attractionsSection = document.getElementById('attractions-section')
                  attractionsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl font-semibold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
              >
                Plan Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
