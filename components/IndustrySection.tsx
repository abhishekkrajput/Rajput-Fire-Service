
import React from 'react';
import { Factory, Hospital, School, Hotel, Building2, Warehouse } from 'lucide-react';

const industries = [
  {
    title: 'Factories & Industrial',
    icon: <Factory className="w-10 h-10" />,
    desc: 'High-capacity fire suppression systems for chemical, textile, and manufacturing units.',
    compliance: 'AS 1851 Compliant'
  },
  {
    title: 'Hospitals & Medical',
    icon: <Hospital className="w-10 h-10" />,
    desc: 'Clean agent extinguishers safe for sensitive electronic medical equipment and patients.',
    compliance: 'Non-toxic, Residue-free'
  },
  {
    title: 'Schools & Institutions',
    icon: <School className="w-10 h-10" />,
    desc: 'User-friendly extinguishers with clear instructional signage for faculty and staff.',
    compliance: 'Child-Safe Placement'
  },
  {
    title: 'Hotels & Hospitality',
    icon: <Hotel className="w-10 h-10" />,
    desc: 'Aesthetic safety solutions including decorative cabinets and kitchen-specific systems.',
    compliance: 'Class K (F) Solutions'
  },
  {
    title: 'Corporate Offices',
    icon: <Building2 className="w-10 h-10" />,
    desc: 'Comprehensive fire safety audits and centralized maintenance tracking for multi-floor assets.',
    compliance: 'Periodic Audits'
  },
  {
    title: 'Warehousing',
    icon: <Warehouse className="w-10 h-10" />,
    desc: 'Large-scale hydrant systems and high-rating ABC extinguishers for storage logistics.',
    compliance: 'Max Storage Safety'
  },
];

const IndustrySection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Targeted Protection</h2>
          <h3 className="text-4xl font-display font-bold text-gray-900 leading-tight">
            SOLUTIONS TAILORED FOR YOUR <span className="text-gray-500">SPECIFIC INDUSTRY</span>
          </h3>
        </div>
        <p className="text-gray-600 max-w-sm">
          We understand that a hospital has different safety requirements than a chemical plant. Our experts provide custom compliance mapping for every sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((item, idx) => (
          <div 
            key={idx} 
            className="group bg-white p-8 border-b-4 border-transparent hover:border-red-600 shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            <div className="text-red-600 mb-6 bg-red-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h4 className="text-2xl font-display font-bold text-gray-900 mb-3">{item.title}</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {item.desc}
            </p>
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded uppercase tracking-wider">
              {item.compliance}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySection;
