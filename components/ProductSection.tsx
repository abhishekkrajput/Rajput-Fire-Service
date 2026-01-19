
import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'ABC Powder Extinguisher',
    cap: '2kg - 9kg',
    rating: '21A / 113B',
    img: 'https://picsum.photos/400/500?random=1',
    tags: ['Best Seller', 'General Purpose']
  },
  {
    name: 'CO2 Gas Extinguisher',
    cap: '2kg - 4.5kg',
    rating: '34B',
    img: 'https://picsum.photos/400/500?random=2',
    tags: ['Electrical Fires', 'Residue Free']
  },
  {
    name: 'Clean Agent (FK-5-1-12)',
    cap: '2kg - 5kg',
    rating: '5A / 21B',
    img: 'https://picsum.photos/400/500?random=3',
    tags: ['Server Rooms', 'Eco-Friendly']
  },
  {
    name: 'Mechanical Foam (AFFF)',
    cap: '6L - 9L',
    rating: '21A / 183B',
    img: 'https://picsum.photos/400/500?random=4',
    tags: ['Petroleum', 'Liquid Fires']
  }
];

const ProductSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Our Catalog</h2>
        <h3 className="text-4xl font-display font-bold text-gray-900">CERTIFIED FIRE EXTINGUISHERS</h3>
        <div className="h-1.5 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="group flex flex-col h-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 transition-all">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={p.img} 
                alt={p.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{p.name}</h4>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4 border-t border-gray-200 pt-4">
                <span>Cap: <strong>{p.cap}</strong></span>
                <span>Rating: <strong>{p.rating}</strong></span>
              </div>
              <button className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-lg font-bold group-hover:bg-red-600 transition-colors">
                VIEW SPECS
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-red-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="relative z-10 text-center lg:text-left">
          <h4 className="text-3xl font-display font-bold text-white mb-2">NEED A BULK ORDER FOR YOUR FACTORY?</h4>
          <p className="text-red-100 text-lg">Special institutional pricing available for orders above 25 units.</p>
        </div>
        <a href="#quote" className="relative z-10 bg-yellow-400 hover:bg-white text-red-900 px-10 py-4 rounded-full font-bold transition-all shadow-xl">
          REQUEST BULK PRICING
        </a>
        {/* Background Accent */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>
    </div>
  );
};

export default ProductSection;
