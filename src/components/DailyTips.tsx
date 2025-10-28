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

const WOMEN_TIPS: Tip[] = [
  // Skincare (10 tips)
  { id: 1, title: "Double Cleanse for Glowing Skin", category: "Skincare", description: "Use an oil-based cleanser followed by a water-based one for deep cleansing and radiant skin.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop" },
  { id: 2, title: "Vitamin C Serum Benefits", category: "Skincare", description: "Apply vitamin C serum in the morning to brighten skin and protect against environmental damage.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop" },
  { id: 3, title: "Night Cream Application", category: "Skincare", description: "Apply night cream in upward strokes to promote lymphatic drainage and reduce puffiness.", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop" },
  { id: 4, title: "Sunscreen Daily Habit", category: "Skincare", description: "Wear SPF 30+ daily, even indoors, to prevent premature aging and protect from UV damage.", image: "https://images.unsplash.com/photo-1556228852-80a85b52c3e2?w=800&auto=format&fit=crop" },
  { id: 5, title: "Exfoliate Gently", category: "Skincare", description: "Use chemical exfoliants 2-3 times weekly for smoother skin without harsh scrubbing.", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&auto=format&fit=crop" },
  { id: 6, title: "Hydrating Face Mist", category: "Skincare", description: "Keep a face mist handy for instant hydration and a refreshed glow throughout the day.", image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop" },
  { id: 7, title: "Eye Cream Technique", category: "Skincare", description: "Gently pat eye cream with your ring finger to avoid tugging delicate under-eye skin.", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop" },
  { id: 8, title: "Sheet Mask Ritual", category: "Skincare", description: "Use sheet masks weekly for an instant boost of hydration and targeted skin concerns.", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&auto=format&fit=crop" },
  { id: 9, title: "Retinol at Night", category: "Skincare", description: "Start with low-dose retinol at night to reduce fine lines and improve skin texture gradually.", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop" },
  { id: 10, title: "Facial Massage Benefits", category: "Skincare", description: "Incorporate 5-minute facial massage into your routine to boost circulation and natural glow.", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&auto=format&fit=crop" },

  // Grooming (8 tips)
  { id: 11, title: "Foundation Matching", category: "Grooming", description: "Test foundation on your jawline in natural light to find your perfect shade match.", image: "https://images.unsplash.com/photo-1596704017234-7396221adedd?w=800&auto=format&fit=crop" },
  { id: 12, title: "Eyebrow Shaping", category: "Grooming", description: "Follow your natural brow shape and fill sparse areas with light, feathery strokes.", image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800&auto=format&fit=crop" },
  { id: 13, title: "Lip Care Routine", category: "Grooming", description: "Exfoliate lips weekly and apply balm before lipstick for smooth, long-lasting color.", image: "https://images.unsplash.com/photo-1583001809153-7f0c6507e723?w=800&auto=format&fit=crop" },
  { id: 14, title: "Mascara Application", category: "Grooming", description: "Wiggle mascara wand at the base of lashes and sweep upward for voluminous, clump-free lashes.", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop" },
  { id: 15, title: "Blush Placement", category: "Grooming", description: "Smile and apply blush to the apples of your cheeks, blending upward toward temples.", image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=800&auto=format&fit=crop" },
  { id: 16, title: "Setting Spray Magic", category: "Grooming", description: "Finish makeup with setting spray in an 'X' and 'T' motion for all-day wear.", image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&auto=format&fit=crop" },
  { id: 17, title: "Contour Naturally", category: "Grooming", description: "Use a cool-toned contour shade two shades darker than your skin for natural definition.", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop" },
  { id: 18, title: "Clean Brushes Weekly", category: "Grooming", description: "Wash makeup brushes weekly with gentle soap to prevent breakouts and ensure smooth application.", image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800&auto=format&fit=crop" },

  // Haircare (6 tips)
  { id: 19, title: "Silk Pillowcase Benefits", category: "Haircare", description: "Switch to silk pillowcases to reduce hair breakage and maintain hairstyles longer.", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&auto=format&fit=crop" },
  { id: 20, title: "Hair Mask Treatment", category: "Haircare", description: "Apply deep conditioning mask weekly, focusing on mid-lengths to ends for lustrous hair.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop" },
  { id: 21, title: "Heat Protection Essential", category: "Haircare", description: "Always apply heat protectant spray before using hot tools to prevent damage and split ends.", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop" },
  { id: 22, title: "Cold Water Rinse", category: "Haircare", description: "Finish hair wash with cold water to seal cuticles and enhance shine naturally.", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&auto=format&fit=crop" },
  { id: 23, title: "Scalp Care Routine", category: "Haircare", description: "Massage scalp with oil weekly to stimulate blood flow and promote healthy hair growth.", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop" },
  { id: 24, title: "Air Dry Technique", category: "Haircare", description: "Let hair air dry 70% before heat styling to minimize damage and preserve moisture.", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop" },

  // Wellness (4 tips)
  { id: 25, title: "Morning Meditation", category: "Wellness", description: "Start your day with 10 minutes of meditation for mental clarity and reduced stress.", image: "https://images.unsplash.com/photo-1517728991609-4d3d9e83bd9d?w=800&auto=format&fit=crop" },
  { id: 26, title: "Hydration Goals", category: "Wellness", description: "Drink at least 8 glasses of water daily for glowing skin and optimal body function.", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&auto=format&fit=crop" },
  { id: 27, title: "Beauty Sleep Routine", category: "Wellness", description: "Aim for 7-9 hours of quality sleep to allow skin to repair and regenerate naturally.", image: "https://images.unsplash.com/photo-1511895307219-e830fb7e8ef0?w=800&auto=format&fit=crop" },
  { id: 28, title: "Balanced Diet", category: "Wellness", description: "Eat antioxidant-rich foods like berries and leafy greens for healthy, radiant skin from within.", image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&auto=format&fit=crop" },

  // Fragrance (2 tips)
  { id: 29, title: "Perfume Layering", category: "Fragrance", description: "Layer matching body lotion and perfume for longer-lasting fragrance throughout the day.", image: "https://images.unsplash.com/photo-1594035910387-fae33d0d616e?w=800&auto=format&fit=crop" },
  { id: 30, title: "Pulse Point Application", category: "Fragrance", description: "Apply perfume to pulse points like wrists, neck, and behind ears for optimal diffusion.", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop" },
];

const MEN_TIPS: Tip[] = [
  // Skincare (10 tips)
  { id: 1, title: "Post-Shave Care", category: "Skincare", description: "Apply alcohol-free aftershave balm immediately after shaving to soothe and hydrate skin.", image: menSkincare },
  { id: 2, title: "Daily Moisturizer", category: "Skincare", description: "Use lightweight, non-greasy moisturizer daily to keep skin hydrated without shine.", image: "https://images.unsplash.com/photo-1564694202883-46e7c2691e0d?w=800&auto=format&fit=crop" },
  { id: 3, title: "Face Wash Routine", category: "Skincare", description: "Cleanse face twice daily with salicylic acid wash to prevent acne and control oil.", image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&auto=format&fit=crop" },
  { id: 4, title: "Sun Protection", category: "Skincare", description: "Apply broad-spectrum SPF 50 daily to protect from sun damage and premature aging.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop" },
  { id: 5, title: "Eye Gel Benefits", category: "Skincare", description: "Use cooling eye gel morning and night to reduce dark circles and puffiness.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop" },
  { id: 6, title: "Exfoliation Technique", category: "Skincare", description: "Exfoliate 2-3 times weekly to remove dead skin cells and prevent ingrown hairs.", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop" },
  { id: 7, title: "Face Serum Power", category: "Skincare", description: "Apply hyaluronic acid serum before moisturizer for deep hydration and plump skin.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop" },
  { id: 8, title: "Cold Water Splash", category: "Skincare", description: "Rinse face with cold water after cleansing to tighten pores and refresh skin.", image: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=800&auto=format&fit=crop" },
  { id: 9, title: "Lip Care Essential", category: "Skincare", description: "Keep lips moisturized with SPF lip balm to prevent chapping and sun damage.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop" },
  { id: 10, title: "Night Routine", category: "Skincare", description: "Apply retinol cream at night to reduce fine lines and improve skin texture over time.", image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800&auto=format&fit=crop" },

  // Grooming (8 tips)
  { id: 11, title: "Beard Oil Daily", category: "Grooming", description: "Massage beard oil daily to soften facial hair and nourish the skin underneath.", image: menGrooming },
  { id: 12, title: "Sharp Blade Shaving", category: "Grooming", description: "Replace razor blades every 5-7 shaves for smooth, irritation-free results.", image: "https://images.unsplash.com/photo-1621605810621-e3f2c08bdfa5?w=800&auto=format&fit=crop" },
  { id: 13, title: "Trimmer Maintenance", category: "Grooming", description: "Clean and oil trimmer blades after each use for optimal performance and longevity.", image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800&auto=format&fit=crop" },
  { id: 14, title: "Eyebrow Grooming", category: "Grooming", description: "Trim overgrown eyebrow hairs and remove strays for a clean, polished appearance.", image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=800&auto=format&fit=crop" },
  { id: 15, title: "Nose Hair Care", category: "Grooming", description: "Trim nose and ear hair weekly with proper trimmer for neat, professional look.", image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&auto=format&fit=crop" },
  { id: 16, title: "Pre-Shave Prep", category: "Grooming", description: "Soften beard with warm water and pre-shave oil before shaving for smoother results.", image: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=800&auto=format&fit=crop" },
  { id: 17, title: "Cologne Application", category: "Grooming", description: "Spray cologne on pulse points and chest area, not clothes, for best projection.", image: "https://images.unsplash.com/photo-1536520002442-39764a41e987?w=800&auto=format&fit=crop" },
  { id: 18, title: "Nail Care Basics", category: "Grooming", description: "Keep nails trimmed, clean, and filed for professional appearance and hygiene.", image: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=800&auto=format&fit=crop" },

  // Haircare (6 tips)
  { id: 19, title: "Hair Product Choice", category: "Haircare", description: "Use matte clay for natural texture or pomade for sleek, polished styles that last.", image: menHaircare },
  { id: 20, title: "Scalp Health", category: "Haircare", description: "Massage scalp during shampooing to stimulate blood flow and promote hair growth.", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop" },
  { id: 21, title: "Regular Haircuts", category: "Haircare", description: "Get haircuts every 3-4 weeks to maintain shape and prevent unkempt appearance.", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&auto=format&fit=crop" },
  { id: 22, title: "Shampoo Technique", category: "Haircare", description: "Use clarifying shampoo weekly to remove product buildup and refresh scalp.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop" },
  { id: 23, title: "Towel Dry Method", category: "Haircare", description: "Pat hair dry with towel gently instead of rubbing to prevent damage and frizz.", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format&fit=crop" },
  { id: 24, title: "Hair Growth Diet", category: "Haircare", description: "Eat protein-rich foods and take biotin supplements for stronger, healthier hair.", image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=800&auto=format&fit=crop" },

  // Wellness (4 tips)
  { id: 25, title: "Gym Hygiene", category: "Wellness", description: "Shower immediately after workout and cleanse face to prevent body acne and skin issues.", image: menWellness },
  { id: 26, title: "Stress Management", category: "Wellness", description: "Practice deep breathing exercises daily to reduce stress and improve skin health.", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&auto=format&fit=crop" },
  { id: 27, title: "Sleep Quality", category: "Wellness", description: "Maintain consistent sleep schedule for optimal recovery and healthy-looking skin.", image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&auto=format&fit=crop" },
  { id: 28, title: "Hydration Focus", category: "Wellness", description: "Drink water throughout day and limit alcohol to maintain clear, hydrated skin.", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop" },

  // Fragrance (2 tips)
  { id: 29, title: "Signature Scent", category: "Fragrance", description: "Find one signature cologne and stick with it to create a memorable personal brand.", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop" },
  { id: 30, title: "Seasonal Fragrances", category: "Fragrance", description: "Switch to lighter citrus scents in summer and warmer woody notes in winter months.", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&auto=format&fit=crop" },
];

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
          <h2 className="beauty-subheading text-beauty-900 mb-4">
            {gender === 'men' ? "Grooming Tips For Men" : "Beauty Tips For Women"}
          </h2>
          <p className="text-beauty-700 max-w-2xl mx-auto">
            {gender === 'men' 
              ? "Expert grooming advice from professionals to elevate your daily routine and master new techniques."
              : "Curated advice from beauty experts to enhance your daily routine and discover new techniques."
            }
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
