import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FinalCTA.css';

const FinalCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="final-cta-section section" ref={ref}>
      <div className="cta-background"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="cta-content text-center"
        >
          <div className="cta-icon">🌟</div>
          <h2>Your Journey to Wellness Starts Today</h2>
          <p className="cta-subtitle">
            Don't let another day pass feeling stressed, stiff, or disconnected from your body. 
            Take the first step toward a healthier, more balanced life.
          </p>
          
          <div className="cta-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">✨</span>
              <span>Reduce stress & anxiety</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💪</span>
              <span>Improve flexibility & strength</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🧘‍♀️</span>
              <span>Find inner peace & balance</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">❤️</span>
              <span>Boost overall well-being</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="cta-action"
          >
            <button 
              className="btn btn-primary cta-main-button"
              onClick={() => window.open('https://calendly.com/your-yoga-studio', '_blank')}
            >
              Book Your Free Consultation Now
            </button>
            <p className="cta-guarantee">
              🛡️ 100% Risk-Free • No Commitment Required • Instant Booking
            </p>
          </motion.div>

          <div className="cta-urgency">
            <p className="urgency-text">
              <strong>Limited Availability:</strong> We only accept 10 new students per month 
              to ensure personalized attention for everyone.
            </p>
          </div>

          <div className="cta-social-proof">
            <div className="proof-item">
              <span className="proof-number">500+</span>
              <span className="proof-label">Happy Students</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">5★</span>
              <span className="proof-label">Average Rating</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">3+</span>
              <span className="proof-label">Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="floating-elements">
        <div className="floating-element element-1">🌸</div>
        <div className="floating-element element-2">🍃</div>
        <div className="floating-element element-3">✨</div>
        <div className="floating-element element-4">🌿</div>
        <div className="floating-element element-5">🦋</div>
      </div>
    </section>
  );
};

export default FinalCTA;
