import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/products-grid.css';

const PRODUCTS = [
  {
    id: 'lims',
    title: 'Truedote LIMS',
    description:
      'Intelligent laboratory management system that assists in decision support to minimize errors in laboratory tests built for research and medical facilities.',
    image: '/images/product2.png',
    href: '/products/lims',
  },
  {
    id: 'emr',
    title: 'Truedote EMR',
    description:
      "Manages workflows from triage, to diagnosis, to laboratory, to pharmacy - augmenting the caregiver's decision-making at every step.",
    image: '/images/product1.png',
    href: '/products/emr',
  },
  {
    id: 'mytruedote',
    title: 'MyTruedote',
    description:
      'Gives patients and providers access to qualified, private health services from anywhere, anytime.',
    image: '/images/product3.png',
    href: '/products/mytruedote',
  },
  {
    id: 'truebox',
    title: 'Truebox',
    description:
      'A remote telepathology platform built for small healthcare facilities to access expert-level diagnostic support.',
    image: '/images/product1.png',
    href: '/products/truebox',
  },
  {
    id: 'pharmacy-pos',
    title: 'Pharmacy POS',
    description:
      'Point-of-sale system for pharmacies, tying dispensing directly to the patient record to catch interactions and stock issues early.',
    image: '/images/product2.png',
    href: '/products/pharmacy-pos',
  },
];

const AUTO_ROTATE_MS = 6000;

const ProductsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;

    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % PRODUCTS.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timerRef.current);
  }, [isVisible, activeIndex]);

  const handleDotClick = (index) => {
    clearInterval(timerRef.current);
    setActiveIndex(index);
  };

  const active = PRODUCTS[activeIndex];

  return (
    <section
      ref={sectionRef}
      className={`products-grid-section ${isVisible ? 'products-grid-visible' : ''}`}
      id="products-grid"
    >
      <div className="products-grid-inner">
        <div className="products-grid-header">
          <span className="products-grid-eyebrow" style={{ '--stagger': 0 }}>
            OUR PRODUCTS
          </span>
          <h2 className="products-grid-headline" style={{ '--stagger': 1 }}>
            Five products, <span className="products-grid-headline-accent">one platform.</span>
          </h2>
         
        </div>

        <div className="products-grid-carousel">
          <img
            src={active.image}
            alt=""
            className="products-grid-image"
            key={`${active.id}-img`}
          />

          <div className="products-grid-card" key={`${active.id}-card`}>
            <h3 className="products-grid-title">{active.title}</h3>
            <span className="products-grid-divider" aria-hidden="true" />
            <p className="products-grid-description">{active.description}</p>

            <Link to={active.href} className="products-grid-learn-more">
              Learn More
              <FiArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="products-grid-dots" role="tablist" aria-label="Products">
          {PRODUCTS.map((product, index) => (
            <button
              key={product.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={product.title}
              className={`products-grid-dot ${
                index === activeIndex ? 'products-grid-dot-active' : ''
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;