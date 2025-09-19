"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Header from "@/components/layout/Header"
import { Phone, Mail, CheckCircle, AlertCircle } from "lucide-react"
import { supabase, type ContactFormData } from "@/lib/supabase"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    companyOrganization: '',
    email: '',
    helpType: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    setSubmitMessage('')

    try {
      // Prepare data for Supabase
      const contactData: ContactFormData = {
        full_name: formData.fullName,
        role: formData.role || null,
        company_organization: formData.companyOrganization || null,
        email: formData.email,
        help_type: formData.helpType || null,
        message: formData.message || null
      }

      const { error } = await supabase
        .from('contacts')
        .insert([contactData])

      if (error) {
        throw error
      }

      setSubmitStatus('success')
      setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.')
      
      // Reset form
      setFormData({
        fullName: '',
        role: '',
        companyOrganization: '',
        email: '',
        helpType: '',
        message: ''
      })

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <div className="pt-32 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight max-w-6xl mx-auto px-6 mb-8"
        >
          Let&apos;s Cultivate the Future,<br />
          Together.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-4xl mx-auto px-6 leading-relaxed"
        >
          Whether you are a farmer, a potential partner, an investor, or a member of the press, we want to hear from you. Reach out to learn more about our mission to build a resilient and prosperous future for African agriculture.
        </motion.p>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 text-lg"
                />
              </div>

              {/* Role or Position */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Role or Position *
                </label>
                <input
                  type="text"
                  name="role"
                  placeholder="Enter your role or position"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 text-lg"
                />
              </div>

              {/* Company / Organization */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  name="companyOrganization"
                  placeholder="Enter your company or organization"
                  value={formData.companyOrganization}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 text-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 text-lg"
                />
              </div>

              {/* How can we help */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  How can we help you? *
                </label>
                <div className="relative">
                  <select
                    name="helpType"
                    value={formData.helpType}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 text-lg appearance-none pr-8"
                  >
                    <option value="">Select an option</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="investor">Investor Relations</option>
                    <option value="press">Press & Media Inquiries</option>
                    <option value="farmer">Joining Our Farmer Network</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message (Optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us more about how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 text-lg resize-none"
                />
              </div>

              {/* Submit Status Message */}
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitMessage}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-gray-900 text-white py-4 px-8 text-lg font-medium hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <span>SEND MESSAGE</span>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

          {/* Right Side - Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Get in Touch<br />
                Directly
              </h2>
            </div>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-xl text-gray-900">+0116914888</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-xl text-gray-900">info@mavuno.et</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}