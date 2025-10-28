import React, { useState, useEffect } from 'react';
import { useGender } from '../contexts/GenderContext';
import menSkincare from '../assets/men-skincare-1.jpg';
import menHaircare from '../assets/men-haircare-1.jpg';
import menWellness from '../assets/men-wellness-1.jpg';
import menGrooming from '../assets/men-grooming-1.jpg';

interface Tip {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const CATEGORIES = ["All", "Skincare", "Grooming", "Haircare", "Wellness", "Fragrance"];

// Women's 30 tips and Men's 30 tips data here (abbreviated for space)
const WOMEN_TIPS: Tip[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Beauty Tip ${i + 1}`,
  category: ["Skincare", "Grooming", "Haircare", "Wellness", "Fragrance"][Math.floor(i / 6)],
  description: "Expert beauty advice for women's daily routine.",
  image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800"
}));

const MEN_TIPS: Tip[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Grooming Tip ${i + 1}`,
  category: ["Skincare", "Grooming", "Haircare", "Wellness", "Fragrance"][Math.floor(i / 6)],
  description: "Expert grooming advice for men's daily routine.",
  image: i < 4 ? [menSkincare, menHaircare, menWellness, menGrooming][i] : "https://images.unsplash.com/photo-1564694202883-46e7c2691e0d?w=800"
}));

const DailyTips: React.FC = () => {
  const { gender } = useGender();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTips, setFilteredTips] = useState<Tip[]>([]);
  const [inView, setInView] = useState(false);

  const currentTips = gender === 'men' ? MEN_TIPS : WOMEN_TIPS;

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredTips(currentTips);
    } else {
      setFilteredTips(currentTips.filter(tip => tip.category === selectedCategory));
    }
  }, [selectedCategory, gender]);
  
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
    
    const element = document.getElementById('daily-tips');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="daily-tips" className="beauty-section bg-beauty-50/50">
      <div className="beauty-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="beauty-chip mb-4">Daily Essentials</span>
          <h2 className="beauty-subheading text-beauty-900 mb-4">Beauty Tips For You</h2>
          <p className="text-beauty-700 max-w-2xl mx-auto">
            Curated advice from beauty experts to enhance your daily routine and discover new techniques.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-beauty-500 text-white shadow-sm'
                  : 'bg-white border border-beauty-200 text-beauty-700 hover:bg-beauty-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTips.map((tip, index) => (
            <div 
              key={tip.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-sm border border-beauty-100 transition-all duration-500 hover:shadow-md hover:translate-y-[-4px] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 * (index % 4)}ms` }}
            >
              <div className="image-hover-zoom h-48 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="beauty-chip mb-3">{tip.category}</div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-beauty-900">{tip.title}</h3>
                <p className="text-beauty-700 text-sm mb-4">{tip.description}</p>
                <a href="#" className="inline-flex items-center text-beauty-600 font-medium hover:text-beauty-700 transition-colors">
                  Read more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="beauty-button">
            View All Tips
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyTips;
