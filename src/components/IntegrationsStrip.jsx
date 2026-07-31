import { useEffect, useRef, useState } from 'react';
import '../styles/integrations-strip.css';

const STANDARDS = [
  { id: 'hl7', label: 'HL7', desc: 'Clinical data exchange' },
  { id: 'icd11', label: 'ICD-11', desc: 'Diagnostic coding' },
  { id: 'snomed', label: 'SNOMED CT', desc: 'Clinical terminology' },
  { id: 'loinc', label: 'LOINC', desc: 'Lab & observation codes' },
];

const REVEAL_DELAY = 200;

const IntegrationsStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className={`integrations-strip ${isVisible ? 'integrations-visible' : ''}`}
    >
      <div className="integrations-inner">
        <span className="integrations-eyebrow" style={{ '--stagger': 0 }}>
          STANDARDS
        </span>

        <div className="integrations-row">
          {STANDARDS.map((standard, index) => (
            <div
              key={standard.id}
              className="integrations-item"
              style={{ '--stagger': index + 1 }}
            >
              <p className="integrations-label">{standard.label}</p>
              <p className="integrations-desc">{standard.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsStrip;