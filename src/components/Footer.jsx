// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.jpg';   // ← same logo as in Header

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-b from-indigo-50 to-blue-50 text-slate-700 border-t border-indigo-100/70"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Column 1 - Brand + Logo + Tagline */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="SIA BLUE HORIZON"
                className="h-14 w-14 object-contain rounded-full border-2 border-indigo-200/40 shadow-md"
              />
              <h3 className="text-2xl md:text-2xl font-bold text-indigo-700 tracking-tight">
                Sia Blue
                <span className="text-indigo-600 font-semibold"> Horizon</span>
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-md">
              Reliable logistics & freight coordination services in Latvia – connecting Baltic and EU markets with efficient transport solutions.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-indigo-700 mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3 - Contact Information */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-indigo-700 mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-3 text-xl">✉️</span>
                <a
                  href="mailto:info@siabluehorizon.com"
                  className="hover:text-indigo-600 transition-colors"
                >
                  info@siabluehorizon.com
                </a>
              </li>

              {/* Add real phone / address later if needed */}
              {/* <li className="flex items-center">
                <span className="text-indigo-500 mr-3 text-xl">📞</span>
                <a href="tel:+371xxxxxxx" className="hover:text-indigo-600 transition-colors">
                  +371 XXXX XXXX
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-3 text-xl">📍</span>
                <div>
                  <p className="font-medium text-slate-700">Jēkabpils, Latvia</p>
                  <p className="text-sm">Bebru iela 22-40, LV-5201</p>
                </div>
              </li> */}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Copyright Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-indigo-100/60 text-center text-slate-500 text-sm"
        >
          <p>
            © {new Date().getFullYear()} SIA BLUE HORIZON. All rights reserved.
          </p>
          <p className="mt-2 text-slate-400">
            Efficient • Reliable • Baltic & EU Logistics Coordination
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;