"use client"

import { useState } from 'react'
import { Search, Filter, MapPin, Building2, Mountain, Utensils } from 'lucide-react'

export function TourismSearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  return (
    <div className="relative">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search developments, attractions, restaurants, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-14 pr-4 bg-transparent border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 text-lg"
            />
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-16 px-6 pr-12 bg-transparent border-0 text-gray-900 focus:outline-none focus:ring-0 text-lg appearance-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="developments">Real Estate</option>
              <option value="attractions">Tourist Attractions</option>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels & Lodging</option>
            </select>
            <Filter className="absolute right-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none" />
          </div>

          {/* Search Button */}
          <button className="h-16 px-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Search
          </button>
        </div>
      </div>
      
      {/* Quick Category Filters */}
      <div className="flex flex-wrap gap-4 mt-8 justify-center">
        {[
          { id: 'all', label: 'All', icon: Search },
          { id: 'developments', label: 'Real Estate', icon: Building2 },
          { id: 'attractions', label: 'Attractions', icon: Mountain },
          { id: 'restaurants', label: 'Restaurants', icon: Utensils }
        ].map((category) => (
          <button
            key={category.id}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
              categoryFilter === category.id
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                : 'bg-white/60 text-gray-600 hover:bg-white/80'
            }`}
            onClick={() => setCategoryFilter(category.id)}
          >
            <category.icon className="h-4 w-4" />
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}
