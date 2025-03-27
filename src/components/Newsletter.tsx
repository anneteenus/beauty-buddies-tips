
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section className="beauty-section bg-beauty-50">
      <div className="beauty-container">
        <div className="max-w-5xl mx-auto">
          <div className="beauty-glass-dark rounded-3xl p-8 md:p-12 bg-gradient-to-r from-beauty-100/30 to-beauty-50/20 border border-beauty-200/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-beauty-200/30 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-beauty-300/20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 justify-between items-center">
              <div className="text-center md:text-left max-w-lg">
                <span className="beauty-chip mb-4">Stay Updated</span>
                <h2 className="beauty-subheading text-beauty-900 mb-4">Get Beauty Tips In Your Inbox</h2>
                <p className="text-beauty-700">
                  Subscribe to our newsletter for weekly beauty tips, product recommendations, and exclusive content delivered straight to your inbox.
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 pr-32 rounded-full border-beauty-200 focus:border-beauty-400 focus:ring focus:ring-beauty-300/20 bg-white shadow-sm"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-2 top-2 bottom-2 beauty-button min-w-24 px-5"
                    >
                      {isSubmitting ? "Sending..." : "Subscribe"}
                    </button>
                  </div>
                  
                  {isSuccess && (
                    <div className="mt-4 text-center text-beauty-600 bg-beauty-100 py-2 px-4 rounded-full animate-fade-in">
                      Thank you for subscribing!
                    </div>
                  )}
                  
                  <p className="text-xs text-beauty-600/80 mt-3 text-center">
                    By subscribing, you agree to our Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
