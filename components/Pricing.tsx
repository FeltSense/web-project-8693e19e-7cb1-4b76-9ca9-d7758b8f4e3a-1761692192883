export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Strategic Consulting Packages
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Choose the engagement model that aligns with your business transformation goals
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Essential Tier */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Essential</h3>
        <p className="text-gray-600 mb-6">For focused strategic initiatives</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-slate-900">$29</span>
          <span className="text-gray-600 block text-sm mt-1">one-time engagement</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Industry-specific expertise in 3 sectors</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Data-driven methodologies and frameworks</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Dedicated consultant team</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>20% improvement in key metrics</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Implementation guidance included</span>
          </li>
        </ul>

        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="w-full bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Professional Tier - Popular */}
      <div className="bg-white border-2 border-blue-600 rounded-lg shadow-md p-8 relative transform md:scale-105 hover:shadow-lg transition-all">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
        <p className="text-gray-600 mb-6">For comprehensive transformation</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-slate-900">$29</span>
          <span className="text-gray-600 block text-sm mt-1">one-time engagement</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Industry-specific expertise across 8 sectors</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Advanced data-driven methodologies</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Dedicated senior consultant team</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Average 40% improvement in key metrics</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>End-to-end implementation support</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Proven Fortune 500 methodologies</span>
          </li>
        </ul>

        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Enterprise Tier */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
        <p className="text-gray-600 mb-6">For organization-wide excellence</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-slate-900">$29</span>
          <span className="text-gray-600 block text-sm mt-1">one-time engagement</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Industry-specific expertise across all 12+ sectors</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Proprietary data-driven frameworks</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Executive-level senior consultant teams</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Guaranteed 40%+ improvement in metrics</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Complete end-to-end implementation</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Proven Fortune 500 track record</span>
          </li>
        </ul>

        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="w-full bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-gray-600">
        All packages include our proven methodologies trusted by Fortune 500 companies
      </p>
    </div>
  </div>
</section>
  );
}