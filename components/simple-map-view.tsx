"use client"

import { useState } from 'react'
import { MapPin, Building2, Mountain, Utensils, ExternalLink } from 'lucide-react'

// Sample locations data
const locations = [
  { id: 1, name: 'Sycamore Cottages', type: 'development', lat: 7.1574, lng: 3.3481, color: 'green' },
  { id: 2, name: '2 Seasons Village', type: 'development', lat: 7.1584, lng: 3.3491, color: 'green' },
  { id: 3, name: 'Oak Farms Kobape', type: 'development', lat: 7.1594, lng: 3.3501, color: 'green' },
  { id: 4, name: 'Olumo Rock', type: 'attraction', lat: 7.1550, lng: 3.3450, color: 'orange' },
  { id: 5, name: 'OOPL', type: 'attraction', lat: 7.1530, lng: 3.3430, color: 'orange' },
  { id: 6, name: 'Diamond Dumpling', type: 'restaurant', lat: 7.1520, lng: 3.3420, color: 'blue' },
]

export function SimpleMapView() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null)

  return (
    <div className="relative h-full">
      {/* Interactive Map */}
      <div className="w-full h-full rounded-lg overflow-hidden bg-background-secondary/50 relative">
        {/* Map Background with Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Abeokuta Map Representation */}
        <div className="relative w-full h-full p-8">
          {/* Map Title */}
          <div className="absolute top-4 left-4 glass-subtle rounded-lg px-3 py-2 shadow-sm border border-border/50">
            <h3 className="text-base font-semibold text-foreground">Abeokuta, Ogun State</h3>
            <p className="text-xs text-muted-foreground">16+ Locations</p>
          </div>

          {/* Legend */}
          <div className="absolute top-4 right-4 glass-subtle rounded-lg p-3 shadow-sm border border-border/50">
            <h4 className="text-xs font-medium text-foreground mb-2">Legend</h4>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                <span className="text-xs text-muted-foreground">Developments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-muted-foreground">Attractions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-muted-foreground">Restaurants</span>
              </div>
            </div>
          </div>

          {/* Location Markers */}
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              className={`absolute w-5 h-5 rounded-full border-2 border-background shadow-md hover:scale-110 transition-all duration-200 ${
                location.color === 'green' ? 'bg-primary' :
                location.color === 'orange' ? 'bg-orange-500' : 'bg-blue-500'
              }`}
              style={{
                left: `${((location.lng - 3.34) * 2000) + 200}px`,
                top: `${(400 - (location.lat - 7.15) * 2000)}px`,
              }}
              title={location.name}
            />
          ))}

          {/* Center Info */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center space-y-3 glass-subtle rounded-lg p-6 shadow-sm border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">Interactive Map</h3>
                <p className="text-muted-foreground max-w-xs text-sm">
                  Click on markers to explore developments, attractions, and restaurants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Location Details */}
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 right-4 glass-subtle rounded-lg p-4 shadow-lg border border-border/50">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${
                  selectedLocation.color === 'green' ? 'bg-primary/10' :
                  selectedLocation.color === 'orange' ? 'bg-orange-500/10' : 'bg-blue-500/10'
                } flex items-center justify-center`}>
                  {selectedLocation.type === 'development' ? (
                    <Building2 className={`h-4 w-4 ${
                      selectedLocation.color === 'green' ? 'text-primary' :
                      selectedLocation.color === 'orange' ? 'text-orange-500' : 'text-blue-500'
                    }`} />
                  ) : selectedLocation.type === 'attraction' ? (
                    <Mountain className={`h-4 w-4 ${
                      selectedLocation.color === 'green' ? 'text-primary' :
                      selectedLocation.color === 'orange' ? 'text-orange-500' : 'text-blue-500'
                    }`} />
                  ) : (
                    <Utensils className={`h-4 w-4 ${
                      selectedLocation.color === 'green' ? 'text-primary' :
                      selectedLocation.color === 'orange' ? 'text-orange-500' : 'text-blue-500'
                    }`} />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{selectedLocation.name}</h4>
                  <p className="text-xs text-muted-foreground capitalize">{selectedLocation.type}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
