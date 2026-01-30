"use client"

import { MapPin, Building2, Landmark, TrendingUp, Trees, Users } from 'lucide-react'

export function TourismHero() {
  return (
    <div className="relative overflow-hidden bg-[#0a0f0d] min-h-screen flex items-center">
      {/* Background with Video/Image of Hills */}
      <div className="absolute inset-0">
        {/* Video background of misty hills */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
        >
          <source 
            src="https://videos.pexels.com/video-files/2330708/2330708-hd_1920_1080_30fps.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d] via-[#0a0f0d]/80 to-[#0a0f0d]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-[#0a0f0d]/60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d4a3e]/30 border border-[#2d4a3e]/40 rounded-full text-sm text-[#7ab89a]">
              <MapPin className="h-4 w-4" />
              <span className="tracking-wide">Kobape, Abeokuta · Ogun State, Nigeria</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                The New Centre of
                <span className="block text-[#c4a77d] mt-2">Ogun State</span>
              </h1>
              
              <p className="text-xl text-[#a8b5af] max-w-xl leading-relaxed">
                Kobape is emerging as Nigeria's most strategic real estate corridor — positioned at the intersection of Lagos, Ibadan, and the new Ogun industrial zones. This is where vision meets opportunity.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <div className="text-4xl font-serif text-white">20+</div>
                <div className="text-sm text-[#7ab89a] uppercase tracking-wider">Active Developments</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-serif text-white">500+</div>
                <div className="text-sm text-[#7ab89a] uppercase tracking-wider">Hectares Available</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-serif text-white">45min</div>
                <div className="text-sm text-[#7ab89a] uppercase tracking-wider">From Lagos</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-serif text-white">30%</div>
                <div className="text-sm text-[#7ab89a] uppercase tracking-wider">Yearly Appreciation</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => {
                  const developmentsSection = document.getElementById('developments-section')
                  developmentsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-[#c4a77d] text-[#0a0f0d] rounded-lg font-semibold text-base hover:bg-[#d4b78d] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Developments</span>
                <Building2 className="h-5 w-5" />
              </button>
              <button 
                onClick={() => {
                  const attractionsSection = document.getElementById('attractions-section')
                  attractionsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-transparent border border-[#2d4a3e] text-[#7ab89a] rounded-lg font-semibold text-base hover:bg-[#2d4a3e]/20 transition-all duration-300"
              >
                Explore the Area
              </button>
            </div>
          </div>
          
          {/* Right Side - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#151d19] to-[#0f1512] border border-[#2d4a3e]/30 rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 bg-[#2d4a3e]/30 rounded-xl flex items-center justify-center">
                  <Landmark className="h-6 w-6 text-[#7ab89a]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Historic Heritage</h3>
                <p className="text-sm text-[#a8b5af] leading-relaxed">Home to Olumo Rock and rich Egba cultural history spanning centuries.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#151d19] to-[#0f1512] border border-[#2d4a3e]/30 rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 bg-[#2d4a3e]/30 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[#7ab89a]" />
                </div>
                <h3 className="text-lg font-semibold text-white">High Growth Zone</h3>
                <p className="text-sm text-[#a8b5af] leading-relaxed">Positioned along Nigeria's most active economic corridor with consistent appreciation.</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="bg-gradient-to-br from-[#151d19] to-[#0f1512] border border-[#2d4a3e]/30 rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 bg-[#2d4a3e]/30 rounded-xl flex items-center justify-center">
                  <Trees className="h-6 w-6 text-[#7ab89a]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Natural Beauty</h3>
                <p className="text-sm text-[#a8b5af] leading-relaxed">Rolling hills, lush landscapes, and serene environment away from urban congestion.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#151d19] to-[#0f1512] border border-[#2d4a3e]/30 rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 bg-[#2d4a3e]/30 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#7ab89a]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Growing Community</h3>
                <p className="text-sm text-[#a8b5af] leading-relaxed">Join forward-thinking investors building the future of Nigerian real estate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
