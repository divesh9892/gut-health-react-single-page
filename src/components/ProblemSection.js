import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProblemSection.css';

const ProblemSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: '😰',
      title: 'Chronic Stress & Anxiety',
      description: 'Feeling overwhelmed by daily pressures and unable to find peace of mind?'
    },
    {
      icon: '🦴',
      title: 'Poor Flexibility & Stiffness',
      description: 'Struggling with tight muscles, joint pain, and limited range of motion?'
    },
    {
      icon: '⚡',
      title: 'Low Energy & Fatigue',
      description: 'Constantly tired and lacking the vitality to enjoy life fully?'
    },
    {
      icon: '😴',
      title: 'Sleep Issues',
      description: 'Having trouble falling asleep or staying asleep through the night?'
    },
    {
      icon: '🏃‍♀️',
      title: 'Lack of Mind-Body Connection',
      description: 'Feeling disconnected from your body and struggling with mindfulness?'
    },
    {
      icon: '💪',
      title: 'Poor Posture & Core Strength',
      description: 'Dealing with back pain and weakness from sedentary lifestyle?'
    }
  ];

  return (
    <section className="problem-section section section-alt" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="problem-header text-center mb-8"
        >
          <h2>Are you struggling with...</h2>
          <p className="section-subtitle">
            You're not alone. These common challenges affect millions of people daily, 
            but there's a gentle, proven path to healing and transformation.
          </p>
        </motion.div>

        <div className="problems-grid grid grid-3">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="problem-card card"
            >
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="problem-cta text-center mt-8"
        >
          <p className="cta-text">
            If any of these resonate with you, yoga can be your pathway to healing and wellness.
          </p>
          <div className="floating-elements">
            <div className="floating-leaf floating-leaf-1">🍃</div>
            <div className="floating-leaf floating-leaf-2">🌿</div>
            <div className="floating-leaf floating-leaf-3">🍃</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
