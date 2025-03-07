import React from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative">
      <Logo />
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;