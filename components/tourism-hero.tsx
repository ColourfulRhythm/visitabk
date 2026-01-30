"use client"

import { MapPin, Building2, Mountain, Utensils, Sparkles, Waves, Sun, Crown, Gem, Infinity } from 'lucide-react'

export function TourismHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen flex items-center">
      {/* Ultra-Luxury Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
        <div className="text-center space-y-12">
          <div className="space-y-8 animate-fadeInUp">
            {/* Ultra-Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 via-amber-400/15 to-amber-500/20 border border-amber-500/30 rounded-full text-sm font-semibold text-amber-300 mb-6 backdrop-blur-xl shadow-2xl shadow-amber-500/10">
              <Crown className="h-5 w-5 text-amber-400" />
              <span className="tracking-[0.2em] uppercase">Island of the Gods</span>
              <Gem className="h-5 w-5 text-amber-400" />
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-headline font-bold text-white leading-[0.95] tracking-tight">
              <span className="block bg-gradient-to-r from-white via-amber-50 to-white bg-clip-text text-transparent">
                Discover
              </span>
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Bali
              </span>
            </h1>
            
            <div className="space-y-4 max-w-5xl mx-auto">
              <p className="text-3xl md:text-4xl lg:text-5xl text-white/95 max-w-4xl mx-auto leading-tight font-light">
                Where Ancient Spirituality Meets
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-amber-400 max-w-4xl mx-auto leading-tight font-medium italic">
                Unparalleled Luxury
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mt-8">
              An exclusive sanctuary for the world's most discerning travelers. Experience pristine beaches, world-class wellness retreats, Michelin-starred dining, and ultra-luxury real estate investments in one of the world's most sought-after destinations.
            </p>
          </div>
          
          {/* Ultra-Luxury Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-16">
            <div className="text-center space-y-4 group cursor-pointer">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500 shadow-2xl shadow-amber-500/20">
                  <Building2 className="h-10 w-10 text-amber-400" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white font-serif">20+</div>
              <div className="text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-[0.15em]">Ultra-Luxury Estates</div>
              <div className="text-xs text-slate-400 font-light">Private Villas & Resorts</div>
            </div>
            
            <div className="text-center space-y-4 group cursor-pointer">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500 shadow-2xl shadow-amber-500/20">
                  <Waves className="h-10 w-10 text-amber-400" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white font-serif">50+</div>
              <div className="text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-[0.15em]">Pristine Beaches</div>
              <div className="text-xs text-slate-400 font-light">Private & Exclusive</div>
            </div>
            
            <div className="text-center space-y-4 group cursor-pointer">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500 shadow-2xl shadow-amber-500/20">
                  <Utensils className="h-10 w-10 text-amber-400" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white font-serif">30+</div>
              <div className="text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-[0.15em]">Michelin Restaurants</div>
              <div className="text-xs text-slate-400 font-light">World-Class Dining</div>
            </div>
            
            <div className="text-center space-y-4 group cursor-pointer">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500 shadow-2xl shadow-amber-500/20">
                  <Sun className="h-10 w-10 text-amber-400" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white font-serif">365</div>
              <div className="text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-[0.15em]">Days of Paradise</div>
              <div className="text-xs text-slate-400 font-light">Perfect Climate</div>
            </div>
          </div>

          {/* Ultra-Premium Call to Action */}
          <div className="pt-12 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button 
                onClick={() => {
                  const mapSection = document.getElementById('map-section')
                  mapSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 transform hover:scale-105 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 tracking-wide">Explore Exclusive Properties</span>
                <MapPin className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const attractionsSection = document.getElementById('attractions-section')
                  attractionsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-10 py-5 bg-transparent border-2 border-amber-500/50 text-amber-400 rounded-2xl font-bold text-lg hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
              >
                Curate Your Experience
              </button>
            </div>
            <p className="text-sm text-slate-400 mt-6 font-light italic tracking-wide">
              Reserved for those who demand nothing but the extraordinary
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
