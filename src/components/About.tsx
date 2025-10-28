import React, { useEffect, useState } from 'react';
import { useGender } from '../contexts/GenderContext';
import menAboutImg from '../assets/men-about.jpg';

const About: React.FC = () => {
  const { gender } = useGender();
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  const womenFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beauty-500">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      title: "Expert Curated",
      description: "Tips and techniques verified by beauty professionals and dermatologists."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beauty-500">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 7h.01"></path>
          <path d="M17 7h.01"></path>
          <path d="M7 17h.01"></path>
          <path d="M17 17h.01"></path>
          <path d="M12 12h0"></path>
        </svg>
      ),
      title: "Diverse Categories",
      description: "Comprehensive advice across multiple beauty domains tailored to all needs."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beauty-500">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m7 9 3 3-3 3"></path>
          <path d="M13 15h4"></path>
        </svg>
      ),
      title: "Updated Daily",
      description: "Fresh content and new beauty insights added every day to keep you inspired."
    }
  ];

  const menFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beauty-500">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      title: "Professional Grade",
      description: "Grooming techniques verified by barbers, dermatologists, and style experts."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beauty-500">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 7h.01"></path>
          <path d="M17 7h.01"></path>
          <path d="M7 17h.01"></path>
          <path d="M17 17h.01"></path>
          <path d="M12 12h0"></path>
        </svg>
      ),
      title: "Complete Coverage",
      description: "From skincare to styling - all aspects of modern men's grooming covered."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beauty-500">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m7 9 3 3-3 3"></path>
          <path d="M13 15h4"></path>
        </svg>
      ),
      title: "Daily Updates",
      description: "New grooming insights and techniques added daily to keep you sharp."
    }
  ];

  const features = gender === 'men' ? menFeatures : womenFeatures;
  const womenImg = "https://images.unsplash.com/photo-1522335579687-9b947e02e4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";
  
  return (
    <section id="about" className="beauty-section">
      <div className="beauty-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`relative transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="rounded-2xl overflow-hidden beauty-glass shadow-sm">
              <img 
                src={gender === 'men' ? menAboutImg : womenImg}
                alt={`${gender === 'men' ? 'GroomingBuddy' : 'BeautyBuddy'} mission`}
                className="w-full h-auto" 
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-beauty-100 z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-beauty-200 z-[-1]"></div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="beauty-chip mb-4">Our Mission</span>
            <h2 className="beauty-subheading text-beauty-900 mb-6">
              {gender === 'men' 
                ? 'Empowering Your Grooming Journey'
                : 'Empowering Your Beauty Journey'
              }
            </h2>
            <p className="text-beauty-700 mb-8">
              {gender === 'men'
                ? "At BeautyBuddy, we believe every man deserves access to expert grooming knowledge. Our mission is to curate and simplify grooming advice, making it accessible and actionable for your daily routine."
                : "At BeautyBuddy, we believe everyone deserves access to expert beauty knowledge. Our mission is to curate and simplify beauty advice, making it accessible and actionable for your daily routine."
              }
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-beauty-50 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-beauty-900 mb-1">{feature.title}</h3>
                    <p className="text-beauty-700 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button className="beauty-button">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
