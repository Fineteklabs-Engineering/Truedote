import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/team-section.css';

const FEATURED_TEAM = [
  {
    id: 'kombo',
    name: 'Kombo Steve',
    role: 'Co-Founder',
    image: '/images/person1.avif',
    variant: 'short',
  },
  {
    id: 'ian',
    name: 'Ian Cheruiyot',
    role: 'Lead Product Engineer',
    image: '/images/person2.avif',
    variant: 'tall',
  },
  {
    id: 'juma',
    name: 'Juma Theophilus',
    role: 'Board Chair & Pharmacist',
    image: '/images/person3.avif',
    variant: 'short',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const TeamSection = () => {
  return (
    <section className="team-section" id="team">
     

      <div className="team-inner">
        <div className="team-header">
          <motion.h2
            className="team-headline"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            The people <span className="team-headline-accent">behind Truedote</span>
          </motion.h2>

          <motion.p
            className="team-subcopy"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Doctors, engineers, and pharmacists building{' '}
            <strong>diagnostics tools they'd trust</strong> with their own
            patients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/demo" className="team-cta">
              Book a Demo
              <FiArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="team-grid">
          {FEATURED_TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              className={`team-card team-card-${member.variant}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={member.image} alt="" className="team-card-image" />
              <div className="team-card-caption">
                <span className="team-card-role">{member.role}</span>
                <h3 className="team-card-name">{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;