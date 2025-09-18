'use client'

import { useState, useEffect } from 'react'
import { Plus, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { TourismHero } from '@/components/tourism-hero'
import { TourismSearchBar } from '@/components/tourism-search-bar'
import { TourismDevelopmentsList } from '@/components/tourism-developments-list'
import { TourismAttractions } from '@/components/tourism-attractions'
import { SimpleMapView } from '@/components/simple-map-view'
export default function Home() {
  const [isEmbedded, setIsEmbedded] = useState(false)

  useEffect(() => {
    // Check if page is embedded or has embed parameter
    const isInIframe = window.self !== window.top
    const urlParams = new URLSearchParams(window.location.search)
    const embedParam = urlParams.get('embed') === 'true'
    setIsEmbedded(isInIframe || embedParam)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <TourismHero />

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <TourismSearchBar />
      </div>

      {/* Real Estate Developments */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <TourismDevelopmentsList />
      </div>

      {/* Tourist Attractions */}
      <div id="attractions-section" className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <TourismAttractions />
        </div>
      </div>

      {/* Map Section */}
      <div id="map-section" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Abeokuta
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover real estate opportunities and tourist attractions in Nigeria's historic city
            </p>
          </div>
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <SimpleMapView />
          </div>
        </div>
      </div>

      {/* Add Your Listing Button - Hidden when embedded */}
      {!isEmbedded && (
        <div className="fixed top-6 right-6 z-40">
          <Link 
            href="/addyourlisting"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm font-semibold"
            title="Add your listing"
          >
            <Plus className="h-4 w-4" />
            Add Listing
          </Link>
        </div>
      )}
    </div>
  )
}
