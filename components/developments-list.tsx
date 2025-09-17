"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter, MapPin, Building2, ExternalLink } from 'lucide-react'
import { formatCurrency, getStatusColor } from '@/lib/utils'

// Mock data - replace with actual Supabase data
const mockDevelopments = [
  {
    id: '1',
    name: 'Oak Farms Estate',
    location: 'Kobape, Abeokuta',
    developer: 'Oak Properties Ltd',
    status: 'selling',
    price_min: 1500000,
    price_max: 3500000,
    description: 'Premium residential estate with modern amenities',
    website: 'https://oakfarms.com',
    instagram: '@oakfarms',
    created_at: '2024-01-15'
  },
  {
    id: '2',
    name: 'Legend City',
    location: 'Kobape, Abeokuta',
    developer: 'Legend Properties',
    status: 'under development',
    price_min: 2000000,
    price_max: 5000000,
    description: 'Mixed-use development with commercial and residential units',
    website: 'https://legendcity.com',
    instagram: '@legendcity',
    created_at: '2024-01-10'
  },
  {
    id: '3',
    name: 'Cornwall Bay',
    location: 'Kobape, Abeokuta',
    developer: 'Cornwall Developments',
    status: 'pre-launch',
    price_min: 1800000,
    price_max: 4000000,
    description: 'Waterfront luxury estate with lake views',
    website: 'https://cornwallbay.com',
    instagram: '@cornwallbay',
    created_at: '2024-01-20'
  },
  {
    id: '4',
    name: 'Greenstone Garden',
    location: 'Kobape, Abeokuta',
    developer: 'Greenstone Properties',
    status: 'completed',
    price_min: 1200000,
    price_max: 2800000,
    description: 'Eco-friendly residential community',
    website: 'https://greenstonegarden.com',
    instagram: '@greenstonegarden',
    created_at: '2024-01-05'
  },
  {
    id: '5',
    name: 'FairView Estate',
    location: 'Kobape, Abeokuta',
    developer: 'FairView Homes',
    status: 'selling',
    price_min: 1600000,
    price_max: 3200000,
    description: 'Family-oriented community with excellent facilities',
    website: 'https://fairviewestate.com',
    instagram: '@fairviewestate',
    created_at: '2024-01-12'
  }
]

export function DevelopmentsList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredDevelopments = mockDevelopments.filter(dev => {
    const matchesSearch = dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dev.developer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || dev.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <Card className="bloomberg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Developments
          </CardTitle>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search developments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-64"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
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
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {filteredDevelopments.map((development) => (
          <div
            key={development.id}
            className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-foreground">{development.name}</h3>
                <Badge className={getStatusColor(development.status)}>
                  {development.status}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {development.location}
                </div>
                <div>{development.developer}</div>
                <div className="text-green-500 font-medium">
                  {formatCurrency(development.price_min!)} - {formatCurrency(development.price_max!)}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {development.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {development.website && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={development.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
