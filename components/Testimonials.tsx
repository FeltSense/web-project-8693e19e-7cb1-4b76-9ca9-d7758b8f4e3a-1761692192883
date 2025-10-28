export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Trusted by Industry Leaders
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        See how we've helped organizations achieve measurable results through strategic consulting
      </p>
    </div>

    {/* Video Testimonials Grid */}
    <div className="grid lg:grid-cols-2 gap-8 mb-12">
      {/* Featured Video Testimonial */}
      <div className="lg:row-span-2">
        <div className="bg-slate-900 rounded-lg overflow-hidden shadow-md h-full flex flex-col">
          <div className="relative aspect-video bg-slate-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <p className="text-slate-100 text-lg mb-6 flex-1">
              "Apex Strategic Consulting transformed our operational efficiency by 40% within six months. Their data-driven approach and hands-on implementation support made all the difference. The ROI was evident within the first quarter."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 font-semibold mr-4">
                MR
              </div>
              <div>
                <div className="font-semibold text-white">Michael Rodriguez</div>
                <div className="text-sm text-slate-400">Chief Operating Officer, TechVenture Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonial 2 */}
      <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm">
        <div className="relative aspect-video bg-slate-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-slate-700 mb-4">
            "Their market entry strategy helped us successfully launch in three new regions. The competitive analysis and risk mitigation framework were exceptional."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 font-semibold mr-3 text-sm">
              SK
            </div>
            <div>
              <div className="font-semibold text-slate-900">Sarah Kim</div>
              <div className="text-sm text-slate-600">VP of Strategy, GlobalReach Solutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonial 3 */}
      <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm">
        <div className="relative aspect-video bg-slate-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-slate-700 mb-4">
            "The organizational restructuring plan they developed reduced our overhead by 25% while improving team productivity. Their change management expertise was invaluable."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 font-semibold mr-3 text-sm">
              JC
            </div>
            <div>
              <div className="font-semibold text-slate-900">James Chen</div>
              <div className="text-sm text-slate-600">CEO, Meridian Financial Group</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Text Testimonial */}
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="max-w-4xl mx-auto">
        <svg className="w-10 h-10 text-slate-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-xl text-slate-700 mb-6 leading-relaxed">
          "Working with Apex Strategic Consulting was a game-changer for our digital transformation initiative. They didn't just provide recommendations—they rolled up their sleeves and worked alongside our team to ensure successful implementation. Our customer satisfaction scores increased by 35%, and we've seen a 50% reduction in process bottlenecks."
        </p>
        <div className="flex items-center">
          <div className="w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 font-semibold mr-4">
            EP
          </div>
          <div>
            <div className="font-semibold text-slate-900 text-lg">Emily Patterson</div>
            <div className="text-slate-600">Chief Digital Officer, Horizon Enterprises</div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
        <div className="text-sm text-slate-600">Projects Delivered</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
        <div className="text-sm text-slate-600">Client Satisfaction</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
        <div className="text-sm text-slate-600">Industries Served</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-900 mb-1">15+</div>
        <div className="text-sm text-slate-600">Years Experience</div>
      </div>
    </div>
  </div>
</section>
  );
}