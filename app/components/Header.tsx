import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
            RR
          </span>
          Restaurant Reviews
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className="text-gray-600 hover:text-primary transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
          <button className="bg-primary/10 text-primary px-6 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors">
            Get Early Access
          </button>
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  )
}

