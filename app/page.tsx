import { TourismHero } from '@/components/tourism-hero'
import { TourismSearchBar } from '@/components/tourism-search-bar'
import { TourismDevelopmentsList } from '@/components/tourism-developments-list'
import { TourismAttractions } from '@/components/tourism-attractions'
import { TourismMapView } from '@/components/tourism-map-view'

export default function Home() {
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
      <div className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <TourismAttractions />
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
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
            <TourismMapView />
          </div>
        </div>
      </div>
    </div>
  )
}
