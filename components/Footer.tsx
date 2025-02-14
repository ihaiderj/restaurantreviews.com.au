import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white font-bold text-xl p-2 rounded-lg">
                RR
              </div>
              <span className="text-xl font-semibold text-blue-600">
                Restaurant Reviews
              </span>
            </div>
            <p className="text-gray-600">
              Discover and share authentic dining experiences with our community.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-600">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-600">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-gray-600">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/beta-access" className="text-gray-600 hover:text-gray-900">
                  Beta Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help-center" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-gray-600">
              support@restaurantreviewsa.com
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © 2024 Restaurant Reviews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 