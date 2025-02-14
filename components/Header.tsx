import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-bold text-xl p-2 rounded-lg">
              RR
            </div>
            <span className="text-xl font-semibold text-blue-600">
              Restaurant Reviews
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link 
              href="/about-us" 
              className="text-gray-600 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
            <Link 
              href="/early-access" 
              className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 