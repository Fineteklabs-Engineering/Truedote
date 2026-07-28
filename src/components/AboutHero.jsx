import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from './Navbar';
import '../styles/about-hero.css';

const STRIP_IMAGES = [
  { src: '/images/product1.png', alt: '' },
  { src: '/images/product2.png', alt: '' },
  { src: '/images/product3.png', alt: '' },
  { src: '/images/product4.png', alt: '' },
  { src: '/images/product1.png', alt: '' },
  { src: '/images/product1.png', alt: '' },
];

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="about-hero">
      <Navbar />

      <img
        src="/images/about-hero-image2.png"
        alt="about-hero-image"
        aria-hidden="true"
        className="about-hero-bg-image"
      />
      <div className="about-hero-overlay" aria-hidden="true" />

      <div className={`about-hero-main ${isVisible ? 'about-hero-visible' : ''}`}>
        <div className="about-hero-copy">
          <h1 className="about-hero-headline" style={{ '--stagger': 0 }}>
            Augmenting the modern
            <br />
            <span className="about-hero-accent">caregiver, everywhere.</span>
          </h1>
          <p className="about-hero-subcopy" style={{ '--stagger': 1 }}>
            We're a diagnostics-as-a-service platform, built to give
            healthcare providers the tools to deliver quality care at every
            stage - from the lab bench to the bedside.
          </p>
          <div className="about-hero-cta-row" style={{ '--stagger': 2 }}>
            <Link to="/demo" className="about-hero-primary-cta">
              Book a Demo
              <FiArrowUpRight size={14} />
            </Link>
            <Link to="#team" className="about-hero-secondary-cta">
              Meet the Team
            </Link>
          </div>
        </div>

        <div className="about-hero-stat-card" style={{ '--stagger': 2 }}>
          <div className="about-hero-avatars">
            <img src="/images/person1.avif" alt="" className="about-hero-avatar" />
            <img src="/images/person2.avif" alt="" className="about-hero-avatar" />
            <img src="/images/person3.avif" alt="" className="about-hero-avatar" />
          </div>
          <div>
            <p className="about-hero-stat-heading">7-person team</p>
            <p className="about-hero-stat-sub">Doctors, engineers, pharmacists</p>
          </div>
        </div>
      </div>

{/*
      <div className={`about-hero-strip ${isVisible ? 'about-hero-visible' : ''}`} style={{ '--stagger': 3 }}>
        {STRIP_IMAGES.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} className="about-hero-strip-image" />
        ))}
      </div>

   */}    
    </header>
  );
};

export default AboutHero;