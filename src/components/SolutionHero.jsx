import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from './Navbar';
import '../styles/solutions-hero.css';

const SolutionHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="solutions-hero">
      <Navbar />

      <div className="solutions-hero-visual">
        <img
          src="/images/solutions-image2.png"
          alt=""
          className="solutions-hero-image"
        />
      </div>

      <div className={`solutions-hero-inner ${isVisible ? 'solutions-hero-visible' : ''}`}>
        <div className="solutions-hero-copy">
          <span className="solutions-hero-kicker" style={{ '--stagger': 0 }}>
            THE
          </span>
          <h1 className="solutions-hero-headline" style={{ '--stagger': 1 }}>
            Best
            <br />
            <span className="solutions-hero-headline-row">
              Solutions
              <span className="solutions-hero-dash" aria-hidden="true" />
            </span>
          </h1>
          <p className="solutions-hero-subcopy" style={{ '--stagger': 2 }}>
            Towards a healthcare world where every diagnosis is as accurate
            as it could be.
          </p>
          <div className="solutions-hero-cta-row" style={{ '--stagger': 3 }}>
            <Link to="/demo" className="solutions-hero-primary-cta">
              Book a Demo
              <FiArrowUpRight size={14} />
            </Link>
            <Link to="/products" className="solutions-hero-secondary-cta">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SolutionHero;