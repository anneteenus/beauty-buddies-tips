import React, { useEffect, useState } from 'react';
import { useGender } from '../contexts/GenderContext';

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const WOMEN_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    count: 10
  },
  {
    id: 2,
    name: "Grooming",
    image: "https://images.unsplash.com/photo-1522335579687-9b947e02e4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    count: 8
  },
  {
    id: 3,
    name: "Haircare",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    count: 6
  },
  {
    id: 4,
    name: "Wellness",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    count: 4
  },
  {
    id: 5,
    name: "Fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fae33d0d616e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    count: 2
  }
];

const MEN_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1564694202883-46e7c2691e0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    count: 10
  },
  {
    id: 2,
    name: "Grooming",
    image: "https://images.unsplash.com/photo-1621605810621-e3f2c08bdfa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    count: 8
  },
  {
    id: 3,
    name: "Haircare",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    count: 6
  },
  {
    id: 4,
    name: "Wellness",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    count: 4
  },
  {
    id: 5,
    name: "Fragrance",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    count: 2
  }
];

const Categories: React.FC = () => {
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
    
    const element = document.getElementById('categories');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const categories = gender === 'men' ? MEN_CATEGORIES : WOMEN_CATEGORIES;
  
  return (
    <section id="categories" className="beauty-section bg-gradient-to-b from-white to-beauty-50/80">
      <div className="beauty-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="beauty-chip mb-4">Explore Topics</span>
          <h2 className="beauty-subheading text-beauty-900 mb-4">Browse By Category</h2>
          <p className="text-beauty-700 max-w-2xl mx-auto">
            {gender === 'men'
              ? 'Discover specialized grooming advice organized by category to find exactly what you need.'
              : 'Discover specialized beauty advice organized by category to find exactly what you\'re looking for.'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`group relative rounded-2xl overflow-hidden min-h-[280px] transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 * (index % 3)}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-beauty-900/80 via-beauty-900/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-white/80 mb-4">{category.count} tips</p>
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a 
                    href="#"
                    className="inline-flex items-center text-white font-medium hover:text-beauty-200 transition-colors"
                  >
                    Explore Category
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
