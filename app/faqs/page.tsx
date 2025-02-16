import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function FAQsPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 dark:bg-dark-primary transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 dark:text-white transition-colors">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16 transition-colors">
          Find answers to common questions about Restaurant Reviews app
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "How do I create an account?",
              answer: "You can create an account by downloading our app and signing up using your email or social accounts (Google, Apple). The process is quick and simple, requiring only basic information like your name and email."
            },
            {
              question: "Is the app free to use?",
              answer: "Yes, the Restaurant Reviews app is free to download and use for finding restaurants, reading reviews, and creating basic profiles. Restaurant owners may have premium features available."
            },
            {
              question: "How can I find restaurants near me?",
              answer: "Our app uses your location (with permission) to show nearby restaurants. You can also search by suburb or area, and use filters for cuisine type, price range, and more to find exactly what you're looking for."
            },
            {
              question: "How do I write a review?",
              answer: "After visiting a restaurant, you can write a review by finding the restaurant in the app, clicking on 'Write Review', and sharing your experience. You can rate different aspects and add photos to your review."
            },
            {
              question: "Can I make restaurant reservations through the app?",
              answer: "Yes, you can make reservations at participating restaurants directly through the app. Simply find the restaurant, select your preferred date, time, and party size, and confirm your booking."
            },
            {
              question: "I'm a restaurant owner. How can I list my restaurant?",
              answer: "Restaurant owners can create a business account to list their establishment. You'll be able to manage your profile, menu, photos, and respond to reviews. Contact our support team for more information about business accounts."
            },
            {
              question: "What types of restaurants can I find on the app?",
              answer: "Our app includes a wide variety of dining establishments, from casual cafes to fine dining restaurants. You can find International Cuisine, Fast Food, Fine Dining, Healthy Food, Cakes & Coffee, Child-Friendly restaurants, and more."
            },
            {
              question: "How do I report an incorrect listing or inappropriate review?",
              answer: "You can report any concerns by using the 'Report' button available on restaurant listings and reviews. Our moderation team will review your report and take appropriate action."
            },
            {
              question: "Can I save my favorite restaurants?",
              answer: "Yes, you can save restaurants to your favorites list by tapping the heart icon on any restaurant profile. Access your saved restaurants anytime from your profile."
            },
            {
              question: "How do special offers work?",
              answer: "Restaurants can post special offers and deals on their profiles. You can find these by checking the 'Special Offers' section in the app or looking for the special offer tag on restaurant listings."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white dark:bg-dark-secondary rounded-xl shadow-md overflow-hidden transition-colors">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold pr-4 dark:text-white transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-600 dark:text-gray-400" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-400 transition-colors">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white transition-colors">Still Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors">
            Can't find the answer you're looking for? Contact our support team.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary dark:bg-blue-600 text-white font-semibold hover:bg-primary/90 dark:hover:bg-blue-500 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
} 