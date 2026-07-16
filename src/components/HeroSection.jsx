import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/hero-section.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: '/blog' },
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="hero-section">
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`} aria-label="Primary">
        <Link to="/" className="logo-link">
          <img src="/images/truedote-logo.svg" alt="Truedote" className="logo" />
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            Login
          </Link>
          <Link to="/demo" className="nav-cta">
            Book a Demo
            <FiArrowUpRight size={14} />
          </Link>
        </div>
      </nav>

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