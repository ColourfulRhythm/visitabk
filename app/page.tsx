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
    <div className="min-h-screen bg-background">
      {/* Hero Section - Primary background */}
      <TourismHero />

      {/* Search Section - Secondary background for subtle grouping */}
      <div className="bg-background-secondary">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <TourismSearchBar />
        </div>
      </div>

      {/* Real Estate Developments - Primary background */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <TourismDevelopmentsList />
        </div>
      </div>

      {/* Tourist Attractions - Secondary background for visual separation */}
      <div id="attractions-section" className="bg-background-secondary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <TourismAttractions />
        </div>
      </div>

      {/* Map Section - Primary background */}
      <div id="map-section" className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-3">
              Explore Abeokuta
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover real estate opportunities and tourist attractions in Nigeria's historic city
            </p>
          </div>
          <div className="h-[500px] rounded-xl overflow-hidden shadow-lg border border-border">
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
