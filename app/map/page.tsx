"use client"

import { MapView } from '@/components/map-view'

export default function MapPage() {
  return (
    <div className="p-6 h-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Development Map</h1>
        <p className="text-muted-foreground">Interactive map showing all developments in Kobape</p>
      </div>
      
      <div className="h-[calc(100vh-200px)]">
        <MapView />
      </div>
    </div>
  )
}
