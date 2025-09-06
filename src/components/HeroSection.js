import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookCall = () => {
    // Scroll to contact or open booking modal
    window.open('https://calendly.com/your-yoga-studio', '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-text"
          >
            <h1>Find Your Balance with Yoga</h1>
            <p className="hero-subheading">
              Transform your mind, body, and spirit through the ancient practice of yoga. 
              Discover inner peace, build strength, and create lasting wellness habits.
            </p>
            <button className="btn btn-primary hero-cta" onClick={handleBookCall}>
              Book Your Free Consultation
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-video"
          >
            <div className="video-container">
              <div className="video-placeholder">
                <div className="play-button">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                    <path d="M25 20L40 30L25 40V20Z" fill="var(--primary-green)"/>
                  </svg>
                </div>
                <p>Watch: 1-Minute Yoga Introduction</p>
              </div>
              {/* Replace with actual video when available */}
              {/* <video controls poster="/path-to-poster.jpg">
                <source src="/path-to-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="hero-decoration">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="var(--light-green)"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
