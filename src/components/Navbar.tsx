
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useGender } from '../contexts/GenderContext';

const Navbar: React.FC = () => {
  const { gender, setGender } = useGender();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'beauty-glass py-3 shadow-sm' : 'py-5'
      }`}
    >
      <div className="beauty-container">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Daily Tips', 'Categories', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-foreground hover:text-beauty-600 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-beauty-400 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-2 bg-beauty-100 rounded-full p-1">
              <button
                onClick={() => setGender('women')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  gender === 'women' 
                    ? 'bg-beauty-500 text-white shadow-sm' 
                    : 'text-beauty-700 hover:text-beauty-900'
                }`}
              >
                Women
              </button>
              <button
                onClick={() => setGender('men')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  gender === 'men' 
                    ? 'bg-beauty-500 text-white shadow-sm' 
                    : 'text-beauty-700 hover:text-beauty-900'
                }`}
              >
                Men
              </button>
            </div>
            <button className="beauty-button">Subscribe</button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 beauty-glass border-t border-beauty-100 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 py-2">
            {['Home', 'Daily Tips', 'Categories', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-foreground hover:text-beauty-600 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-2 bg-beauty-100 rounded-full p-1 my-2">
              <button
                onClick={() => setGender('women')}
                className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  gender === 'women' 
                    ? 'bg-beauty-500 text-white shadow-sm' 
                    : 'text-beauty-700'
                }`}
              >
                Women
              </button>
              <button
                onClick={() => setGender('men')}
                className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  gender === 'men' 
                    ? 'bg-beauty-500 text-white shadow-sm' 
                    : 'text-beauty-700'
                }`}
              >
                Men
              </button>
            </div>
            <button className="beauty-button mt-2">Subscribe</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
