import { motion } from 'motion/react';
import { FiDollarSign, FiHeadphones, FiActivity, FiShield } from 'react-icons/fi';
import '../styles/why-providers-trust-us.css';

const FEATURES = [
  {
    id: 'decision-support',
    icon: FiActivity,
    title: 'Real-Time Decision Support',
    description:
      'Validated across thousands of clinical cases, catching errors before they reach a patient.',
  },
  {
    id: 'support',
    icon: FiHeadphones,
    title: '24/7 Care Support',
    description:
      'Round-the-clock assistance so your team is never left without help mid-shift.',
  },
  {
    id: 'interop',
    icon: FiShield,
    title: 'Built-In Interoperability',
    description:
      'Compliant with HL7, ICD-11, and LOINC - fits your systems from day one.',
  },
  {
    id: 'cost',
    icon: FiDollarSign,
    title: 'Cost-Effective Deployment',
    description:
      'Facility-wide rollout from a single admin console, without added overhead.',
  },
];

const WhyProvidersTrustUs = () => {
  return (
    <section className="trust-section">
      <div className="trust-inner">
        <motion.div
          className="trust-visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/person1.avif"
            alt=""
            className="trust-photo"
          />

          <div className="trust-badge-card">
            <span className="trust-badge-year">Since 2023</span>
            <p className="trust-badge-text">
              We've been building trusted diagnostics tools, delivering
              reliable, intelligent solutions that stand up to real clinical
              use.
            </p>
          </div>
        </motion.div>

        <div className="trust-copy">
          <motion.span
            className="trust-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Why To Choose Us
          </motion.span>

          <motion.h2
            className="trust-headline"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Why Providers Trust Truedote
          </motion.h2>

          <div className="trust-features">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  className="trust-feature"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="trust-feature-icon">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="trust-feature-title">{feature.title}</h3>
                    <p className="trust-feature-desc">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProvidersTrustUs;