import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import '../styles/hero-section.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="hero-section">
      <Navbar />

      <div className={`hero ${isVisible ? 'hero-visible' : ''}`}>
        <img
          src="/images/hero-image.png"
          alt=""
          aria-hidden="true"
          className="hero-bg-image"
        />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content">
          <span className="eyebrow" style={{ '--stagger': 0 }}>
            AI-POWERED DIAGNOSTICS
          </span>
          <h1 className="headline" style={{ '--stagger': 1 }}>
            Diagnostic accuracy,
            <br />
            <span className="headline-accent">redefined by AI.</span>
          </h1>
          <p className="subcopy" style={{ '--stagger': 2 }}>
            Truedote gives healthcare providers real-time, AI-backed decision
            support - reducing diagnostic errors at every stage of care.
          </p>
          <div className="cta-row" style={{ '--stagger': 3 }}>
            <Link to="/demo" className="primary-cta">
              Book a Demo
              <FiArrowUpRight size={14} />
            </Link>
            <Link to="/products" className="secondary-cta">
              Explore Products
              <FiArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-avatars">
            <img src="/images/person1.avif" alt="" className="stat-avatar" />
            <img src="/images/person2.avif" alt="" className="stat-avatar" />
            <img src="/images/person3.avif" alt="" className="stat-avatar" />
          </div>
          <div>
            <p className="stat-heading">24/7 AI Support</p>
            <p className="stat-sub">50+ care specialists on call</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;