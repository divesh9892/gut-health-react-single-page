import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutTeam.css';

const AboutTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const instructors = [
    {
      name: 'Sarah Chen',
      title: 'Lead Yoga Instructor & Founder',
      experience: '12+ years',
      specialties: ['Hatha Yoga', 'Meditation', 'Stress Relief'],
      bio: 'Sarah discovered yoga during a stressful period in her corporate career and experienced such profound transformation that she dedicated her life to sharing this practice. She holds certifications in multiple yoga styles and has helped over 1,000 students find their balance.',
      image: '👩‍🦳', // Placeholder - replace with actual image
      credentials: ['RYT-500', 'Meditation Teacher', 'Trauma-Informed Yoga']
    },
    {
      name: 'Michael Rodriguez',
      title: 'Vinyasa & Power Yoga Specialist',
      experience: '8+ years',
      specialties: ['Vinyasa Flow', 'Power Yoga', 'Strength Building'],
      bio: 'A former athlete who turned to yoga after a sports injury, Michael brings a unique perspective on using yoga for physical recovery and strength building. His dynamic classes help students build both physical and mental resilience.',
      image: '👨‍🦲', // Placeholder - replace with actual image
      credentials: ['RYT-200', 'Sports Yoga Certified', 'Anatomy Specialist']
    },
    {
      name: 'Emma Thompson',
      title: 'Restorative & Yin Yoga Expert',
      experience: '10+ years',
      specialties: ['Restorative Yoga', 'Yin Yoga', 'Deep Relaxation'],
      bio: 'Emma specializes in gentle, healing practices that help students slow down and reconnect with themselves. Her nurturing approach creates a safe space for deep healing and restoration, perfect for beginners and those seeking stress relief.',
      image: '👩‍🦰', // Placeholder - replace with actual image
      credentials: ['RYT-300', 'Yin Yoga Certified', 'Mindfulness Teacher']
    }
  ];

  return (
    <section className="about-team-section section section-alt" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="team-header text-center mb-8"
        >
          <h2>Meet Your Yoga Guides</h2>
          <p className="section-subtitle">
            Our experienced and compassionate instructors are here to support you 
            on every step of your yoga journey, meeting you exactly where you are.
          </p>
        </motion.div>

        <div className="instructors-grid">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="instructor-card card"
            >
              <div className="instructor-image">
                <div className="image-placeholder">
                  {instructor.image}
                </div>
                <div className="experience-badge">
                  {instructor.experience}
                </div>
              </div>
              
              <div className="instructor-info">
                <h3>{instructor.name}</h3>
                <h4>{instructor.title}</h4>
                
                <div className="specialties">
                  {instructor.specialties.map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <p className="instructor-bio">{instructor.bio}</p>
                
                <div className="credentials">
                  <h5>Certifications:</h5>
                  <div className="credential-list">
                    {instructor.credentials.map((credential, idx) => (
                      <span key={idx} className="credential">
                        {credential}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="team-cta text-center mt-8"
        >
          <p className="cta-text">
            Ready to work with our amazing team?
          </p>
          <button 
            className="btn btn-secondary"
            onClick={() => window.open('https://calendly.com/your-yoga-studio', '_blank')}
          >
            Book Your Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
