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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <TourismHero />

      {/* Search Section */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <TourismSearchBar />
        </div>
      </div>

      {/* Real Estate Developments */}
      <TourismDevelopmentsList />

      {/* Tourist Attractions */}
      <div id="attractions-section">
        <TourismAttractions />
      </div>

      {/* Map Section */}
      <div id="map-section" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm font-medium text-[#2d4a3e] uppercase tracking-wider">Interactive Map</p>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Explore the Area
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover real estate opportunities and attractions across Kobape and greater Abeokuta
            </p>
          </div>
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <SimpleMapView />
          </div>
        </div>
      </div>

      {/* Add Your Listing Button - Hidden when embedded */}
      {!isEmbedded && (
        <div className="fixed top-6 right-6 z-40">
          <Link 
            href="/addyourlisting"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-sm font-medium"
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
