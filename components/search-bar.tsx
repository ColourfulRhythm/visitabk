"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter } from 'lucide-react'

interface SearchBarProps {
  onSearch?: (query: string) => void
  onStatusFilter?: (status: string) => void
}

export function SearchBar({ onSearch, onStatusFilter }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    onSearch?.(query)
  }

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status)
    onStatusFilter?.(status)
  }

  return (
    <div className="flex gap-4 items-center">
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search developments, developers, or locations..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-12 h-12 enhanced-search text-base"
        />
      </div>
      
      <Select value={statusFilter} onValueChange={handleStatusFilter}>
        <SelectTrigger className="w-56 h-12 enhanced-search">
          <Filter className="h-5 w-5 mr-2" />
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="pre-launch">Pre-launch</SelectItem>
          <SelectItem value="selling">Selling</SelectItem>
          <SelectItem value="under development">Under Development</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
