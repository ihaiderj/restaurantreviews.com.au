'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen py-20 dark:bg-dark-primary transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 dark:text-white transition-colors">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 transition-colors">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-lg transition-colors">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-white transition-colors">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-dark-primary dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-white transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-dark-primary dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-white transition-colors">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-dark-primary dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-center">
                    Thank you for your message. We'll get back to you soon!
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 transition-colors" />
                <div>
                  <h3 className="font-semibold mb-1 dark:text-white transition-colors">Email Us</h3>
                  <a 
                    href="mailto:valuesinfotech@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    support@restaurantreviews.com.au
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 transition-colors" />
                <div>
                  <h3 className="font-semibold mb-1 dark:text-white transition-colors">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">+61 7 5555 5555</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 transition-colors" />
                <div>
                  <h3 className="font-semibold mb-1 dark:text-white transition-colors">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">
                    Gold Coast, Australia
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

