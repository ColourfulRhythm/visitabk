"use client"

import { useState } from 'react'
import { Search, Filter, MapPin } from 'lucide-react'

export function FramerSearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  return (
    <div className="relative">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-2">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search developments, developers, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-transparent border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 text-lg"
            />
          </div>
          
          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-14 px-4 pr-10 bg-transparent border-0 text-gray-900 focus:outline-none focus:ring-0 text-lg appearance-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="pre-launch">Pre-launch</option>
              <option value="selling">Selling</option>
              <option value="under development">Under Development</option>
              <option value="completed">Completed</option>
            </select>
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          {/* Search Button */}
          <button className="h-14 px-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Search
          </button>
        </div>
      </div>
      
      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        {['All', 'Pre-launch', 'Selling', 'Under Development', 'Completed'].map((filter) => (
          <button
            key={filter}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              statusFilter === filter.toLowerCase().replace(' ', '-') || 
              (statusFilter === 'all' && filter === 'All')
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                : 'bg-white/60 text-gray-600 hover:bg-white/80'
            }`}
            onClick={() => setStatusFilter(filter === 'All' ? 'all' : filter.toLowerCase().replace(' ', '-'))}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}
