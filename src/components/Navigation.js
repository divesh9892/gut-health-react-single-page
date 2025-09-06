import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navigation.css";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "problems", label: "Challenges", href: "#problems" },
  { id: "solution", label: "Solution", href: "#solution" },
  { id: "team", label: "Team", href: "#team" },
  { id: "consultation", label: "Free Call", href: "#consultation" },
  { id: "testimonials", label: "Stories", href: "#testimonials" },
  { id: "faq", label: "FAQ", href: "#faq" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    setIsOpen(false); // Close mobile menu after clicking
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className={`navigation ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🧘‍♀️</span>
          <span className="logo-text">Find Your Balance</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="nav-cta-btn btn btn-primary"
          onClick={() =>
            window.open("https://calendly.com/your-yoga-studio", "_blank")
          }
        >
          Book Call
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
            display: isOpen ? "block" : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <button
                  className={`mobile-nav-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mobile-nav-item mobile-cta">
              <button
                className="btn btn-primary mobile-cta-btn"
                onClick={() => {
                  window.open(
                    "https://calendly.com/your-yoga-studio",
                    "_blank"
                  );
                  setIsOpen(false);
                }}
              >
                Book Your Free Call
              </button>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)} />
      )}
    </motion.nav>
  );
};

export default Navigation;
