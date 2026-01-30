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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-white">
      {/* Ultra-Luxury Hero Section */}
      <TourismHero />

      {/* Luxury Search Section */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <TourismSearchBar />
        </div>
      </div>

      {/* Ultra-Luxury Real Estate Developments */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <TourismDevelopmentsList />
        </div>
      </div>

      {/* Ultra-Luxury Tourist Attractions */}
      <div id="attractions-section" className="relative">
        <div className="max-w-7xl mx-auto">
          <TourismAttractions />
        </div>
      </div>

      {/* Luxury Map Section */}
      <div id="map-section" className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-semibold text-amber-600 uppercase tracking-[0.2em] mb-4">
              <span>Interactive Exploration</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-headline font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Explore
              </span>
              <span className="block mt-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                The Destination
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Discover exclusive real estate opportunities and world-class attractions in this extraordinary destination
            </p>
          </div>
          <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/60">
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
