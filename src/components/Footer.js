import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🧘‍♀️</span>
              <span className="logo-text">Find Your Balance</span>
            </div>
            <p className="footer-description">
              Transform your mind, body, and spirit through the ancient practice of yoga. 
              Join our community of wellness seekers today.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="YouTube">📺</a>
              <a href="#" className="social-link" aria-label="Email">📧</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#problems">Challenges</a></li>
              <li><a href="#solution">Our Solution</a></li>
              <li><a href="#team">Meet the Team</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><a href="#consultation">Free Consultation</a></li>
              <li><a href="#testimonials">Success Stories</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#" onClick={(e) => {e.preventDefault(); window.open('https://calendly.com/your-yoga-studio', '_blank')}}>Book a Call</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Wellness Street<br />Peaceful City, PC 12345</p>
              <p>📞 (555) 123-YOGA</p>
              <p>📧 hello@findyourbalance.com</p>
              <p>🕐 Mon-Sun: 6AM - 9PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Find Your Balance Yoga Studio. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
