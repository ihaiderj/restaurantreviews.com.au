'use client'

import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  const linkStyles = (path: string) => {
    const baseStyles = "px-6 py-4 hover:bg-gray-50 dark:hover:bg-dark-secondary active:bg-gray-100 text-center transition-colors";
    const activeStyles = "text-blue-600 dark:text-primary-dark font-medium bg-blue-50 dark:bg-dark-secondary";
    const inactiveStyles = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";
    
    return `${baseStyles} ${isActive(path) ? activeStyles : inactiveStyles}`;
  };

  const desktopLinkStyles = (path: string) => {
    const baseStyles = "transition-colors";
    const activeStyles = "text-blue-600 dark:text-primary-dark font-medium";
    const inactiveStyles = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";
    
    return `${baseStyles} ${isActive(path) ? activeStyles : inactiveStyles}`;
  };

  return (
    <header className="bg-white dark:bg-dark-primary py-4 sticky top-0 z-50 shadow-sm transition-colors">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 dark:bg-blue-500 text-white font-bold text-xl p-2 rounded-lg transition-colors">
              RR
            </div>
            <span className="text-xl font-semibold text-blue-600 dark:text-blue-400 transition-colors">
              Restaurant Reviews
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-secondary rounded-lg transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-secondary rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={desktopLinkStyles('/')}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className={desktopLinkStyles('/features')}
            >
              Features
            </Link>
            <Link 
              href="/about-us" 
              className={desktopLinkStyles('/about-us')}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className={desktopLinkStyles('/contact')}
            >
              Contact
            </Link>
            <Link 
              href="/faqs" 
              className={desktopLinkStyles('/faqs')}
            >
              FAQ
            </Link>
            <Link
              href="/early-access"
              className="
                px-6 py-2.5 
                rounded-full 
                font-semibold 
                bg-gradient-to-r from-blue-600 to-blue-700 
                hover:from-blue-700 hover:to-blue-800
                dark:from-blue-500 dark:to-blue-600
                dark:hover:from-blue-600 dark:hover:to-blue-700
                text-white 
                shadow-md
                hover:shadow-lg
                transform hover:scale-[1.02]
                transition-all 
                duration-200
                border border-transparent
                hover:border-blue-200
                dark:hover:border-blue-400/20
              "
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden 
            ${isMenuOpen ? 'block' : 'hidden'} 
            absolute left-0 right-0 top-full 
            bg-white dark:bg-dark-primary
            border-t border-gray-100 dark:border-gray-800 
            shadow-lg
            transition-colors
          `}
        >
          <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
            <Link 
              href="/" 
              className={linkStyles('/')}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className={linkStyles('/features')}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/about-us" 
              className={linkStyles('/about-us')}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className={linkStyles('/contact')}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/faqs" 
              className={linkStyles('/faqs')}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="p-4 bg-gray-50 dark:bg-dark-secondary">
              <Link 
                href="/early-access" 
                className={`block w-full px-6 py-3 rounded-full font-medium text-center transition-colors ${
                  isActive('/early-access')
                    ? 'bg-blue-700 dark:bg-blue-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 