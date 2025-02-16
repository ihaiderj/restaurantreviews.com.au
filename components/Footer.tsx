import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-primary py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {/* Logo and Description Column */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 dark:bg-blue-500 text-white font-bold text-xl p-2 rounded-lg transition-colors">
                RR
              </div>
              <span className="text-xl font-semibold text-blue-600 dark:text-blue-400 transition-colors">
                Restaurant Reviews
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">
              Discover and share authentic dining experiences with our community.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold dark:text-white transition-colors">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/early-access" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Early Access
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold dark:text-white transition-colors">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/faqs" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold dark:text-white transition-colors">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">
              support@restaurantreviews.com.au
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
          <p className="text-center text-gray-600 dark:text-gray-400 transition-colors">
            © 2024 Restaurant Reviews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 