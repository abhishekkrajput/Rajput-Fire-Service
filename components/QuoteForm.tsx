
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/3 bg-gray-900 p-10 lg:p-16 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-display font-bold mb-6 text-yellow-400">GET A QUOTE</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Submit your requirements and our safety consultant will reach out with a customized proposal within 2 hours.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-red-600 font-bold text-2xl">01</div>
                <div>
                  <h5 className="font-bold">Enter Details</h5>
                  <p className="text-sm text-gray-500">Industry and contact info</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-600 font-bold text-2xl">02</div>
                <div>
                  <h5 className="font-bold">Requirement</h5>
                  <p className="text-sm text-gray-500">Units and service types</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-600 font-bold text-2xl">03</div>
                <div>
                  <h5 className="font-bold">Proposal</h5>
                  <p className="text-sm text-gray-500">Official quote via email</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Immediate Assistance?</p>
            <p className="text-2xl font-display font-bold">+91 98765-43210</p>
          </div>
        </div>

        <div className="lg:w-2/3 p-10 lg:p-16">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h4 className="text-3xl font-display font-bold text-gray-900 mb-2">REQUEST RECEIVED!</h4>
              <p className="text-gray-600">Our safety experts are processing your quote. We will contact you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-red-600 font-bold hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Modern Industries Ltd"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Contact Person</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Industry</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 outline-none transition-all">
                  <option>Industrial / Factory</option>
                  <option>Healthcare / Hospital</option>
                  <option>Institutional / School</option>
                  <option>Hospitality / Hotel</option>
                  <option>Residential Society</option>
                </select>
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">What do you need?</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your requirements (e.g. 5x 6kg ABC Extinguishers, Annual Maintenance...)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-600 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-display text-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  SUBMIT REQUEST
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
