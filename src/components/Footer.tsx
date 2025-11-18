import ScrollLink from './ScrollLink'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-flo-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Flo Energy</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              With over 70 years of experience in the fuel industry, Flo Energy offers quality 
              products and services across Zimbabwe. Energy for growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-flo-secondary" />
                <span className="text-sm">sales1@floenergy.net</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-flo-secondary" />
                <span className="text-sm">+263 29 2461125-7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><ScrollLink to="/" className="text-gray-300 hover:text-white transition-colors">Home</ScrollLink></li>
              <li><ScrollLink to="/guide" className="text-gray-300 hover:text-white transition-colors">App Guide</ScrollLink></li>
              <li><ScrollLink to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</ScrollLink></li>
              <li><ScrollLink to="/support" className="text-gray-300 hover:text-white transition-colors">Support</ScrollLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><ScrollLink to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</ScrollLink></li>
              <li><ScrollLink to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</ScrollLink></li>
              <li><ScrollLink to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</ScrollLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Flo Energy. All rights reserved. | Developed by Kawerify Tech
          </p>
        </div>
      </div>
    </footer>
  )
}
