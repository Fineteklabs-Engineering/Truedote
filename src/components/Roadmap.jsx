import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FiBox, FiImage, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import { FaAsterisk } from 'react-icons/fa6';
import '../styles/roadmap.css';

const MILESTONES = [
  {
    id: 'truebox',
    date: 'Q3 2024',
    icon: FiBox,
    title: 'Truebox launches',
    description:
      'Remote telepathology support goes live, giving small healthcare facilities access to expert-level diagnostics without an in-house specialist.',
  },
  {
    id: 'imaging',
    date: 'Dec 2024',
    icon: FiImage,
    title: 'Imaging integration',
    description:
      'Diagnostic imaging is integrated directly into the platform, extending decision support beyond lab results and into radiology workflows.',
  },
  {
    id: 'expansion',
    date: 'Apr 2025',
    icon: FiGlobe,
    title: 'Expansion beyond Kenya',
    description:
      'Truedote begins onboarding providers outside Kenya, bringing the same interoperability and decision-support standards to new regions.',
  },
  {
    id: 'next',
    date: "What's next",
    icon: FiTrendingUp,
    title: 'Deeper model coverage',
    description:
      'Continued model retraining to detect new diseases across regions, and expanded facility-level deployment tools for multi-site providers.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Roadmap = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  const markerTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="roadmap-section">
     
      <div className="roadmap-inner">
        <div className="roadmap-header">
          <motion.h2
            className="roadmap-headline"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Where We're Headed
          </motion.h2>
          <span className="roadmap-underline" aria-hidden="true" />

          <motion.p
            className="roadmap-subcopy"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Every milestone gets us closer to putting reliable diagnostics in
            reach of more care teams, in more places. Built in Kenya, built
            to scale.
          </motion.p>
        </div>

        <div className="roadmap-timeline" ref={timelineRef}>
          <span className="roadmap-line" aria-hidden="true" />
          <motion.span
            className="roadmap-marker"
            aria-hidden="true"
            style={{ top: markerTop }}
          >
            <FaAsterisk size={18} />
          </motion.span>

          {MILESTONES.map((milestone, index) => {
            const Icon = milestone.icon;
            const isRight = index % 2 === 1;

            return (
              <motion.div
                key={milestone.id}
                className={`roadmap-item ${isRight ? 'roadmap-item-right' : 'roadmap-item-left'}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="roadmap-card">
                  <span className="roadmap-icon">
                    <Icon size={22} />
                  </span>
                  <span className="roadmap-date">{milestone.date}</span>
                  <h3 className="roadmap-title">{milestone.title}</h3>
                  <p className="roadmap-description">{milestone.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;