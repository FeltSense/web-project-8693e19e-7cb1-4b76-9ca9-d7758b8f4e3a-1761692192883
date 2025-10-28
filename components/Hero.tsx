export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
  {/* Diagonal Split Container */}
  <div className="relative min-h-screen">
    {/* Left Side - Content */}
    <div className="absolute inset-0 w-full md:w-3/5 bg-gradient-to-br from-slate-50 to-white clip-diagonal-left z-10">
      <div className="relative h-full flex items-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 py-24">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              Strategic Excellence Since 2008
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Transform Strategy Into
            <span className="block text-slate-700 mt-2">Measurable Results</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
            Apex Strategic Consulting delivers data-driven business transformation for Fortune 500 companies. Our proven frameworks and industry-specific expertise drive sustainable growth across 12+ sectors.
          </p>

          {/* Key Value Props */}
          <div className="space-y-4 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-4 text-slate-700 font-medium">
                Proven track record with Fortune 500 companies across global markets
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-4 text-slate-700 font-medium">
                Data-driven methodologies and proprietary frameworks for rapid implementation
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-4 text-slate-700 font-medium">
                Industry-specific expertise across 12+ sectors including finance, healthcare, and technology
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200">
              View Case Studies
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4 uppercase tracking-wide font-semibold">Trusted By Industry Leaders</p>
            <div className="flex items-center gap-8 text-slate-400">
              <span className="text-2xl font-bold">Fortune 500</span>
              <span className="text-2xl font-bold">Global 2000</span>
              <span className="text-2xl font-bold">S&P 500</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="absolute inset-0 left-auto w-full md:w-1/2 bg-slate-100">
      <img 
        src="https://picsum.photos/1600/900?random=1" 
        alt="Strategic business consulting meeting with executives" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-50/20"></div>
    </div>
  </div>

  {/* Diagonal Clip Path Styles */}
  <style jsx>{`
    .clip-diagonal-left {
      clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
    }
    
    @media (max-width: 768px) {
      .clip-diagonal-left {
        clip-path: none;
      }
      .absolute.left-auto {
        position: relative;
        width: 100%;
        height: 400px;
      }
    }
  `}</style>
</section>
  );
}