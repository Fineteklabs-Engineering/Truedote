import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/who-we-are.css';

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="who-we-are-inner">
        <div className="who-we-are-copy">
          <motion.span
            className="who-we-are-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Who We Are
          </motion.span>

          <motion.h2
            className="who-we-are-headline"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Augmenting the Modern{' '}
            <span className="who-we-are-accent">Caregiver</span>
          </motion.h2>

          <motion.p
            className="who-we-are-body"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            At Truedote, we believe in augmenting the modern caregiver with
            the right tools to enable delivery of quality healthcare. We're a
            diagnostics-as-a-service platform built for providers at every
            stage of care - from the lab bench to the pharmacy counter,
            combining real-time decision support with interoperability
            standards that fit the systems you already use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/products" className="who-we-are-cta">
              See What We Do
              <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="who-we-are-visual">
          <div className="who-we-are-dots" aria-hidden="true">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>

          <motion.img
            src="/images/product1.png"
            alt=""
            className="who-we-are-main-image"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.div
            className="who-we-are-small-card"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/product2.png" alt="" />
            <span className="who-we-are-play-btn" aria-hidden="true">
              <span className="who-we-are-play-icon" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;