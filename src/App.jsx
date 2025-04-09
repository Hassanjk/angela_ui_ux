import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [prevSection, setPrevSection] = useState(null);
  
  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    // Clear previous section after transition completes
    setPrevSection(null);
  };

  const handleNavigate = (section) => {
    if (section === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    // Store current section as previous before changing to new section
    setPrevSection(currentSection);
    
    // Add a short delay for visual feedback before transition
    setTimeout(() => {
      setCurrentSection(section);
    }, 100);
  };

  const renderContent = () => {
    // Only render current section, and make sure it gets proper transition classes
    return (
      <div className="section-container">
        <div className={`section ${currentSection === 'home' ? 'active' : ''}`}>
          {currentSection === 'home' && <Hero />}
        </div>
        <div className={`section ${currentSection === 'about' ? 'active' : ''}`}>
          {currentSection === 'about' && <About />}
        </div>
        <div className={`section ${currentSection === 'portfolio' ? 'active' : ''}`}>
          {currentSection === 'portfolio' && <Portfolio />}
        </div>
        <div className={`section ${currentSection === 'contact' ? 'active' : ''}`}>
          {currentSection === 'contact' && <Contact />}
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <Logo />
      <Navigation onNavigate={handleNavigate} />
      <PageTransition 
        isLoading={isTransitioning} 
        onTransitionComplete={handleTransitionComplete}
        currentSection={currentSection}
        prevSection={prevSection}
      >
        {renderContent()}
      </PageTransition>
    </div>
  );
}

export default App;