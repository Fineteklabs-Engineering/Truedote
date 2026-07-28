import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiStar } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import '../styles/products-hero.css';

const QUICK_LINKS = [
  { label: 'Truedote LIMS', href: '#lims' },
  { label: 'Truedote EMR', href: '#emr' },
  { label: 'MyTruedote', href: '#mytruedote' },
  { label: 'Truebox', href: '#truebox' },
  { label: 'Pharmacy POS', href: '#pharmacy-pos' },
];

const ProductsHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="products-hero">
      <Navbar />

      <div className={`products-hero-inner ${isVisible ? 'products-hero-visible' : ''}`}>
        <img
          src="/images/products-hero-image.png"
          alt="hero-image"
          aria-hidden="true"
          className="products-hero-bg"
        />
        <div className="products-hero-overlay" aria-hidden="true" />

        <div className="products-hero-content">
          <span className="products-hero-badge" style={{ '--stagger': 0 }}>
            <FiStar size={12} />
            Trusted by 500+ care teams
          </span>

          <h1 className="products-hero-headline" style={{ '--stagger': 1 }}>
            Every tool your care team
            <br />
            <span className="products-hero-accent">needs, in one platform.</span>
          </h1>

          <p className="products-hero-subcopy" style={{ '--stagger': 2 }}>
            From the lab bench to the pharmacy counter, Truedote's product
            suite catches errors before they reach a patient.
          </p>
        </div>

        <div className="products-hero-quicklinks" style={{ '--stagger': 3 }}>
          {QUICK_LINKS.map((link, index) => (
            <a key={link.href} href={link.href} className="products-hero-quicklink">
              <span className="products-hero-quicklink-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{link.label}</span>
              <FiArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default ProductsHero;