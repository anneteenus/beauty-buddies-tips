
import React, { useState, useEffect } from 'react';

interface Tip {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const CATEGORIES = ["All", "Skincare", "Makeup", "Haircare", "Wellness"];

const TIPS: Tip[] = [
  {
    id: 1,
    title: "Hydrate Before Applying Foundation",
    category: "Makeup",
    description: "Always apply moisturizer before foundation for a smoother application and to prevent dry patches.",
    image: "https://images.unsplash.com/photo-1596704017234-7396221adedd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: 2,
    title: "Night Serum Application Technique",
    category: "Skincare",
    description: "Apply serums in upward motions to promote circulation and maximize absorption.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: 3,
    title: "Silk Pillowcase Benefits",
    category: "Haircare",
    description: "Switch to silk pillowcases to reduce hair breakage and maintain hairstyles longer.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80",
  },
  {
    id: 4,
    title: "Mindful Beauty Practices",
    category: "Wellness",
    description: "Incorporate mindfulness into your beauty routine for reduced stress and improved skin health.",
    image: "https://images.unsplash.com/photo-1517728991609-4d3d9e83bd9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  }
];

const DailyTips: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTips, setFilteredTips] = useState<Tip[]>(TIPS);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredTips(TIPS);
    } else {
      setFilteredTips(TIPS.filter(tip => tip.category === selectedCategory));
    }
  }, [selectedCategory]);
  
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
