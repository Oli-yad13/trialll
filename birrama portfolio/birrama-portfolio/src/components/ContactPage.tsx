'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'communications@birrama.et',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+251944131837',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Addis Ababa, Ethiopia',
      description: 'We\'d love to meet you'
    }
  ];

  const projectTypes = [
    'Brand Identity',
    'Digital Marketing',
    'Web Design',
    'Video Production',
    'Social Media',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Not sure yet'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="px-8 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>

            <Link
              href="/"
              className="text-2xl font-bold"
              style={{ color: '#294C60' }}
            >
              BIRRAMA
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Let&apos;s create something
                <br />
                <span className="gradient-text italic">amazing together</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Ready to transform your brand? We&apos;d love to hear about your project 
                and discuss how we can help bring your vision to life.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl border border-gray-200 hover:border-birrama-blue transition-colors group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                       style={{ backgroundColor: '#3A6685' }}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#294C60' }}>
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600">
                    {info.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: '#294C60' }}>
                  Start Your Project
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: '#3A6685' }}>
                      <Send size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#294C60' }}>
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birrama-blue focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birrama-blue focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birrama-blue focus:border-transparent transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birrama-blue focus:border-transparent transition-colors"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birrama-blue focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-birrama-blue focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-gradient-gold-500 to-gradient-gold-700 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <Send size={20} />
                          Send Message
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Additional Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#294C60' }}>
                    Why Choose Birrama?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full mt-3" style={{ backgroundColor: '#3A6685' }}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Creative Excellence</h4>
                        <p className="text-gray-600">We combine strategic thinking with creative innovation to deliver exceptional results.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full mt-3" style={{ backgroundColor: '#3A6685' }}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                        <p className="text-gray-600">Our portfolio speaks for itself with successful projects across various industries.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full mt-3" style={{ backgroundColor: '#3A6685' }}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Collaborative Approach</h4>
                        <p className="text-gray-600">We work closely with you throughout the entire process to ensure your vision comes to life.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full mt-3" style={{ backgroundColor: '#3A6685' }}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Timely Delivery</h4>
                        <p className="text-gray-600">We respect deadlines and deliver high-quality work on time, every time.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl" style={{ backgroundColor: '#F8FAFC' }}>
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#294C60' }}>
                    Quick Response
                  </h4>
                  <p className="text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent projects, 
                    feel free to call us directly.
                  </p>
                  <div className="flex items-center gap-2 text-birrama-blue font-medium">
                    <Phone size={16} />
                    <span>+251944131837</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
