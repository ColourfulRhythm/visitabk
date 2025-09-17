"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, MapPin, DollarSign, Calendar, ExternalLink, X } from 'lucide-react'
import { formatCurrency, getStatusColor } from '@/lib/utils'

// Mock development data
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

export function CompareTool() {
  const [selectedDevelopments, setSelectedDevelopments] = useState<string[]>([])

  const addDevelopment = (developmentId: string) => {
    if (selectedDevelopments.length < 3 && !selectedDevelopments.includes(developmentId)) {
      setSelectedDevelopments([...selectedDevelopments, developmentId])
    }
  }

  const removeDevelopment = (developmentId: string) => {
    setSelectedDevelopments(selectedDevelopments.filter(id => id !== developmentId))
  }

  const getSelectedDevelopmentData = () => {
    return selectedDevelopments.map(id => 
      mockDevelopments.find(dev => dev.id === id)
    ).filter(Boolean)
  }

  const selectedData = getSelectedDevelopmentData()

  return (
    <div className="space-y-6">
      {/* Selection Controls */}
      <Card className="bloomberg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Select Developments to Compare
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Add Development
              </label>
              <Select onValueChange={addDevelopment}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a development..." />
                </SelectTrigger>
                <SelectContent>
                  {mockDevelopments
                    .filter(dev => !selectedDevelopments.includes(dev.id))
                    .map(dev => (
                      <SelectItem key={dev.id} value={dev.id}>
                        {dev.name} - {dev.developer}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              {selectedDevelopments.length}/3 selected
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Grid */}
      {selectedData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedData.map((development) => (
            <Card key={development!.id} className="bloomberg-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{development!.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{development!.developer}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeDevelopment(development!.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(development!.status)}>
                    {development!.status}
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-500">
                      {formatCurrency(development!.price_min!)} - {formatCurrency(development!.price_max!)}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    {development!.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    {new Date(development!.created_at).toLocaleDateString()}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {development!.description}
                </p>

                <div className="flex gap-2">
                  {development!.website && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={development!.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Website
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Comparison Summary */}
      {selectedData.length > 1 && (
        <Card className="bloomberg-card">
          <CardHeader>
            <CardTitle>Comparison Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Price Range</h4>
                <div className="space-y-1 text-sm">
                  <div>Lowest: {formatCurrency(Math.min(...selectedData.map(d => d!.price_min!)))}</div>
                  <div>Highest: {formatCurrency(Math.max(...selectedData.map(d => d!.price_max!)))}</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Status Distribution</h4>
                <div className="space-y-1 text-sm">
                  {Array.from(new Set(selectedData.map(d => d!.status))).map(status => (
                    <div key={status} className="flex items-center gap-2">
                      <Badge className={getStatusColor(status)}>
                        {status}
                      </Badge>
                      <span>{selectedData.filter(d => d!.status === status).length}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Developers</h4>
                <div className="space-y-1 text-sm">
                  {Array.from(new Set(selectedData.map(d => d!.developer))).map(developer => (
                    <div key={developer}>{developer}</div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedData.length === 0 && (
        <Card className="bloomberg-card">
          <CardContent className="p-12 text-center">
            <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Developments Selected</h3>
            <p className="text-muted-foreground">
              Select up to 3 developments from the dropdown above to start comparing
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
