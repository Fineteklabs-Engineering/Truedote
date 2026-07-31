import { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/who-we-serve.css';

const SEGMENTS = [
  {
    id: 'hospitals',
    image: '/images/product1.png',
    quote: 'Rolling out across every department from a single admin console.',
    name: 'Hospitals & Multi-Facility Networks',
    role: 'Truedote EMR',
  },
  {
    id: 'labs',
    image: '/images/product2.png',
    quote: 'Decision support built into every test, every result, every day.',
    name: 'Labs & Research Centers',
    role: 'Truedote LIMS',
  },
  {
    id: 'clinics',
    image: '/images/product3.png',
    quote: 'Expert-level diagnostic support without an in-house specialist.',
    name: 'Small Clinics & Facilities',
    role: 'Truebox',
  },
  {
    id: 'patients',
    image: '/images/product4.png',
    quote: 'Qualified, private health services — from anywhere, anytime.',
    name: 'Patients & Independent Providers',
    role: 'MyTruedote',
  },
];

const WhoWeServe = () => {
  const scrollerRef = useRef(null);

  const handleScrollNext = () => {
    const node = scrollerRef.current;
    if (!node) return;

    const cardWidth = node.querySelector('.who-we-serve-card')?.offsetWidth || 340;
    const isAtEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 10;

    node.scrollTo({
      left: isAtEnd ? 0 : node.scrollLeft + cardWidth + 24,
      behavior: 'smooth',
    });
  };

  return (
    <section className="who-we-serve">
      <div className="who-we-serve-inner">
        <motion.div
          className="who-we-serve-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="who-we-serve-headline">
            Built for Every Care Setting, Big or Small
          </h2>
          <p className="who-we-serve-subcopy">
            From large hospitals to independent providers, Truedote adapts to
            how your team already works - one platform, five ways to serve.
          </p>
          <Link to="/products" className="who-we-serve-cta">
            Explore Products
          </Link>
        </motion.div>

        <div className="who-we-serve-carousel-wrap">
          <div className="who-we-serve-carousel" ref={scrollerRef}>
            {SEGMENTS.map((segment, index) => (
              <motion.div
                key={segment.id}
                className="who-we-serve-card"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={segment.image} alt="" className="who-we-serve-card-image" />
                <div className="who-we-serve-card-overlay">
                  <p className="who-we-serve-card-quote">{segment.quote}</p>
                  <div className="who-we-serve-card-meta">
                    <span className="who-we-serve-card-name">{segment.name}</span>
                    <span className="who-we-serve-card-role">{segment.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            type="button"
            className="who-we-serve-arrow"
            onClick={handleScrollNext}
            aria-label="Next"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <FiArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;