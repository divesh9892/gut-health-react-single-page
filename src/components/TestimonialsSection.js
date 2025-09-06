import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      age: '34, Marketing Manager',
      image: '👩‍💼',
      rating: 5,
      beforeAfter: {
        before: 'Chronic back pain, high stress, couldn\'t touch my toes',
        after: 'Pain-free, sleeping better, increased flexibility and confidence'
      },
      quote: 'I was skeptical about yoga at first, but Sarah\'s gentle approach made me feel comfortable from day one. After 3 months, my chronic back pain is gone, I sleep through the night, and I feel more centered than I have in years. Yoga didn\'t just change my body - it changed my entire outlook on life.',
      program: '3-month Beginner Program'
    },
    {
      name: 'David Kim',
      age: '42, Software Engineer',
      image: '👨‍💻',
      rating: 5,
      beforeAfter: {
        before: 'Sedentary lifestyle, anxiety, poor posture',
        after: 'Stronger core, reduced anxiety, improved focus at work'
      },
      quote: 'As someone who sits at a computer all day, I thought yoga was just stretching. Michael showed me how it could build real strength while calming my mind. My posture has improved dramatically, and I handle work stress so much better now. It\'s become an essential part of my routine.',
      program: 'Power Yoga Series'
    },
    {
      name: 'Lisa Thompson',
      age: '28, New Mom',
      image: '👩‍🍼',
      rating: 5,
      beforeAfter: {
        before: 'Postpartum depression, exhaustion, feeling disconnected',
        after: 'Renewed energy, emotional balance, stronger mind-body connection'
      },
      quote: 'After having my baby, I felt lost and exhausted. Emma\'s restorative yoga classes gave me a safe space to reconnect with myself. The breathing techniques help me stay calm during challenging parenting moments, and I finally feel like myself again - but stronger.',
      program: 'Postnatal Yoga Program'
    },
    {
      name: 'Robert Chen',
      age: '55, Retired Teacher',
      image: '👨‍🏫',
      rating: 5,
      beforeAfter: {
        before: 'Arthritis pain, limited mobility, feeling old',
        after: 'Increased mobility, pain management, feeling youthful and energetic'
      },
      quote: 'I thought my arthritis meant my active days were over. The team created a modified practice that worked with my limitations, not against them. Six months later, I\'m more flexible than I was 10 years ago, and the pain is manageable. Yoga gave me my life back.',
      program: 'Senior-Friendly Yoga'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials-section section section-alt" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="testimonials-header text-center mb-8"
        >
          <h2>Real Stories, Real Transformations</h2>
          <p className="section-subtitle">
            See how yoga has transformed the lives of our students. 
            These are real people who started exactly where you are now.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="testimonial-card card"
            >
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">{testimonial.image}</div>
                  <div className="client-details">
                    <h4>{testimonial.name}</h4>
                    <p className="client-age">{testimonial.age}</p>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="program-badge">
                  {testimonial.program}
                </div>
              </div>

              <div className="before-after">
                <div className="before">
                  <h5>Before:</h5>
                  <p>{testimonial.beforeAfter.before}</p>
                </div>
                <div className="transformation-arrow">→</div>
                <div className="after">
                  <h5>After:</h5>
                  <p>{testimonial.beforeAfter.after}</p>
                </div>
              </div>

              <blockquote className="testimonial-quote">
                <p>"{testimonial.quote}"</p>
              </blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="testimonials-cta text-center mt-8"
        >
          <p className="cta-text">
            Ready to write your own transformation story?
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => window.open('https://calendly.com/your-yoga-studio', '_blank')}
          >
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
