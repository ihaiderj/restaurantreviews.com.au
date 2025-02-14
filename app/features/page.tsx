import Image from "next/image"
import { 
  Search, MapPin, Star, Filter, Menu, CalendarCheck, 
  UserCircle, Store, BarChart, Lock, Settings, 
  Coffee, Utensils, Heart, Baby, Globe, Clock
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Powerful Features for Everyone
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Whether you're a food lover discovering new places or a restaurant owner connecting with customers, 
            Restaurant Reviews has everything you need.
          </p>
        </div>
      </section>

      {/* Customer Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">For Food Lovers</h2>
          
          {/* Authentication & Profile */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Easy Authentication</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Quick sign up with email or social accounts (Google, Apple)</li>
                    <li>Secure password recovery system</li>
                    <li>Simple social sign-in options</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <UserCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Profile</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Customize your profile with photo and bio</li>
                    <li>Save favorite cuisines and restaurants</li>
                    <li>Track your reviews and ratings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
                alt="Authentication and Profile Features"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Discovery Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: MapPin,
                title: "Find Nearby Restaurants",
                description: "Discover great dining spots around you with real-time location-based recommendations",
                features: [
                  "Access your current location",
                  "View restaurants within your area",
                  "Interactive map integration",
                  "Distance-based sorting"
                ]
              },
              {
                icon: Filter,
                title: "Smart Filters",
                description: "Find exactly what you're craving with our comprehensive filtering system",
                features: [
                  "International Cuisine",
                  "Dining Styles (Casual, Fine Dining)",
                  "Special Categories (Healthy, Child Friendly)",
                  "Today's Special offers"
                ]
              },
              {
                icon: Search,
                title: "Easy Search",
                description: "Quick and efficient search to find your perfect dining spot",
                features: [
                  "Search by restaurant name",
                  "Search by cuisine type",
                  "Search by location",
                  "Search by special requirements"
                ]
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {feature.features.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Restaurant Experience */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Menu className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Restaurant Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>View detailed restaurant profiles</li>
                    <li>Browse complete menus with prices</li>
                    <li>See special offers and promotions</li>
                    <li>Check operating hours and location</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CalendarCheck className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reservations & Reviews</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Easy table reservations</li>
                    <li>Rate and review restaurants</li>
                    <li>Share your dining experiences</li>
                    <li>View community ratings and feedback</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="Restaurant Experience Features"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Owner Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">For Restaurant Owners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Store,
                title: "Restaurant Management",
                description: "Complete control over your restaurant's digital presence",
                features: [
                  "Create and update restaurant profile",
                  "Manage menu items and prices",
                  "Set special offers and promotions",
                  "Update operating hours"
                ]
              },
              {
                icon: CalendarCheck,
                title: "Reservation System",
                description: "Efficient table reservation management",
                features: [
                  "Accept online reservations",
                  "Manage booking calendar",
                  "Set table availability",
                  "Send confirmation notifications"
                ]
              },
              {
                icon: BarChart,
                title: "Analytics & Insights",
                description: "Track your restaurant's performance",
                features: [
                  "View customer ratings and reviews",
                  "Track reservation statistics",
                  "Monitor popular dishes",
                  "Analyze customer preferences"
                ]
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {feature.features.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Restaurant Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, label: "International Cuisine" },
              { icon: Utensils, label: "Casual Dining" },
              { icon: Clock, label: "Fast Food" },
              { icon: Star, label: "Fine Dining" },
              { icon: Heart, label: "Healthy Food" },
              { icon: Coffee, label: "Cakes & Coffee" },
              { icon: Baby, label: "Child Friendly" },
              { icon: Settings, label: "More Options" }
            ].map((category, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
                <category.icon className="w-6 h-6 text-blue-600" />
                <span className="font-medium">{category.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 