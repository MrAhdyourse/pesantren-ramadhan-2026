'use client';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating moons - optimized with will-change */}
      <div 
        className="absolute top-20 right-[10%] animate-float-slow"
        style={{ willChange: 'transform' }}
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200/30 to-amber-400/20" />
          <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-40">
            🌙
          </div>
        </div>
      </div>

      <div 
        className="absolute top-40 left-[5%] animate-float-medium animation-delay-1000"
        style={{ willChange: 'transform' }}
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-200/20 to-amber-400/10" />
          <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-30">
            ⭐
          </div>
        </div>
      </div>

      {/* Floating stars */}
      <div 
        className="absolute top-1/3 right-[15%] animate-float-fast animation-delay-500"
        style={{ willChange: 'transform' }}
      >
        <span className="text-2xl opacity-20">✦</span>
      </div>

      <div 
        className="absolute top-2/3 left-[8%] animate-float-slow animation-delay-2000"
        style={{ willChange: 'transform' }}
      >
        <span className="text-3xl opacity-15">✧</span>
      </div>

      <div 
        className="absolute bottom-1/4 right-[20%] animate-float-medium animation-delay-1500"
        style={{ willChange: 'transform' }}
      >
        <span className="text-xl opacity-25">✦</span>
      </div>

      {/* Islamic geometric shapes - GPU accelerated */}
      <div 
        className="absolute top-1/4 left-[3%] animate-rotate-slow opacity-10"
        style={{ willChange: 'transform' }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-emerald-600">
          <polygon
            points="30,5 55,30 30,55 5,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div 
        className="absolute bottom-1/3 right-[5%] animate-rotate-slow-reverse opacity-10"
        style={{ willChange: 'transform' }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-teal-600">
          <polygon
            points="40,10 70,40 40,70 10,40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon
            points="40,20 60,40 40,60 20,40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Glowing orbs - reduced blur for performance */}
      <div 
        className="absolute top-1/2 left-[2%] w-32 h-32 bg-gradient-radial from-emerald-400/10 to-transparent rounded-full blur-xl animate-pulse-slow"
        style={{ willChange: 'opacity, transform' }}
      />
      <div 
        className="absolute bottom-1/4 right-[3%] w-40 h-40 bg-gradient-radial from-amber-400/10 to-transparent rounded-full blur-xl animate-pulse-slow animation-delay-3000"
        style={{ willChange: 'opacity, transform' }}
      />
    </div>
  );
}
