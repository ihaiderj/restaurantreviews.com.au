'use client'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function AboutUs() {
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
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white transition-colors">
          Restaurant Reviews 
          </h1>
          <h4 className="text-xl text-gray-600 dark:text-gray-400 transition-colors">
          Your Premier Destination for Dining Discovery 
          </h4>
          <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors">
          Connecting food lovers with exceptional restaurants. 
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop"
              alt="Restaurant interior"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white transition-colors">Our Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 transition-colors">
              <p>
              Restaurant Reviews was born from a clear and ambitious vision: to establish the leading platform that 
              simplifies and enhances the way people find and enjoy outstanding dining experiences.

              </p>
              <p>
              Originating from the dynamic food scene of the Gold Coast, Australia, we've seen firsthand the transformative power of technology in connecting diners and restaurants. From our local beginnings, we've evolved into a comprehensive platform 
              designed to benefit both passionate food enthusiasts and restaurant businesses alike.
              </p>
              <p>
              We are dedicated to nurturing a community founded on genuine reviews and shared culinary journeys. 
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-blue-50 dark:bg-dark-secondary rounded-3xl p-12 max-w-6xl mx-auto mb-20 transition-colors">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white transition-colors">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
              Our mission is twofold: to empower diners with trustworthy, reliable information and user-friendly tools 
              for discovering their next favourite dining spot, and to provide restaurants with an exceptional 
              platform to boost their visibility, attract new customers, and cultivate a large and devoted customer
               base. We strive to be the go-to resource for diners seeking the perfect meal and for restaurants 
               aiming to expand their reach and thrive in a competitive market. 
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white transition-colors">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
              We envision Restaurant Reviews as the most trusted and respected platform for restaurant 
              discovery and reviews worldwide. We are committed to fostering a global community of food lovers 
              and to championing the ongoing success and growth of restaurants everywhere. 
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        {/* <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white transition-colors">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We believe in genuine, unbiased reviews that help users make informed decisions."
              },
              {
                title: "Community",
                description: "Building meaningful connections between diners and restaurants is at our core."
              },
              {
                title: "Innovation",
                description: "Continuously improving our platform to better serve both diners and restaurants."
              },
              {
                title: "Transparency",
                description: "Maintaining open and honest communication with our users and partners."
              },
              {
                title: "Quality",
                description: "Ensuring high standards in every aspect of our service and platform."
              },
              {
                title: "Support",
                description: "Providing exceptional support to both diners and restaurant owners."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white dark:bg-dark-secondary p-6 rounded-xl shadow-md transition-colors">
                <h3 className="text-xl font-semibold mb-3 dark:text-white transition-colors">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white transition-colors">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
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
            <div className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-lg transition-colors">
              <div className="flex flex-col items-center text-center">
                <Mail className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 transition-colors" />
                <h3 className="text-xl font-semibold mb-4 dark:text-white transition-colors">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                  You can also reach us directly at:
                </p>
                <a 
                  href="mailto:support@restaurantreviews.com.au"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 text-lg font-medium transition-colors"
                >
                  support@restaurantreviews.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 