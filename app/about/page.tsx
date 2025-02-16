import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Restaurant Reviews
          </h1>
          <p className="text-xl text-gray-600">
            Connecting food lovers with great restaurants since 2024
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
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded by Richard White in 2024, Restaurant Reviews emerged from a simple yet powerful idea: 
                to create a platform that makes discovering great dining experiences easier and more reliable.
              </p>
              <p>
                Based in the vibrant culinary scene of Gold Coast, Australia, we&apos;ve witnessed firsthand how 
                technology can transform the way people discover and experience restaurants.
              </p>
              <p>
                What started as a local project has grown into a comprehensive platform that serves both 
                food enthusiasts and restaurant owners, creating a community built on authentic reviews 
                and shared experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-blue-50 rounded-3xl p-12 max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower diners with honest, reliable information and tools to discover their next 
                favorite restaurant, while helping restaurant owners thrive through increased visibility 
                and valuable customer insights.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the most trusted platform for restaurant discovery and reviews, fostering 
                a global community of food lovers and supporting the success of restaurants worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">Gold Coast, Australia</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:contact@restaurantreviews.com" className="text-gray-600 hover:text-blue-600">
                contact@restaurantreviews.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:+61755555555" className="text-gray-600 hover:text-blue-600">
                +61 7 5555 5555
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 