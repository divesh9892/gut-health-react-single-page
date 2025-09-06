import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FreeCallSection.css';

const FreeCallSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const callBenefits = [
    {
      icon: '🎯',
      title: 'Personal Assessment',
      description: 'We\'ll discuss your current fitness level, flexibility, stress levels, and wellness goals to create a personalized approach.'
    },
    {
      icon: '📋',
      title: 'Customized Plan',
      description: 'Receive a tailored yoga practice plan designed specifically for your needs, schedule, and experience level.'
    },
    {
      icon: '🧘‍♀️',
      title: 'Mini Practice Session',
      description: 'Experience a gentle 10-minute guided practice to get a feel for our teaching style and approach.'
    },
    {
      icon: '❓',
      title: 'Q&A Time',
      description: 'Ask any questions about yoga, our programs, or address any concerns you might have about starting your practice.'
    },
    {
      icon: '🎁',
      title: 'Free Resources',
      description: 'Get access to our beginner\'s guide, breathing exercises, and a 7-day home practice starter kit.'
    },
    {
      icon: '🤝',
      title: 'No Pressure',
      description: 'This is a genuine consultation with no sales pressure. Our goal is to help you find the right path forward.'
    }
  ];

  return (
    <section className="free-call-section section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="call-header text-center mb-8"
        >
          <h2>What You'll Get in Your Free Consultation</h2>
          <p className="section-subtitle">
            This complimentary 30-minute session is designed to understand your unique needs 
            and show you exactly how yoga can transform your life.
          </p>
        </motion.div>

        <div className="call-benefits-grid grid grid-3">
          {callBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="benefit-card card"
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="call-details card mt-8"
        >
          <div className="call-info">
            <div className="call-feature">
              <span className="feature-icon">⏰</span>
              <div>
                <h4>Duration</h4>
                <p>30 minutes of focused, personalized attention</p>
              </div>
            </div>
            <div className="call-feature">
              <span className="feature-icon">💻</span>
              <div>
                <h4>Format</h4>
                <p>Video call via Zoom (or phone if preferred)</p>
              </div>
            </div>
            <div className="call-feature">
              <span className="feature-icon">📅</span>
              <div>
                <h4>Scheduling</h4>
                <p>Flexible times including evenings and weekends</p>
              </div>
            </div>
            <div className="call-feature">
              <span className="feature-icon">💝</span>
              <div>
                <h4>Investment</h4>
                <p>Completely free - our gift to you</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="call-cta text-center mt-8"
        >
          <p className="cta-text">
            Ready to take the first step toward a healthier, more balanced you?
          </p>
          <button 
            className="btn btn-primary cta-button"
            onClick={() => window.open('https://calendly.com/your-yoga-studio', '_blank')}
          >
            Schedule Your Free Consultation
          </button>
          <p className="cta-note">
            ✨ No credit card required • Available 7 days a week • Instant confirmation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeCallSection;
