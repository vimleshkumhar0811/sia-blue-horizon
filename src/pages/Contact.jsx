// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.length < 10) newErrors.message = 'Message should be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission (replace with real API call later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero / Title */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-indigo-100 to-blue-50 text-slate-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_15%_25%,rgba(99,102,241,0.08)_0%,transparent_60%)]" />

        <div className="relative px-6 sm:px-10 md:px-16 lg:px-24 py-28 md:py-36 lg:py-44 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto font-light text-slate-600 leading-relaxed">
            We're ready to assist with your freight coordination, logistics planning, and transport needs across Latvia and the EU
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 lg:gap-16">

          {/* Left - Contact Info */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-indigo-100/70"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="text-4xl mr-5 text-indigo-600">✉️</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">Email</h3>
                    <a
                      href="mailto:info@siabluehorizon.com"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors mt-1 block text-lg"
                    >
                      info@siabluehorizon.com
                    </a>
                  </div>
                </div>

                {/* Uncomment & update when you have real phone / address */}
                {/* <div className="flex items-start">
                  <div className="text-4xl mr-5 text-indigo-600">📞</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">Phone</h3>
                    <a
                      href="tel:+37120000000"
                      className="text-indigo-600 hover:text-indigo-800 transition-colors mt-1 block"
                    >
                      +371 2000 0000
                    </a>
                  </div>
                </div> */}

                {/* <div className="flex items-start">
                  <div className="text-4xl mr-5 text-indigo-600">📍</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">Office</h3>
                    <p className="text-slate-600 mt-1">
                      SIA BLUE HORIZON<br />
                      Jēkabpils, Latvia<br />
                      (or your actual address)
                    </p>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <div className="md:col-span-3">
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 border border-indigo-100/70"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-slate-700 text-lg mb-8">
                    Thank you for reaching out.<br />
                    We will respond within 24–48 hours regarding your logistics inquiry.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-medium mb-2 text-lg">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all text-lg ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-medium mb-2 text-lg">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all text-lg ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-700 font-medium mb-2 text-lg">
                      Your Message / Inquiry
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Please tell us about your freight needs, route, cargo type, volume, or any other logistics question..."
                      className={`w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all resize-y min-h-[160px] text-lg ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg py-5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;