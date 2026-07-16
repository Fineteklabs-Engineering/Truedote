import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { FiArrowUpRight, FiCheck, FiUsers } from 'react-icons/fi';
import '../styles/about-section.css';

const CHECKLIST = [
  'Built by a multidisciplinary team of doctors, pharmacists & engineers',
  'Interoperable with HL7 · ICD-11 · SNOMED · LOINC',
  'Started in Kenya, expanding to serve providers regionally',
];


const IMAGE_TRANSITION = {
  type: 'spring',
  stiffness: 85,
  damping: 17,
  mass: 1,
};

const REVEAL_DELAY = 350;

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    let revealTimer;

   
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealTimer = setTimeout(() => setIsVisible(true), REVEAL_DELAY);
        } else {
          clearTimeout(revealTimer);
          setIsVisible(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(revealTimer);
    };
  }, []);

  const showImages = isVisible || shouldReduceMotion;

  return (
    <section
      ref={sectionRef}
      className={`about-section ${isVisible ? 'about-visible' : ''}`}
      id="about"
    >
      <div className="about-media">
       
        <motion.img
          src="/images/person2.avif"
          alt="Reviewing diagnostic data in a lab setting"
          className="about-img about-img-2"
          animate={showImages ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { ...IMAGE_TRANSITION, delay: isVisible ? 0 : 0 }
          }
        />
        <motion.img
          src="/images/person1.avif"
          alt="Truedote team collaborating"
          className="about-img about-img-1"
          animate={showImages ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { ...IMAGE_TRANSITION, delay: isVisible ? 0.2 : 0 }
          }
        />
      </div>

      <div className="about-content">
        <div className="about-badge" style={{ '--stagger': 0 }}>
          <span className="about-badge-rating">
            <FiUsers size={14} />
            7
          </span>
          <div className="about-badge-avatars">
            <img src="/images/person1.avif" alt="" className="about-avatar" />
            <img src="/images/person2.avif" alt="" className="about-avatar" />
            <img src="/images/person3.avif" alt="" className="about-avatar" />
          </div>
          <span className="about-badge-label">Founding team</span>
        </div>

        <span className="about-eyebrow" style={{ '--stagger': 1 }}>
          ABOUT TRUEDOTE
        </span>

        <h2 className="about-headline" style={{ '--stagger': 2 }}>
          Built to close Kenya's{' '}
          <span className="about-headline-accent">diagnostic gap.</span>
        </h2>

        <p className="about-subcopy" style={{ '--stagger': 3 }}>
          Nearly 3 in 10 patients in Kenyan hospitals face a misdiagnosis -
          a costly, sometimes fatal problem. Truedote was founded by a team of
          doctors, pharmacists, nurses, and engineers to give care teams
          real-time, AI-backed decision support at every stage of care,
          starting in Kenya and expanding across the region.
        </p>

        <ul className="about-checklist" style={{ '--stagger': 4 }}>
          {CHECKLIST.map((item) => (
            <li key={item}>
              <FiCheck size={16} className="about-check-icon" />
              {item}
            </li>
          ))}
        </ul>

        <div className="about-cta-row" style={{ '--stagger': 5 }}>
          <Link to="/demo" className="about-cta">
            Learn More
            <FiArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;