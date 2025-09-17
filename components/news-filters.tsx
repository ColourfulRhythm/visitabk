"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Calendar, Tag, X } from 'lucide-react'

export function NewsFilters() {
  const [dateFilter, setDateFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [tagFilter, setTagFilter] = useState('all')

  const clearFilters = () => {
    setDateFilter('all')
    setSourceFilter('all')
    setTagFilter('all')
  }

  return (
    <Card className="bloomberg-card">
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="min-w-48">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              <Calendar className="h-4 w-4 inline mr-1" />
              Date Range
            </label>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-48">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Source
            </label>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="property-news">Property News Nigeria</SelectItem>
                <SelectItem value="abeokuta-times">Abeokuta Times</SelectItem>
                <SelectItem value="real-estate-weekly">Real Estate Weekly</SelectItem>
                <SelectItem value="green-building">Green Building Magazine</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-48">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              <Tag className="h-4 w-4 inline mr-1" />
              Tags
            </label>
            <Select value={tagFilter} onValueChange={setTagFilter}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tags</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="launch">Launch</SelectItem>
                <SelectItem value="approval">Approval</SelectItem>
                <SelectItem value="award">Award</SelectItem>
                <SelectItem value="investors">Investors</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={clearFilters}>
              <X className="h-4 w-4 mr-2" />
              Clear
            </Button>
            <Button>
              Apply Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
