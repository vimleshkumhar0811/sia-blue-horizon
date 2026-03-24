// src/components/Header.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import logo from '/src/assets/logo.jpg'; // adjust path if needed

// Variants remain the same – no change needed
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const mobileMenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 text-slate-800 shadow-md sticky top-0 z-50 backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div variants={logoVariants}>
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
              onClick={closeMenu}
            >
              <motion.img
                src={logo}
                alt="SIA BLUE HORIZON – Logistics & Transport Latvia"
                className="h-14 w-14 object-contain rounded-full shadow-md border-2 border-indigo-200/60"
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <span className="text-2xl md:text-2xl font-bold tracking-tight">
                Sia Blue
                <span className="text-indigo-600 font-semibold"> Horizon</span>
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['/', '/about', '/services', '/contact'].map((path, index) => (
              <motion.div key={path} variants={navItemVariants}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors hover:text-indigo-600 ${
                      isActive
                        ? 'text-indigo-600 border-b-2 border-indigo-500 font-semibold'
                        : 'text-slate-700 hover:text-indigo-600'
                    }`
                  }
                >
                  {['Home', 'About', 'Services', 'Contact'][index]}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-indigo-100/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <motion.svg
              className="w-8 h-8 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                variants={{
                  closed: { d: 'M4 6h16M4 12h16M4 18h16' },
                  open: { d: 'M6 18L18 6M6 6l12 12' },
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      <motion.div
        className="md:hidden overflow-hidden bg-indigo-50/90 border-t border-indigo-100/70 backdrop-blur-sm"
        variants={mobileMenuVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        <nav className="flex flex-col space-y-5 px-6 py-4">
          {['/', '/about', '/services', '/contact'].map((path, index) => (
            <motion.div key={path} variants={navItemVariants}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-xl font-medium py-3 px-5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700 font-semibold shadow-sm'
                      : 'text-slate-700 hover:bg-indigo-100/70 hover:text-indigo-700'
                  }`
                }
                onClick={closeMenu}
              >
                {['Home', 'About', 'Services', 'Contact'][index]}
              </NavLink>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}

export default Header;