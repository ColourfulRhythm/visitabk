"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Building2, ExternalLink, Edit, Save, X, Navigation, Globe, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'
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
    facebook: 'OakFarmsEstate',
    twitter: '@oakfarms',
    linkedin: 'oak-properties-ltd',
    youtube: 'OakFarmsChannel',
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
    facebook: 'LegendCityAbeokuta',
    twitter: '@legendcity',
    linkedin: 'legend-properties',
    youtube: 'LegendCityChannel',
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
    facebook: 'CornwallBayEstate',
    twitter: '@cornwallbay',
    linkedin: 'cornwall-developments',
    youtube: 'CornwallBayChannel',
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
    facebook: 'GreenstoneGardenEstate',
    twitter: '@greenstonegarden',
    linkedin: 'greenstone-properties',
    youtube: 'GreenstoneGardenChannel',
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
    facebook: 'FairViewEstateAbeokuta',
    twitter: '@fairviewestate',
    linkedin: 'fairview-homes',
    youtube: 'FairViewEstateChannel',
    email: 'sales@fairviewestate.com',
    phone: '+234 805 678 9012',
    gps_lat: 7.1614,
    gps_lng: 3.3521,
    created_at: '2024-01-12'
  }
]

export function EnhancedDevelopmentsList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedDevelopment, setSelectedDevelopment] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<any>({})
  const [developments, setDevelopments] = useState(mockDevelopments)

  const filteredDevelopments = developments.filter(dev => {
    const matchesSearch = dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dev.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dev.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || dev.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleEdit = (development: any) => {
    setSelectedDevelopment(development)
    setEditData({ ...development })
    setIsEditing(true)
  }

  const handleSave = () => {
    setDevelopments(prev => 
      prev.map(dev => 
        dev.id === editData.id ? { ...dev, ...editData } : dev
      )
    )
    setIsEditing(false)
    setSelectedDevelopment(null)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setSelectedDevelopment(null)
    setEditData({})
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pre-launch':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'selling':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'under development':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Developments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDevelopments.map((development) => (
          <Card key={development.id} className="enhanced-card group">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-xl mb-1 group-hover:text-primary transition-colors">
                      {development.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{development.developer}</p>
                  </div>
                  <Badge className={`status-badge ${getStatusColor(development.status)}`}>
                    {development.status}
                  </Badge>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {development.location}
                </div>

                {/* Price */}
                <div className="price-display text-center">
                  <div className="text-lg font-bold">
                    {formatCurrency(development.price_min!)} - {formatCurrency(development.price_max!)}
                  </div>
                  <div className="text-xs text-muted-foreground">Price Range</div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {development.description}
                </p>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 enhanced-button-outline"
                    onClick={() => setSelectedDevelopment(development)}
                  >
                    <Building2 className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(development)}
                    className="enhanced-button-outline"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  {development.website && (
                    <Button variant="outline" size="sm" asChild className="enhanced-button-outline">
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

      {/* Development Details/Edit Modal */}
      <Dialog open={!!selectedDevelopment} onOpenChange={() => setSelectedDevelopment(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Building2 className="h-6 w-6" />
              {isEditing ? 'Edit Development' : selectedDevelopment?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedDevelopment && (
            <div className="space-y-6">
              {isEditing ? (
                /* Edit Form */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Development Name</Label>
                      <Input
                        id="name"
                        value={editData.name || ''}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="developer">Developer</Label>
                      <Input
                        id="developer"
                        value={editData.developer || ''}
                        onChange={(e) => setEditData({ ...editData, developer: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={editData.location || ''}
                        onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <select
                        id="status"
                        value={editData.status || ''}
                        onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                        className="mt-1 w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="pre-launch">Pre-launch</option>
                        <option value="selling">Selling</option>
                        <option value="under development">Under Development</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="price_min">Min Price (₦)</Label>
                        <Input
                          id="price_min"
                          type="number"
                          value={editData.price_min || ''}
                          onChange={(e) => setEditData({ ...editData, price_min: parseInt(e.target.value) || 0 })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="price_max">Max Price (₦)</Label>
                        <Input
                          id="price_max"
                          type="number"
                          value={editData.price_max || ''}
                          onChange={(e) => setEditData({ ...editData, price_max: parseInt(e.target.value) || 0 })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={editData.description || ''}
                        onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={editData.email || ''}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={editData.phone || ''}
                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={editData.website || ''}
                        onChange={(e) => setEditData({ ...editData, website: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">Social Media</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div>
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input
                          id="instagram"
                          value={editData.instagram || ''}
                          onChange={(e) => setEditData({ ...editData, instagram: e.target.value })}
                          className="mt-1"
                          placeholder="@username"
                        />
                      </div>
                      <div>
                        <Label htmlFor="facebook">Facebook</Label>
                        <Input
                          id="facebook"
                          value={editData.facebook || ''}
                          onChange={(e) => setEditData({ ...editData, facebook: e.target.value })}
                          className="mt-1"
                          placeholder="Page Name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input
                          id="twitter"
                          value={editData.twitter || ''}
                          onChange={(e) => setEditData({ ...editData, twitter: e.target.value })}
                          className="mt-1"
                          placeholder="@username"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={editData.linkedin || ''}
                          onChange={(e) => setEditData({ ...editData, linkedin: e.target.value })}
                          className="mt-1"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="youtube">YouTube</Label>
                        <Input
                          id="youtube"
                          value={editData.youtube || ''}
                          onChange={(e) => setEditData({ ...editData, youtube: e.target.value })}
                          className="mt-1"
                          placeholder="Channel Name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Coordinates */}
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">GPS Coordinates</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="lat">Latitude</Label>
                        <Input
                          id="lat"
                          type="number"
                          step="any"
                          value={editData.gps_lat || ''}
                          onChange={(e) => setEditData({ ...editData, gps_lat: parseFloat(e.target.value) || 0 })}
                          className="mt-1"
                          placeholder="7.1574"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lng">Longitude</Label>
                        <Input
                          id="lng"
                          type="number"
                          step="any"
                          value={editData.gps_lng || ''}
                          onChange={(e) => setEditData({ ...editData, gps_lng: parseFloat(e.target.value) || 0 })}
                          className="mt-1"
                          placeholder="3.3481"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="md:col-span-2 flex gap-3 justify-end">
                    <Button variant="outline" onClick={handleCancel}>
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="enhanced-button">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              ) : (
                /* View Mode */
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Developer</Label>
                        <p className="text-lg font-semibold">{selectedDevelopment.developer}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                        <Badge className={`status-badge ${getStatusColor(selectedDevelopment.status)} mt-1`}>
                          {selectedDevelopment.status}
                        </Badge>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                        <p className="text-sm">{selectedDevelopment.location}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Price Range</Label>
                        <p className="text-lg font-semibold text-primary">
                          {formatCurrency(selectedDevelopment.price_min)} - {formatCurrency(selectedDevelopment.price_max)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Contact</Label>
                        <div className="space-y-1">
                          <p className="text-sm">{selectedDevelopment.email}</p>
                          <p className="text-sm">{selectedDevelopment.phone}</p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Website</Label>
                        {selectedDevelopment.website ? (
                          <a href={selectedDevelopment.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                            {selectedDevelopment.website}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">Not provided</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Description</Label>
                    <p className="text-sm mt-1">{selectedDevelopment.description}</p>
                  </div>

                  {/* Social Media Links */}
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground mb-3 block">Social Media</Label>
                    <div className="flex gap-3">
                      {selectedDevelopment.instagram && (
                        <a href={`https://instagram.com/${selectedDevelopment.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700">
                          <Instagram className="h-4 w-4" />
                          {selectedDevelopment.instagram}
                        </a>
                      )}
                      {selectedDevelopment.facebook && (
                        <a href={`https://facebook.com/${selectedDevelopment.facebook}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                          <Facebook className="h-4 w-4" />
                          {selectedDevelopment.facebook}
                        </a>
                      )}
                      {selectedDevelopment.twitter && (
                        <a href={`https://twitter.com/${selectedDevelopment.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-500">
                          <Twitter className="h-4 w-4" />
                          {selectedDevelopment.twitter}
                        </a>
                      )}
                      {selectedDevelopment.linkedin && (
                        <a href={`https://linkedin.com/company/${selectedDevelopment.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800">
                          <Linkedin className="h-4 w-4" />
                          {selectedDevelopment.linkedin}
                        </a>
                      )}
                      {selectedDevelopment.youtube && (
                        <a href={`https://youtube.com/@${selectedDevelopment.youtube}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700">
                          <Youtube className="h-4 w-4" />
                          {selectedDevelopment.youtube}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={() => handleEdit(selectedDevelopment)} className="enhanced-button">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Development
                    </Button>
                    {selectedDevelopment.website && (
                      <Button asChild className="enhanced-button-outline">
                        <a href={selectedDevelopment.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Website
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
