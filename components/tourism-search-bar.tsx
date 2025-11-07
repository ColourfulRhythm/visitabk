"use client"

import { useState } from 'react'
import { Search, Filter, MapPin, Building2, Mountain, Utensils } from 'lucide-react'

export function TourismSearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  return (
    <div className="relative">
      <div className="glass-subtle rounded-xl shadow-sm border border-border/50 p-4">
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search developments, attractions, restaurants, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-10 pr-4 bg-background/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-base"
            />
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-12 px-4 pr-10 bg-background/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-base appearance-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="developments">Real Estate</option>
              <option value="attractions">Tourist Attractions</option>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels & Lodging</option>
            </select>
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          </div>

          {/* Search Button */}
          <button className="h-12 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-sm">
            Search
          </button>
        </div>
      </div>
      
      {/* Quick Category Filters */}
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {[
          { id: 'all', label: 'All', icon: Search },
          { id: 'developments', label: 'Real Estate', icon: Building2 },
          { id: 'attractions', label: 'Attractions', icon: Mountain },
          { id: 'restaurants', label: 'Restaurants', icon: Utensils }
        ].map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm ${
              categoryFilter === category.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted text-foreground hover:bg-muted/80'
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
