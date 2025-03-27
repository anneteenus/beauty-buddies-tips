
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", url: "#home" },
        { name: "Daily Tips", url: "#daily-tips" },
        { name: "Categories", url: "#categories" },
        { name: "About", url: "#about" }
      ]
    },
    {
      title: "Categories",
      links: [
        { name: "Skincare", url: "#" },
        { name: "Makeup", url: "#" },
        { name: "Haircare", url: "#" },
        { name: "Wellness", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Use", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "FAQ", url: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      ),
      url: "#"
    },
    {
      name: "Twitter",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
      url: "#"
    },
    {
      name: "Pinterest",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" x2="12" y1="8" y2="16"></line>
          <line x1="8" x2="16" y1="12" y2="12"></line>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ),
      url: "#"
    },
    {
      name: "TikTok",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 3a18.9 18.9 0 0 1-5 2"></path>
          <path d="M12 3a18.9 18.9 0 0 0 5 2"></path>
          <path d="M9 9a18.9 18.9 0 0 0 8 1"></path>
          <path d="M12 3v10"></path>
          <path d="M3 15a18.9 18.9 0 0 0 7 4"></path>
          <path d="M21 15a18.9 18.9 0 0 1-7 4"></path>
        </svg>
      ),
      url: "#"
    }
  ];
  
  return (
    <footer className="bg-beauty-50 mt-24 border-t border-beauty-100">
      <div className="beauty-container py-16">
        <div className="flex flex-col md:flex-row flex-wrap gap-12">
          <div className="w-full md:w-1/3 lg:pr-12">
            <Logo className="mb-6" />
            <p className="text-beauty-700 mb-6">
              Your daily source for beauty tips, trends, and personalized advice to enhance your beauty routine.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-beauty-200 text-beauty-700 hover:bg-beauty-100 hover:text-beauty-900 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h3 className="font-medium text-beauty-900 mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.url} 
                          className="text-beauty-700 hover:text-beauty-900 transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-beauty-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-beauty-700 text-sm mb-4 md:mb-0">
            © {currentYear} BeautyBuddy (b2tips.com). All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-beauty-700 hover:text-beauty-900 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-beauty-700 hover:text-beauty-900 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
