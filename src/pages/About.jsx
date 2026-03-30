// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero / Title Section */}
        <section className="relative bg-gradient-to-br from-indigo-50 via-indigo-100 to-blue-50 text-slate-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_15%_25%,rgba(99,102,241,0.08)_0%,transparent_60%)]" />

        <div className="relative px-6 sm:px-10 md:px-16 lg:px-24 py-28 md:py-36 lg:py-44 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-tight">
            About <span className="text-indigo-600">SIA BLUE HORIZON</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl max-w-5xl mx-auto font-light leading-relaxed">
            Reliable logistics coordination & freight management — connecting businesses across Latvia, the Baltics, and the European Union
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-lg md:prose-xl lg:prose-2xl text-gray-800 max-w-none">
            <p className="mb-10 leading-relaxed text-gray-700 text-lg md:text-xl">
              SIA BLUE HORIZON is a logistics and transport coordination company registered in the <strong>Republic of Latvia</strong> (Registration No. <strong>50203716841</strong>).
            </p>

            <p className="mb-10 leading-relaxed text-gray-700 text-lg md:text-xl">
              We provide professional freight coordination, cargo handling support, shipment scheduling, import/export documentation, and supply chain management services — helping businesses move goods efficiently within Latvia, across the Baltic region, and throughout the European Union.
            </p>

            <div className="my-12 grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
                  Our Core Services
                </h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    Road freight coordination within Latvia and across EU countries
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    Logistics planning, route optimization & shipment scheduling
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    Import and export cargo coordination & customs documentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    Real-time shipment tracking and supply chain visibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    End-to-end support for manufacturers, traders & distributors
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
                  Why Latvia?
                </h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    Strategic Baltic Sea location with major ice-free ports (Riga, Ventspils, Liepāja)
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    Excellent road, rail and multimodal connections to Northern, Central & Eastern Europe
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    Full EU membership — seamless cross-border operations
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 text-2xl mr-4 mt-1">•</span>
                    Growing e-commerce and international trade driving demand for reliable logistics
                  </li>
                </ul>
              </motion.div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mt-16 mb-8">
              Founder & Leadership
            </h2>

            <div className="bg-indigo-50/40 p-8 md:p-12 rounded-2xl border border-indigo-100 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
                Pragneshkumar Jashbhai Patel
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                <strong>Date of Birth:</strong> 10 December 1982<br />
                {/* <strong>Passport No:</strong> R5459242 */}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                The company is led by Pragneshkumar Jashbhai Patel, who brings more than <strong>three years</strong> of professional experience as a Logistics Coordinator in India. His background includes managing transport schedules, coordinating multi-party shipments, handling documentation, and maintaining clear communication between suppliers, carriers, and clients.
              </p>
              <p className="text-lg italic text-indigo-700 font-medium border-l-4 border-indigo-500 pl-6 py-2">
                "Our goal is to build efficient, trustworthy logistics bridges that support businesses in one of Europe's most dynamic transport corridors."
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mt-16 mb-8">
              Our Vision & Growth Plans
            </h2>

            <p className="mb-8 leading-relaxed text-gray-700 text-lg md:text-xl">
              Starting with professional coordination services, SIA BLUE HORIZON plans to expand by:
            </p>
            <ul className="list-disc pl-8 mb-10 space-y-3 text-gray-700 text-lg md:text-xl">
              <li>Forming strategic partnerships with established transport operators</li>
              <li>Leasing or acquiring commercial vehicles to increase direct control</li>
              <li>Developing a wider logistics network throughout the Baltic States</li>
              <li>Creating local employment opportunities in Latvia as the business scales</li>
            </ul>

            <p className="mb-10 leading-relaxed text-gray-700 text-lg md:text-xl font-medium italic border-l-4 border-indigo-600 pl-6 py-3">
              With an initial investment of approximately €20,000 focused on setup, marketing, and operations, we are committed to contributing to Latvia's economy through reliable logistics services, international trade facilitation, and long-term sustainable growth.
            </p>
          </div>

          {/* CTA at bottom */}
          <div className="mt-16 md:mt-20 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transform transition-all hover:scale-[1.03]"
            >
              Get in Touch – Start Your Logistics Partnership →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;