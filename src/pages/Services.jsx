// src/pages/Services.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: "Road Freight Coordination",
      description: "Full organization of truck transport within Latvia and across all EU countries — ensuring timely, cost-effective and compliant delivery.",
      icon: "🚚"
    },
    {
      title: "Logistics Planning & Scheduling",
      description: "Custom route optimization, multi-stop planning, real-time scheduling and capacity matching to minimize delays and reduce transport costs.",
      icon: "🗓️"
    },
    {
      title: "Import / Export Cargo Coordination",
      description: "Complete support for cross-border shipments — customs documentation, CMR preparation, INCOTERMS advice and EU regulatory compliance.",
      icon: "🌍"
    },
    {
      title: "Shipment Tracking & Visibility",
      description: "Advanced real-time tracking, status updates, proof-of-delivery and proactive communication so you always know where your cargo is.",
      icon: "📍"
    },
    {
      title: "Supply Chain Support for Businesses",
      description: "End-to-end coordination for manufacturers, traders, distributors and e-commerce companies — from order placement to final delivery.",
      icon: "🔗"
    },
    {
      title: "Documentation & Customs Handling",
      description: "Preparation and management of all transport documents (CMR, T1/T2, e-AD, export declarations) — reducing administrative burden.",
      icon: "📄"
    },
    {
      title: "Future Fleet & Network Expansion",
      description: "Planned growth through strategic partnerships, vehicle leasing/purchasing and building a wider logistics network across the Baltic region.",
      icon: "🚛"
    },
    {
      title: "Tailored Solutions & Consulting",
      description: "Personalized logistics advice, cost analysis, alternative routing options and dedicated support for regular or project-based shipments.",
      icon: "🤝"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 text-slate-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.08)_0%,transparent_60%)]" />

        <div className="relative px-6 sm:px-10 md:px-16 lg:px-24 py-28 md:py-36 lg:py-44 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8">
            Our Core <span className="text-indigo-600">Services</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl max-w-5xl mx-auto font-light text-slate-600 leading-relaxed">
            Professional freight coordination, transport planning and supply chain support — connecting businesses across Latvia, the Baltics and the European Union
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(99,102,241,0.15)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-indigo-100/60 overflow-hidden group hover:border-indigo-300/60 transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-blue-500" />

              <div className="p-7 md:p-8 lg:p-9">
                <div className="text-5xl md:text-6xl mb-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg md:text-xl px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transform transition-all hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-300/50"
          >
            Request Freight Quote or Consultation →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Services;