import React, { createContext, useContext, useState, useEffect } from 'react';

type Gender = 'women' | 'men';

interface GenderContextType {
  gender: Gender;
  setGender: (gender: Gender) => void;
}

const GenderContext = createContext<GenderContextType | undefined>(undefined);

export const GenderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gender, setGender] = useState<Gender>(() => {
    const saved = localStorage.getItem('beauty-gender-mode');
    return (saved as Gender) || 'women';
  });

  useEffect(() => {
    localStorage.setItem('beauty-gender-mode', gender);
    // Update data attribute on document element for CSS theming
    document.documentElement.setAttribute('data-gender', gender);
  }, [gender]);

  // Set initial theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-gender', gender);
  }, []);

  return (
    <GenderContext.Provider value={{ gender, setGender }}>
      {children}
    </GenderContext.Provider>
  );
};

export const useGender = () => {
  const context = useContext(GenderContext);
  if (!context) {
    throw new Error('useGender must be used within GenderProvider');
  }
  return context;
};
