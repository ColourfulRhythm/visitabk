"use client"

import { MapPin, Building2, Landmark, TrendingUp, Trees, Users } from 'lucide-react'

export function TourismHero() {
  return (
    <div className="relative overflow-hidden bg-[#0a0f0d] min-h-screen flex items-center">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fogDrift1 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fogDrift2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes fogDrift3 {
          0% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(0%) translateY(-10px); }
          100% { transform: translateX(50%) translateY(0); }
        }
        @keyframes fogPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes mistRise {
          0% { transform: translateY(20px); opacity: 0.2; }
          50% { transform: translateY(-10px); opacity: 0.4; }
          100% { transform: translateY(20px); opacity: 0.2; }
        }
        .fog-layer-1 {
          animation: fogDrift1 25s linear infinite, fogPulse 8s ease-in-out infinite;
        }
        .fog-layer-2 {
          animation: fogDrift2 35s linear infinite, fogPulse 12s ease-in-out infinite;
        }
        .fog-layer-3 {
          animation: fogDrift3 20s ease-in-out infinite;
        }
        .mist-rise {
          animation: mistRise 15s ease-in-out infinite;
        }
      `}</style>

      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0d] via-[#0f1512] to-[#0a0f0d]"></div>
        
        {/* Hill Silhouette Background */}
        <div className="absolute inset-0 opacity-[0.15]">
          <svg 
            viewBox="0 0 1440 900" 
            className="absolute bottom-0 w-full h-full" 
            preserveAspectRatio="xMidYMax slice"
          >
            <defs>
              <linearGradient id="hillGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d4a3e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1a2e26" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="hillGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d5a4e" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2d4a3e" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="hillGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4d6a5e" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3d5a4e" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            
            {/* Distant mountains - most faded */}
            <path
              d="M0 600 Q200 400 400 500 T800 420 T1200 480 T1440 400 L1440 900 L0 900 Z"
              fill="url(#hillGradient3)"
            />
            
            {/* Mid-range hills */}
            <path
              d="M0 650 Q150 520 350 580 T700 500 T1000 560 T1300 520 T1440 580 L1440 900 L0 900 Z"
              fill="url(#hillGradient2)"
            />
            
            {/* Foreground hills - most prominent */}
            <path
              d="M0 720 Q100 620 250 680 T550 600 T850 660 T1150 620 T1440 700 L1440 900 L0 900 Z"
              fill="url(#hillGradient1)"
            />
          </svg>
        </div>
        
        {/* Animated Fog Layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Fog Layer 1 - Slow moving, bottom */}
          <div className="fog-layer-1 absolute bottom-0 left-0 w-[200%] h-[40%] opacity-30">
            <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="fogGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#a8c4b8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7ab89a" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <ellipse cx="400" cy="350" rx="500" ry="150" fill="url(#fogGrad1)" />
              <ellipse cx="900" cy="320" rx="400" ry="120" fill="url(#fogGrad1)" />
              <ellipse cx="1300" cy="360" rx="350" ry="100" fill="url(#fogGrad1)" />
            </svg>
          </div>
          
          {/* Fog Layer 2 - Medium speed, mid height */}
          <div className="fog-layer-2 absolute bottom-[15%] left-0 w-[200%] h-[35%] opacity-25">
            <svg viewBox="0 0 1440 350" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="fogGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="60%" stopColor="#c4d4cc" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8ba89a" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <ellipse cx="300" cy="280" rx="450" ry="130" fill="url(#fogGrad2)" />
              <ellipse cx="800" cy="250" rx="380" ry="110" fill="url(#fogGrad2)" />
              <ellipse cx="1200" cy="290" rx="420" ry="100" fill="url(#fogGrad2)" />
            </svg>
          </div>
          
          {/* Fog Layer 3 - Wispy, higher */}
          <div className="fog-layer-3 absolute bottom-[30%] left-0 w-full h-[25%] opacity-20">
            <svg viewBox="0 0 1440 250" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="fogGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#d4e4dc" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <ellipse cx="500" cy="180" rx="600" ry="80" fill="url(#fogGrad3)" />
              <ellipse cx="1000" cy="150" rx="500" ry="70" fill="url(#fogGrad3)" />
            </svg>
          </div>
          
          {/* Rising Mist */}
          <div className="mist-rise absolute bottom-[10%] left-[10%] w-[30%] h-[30%] opacity-15">
            <div className="w-full h-full bg-gradient-to-t from-[#7ab89a]/30 via-[#a8c4b8]/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          <div className="mist-rise absolute bottom-[15%] right-[15%] w-[25%] h-[25%] opacity-10" style={{ animationDelay: '-5s' }}>
            <div className="w-full h-full bg-gradient-to-t from-[#8bc4a8]/25 via-[#b8d4c8]/15 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
        
        {/* Organic shape accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#2d4a3e]/20 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#8b5a2b]/10 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
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
