import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/cta-section.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <motion.span
          className="cta-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          READY WHEN YOU ARE
        </motion.span>

        <motion.h2
          className="cta-headline"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's build better <span className="cta-headline-accent">diagnostics, together.</span>
        </motion.h2>

        <motion.p
          className="cta-subcopy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          Whether you run a single clinic or a network of facilities, we'd
          love to show you what Truedote can do.
        </motion.p>

        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/demo" className="cta-primary">
            Book a Demo
            <FiArrowUpRight size={14} />
          </Link>
          <Link to="/products" className="cta-secondary">
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;