
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ServiceSection from './components/ServiceSection';
import IndustrySection from './components/IndustrySection';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="industries">
          <IndustrySection />
        </section>
        <section id="products" className="bg-white py-20">
          <ProductSection />
        </section>
        <section id="services" className="bg-gray-100 py-20">
          <ServiceSection />
        </section>
        <section id="quote" className="py-20 bg-red-600">
          <QuoteForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
