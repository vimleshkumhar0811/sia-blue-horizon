// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section – always visible */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 text-slate-800 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 md:py-28 lg:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Your Reliable Logistics Partner in{' '}
            <span className="text-indigo-600">Latvia & the EU</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 text-slate-600 font-light">
            SIA BLUE HORIZON provides expert freight coordination, shipment scheduling, import/export support, and supply chain management — connecting businesses across the Baltic region and Europe.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transform transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Get a Freight Quote →
            </Link>
            <Link
              to="/services"
              className="inline-block border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold text-lg px-10 py-4 rounded-full transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services – always visible */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-5">
              Our Core Logistics Services
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              We specialize in efficient coordination to keep your cargo moving smoothly across Latvia, the Baltics, and the EU.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Road Freight Coordination',
                desc: 'Seamless organization of truck transport within Latvia and across EU countries for timely and cost-effective delivery.',
              },
              {
                title: 'Logistics Planning & Scheduling',
                desc: 'Custom shipment planning, route optimization, and real-time scheduling to minimize delays and costs.',
              },
              {
                title: 'Import/Export & Documentation',
                desc: 'Full support for customs clearance, transport documentation, and compliant international cargo handling.',
              },
              {
                title: 'Supply Chain Support',
                desc: 'End-to-end assistance for manufacturers, traders, and distributors — from planning to tracking.',
              },
              {
                title: 'Shipment Tracking',
                desc: 'Advanced monitoring and updates so you always know where your cargo is.',
              },
              {
                title: 'Future Expansion',
                desc: 'Building partnerships, vehicle leasing/purchasing, and growing a wider Baltic logistics network.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
                className="bg-indigo-50/40 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-100/60 group"
              >
                <h3 className="text-2xl font-semibold text-indigo-700 mb-4 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Location & Market Opportunity – always visible */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-5">
              Why Latvia? Strategic Gateway to Europe
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Latvia's prime location on the Baltic Sea, with excellent ports (Riga, Ventspils, Liepaja), road/rail networks, and EU membership, makes it an ideal hub connecting Northern, Central, and Eastern Europe — plus growing e-commerce and trade flows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: '🌍', title: 'Baltic Sea Access', desc: 'Ice-free ports linking to Nordic, German & Polish markets' },
              { icon: '🚚', title: 'EU Road Network', desc: 'Fast cross-border freight to all EU countries' },
              { icon: '📈', title: 'Growing Demand', desc: 'Rising e-commerce & international trade needs reliable coordination' },
              { icon: '🤝', title: 'Future Growth', desc: 'Expanding partnerships & own fleet in the Baltic region' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-100/50 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner / Founder Section – always visible */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-5">
              Meet the Founder
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-indigo-50/30 p-8 md:p-12 rounded-2xl shadow-lg border border-indigo-100/60">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-indigo-700 mb-4">
                  Pragneshkumar Jashbhai Patel
                </h3>
                <p className="text-lg text-slate-600 mb-4">
                  <strong>Born:</strong> 10 December 1982<br />
                  {/* <strong>Passport No:</strong> R5459242 */}
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  With more than <strong>three years</strong> of hands-on experience as a Logistics Coordinator in India, managing transport schedules, shipments, documentation, and stakeholder communication. This practical expertise ensures efficient, reliable operations at SIA BLUE HORIZON.
                </p>
                <p className="text-slate-600 italic">
                  "Building dependable logistics bridges between businesses in the dynamic Baltic and European markets."
                </p>
              </div>
              <div className="text-center">
                {/* Placeholder – replace with real photo when available */}
                <div className="w-48 h-48 mx-auto bg-indigo-100 rounded-full flex items-center justify-center text-6xl text-indigo-500 shadow-md">
                  👨‍💼
                </div>
                <p className="mt-4 text-slate-500 text-sm">Owner & Managing Director</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-slate-600">
            <p className="text-lg">
              Company Registration: <strong>50203716841</strong> | Location: Republic of Latvia<br />
              Initial Investment: ≈ €20,000 — focused on setup, marketing, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section – always visible */}
      <section className="bg-indigo-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-3xl mx-auto">
            Partner with SIA BLUE HORIZON for dependable freight coordination, EU-wide support, and future-ready solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-white text-indigo-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-50 transition-all text-lg"
            >
              Request Coordination Quote
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all text-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;