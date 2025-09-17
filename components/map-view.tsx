"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Building2, ExternalLink, Navigation } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

// Mock development data with coordinates
const mockDevelopments = [
  {
    id: '1',
    name: 'Oak Farms Estate',
    location: 'Kobape, Abeokuta',
    developer: 'Oak Properties Ltd',
    status: 'selling',
    price_min: 1500000,
    price_max: 3500000,
    lat: 7.1574,
    lng: 3.3481,
    description: 'Premium residential estate with modern amenities'
  },
  {
    id: '2',
    name: 'Legend City',
    location: 'Kobape, Abeokuta',
    developer: 'Legend Properties',
    status: 'under development',
    price_min: 2000000,
    price_max: 5000000,
    lat: 7.1584,
    lng: 3.3491,
    description: 'Mixed-use development with commercial and residential units'
  },
  {
    id: '3',
    name: 'Cornwall Bay',
    location: 'Kobape, Abeokuta',
    developer: 'Cornwall Developments',
    status: 'pre-launch',
    price_min: 1800000,
    price_max: 4000000,
    lat: 7.1594,
    lng: 3.3501,
    description: 'Waterfront luxury estate with lake views'
  },
  {
    id: '4',
    name: 'Greenstone Garden',
    location: 'Kobape, Abeokuta',
    developer: 'Greenstone Properties',
    status: 'completed',
    price_min: 1200000,
    price_max: 2800000,
    lat: 7.1604,
    lng: 3.3511,
    description: 'Eco-friendly residential community'
  },
  {
    id: '5',
    name: 'FairView Estate',
    location: 'Kobape, Abeokuta',
    developer: 'FairView Homes',
    status: 'selling',
    price_min: 1600000,
    price_max: 3200000,
    lat: 7.1614,
    lng: 3.3521,
    description: 'Family-oriented community with excellent facilities'
  }
]

export function MapView() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedDevelopment, setSelectedDevelopment] = useState<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Initialize MapTiler map
    const initMap = async () => {
      if (mapRef.current && !mapLoaded) {
        try {
          // Dynamic import of MapTiler GL
          const maplibregl = await import('maplibre-gl')
          
          const map = new maplibregl.Map({
            container: mapRef.current,
            style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=Pd85kmLr2NsBZ7APc3eK',
            center: [3.3481, 7.1574], // [lng, lat] for Kobape, Abeokuta
            zoom: 13
          })

          // Add navigation controls
          map.addControl(new maplibregl.NavigationControl(), 'top-right')

          // Wait for map to load before adding markers
          map.on('load', () => {
            setMapLoaded(true)
            
            // Add markers for each development
            mockDevelopments.forEach(dev => {
              // Create a custom marker element
              const markerElement = document.createElement('div')
              markerElement.className = 'custom-marker'
              markerElement.innerHTML = `
                <div class="w-8 h-8 bg-green-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
              `

              // Add click event to marker
              markerElement.addEventListener('click', () => {
                setSelectedDevelopment(dev)
              })

              // Create marker
              new maplibregl.Marker(markerElement)
                .setLngLat([dev.lng, dev.lat])
                .addTo(map)
            })
          })

        } catch (error) {
          console.error('Error loading MapTiler:', error)
          // Fallback to placeholder
          setMapLoaded(true)
        }
      }
    }

    initMap()
  }, [mapLoaded])

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
    <div className="relative h-full">
      {/* Map Container */}
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg overflow-hidden bg-muted"
      >
        {!mapLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Loading Interactive Map...
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Initializing MapTiler integration for Kobape, Abeokuta
              </p>
              <div className="text-xs text-muted-foreground">
                Coordinates: 7.1574°N, 3.3481°E
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Development List Overlay */}
      <div className="absolute top-4 left-4 w-80 max-h-96 overflow-y-auto">
        <Card className="enhanced-card">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Developments on Map
            </h3>
            <div className="space-y-2">
              {mockDevelopments.map((dev) => (
                <div
                  key={dev.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedDevelopment?.id === dev.id
                      ? 'bg-primary/10 border-primary'
                      : 'hover:bg-accent/50'
                  }`}
                  onClick={() => setSelectedDevelopment(dev)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{dev.name}</h4>
                    <Badge className={`status-badge ${getStatusColor(dev.status)}`}>
                      {dev.status}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {dev.developer}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {formatCurrency(dev.price_min!)} - {formatCurrency(dev.price_max!)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selected Development Details */}
      {selectedDevelopment && (
        <div className="absolute bottom-4 right-4 w-80">
          <Card className="enhanced-card">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold">{selectedDevelopment.name}</h3>
                <button
                  onClick={() => setSelectedDevelopment(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ×
                </button>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  {selectedDevelopment.location}
                </div>
                <div>{selectedDevelopment.developer}</div>
                <div className="text-primary font-medium">
                  {formatCurrency(selectedDevelopment.price_min)} - {formatCurrency(selectedDevelopment.price_max)}
                </div>
                <p className="text-muted-foreground text-xs">
                  {selectedDevelopment.description}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Navigation className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Map Attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
        © MapTiler © OpenStreetMap contributors
      </div>
    </div>
  )
}
