import { useLocation } from 'react-router-dom'
import ScrollLink from './ScrollLink'
import { Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    // Close menu on scroll
    function handleScroll() {
      setIsMenuOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'App Guide', href: '/guide' },
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header 
        ref={menuRef}
        className="fixed w-full bg-white shadow-sm border-b border-gray-200 z-50 md:relative"
      >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ScrollLink to="/" className="flex items-center">
              <img 
                src="/images/flo-logo.png" 
                alt="Flo Energy Logo" 
                className="h-10 w-auto object-contain"
              />
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-flo-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-flo-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-flo-primary block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        )}
      </nav>
      </header>
      {/* Add spacing below fixed header */}
      <div className="h-16 md:hidden"></div>
    </>
  )
}
