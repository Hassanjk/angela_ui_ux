import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PageTransition from './components/PageTransition';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  
  // Remove loading class when app loads
  useEffect(() => {
    document.body.classList.remove('loading');
    setIsLoading(false);
  }, []);
  
  const handleNavigate = (section) => {
    // Add a short delay for visual feedback before transition
    setTimeout(() => {
      setCurrentSection(section);
    }, 100);
  };

  return (
    <div className={`relative ${isLoading ? 'hidden' : ''}`}>
      <Logo />
      <Navigation onNavigate={handleNavigate} />
      <main>
        {currentSection === 'home' ? (
          <Hero />
        ) : (
          <PageTransition section={currentSection} />
        )}
      </main>
    </div>
  );
}

export default App;