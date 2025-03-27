
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DailyTips from '../components/DailyTips';
import Categories from '../components/Categories';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'BeautyBuddy | Your Daily Beauty Tips';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <DailyTips />
        <Categories />
        <About />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
