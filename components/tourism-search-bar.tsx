"use client"

import { useState } from 'react'
import { Search, Filter, Building2, Mountain, Utensils } from 'lucide-react'

export function TourismSearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search developments, attractions, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2d4a3e]/30 focus:border-[#2d4a3e] text-base"
            />
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-12 px-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#2d4a3e]/30 focus:border-[#2d4a3e] text-base appearance-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="developments">Real Estate</option>
              <option value="attractions">Attractions</option>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
            </select>
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Search Button */}
          <button className="h-12 px-6 bg-[#2d4a3e] text-white rounded-xl font-medium text-base hover:bg-[#3d5a4e] transition-colors duration-200 flex items-center justify-center gap-2">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
      
      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mt-6 justify-center max-w-5xl mx-auto">
        {[
          { id: 'all', label: 'All', icon: Search },
          { id: 'developments', label: 'Real Estate', icon: Building2 },
          { id: 'attractions', label: 'Attractions', icon: Mountain },
          { id: 'restaurants', label: 'Restaurants', icon: Utensils }
        ].map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 text-sm ${
              categoryFilter === category.id
                ? 'bg-[#2d4a3e] text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-[#2d4a3e]/30'
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
