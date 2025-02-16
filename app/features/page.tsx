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
      <section className="py-20 dark:bg-dark-primary transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white transition-colors">
              Powerful Features for Everyone
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors">
              Whether you're a food lover discovering new places or a restaurant owner connecting with customers, 
              Restaurant Reviews has everything you need.
            </p>
          </div>
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
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 transition-colors" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white transition-colors">
                    Find Nearby Restaurants
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                    Discover great dining spots around you with real-time location-based recommendations
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 transition-colors">
                    <li>Access your current location</li>
                    <li>View restaurants within your area</li>
                    <li>Interactive map integration</li>
                    <li>Distance-based sorting</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Filter className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 transition-colors" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white transition-colors">
                    Smart Filters
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                    Find exactly what you're craving with our comprehensive filtering system
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 transition-colors">
                    <li>International Cuisine</li>
                    <li>Dining Styles (Casual, Fine Dining)</li>
                    <li>Special Categories (Healthy, Child Friendly)</li>
                    <li>Today's Special offers</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Search className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 transition-colors" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white transition-colors">
                    Easy Search
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                    Quick and efficient search to find your perfect dining spot
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 transition-colors">
                    <li>Search by restaurant name</li>
                    <li>Search by cuisine type</li>
                    <li>Search by location</li>
                    <li>Search by special requirements</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop"
                alt="Restaurant discovery interface showing map and filters"
                fill
                className="object-cover"
              />
            </div>
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
      <section className="py-20 bg-gray-50 dark:bg-dark-secondary transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white transition-colors">
            For Restaurant Owners
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Restaurant Management */}
            <div className="bg-white dark:bg-dark-primary rounded-xl p-6 shadow-lg transition-colors">
              <Store className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 transition-colors" />
              <h3 className="text-xl font-semibold mb-3 dark:text-white transition-colors">
                Restaurant Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                Complete control over your restaurant's digital presence
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 transition-colors">
                <li>Create and update restaurant profile</li>
                <li>Manage menu items and prices</li>
                <li>Set special offers and promotions</li>
                <li>Update operating hours</li>
              </ul>
            </div>

            {/* Reservation System */}
            <div className="bg-white dark:bg-dark-primary rounded-xl p-6 shadow-lg transition-colors">
              <CalendarCheck className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 transition-colors" />
              <h3 className="text-xl font-semibold mb-3 dark:text-white transition-colors">
                Reservation System
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                Efficient table reservation management
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 transition-colors">
                <li>Accept online reservations</li>
                <li>Manage booking calendar</li>
                <li>Set table availability</li>
                <li>Send confirmation notifications</li>
              </ul>
            </div>

            {/* Analytics & Insights */}
            <div className="bg-white dark:bg-dark-primary rounded-xl p-6 shadow-lg transition-colors">
              <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 transition-colors" />
              <h3 className="text-xl font-semibold mb-3 dark:text-white transition-colors">
                Analytics & Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                Track your restaurant's performance
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 transition-colors">
                <li>View customer ratings and reviews</li>
                <li>Track reservation statistics</li>
                <li>Monitor popular dishes</li>
                <li>Analyze customer preferences</li>
              </ul>
            </div>
          </div>

          {/* Restaurant Categories */}
          {/* <div className="mt-20">
            <h3 className="text-2xl font-semibold text-center mb-12 dark:text-white transition-colors">
              Restaurant Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {[
                "International Cuisine",
                "Casual Dining",
                "Fast Food",
                "Fine Dining",
                "Healthy Food",
                "Cakes & Coffee",
                "Child Friendly",
                "More Options"
              ].map((category, i) => (
                <div 
                  key={i}
                  className="bg-white dark:bg-dark-primary px-4 py-3 rounded-lg text-center shadow-md hover:shadow-lg transition-all dark:text-gray-300 dark:hover:text-white"
                >
                  {category}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Restaurant Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-lg transition-colors">
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
              <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-dark-primary rounded-lg shadow-md">
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