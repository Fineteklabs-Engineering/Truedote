import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/solutions-section.css';

const SOLUTIONS = [
  {
    id: 'trust',
    label: 'Why Providers Trust Us',
    points: [
      'Real-time decision support validated across thousands of clinical cases.',
      'Interoperable with HL7, ICD-11, and LOINC - fits your existing systems.',
    ],
    image: '/images/product1.png',
    thumb: '/images/product3.png',
    statLabel: 'Cases Reviewed Today',
    bars: [40, 65, 50, 85, 70],
  },
  {
    id: 'deployment',
    label: 'Multi-facility deployment',
    points: [
      'Roll out across every site from a single admin console.',
      'Facility-level permissions and audit logs out of the box.',
    ],
    image: '/images/product2.png',
    thumb: '/images/product1.png',
    statLabel: 'Facilities Live',
    bars: [55, 45, 80, 60, 90],
  },
  {
    id: 'improvement',
    label: 'Continuous model improvement',
    points: [
      'Every reviewed case feeds back into the next model update.',
      'Version changes are logged and explainable, never silent.',
    ],
    image: '/images/product3.png',
    thumb: '/images/product1.png',
    statLabel: 'Model Accuracy Trend',
    bars: [60, 62, 68, 75, 88],
  },
];

const AUTO_ROTATE_MS = 5000;
const REVEAL_DELAY = 350;


const CARD_TRANSITION = {
  type: 'spring',
  stiffness: 90,
  damping: 16,
  mass: 0.9,
};

const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
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

  useEffect(() => {
    if (!isVisible) return undefined;

    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SOLUTIONS.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timerRef.current);
  }, [isVisible, activeIndex]);

  const handleSelect = (index) => {
    clearInterval(timerRef.current);
    setActiveIndex(index);
  };

  const active = SOLUTIONS[activeIndex];
  const showCards = isVisible || shouldReduceMotion;

  return (
    <section
      ref={sectionRef}
      className={`solutions-section ${isVisible ? 'solutions-visible' : ''}`}
      id="solutions"
    >
      <div className="solutions-grid">
        <div className="solutions-content">
          <span className="solutions-eyebrow" style={{ '--stagger': 0 }}>
            SOLUTIONS
          </span>
          <h2 className="solutions-headline" style={{ '--stagger': 1 }}>
            Built for every <span className="solutions-headline-accent">care setting.</span>
          </h2>
          <p className="solutions-subcopy" style={{ '--stagger': 2 }}>
            From large hospitals to independent labs, Truedote adapts to how
            your team already works.
          </p>

          <div className="solutions-stack">
            {SOLUTIONS.map((solution, index) => {
              const isActive = index === activeIndex;
              
              const revealOrder = SOLUTIONS.length - 1 - index;

              return (
                <motion.button
                  key={solution.id}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`solutions-card ${
                    isActive ? 'solutions-card-highlight' : ''
                  }`}
                  animate={
                    showCards
                      ? { x: 0, opacity: 1 }
                      : { x: -70, opacity: 0 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { ...CARD_TRANSITION, delay: isVisible ? revealOrder * 0.12 : 0 }
                  }
                  aria-pressed={isActive}
                >
                  <h3>{solution.label}</h3>
                  {isActive && (
                    <ul>
                      {solution.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </motion.button>
              );
            })}
          </div>

          <Link to="/demo" className="solutions-cta" style={{ '--stagger': 6 }}>
            Book a Demo
            <FiArrowUpRight size={14} />
          </Link>
        </div>

        <div className="solutions-visual" style={{ '--stagger': 2 }}>
          <img
            src={active.image}
            alt=""
            className="solutions-photo"
            key={active.id}
          />

          <div className="solutions-floating-card" key={`${active.id}-card`}>
            <img src={active.thumb} alt="" className="solutions-thumb" />
            <div className="solutions-activity">
              <p className="solutions-activity-label">{active.statLabel}</p>
              <div className="solutions-bars">
                {active.bars.map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;