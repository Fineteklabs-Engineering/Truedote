import { useEffect, useRef, useState } from 'react';
import {
  FiDatabase,
  FiActivity,
  FiShield,
  FiRefreshCw,
  FiGlobe,
} from 'react-icons/fi';
import '../styles/research-section.css';

const STATS = [
  {
    id: 'cost',
    value: '$750B',
    label: 'Lost annually in the US to medical misdiagnosis',
  },
  {
    id: 'deaths',
    value: '40K–80K',
    label: 'Patient deaths linked to diagnostic errors every year',
  },
  {
    id: 'kenya',
    value: '3 in 10',
    label: 'Patients misdiagnosed in Kenyan hospitals',
  },
];

const METHODOLOGY = [
  {
    id: 'capture',
    icon: FiDatabase,
    title: 'Extensive clinical data capture',
    desc: 'Every case captures rich patient and diagnostic data - the foundation our models learn from.',
  },
  {
    id: 'library',
    icon: FiActivity,
    title: 'Wide library of diagnostic scenarios',
    desc: 'Caregivers get the benefit of exposure to a broad range of scenarios, not just the common ones.',
  },
  {
    id: 'quality',
    icon: FiShield,
    title: 'Quality control engine',
    desc: 'Built-in checks flag anomalies in tests, reagents, and results before they reach a decision.',
  },
  {
    id: 'improvement',
    icon: FiRefreshCw,
    title: 'Continuous model improvement',
    desc: 'Models are retrained on an ongoing basis to detect new diseases across different regions.',
  },
  {
    id: 'interop',
    icon: FiGlobe,
    title: 'Interoperability & internationalization',
    desc: 'Built to comply with HL7, ICD-11, SNOMED, and LOINC standards from day one.',
  },
];

const ResearchSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className={`research-section ${isVisible ? 'research-visible' : ''}`}
      id="research"
    >
      <div className="research-inner">
        <span className="research-eyebrow" style={{ '--stagger': 0 }}>
          RESEARCH
        </span>
        <h2 className="research-headline" style={{ '--stagger': 1 }}>
          The evidence behind{' '}
          <span className="research-headline-accent">every diagnosis.</span>
        </h2>
        <p className="research-subcopy" style={{ '--stagger': 2 }}>
          Misdiagnosis isn't a rare failure - it's a systemic gap in how care
          is delivered. Here's what the data says, and how we built Truedote
          to close it.
        </p>

        <div className="research-stats">
          {STATS.map((stat, index) => (
            <div
              key={stat.id}
              className="research-stat-card"
              style={{ '--stagger': index + 3 }}
            >
              <p className="research-stat-value">{stat.value}</p>
              <p className="research-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="research-methodology">
          <h3
            className="research-methodology-heading"
            style={{ '--stagger': 6 }}
          >
            Our methodology
          </h3>

          <div className="research-methodology-grid">
            {METHODOLOGY.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="research-method-card"
                  style={{ '--stagger': index + 7 }}
                >
                  <span className="research-method-icon">
                    <Icon size={18} />
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;