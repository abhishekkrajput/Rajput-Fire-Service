
import React, { useState } from 'react';
import { Shield, Menu, X, PhoneCall } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded">
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <span className="text-xl font-display font-bold text-gray-900 tracking-wider">RAJPUT FIRE SERVICE</span>
              <p className="text-[10px] font-bold text-red-600 leading-none">TRUSTED SAFETY COMPLIANCE</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-6 py-2 rounded font-bold transition-all border-b-2 border-yellow-600 flex items-center gap-2"
            >
              GET A QUOTE
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-xl">
          <div className="px-2 pt-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-bold text-gray-700 hover:bg-red-50 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="block w-full text-center bg-red-600 text-white px-3 py-4 rounded font-bold mt-4"
              onClick={() => setIsOpen(false)}
            >
              REQUEST SERVICE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
