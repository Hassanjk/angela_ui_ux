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
  
  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  const handleNavigate = (section) => {
    if (section === currentSection) return;
    setIsTransitioning(true);
    
    // Add a short delay for visual feedback before transition
    setTimeout(() => {
      setCurrentSection(section);
    }, 100);
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative">
      <Logo />
      <Navigation onNavigate={handleNavigate} />
      <PageTransition 
        isLoading={isTransitioning} 
        onTransitionComplete={handleTransitionComplete}
      >
        {renderContent()}
      </PageTransition>
    </div>
  );
}

export default App;