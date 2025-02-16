'use client'

import { useState } from 'react'
import { Mail, User, Building2, ChevronRight } from 'lucide-react'

export default function EarlyAccessPage() {
  const [userType, setUserType] = useState<'foodie' | 'owner' | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    restaurantName: '',
    contactPerson: '',
    address: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userType,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', restaurantName: '', contactPerson: '', address: '', phone: '' })
        setUserType(null)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20 dark:bg-dark-primary transition-colors">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 dark:text-white transition-colors">
          Get Early Access
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16 transition-colors">
          Be among the first to experience Restaurant Reviews and unlock exclusive benefits
        </p>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-lg transition-colors">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 transition-colors">
              For Food Lovers
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">Free premium account for life</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">Exclusive access to special offers and deals</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">Early bird rewards and points system</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">Priority customer support</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-lg transition-colors">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400 transition-colors">
              For Restaurant Owners
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">1 year free premium listing ($599 value)</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">Unlimited special offers creation</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">Unlimited photo uploads</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">Priority placement in search results</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 transition-colors" />
                <span className="dark:text-gray-300 transition-colors">Advanced analytics and insights</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Selection and Form Section */}
        <div className="max-w-2xl mx-auto">
          {!userType ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-8">Choose your account type</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  onClick={() => setUserType('foodie')}
                  className="p-6 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <User className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Food Lover</h3>
                </button>
                <button
                  onClick={() => setUserType('owner')}
                  className="p-6 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Restaurant Owner</h3>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-8 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
                  {userType === 'foodie' ? (
                    <>
                      <User className="w-5 h-5" />
                      Food Lover
                    </>
                  ) : (
                    <>
                      <Building2 className="w-5 h-5" />
                      Restaurant Owner
                    </>
                  )}
                </span>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {userType === 'foodie' ? (
                  // Food Lover Form
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                ) : (
                  // Restaurant Owner Form
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-2">
                        Restaurant Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="restaurantName"
                        required
                        value={formData.restaurantName || ''}
                        onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        value={formData.contactPerson || ''}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Restaurant Address
                      </label>
                      <textarea
                        id="address"
                        value={formData.address || ''}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {/* Email field (common for both) */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                {/* Form buttons */}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setUserType(null)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ← Change account type
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Early Access'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg">
              Thank you for your interest! We'll be in touch soon with your early access details.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">
              Something went wrong. Please try again or contact support.
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 