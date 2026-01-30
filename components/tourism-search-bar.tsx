"use client"

import { useState } from 'react'
import { Search, Filter, MapPin, Building2, Mountain, Utensils, Sparkles } from 'lucide-react'

export function TourismSearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  return (
    <div className="relative -mt-20 z-10">
      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/60 p-6 md:p-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Ultra-Luxury Search Input */}
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-amber-500" />
            </div>
            <input
              type="text"
              placeholder="Search exclusive developments, attractions, restaurants, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-slate-50/80 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-base font-medium shadow-inner"
            />
          </div>
          
          {/* Luxury Category Filter */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-14 px-5 pr-12 bg-slate-50/80 border-2 border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-base font-medium appearance-none cursor-pointer shadow-inner"
            >
              <option value="all">All Categories</option>
              <option value="developments">Ultra-Luxury Estates</option>
              <option value="attractions">Exclusive Attractions</option>
              <option value="restaurants">Fine Dining</option>
              <option value="hotels">Luxury Resorts</option>
            </select>
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500 pointer-events-none" />
          </div>

          {/* Luxury Search Button */}
          <button className="h-14 px-8 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-2xl font-bold text-base hover:from-amber-600 hover:to-amber-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2">
            <Search className="h-5 w-5" />
            Search
          </button>
        </div>
      </div>
      
      {/* Luxury Quick Category Filters */}
      <div className="flex flex-wrap gap-3 mt-8 justify-center max-w-6xl mx-auto">
        {[
          { id: 'all', label: 'All', icon: Search },
          { id: 'developments', label: 'Ultra-Luxury Estates', icon: Building2 },
          { id: 'attractions', label: 'Exclusive Attractions', icon: Mountain },
          { id: 'restaurants', label: 'Fine Dining', icon: Utensils }
        ].map((category) => (
          <button
            key={category.id}
            className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm shadow-lg ${
              categoryFilter === category.id
                ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-white shadow-xl scale-105'
                : 'bg-white/90 backdrop-blur-xl text-slate-700 hover:bg-white border border-slate-200 hover:scale-105'
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
