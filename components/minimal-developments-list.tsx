"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MapPin, Building2, ExternalLink, Plus, Eye, Navigation } from 'lucide-react'
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
    description: 'Premium residential estate with modern amenities and excellent facilities',
    website: 'https://oakfarms.com',
    instagram: '@oakfarms',
    email: 'info@oakfarms.com',
    phone: '+234 801 234 5678',
    gps_lat: 7.1574,
    gps_lng: 3.3481,
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
    email: 'contact@legendcity.com',
    phone: '+234 802 345 6789',
    gps_lat: 7.1584,
    gps_lng: 3.3491,
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
    description: 'Waterfront luxury estate with lake views and premium amenities',
    website: 'https://cornwallbay.com',
    instagram: '@cornwallbay',
    email: 'info@cornwallbay.com',
    phone: '+234 803 456 7890',
    gps_lat: 7.1594,
    gps_lng: 3.3501,
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
    description: 'Eco-friendly residential community with sustainable building practices',
    website: 'https://greenstonegarden.com',
    instagram: '@greenstonegarden',
    email: 'hello@greenstonegarden.com',
    phone: '+234 804 567 8901',
    gps_lat: 7.1604,
    gps_lng: 3.3511,
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
    description: 'Family-oriented community with excellent facilities and security',
    website: 'https://fairviewestate.com',
    instagram: '@fairviewestate',
    email: 'sales@fairviewestate.com',
    phone: '+234 805 678 9012',
    gps_lat: 7.1614,
    gps_lng: 3.3521,
    created_at: '2024-01-12'
  }
]

export function MinimalDevelopmentsList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedDevelopment, setSelectedDevelopment] = useState<any>(null)
  const [isAddingCoordinates, setIsAddingCoordinates] = useState(false)
  const [newCoordinates, setNewCoordinates] = useState({ lat: '', lng: '' })

  const filteredDevelopments = mockDevelopments.filter(dev => {
    const matchesSearch = dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dev.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dev.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || dev.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleAddCoordinates = (development: any) => {
    setSelectedDevelopment(development)
    setIsAddingCoordinates(true)
    setNewCoordinates({ lat: development.gps_lat?.toString() || '', lng: development.gps_lng?.toString() || '' })
  }

  const handleSaveCoordinates = () => {
    // Here you would save to your database
    console.log('Saving coordinates:', newCoordinates)
    setIsAddingCoordinates(false)
    setSelectedDevelopment(null)
  }

  return (
    <div className="space-y-4">
      {/* Developments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDevelopments.map((development) => (
          <Card key={development.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{development.name}</h3>
                    <p className="text-sm text-muted-foreground">{development.developer}</p>
                  </div>
                  <Badge className={getStatusColor(development.status)}>
                    {development.status}
                  </Badge>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {development.location}
                </div>

                {/* Price */}
                <div className="text-lg font-semibold text-primary">
                  {formatCurrency(development.price_min!)} - {formatCurrency(development.price_max!)}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setSelectedDevelopment(development)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    More Info
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddCoordinates(development)}
                  >
                    <Navigation className="h-4 w-4" />
                  </Button>
                  {development.website && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={development.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Development Details Modal */}
      <Dialog open={!!selectedDevelopment && !isAddingCoordinates} onOpenChange={() => setSelectedDevelopment(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              {selectedDevelopment?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedDevelopment && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Developer</Label>
                  <p className="text-sm">{selectedDevelopment.developer}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                  <Badge className={getStatusColor(selectedDevelopment.status)}>
                    {selectedDevelopment.status}
                  </Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                  <p className="text-sm">{selectedDevelopment.location}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Price Range</Label>
                  <p className="text-sm font-semibold text-primary">
                    {formatCurrency(selectedDevelopment.price_min)} - {formatCurrency(selectedDevelopment.price_max)}
                  </p>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Description</Label>
                <p className="text-sm">{selectedDevelopment.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Contact</Label>
                  <div className="space-y-1">
                    <p className="text-sm">{selectedDevelopment.email}</p>
                    <p className="text-sm">{selectedDevelopment.phone}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Social Media</Label>
                  <p className="text-sm">{selectedDevelopment.instagram}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => handleAddCoordinates(selectedDevelopment)}
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Add/Edit Coordinates
                </Button>
                {selectedDevelopment.website && (
                  <Button asChild>
                    <a href={selectedDevelopment.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Coordinates Modal */}
      <Dialog open={isAddingCoordinates} onOpenChange={setIsAddingCoordinates}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add/Edit Coordinates</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="lat">Latitude</Label>
              <Input
                id="lat"
                type="number"
                step="any"
                value={newCoordinates.lat}
                onChange={(e) => setNewCoordinates({ ...newCoordinates, lat: e.target.value })}
                placeholder="7.1574"
              />
            </div>
            <div>
              <Label htmlFor="lng">Longitude</Label>
              <Input
                id="lng"
                type="number"
                step="any"
                value={newCoordinates.lng}
                onChange={(e) => setNewCoordinates({ ...newCoordinates, lng: e.target.value })}
                placeholder="3.3481"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSaveCoordinates}>
                Save Coordinates
              </Button>
              <Button variant="outline" onClick={() => setIsAddingCoordinates(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
