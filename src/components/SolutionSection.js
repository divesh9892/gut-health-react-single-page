import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SolutionSection.css';

const SolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '01',
      title: 'Awareness',
      subtitle: 'Discover Your Body',
      description: 'Begin with gentle breathing exercises and basic poses to develop body awareness and understand your current physical and mental state.',
      icon: '🧘‍♀️',
      color: 'var(--primary-green)'
    },
    {
      number: '02',
      title: 'Practice',
      subtitle: 'Build Your Foundation',
      description: 'Learn fundamental yoga poses, proper alignment, and breathing techniques through personalized sessions tailored to your needs.',
      icon: '🌱',
      color: 'var(--soft-blue)'
    },
    {
      number: '03',
      title: 'Mindfulness',
      subtitle: 'Connect Mind & Body',
      description: 'Integrate meditation and mindfulness practices to reduce stress, improve focus, and develop emotional balance.',
      icon: '🌸',
      color: 'var(--accent-coral)'
    },
    {
      number: '04',
      title: 'Transformation',
      subtitle: 'Embrace Your New Self',
      description: 'Experience lasting changes in flexibility, strength, mental clarity, and overall well-being as yoga becomes part of your lifestyle.',
      icon: '✨',
      color: 'var(--primary-green)'
    }
  ];

  return (
    <section className="solution-section section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="solution-header text-center mb-8"
        >
          <h2>Our 4-Step Yoga Journey</h2>
          <p className="section-subtitle">
            A proven pathway to wellness that guides you from where you are now 
            to where you want to be, step by gentle step.
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index % 2 === 0 ? -50 : 50) }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`step-item ${index % 2 === 1 ? 'step-reverse' : ''}`}
            >
              <div className="step-content">
                <div className="step-number" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                <div className="step-text">
                  <h3>{step.title}</h3>
                  <h4>{step.subtitle}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
              <div className="step-visual">
                <div className="step-icon" style={{ backgroundColor: step.color }}>
                  {step.icon}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg viewBox="0 0 100 100" className="connector-svg">
                    <path
                      d="M50 10 Q75 50 50 90"
                      stroke="var(--primary-green)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="solution-cta text-center mt-8"
        >
          <p className="cta-text">
            Ready to begin your transformation journey?
          </p>
          <button className="btn btn-primary" onClick={() => window.open('https://calendly.com/your-yoga-studio', '_blank')}>
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
