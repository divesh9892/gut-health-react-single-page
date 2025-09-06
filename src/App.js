import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import AboutTeam from './components/AboutTeam';
import FreeCallSection from './components/FreeCallSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTA from './components/FinalCTA';
import QASection from './components/QASection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="problems">
        <ProblemSection />
      </div>
      <div id="solution">
        <SolutionSection />
      </div>
      <div id="team">
        <AboutTeam />
      </div>
      <div id="consultation">
        <FreeCallSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="cta">
        <FinalCTA />
      </div>
      <div id="faq">
        <QASection />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
