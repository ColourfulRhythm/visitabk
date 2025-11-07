"use client"

import { MapPin, Building2, Mountain, Utensils } from 'lucide-react'

export function TourismHero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
              Visit Abeokuta
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Explore the Gateway City
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover historic landmarks, authentic Yoruba culture, vibrant markets, traditional cuisine, and sustainable investment opportunities in Nigeria's cultural heartland
            </p>
          </div>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-semibold text-foreground">16+</div>
              <div className="text-sm text-muted-foreground font-medium">Premium Developments</div>
              <div className="text-xs text-muted-foreground/70">In Kobape</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Mountain className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-semibold text-foreground">137m</div>
              <div className="text-sm text-muted-foreground font-medium">Olumo Rock</div>
              <div className="text-xs text-muted-foreground/70">Historic Landmark</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-semibold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground font-medium">Restaurants</div>
              <div className="text-xs text-muted-foreground/70">Multi-cuisine</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-semibold text-foreground">1.5M</div>
              <div className="text-sm text-muted-foreground font-medium">Years of History</div>
              <div className="text-xs text-muted-foreground/70">Archaeological Site</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button 
                onClick={() => {
                  const mapSection = document.getElementById('map-section')
                  mapSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-base hover:bg-primary/90 transition-colors duration-200 shadow-sm"
              >
                Explore Real Estate
              </button>
              <button 
                onClick={() => {
                  const attractionsSection = document.getElementById('attractions-section')
                  attractionsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 bg-background border border-border text-foreground rounded-lg font-medium text-base hover:bg-muted transition-colors duration-200"
              >
                Plan Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
