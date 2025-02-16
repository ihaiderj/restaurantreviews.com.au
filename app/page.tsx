'use client'
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Star, 
  Search, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Store, 
  CalendarCheck, 
  BarChart, 
  UserPlus, 
  Filter, 
  Tag, 
  Menu 
} from "lucide-react"
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Your Next Great Meal Awaits
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12">
                Discover, rate, and share your favorite restaurants. Join our community of food lovers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                  <Link href="/early-access">Get Early Access</Link>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-primary">
                  <Link href="/features">Learn More</Link>
                </button>
                {/* TODO: Add a button to the waitlist */}
              </div>
            </div>
            <div className="relative">
              <div className="float-animation">
                <Image
                  src="/images/app-screenshot.png"
                  alt="Restaurant discovery app interface showing location search, cuisine categories, and special offers"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl mx-auto"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-12 bg-white p-4 rounded-xl shadow-lg">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="absolute bottom-1/4 -right-8 bg-white p-4 rounded-xl shadow-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-secondary transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white transition-colors">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors">
              Everything you need to discover, review, and enjoy amazing dining experiences
            </p>
          </div>

          {/* Customer Features */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white transition-colors">
              For Food Lovers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Easy Discovery",
                  description: "Find restaurants by cuisine, location, or dietary preferences"
                },
                {
                  icon: MapPin,
                  title: "Discover Nearby",
                  description: "Explore restaurants around you with real-time location-based recommendations",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop",
                  alt: "Map interface showing nearby restaurants"
                },
                {
                  icon: Star,
                  title: "Reviews & Ratings",
                  description: "Share your experiences and help others discover great dining spots",
                  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop",
                  alt: "Collection of food photos and reviews"
                },
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-lg feature-card transition-colors"
                >
                  <div className="flex gap-4">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 transition-colors" />
                    <div>
                      <h4 className="font-semibold mb-2 dark:text-white transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Restaurant Owner Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white transition-colors">
              For Restaurant Owners
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Store,
                  title: "Restaurant Profile",
                  description: "Create and manage your restaurant profile, menu, and special offers",
                  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
                  alt: "Restaurant interface showing menu management"
                },
                {
                  icon: CalendarCheck,
                  title: "Table Reservations",
                  description: "Accept and manage table reservations directly through the app",
                  image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2940&auto=format&fit=crop",
                  alt: "Restaurant reservation management interface"
                },
                {
                  icon: BarChart,
                  title: "Insights & Analytics",
                  description: "Track your restaurant's performance and customer feedback",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
                  alt: "Analytics dashboard showing restaurant metrics"
                },
              ].map((feature, i) => (
                <div key={i} className="feature-card bg-white dark:bg-dark-primary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-48 mb-6 relative rounded-xl overflow-hidden">
                    <Image 
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors" />
                    <h3 className="text-xl font-semibold dark:text-white transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Features Section */}
      <section className="py-20 dark:bg-dark-primary transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white transition-colors">
            More Features
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: UserPlus,
                title: "Easy Authentication",
                description: "Quick sign up with email or social accounts"
              },
              {
                icon: Filter,
                title: "Advanced Filters",
                description: "Filter by cuisine, dining style, and special requirements"
              },
              {
                icon: Tag,
                title: "Special Offers",
                description: "Discover daily specials and exclusive deals"
              },
              {
                icon: Menu,
                title: "Digital Menus",
                description: "Browse complete restaurant menus with prices"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-50 dark:bg-dark-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Download App", description: "Get the app from App Store or Google Play" },
              { number: "02", title: "Find Restaurants", description: "Search and filter by your preferences" },
              { number: "03", title: "Read & Write Reviews", description: "Share your experiences with others" },
              { number: "04", title: "Enjoy Great Food", description: "Discover your next favorite spot" },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Food Journey?</h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of food lovers who are already discovering great restaurants every day.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-6 py-4 rounded-full text-gray-900 border-2 border-transparent focus:border-blue-300 focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap disabled:opacity-50"
              >
                {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-4 text-green-200">Thank you for joining our waitlist!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-200">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-gray-50 dark:bg-dark-secondary transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { icon: Shield, text: "Secure & Private" },
              { icon: Clock, text: "24/7 Support" },
              { icon: Users, text: "Active Community" },
              { icon: Star, text: "Top Rated" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <badge.icon className="w-6 h-6 text-primary dark:text-blue-400 transition-colors" />
                <span className="font-medium dark:text-white transition-colors">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

