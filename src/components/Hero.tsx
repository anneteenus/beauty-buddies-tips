import React, { useEffect, useState } from 'react';
import { useGender } from '../contexts/GenderContext';
import menHeroImg from '../assets/men-hero.jpg';

const Hero: React.FC = () => {
  const { gender } = useGender();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const womenBg = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent/20 backdrop-blur-sm z-10"></div>
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2s] ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
          style={{ 
            backgroundImage: `url('${gender === 'men' ? menHeroImg : womenBg}')` 
          }}
        ></div>
      </div>
      
      <div className="beauty-container relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <span 
            className={`beauty-chip mb-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {gender === 'men' ? 'Your Daily Grooming Companion' : 'Your Daily Beauty Companion'}
          </span>
          <h1 
            className={`beauty-heading text-foreground mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {gender === 'men' 
              ? 'Elevate Your Grooming Routine With Expert Tips'
              : 'Elevate Your Beauty Routine With Expert Tips'
            }
          </h1>
          <p 
            className={`text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {gender === 'men'
              ? 'Discover daily grooming insights, trending techniques, and professional advice to enhance your personal care ritual.'
              : 'Discover daily beauty insights, trending techniques, and professional advice to enhance your personal care ritual.'
            }
          </p>
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="beauty-button w-full sm:w-auto">
              Explore Tips
            </button>
            <button className="px-6 py-3 rounded-full border-2 border-foreground text-foreground font-medium transition-all duration-300 hover:bg-accent hover:shadow-sm w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div className="w-10 h-10 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-foreground"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
