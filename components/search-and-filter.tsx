"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Search, Filter, X } from 'lucide-react'

export function SearchAndFilter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [developerFilter, setDeveloperFilter] = useState('all')

  const clearFilters = () => {
    setSearchTerm('')
    setStatusFilter('all')
    setPriceRange('all')
    setDeveloperFilter('all')
  }

  return (
    <Card className="bloomberg-card">
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-64">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, developer, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="min-w-48">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Status
            </label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue />
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

          <div className="min-w-48">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Price Range
            </label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-1m">Under ₦1M</SelectItem>
                <SelectItem value="1m-2m">₦1M - ₦2M</SelectItem>
                <SelectItem value="2m-5m">₦2M - ₦5M</SelectItem>
                <SelectItem value="over-5m">Over ₦5M</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-48">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Developer
            </label>
            <Select value={developerFilter} onValueChange={setDeveloperFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Developers</SelectItem>
                <SelectItem value="oak-properties">Oak Properties Ltd</SelectItem>
                <SelectItem value="legend-properties">Legend Properties</SelectItem>
                <SelectItem value="cornwall-developments">Cornwall Developments</SelectItem>
                <SelectItem value="greenstone-properties">Greenstone Properties</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={clearFilters}>
              <X className="h-4 w-4 mr-2" />
              Clear
            </Button>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Apply
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
