
import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-2 rounded">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-xl font-display font-bold tracking-wider">RAJPUT FIRE SERVICE</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Your premier partner for industrial and institutional fire safety solutions. Protecting lives and assets since 2009.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">QUICK LINKS</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#products" className="hover:text-red-500 transition-colors">ABC Extinguishers</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">AMC Contracts</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Refilling Services</a></li>
              <li><a href="#industries" className="hover:text-red-500 transition-colors">Industry Solutions</a></li>
              <li><a href="#quote" className="hover:text-red-500 transition-colors">Bulk Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">INDUSTRIES</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">Hospitals & Clinics</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Manufacturing Units</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Hotels & Restaurants</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Education Centers</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Warehouse Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">GET IN TOUCH</h4>
            <ul className="space-y-6 text-gray-400 font-medium">
              <li className="flex gap-3">
                <MapPin className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span>123 Industrial Area, Phase II, <br />New Delhi, India - 110020</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span>+91 98765-43210<br />+91 98765-43211</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span>sales@rajputfireservice.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 Rajput Fire Service. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance Certification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
