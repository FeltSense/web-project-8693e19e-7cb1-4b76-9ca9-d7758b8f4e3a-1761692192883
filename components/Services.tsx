export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Strategic Consulting Excellence
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Delivering measurable results through proven methodologies and deep industry expertise
      </p>
    </div>

    <div className="space-y-4">
      {/* Accordion Item 1 */}
      <details className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Proven Track Record</h3>
              <p className="text-sm text-slate-500 mt-1">Fortune 500 partnerships</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-8 pb-6 pt-2 border-t border-gray-100">
          <p className="text-slate-600 leading-relaxed mb-4">
            Our consulting practice has successfully partnered with over 150 Fortune 500 companies across multiple continents, delivering transformative solutions that drive sustainable growth and competitive advantage.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>150+ Fortune 500 client engagements completed</span>
            </li>
            <li className="flex items-start gap-3 text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>98% client satisfaction and retention rate</span>
            </li>
            <li className="flex items-start gap-3 text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>$2.5B+ in documented value creation for clients</span>
            </li>
          </ul>
        </div>
      </details>

      {/* Accordion Item 2 */}
      <details className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Data-Driven Methodologies</h3>
              <p className="text-sm text-slate-500 mt-1">Evidence-based frameworks</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-8 pb-6 pt-2 border-t border-gray-100">
          <p className="text-slate-600 leading-relaxed mb-4">
            We leverage advanced analytics, proprietary frameworks, and cutting-edge research to ensure every recommendation is backed by solid data and proven to deliver results in real-world business environments.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Proprietary diagnostic tools and assessment frameworks</span>
            </li>
            <li className="flex items-start gap-3 text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Advanced predictive modeling and scenario planning</span>
            </li>
            <li className="flex items-start gap-3 text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Real-time performance dashboards and KPI tracking</span>
            </li>
          </ul>
        </div>
      </details>

      {/* Accordion Item 3 */}
      <details className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Industry-Specific Expertise</h3>
              <p className="text-sm text-slate-500 mt-1">12+ sectors covered</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-8 pb-6 pt-2 border-t border-gray-100">
          <p className="text-slate-600 leading-relaxed mb-4">
            Our consultants bring deep domain knowledge across diverse industries, understanding the unique challenges, regulatory landscapes, and competitive dynamics that shape each sector's strategic imperatives.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Financial Services</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Healthcare & Life Sciences</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Technology & Software</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Manufacturing & Industrial</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Retail & Consumer Goods</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Energy & Utilities</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Telecommunications</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm">Transportation & Logistics</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 italic">+ 4 additional specialized sectors</p>
        </div>
      </details>

      {/* Accordion Item 4 */}
      <details className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Measurable Business Impact</h3>
              <p className="text-sm text-slate-500 mt-1">40% average improvement</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-8 pb-6 pt-2 border-t border-gray-100">
          <p className="text-slate-600 leading-relaxed mb-4">
            Our engagements consistently deliver substantial, quantifiable improvements across critical business metrics. We don't just provide recommendations—we partner with you to ensure successful implementation and sustained results.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">40%</div>
              <div className="text-sm text-slate-600">Average improvement in key business metrics</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">6-12</div>
              <div className="text-sm text-slate-600">Months to realize measurable ROI</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">3.5x</div>
              <div className="text-sm text-slate-600">Average return on consulting investment</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">92%</div>
              <div className="text-sm text-slate-600">Projects delivered on time and budget</div>
            </div>
          </div>
        </div>
      </details>
    </div>

    <div className="mt-12 text-center">
      <p className="text-slate-600 mb-6">Ready to transform your business performance?</p>
      <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm">
        Schedule a Consultation
      </button>
    </div>
  </div>
</section>
  );
}