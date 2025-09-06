import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './QASection.css';

const QASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "Do I need prior yoga experience to start?",
      answer: "Absolutely not! Our programs are designed for complete beginners. We start with the basics and progress at your comfortable pace. Many of our most successful students had never done yoga before joining us. We believe everyone can benefit from yoga, regardless of their starting point."
    },
    {
      question: "What do I need to bring or have for yoga sessions?",
      answer: "For online sessions, you'll need a yoga mat (we can recommend affordable options), comfortable clothing that allows movement, and a quiet space. For in-person classes, we provide all equipment. We'll send you a complete preparation guide after your consultation call."
    },
    {
      question: "How long are the yoga sessions and how often should I practice?",
      answer: "Our sessions range from 30-60 minutes depending on the program. For beginners, we typically recommend 2-3 sessions per week. We also provide shorter 10-15 minute daily practices you can do at home. Consistency matters more than duration - even 15 minutes daily can create significant benefits."
    },
    {
      question: "I have physical limitations or injuries. Can I still do yoga?",
      answer: "Yes! Yoga can be adapted for almost any physical condition. Our instructors are trained in modifications and trauma-informed practices. During your consultation, we'll discuss your specific needs and create a safe, personalized approach. We've successfully worked with students with arthritis, back pain, mobility issues, and various injuries."
    },
    {
      question: "What's the difference between online and in-person classes?",
      answer: "Both formats offer personalized attention and high-quality instruction. Online classes provide convenience and comfort of practicing at home, while in-person classes offer hands-on adjustments and community connection. Many students enjoy a combination of both. We'll help you choose what works best for your lifestyle and preferences."
    },
    {
      question: "How quickly will I see results from yoga practice?",
      answer: "Many students notice improvements in stress levels and sleep quality within the first week. Physical changes like increased flexibility and strength typically become noticeable after 2-4 weeks of consistent practice. Remember, yoga is a journey - the most profound transformations happen over months of regular practice."
    },
    {
      question: "What if I'm not flexible or strong enough for yoga?",
      answer: "This is the most common misconception! You don't need to be flexible to start yoga - flexibility is something you develop through practice. Yoga meets you where you are and helps you progress safely. We use props, modifications, and gentle progressions to make every pose accessible to your current ability level."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="qa-section section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="qa-header text-center mb-8"
        >
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">
            We understand you might have questions about starting your yoga journey. 
            Here are answers to the most common questions we receive.
          </p>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`faq-item ${openQuestion === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestion === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="question-icon">
                  {openQuestion === index ? '−' : '+'}
                </span>
              </button>
              
              <div className="faq-answer">
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="qa-cta text-center mt-8"
        >
          <div className="cta-card card">
            <h3>Still have questions?</h3>
            <p>
              We're here to help! Book your free consultation and get personalized answers 
              to all your questions about starting yoga.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => window.open('https://calendly.com/your-yoga-studio', '_blank')}
            >
              Get Your Questions Answered
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QASection;
