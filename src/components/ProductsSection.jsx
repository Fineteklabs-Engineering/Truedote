import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/products-section.css';

const PRODUCTS = [
  {
    title: 'Truedote LIMS',
    description:
      'Intelligent laboratory management system that assists in decision support to minimize errors in laboratory tests built for research and medical facilities.',
    image: '/images/product2.png',
    href: '/products/lims',
  },
  {
    title: 'Truedote EMR',
    description:
      'Manages workflows from triage, to diagnosis, to laboratory, to pharmacy augmenting the caregiver\u2019s decision-making at every step.',
    image: '/images/product1.png',
    href: '/products/emr',
  },
  {
    title: 'MyTruedote',
    description:
      'Gives patients and providers access to qualified, private health services from anywhere, anytime.',
    image: '/images/product3.png',
    href: '/products/mytruedote',
  },
  {
    title: 'Truebox',
    description:
      'A remote telepathology platform built for small healthcare facilities to access expert-level diagnostic support.',
    image: '/images/product1.png',
    href: '/products/truebox',
  },
];

// A spring feels far smoother/more physical for a layout animation like this
// than a fixed-duration easing curve — it's what `layout` transitions are
// really designed around.
const CARD_TRANSITION = {
  type: 'spring',
  stiffness: 110,
  damping: 18,
  mass: 0.9,
};

const REVEAL_DELAY = 700;

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    let revealTimer;

    // No disconnect() here — toggling isVisible on both enter and exit lets
    // the stack-reveal replay every time the section scrolls back into
    // view, not just once per page load.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealTimer = setTimeout(() => setIsVisible(true), REVEAL_DELAY);
        } else {
          clearTimeout(revealTimer);
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(revealTimer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="products-section" id="products">
      <div className="products-header">
        <span className="products-eyebrow">PRODUCTS</span>
        <h2 className="products-headline">
          One solution, <span className="products-headline-accent">multiple applications.</span>
        </h2>
        <p className="products-subcopy">
          Built for care teams who need answers faster, without cutting corners on accuracy.
        </p>
      </div>

      <div className={`products-grid ${isVisible ? 'products-revealed' : 'products-stacked'}`}>
        {PRODUCTS.map((product, index) => {
          // Reveal back-to-front: the last card unstacks first, then each
          // earlier card follows — same order the site already uses elsewhere.
          const revealOrder = PRODUCTS.length - 1 - index;

          return (
            <motion.article
              key={product.title}
              layout
              className={`product-card ${isVisible ? '' : 'product-stacked'}`}
              style={{ '--stack-index': index, zIndex: PRODUCTS.length - index }}
              transition={{
                ...CARD_TRANSITION,
                delay: isVisible ? revealOrder * 0.12 : 0,
              }}
            >
              <div className="product-media">
                <img src={product.image} alt="" />
                <Link
                  to={product.href}
                  className="product-arrow"
                  aria-label={`Learn more about ${product.title}`}
                >
                  <FiArrowUpRight size={16} />
                </Link>
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;