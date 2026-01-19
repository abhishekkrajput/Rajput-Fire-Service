
import React from 'react';
import { Truck, RotateCcw, PenTool, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    name: 'Rapid Delivery & Placement',
    desc: 'Same-day dispatch for urgent replacements with professional placement as per fire safety norms.'
  },
  {
    icon: <RotateCcw className="w-8 h-8" />,
    name: 'Refilling & Maintenance',
    desc: 'Authorized refilling station for ABC, CO2, and Foam extinguishers. 24-hour turnaround guaranteed.'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    name: 'AMC Safety Contracts',
    desc: 'Annual Maintenance Contracts including quarterly inspections, tagging, and compliance reporting.'
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    name: 'Hydraulic Testing',
    desc: 'Statutory pressure testing (Hydro Testing) to ensure cylinder integrity and safety compliance.'
  }
];

const ServiceSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Service Excellence</h2>
          <h3 className="text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
            NOT JUST PRODUCTS, <br />
            <span className="text-red-600">WE SELL PEACE OF MIND.</span>
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Rajput Fire Service is a complete life-safety partner. We handle everything from your initial safety audit to periodic maintenance, ensuring your premises are always ready for an emergency.
          </p>
          <ul className="space-y-4 mb-10">
            {['Certified by Fire Safety Board', 'NABL Accredited Lab Testing', 'Expert Field Technicians', 'Digital Maintenance Tracking'].map(item => (
              <li key={item} className="flex items-center gap-3 text-gray-800 font-semibold">
                <div className="bg-red-100 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-gray-900 hover:bg-red-600 text-white px-10 py-4 rounded-lg font-bold transition-all">
            BOOK A FREE SAFETY AUDIT
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="text-red-600 mb-6 transform group-hover:-translate-y-1 transition-transform">
                {s.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-gray-900 mb-3">{s.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
