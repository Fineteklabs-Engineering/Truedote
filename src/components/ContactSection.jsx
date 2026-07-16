import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import '../styles/contact-section.css';

const CONTACT_DETAILS = [
  { icon: FiMapPin, label: 'Nairobi, Kenya' },
  { icon: FiPhone, label: '+254 712 345 678' },
  { icon: FiMail, label: 'hello@truedote.com' },
];

const SOCIALS = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/254712345678' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
];

const REVEAL_DELAY = 300;


const CARD_TRANSITION = {
  type: 'spring',
  stiffness: 95,
  damping: 17,
  mass: 0.9,
};

const ContactSection = () => {
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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(revealTimer);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const showCards = isVisible || shouldReduceMotion;

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${isVisible ? 'contact-visible' : ''}`}
      id="contact"
    >
      <div className="contact-header" style={{ '--stagger': 0 }}>
        <span className="contact-eyebrow">CONTACT</span>
        <h2 className="contact-headline">Contact Us</h2>
        <p className="contact-subcopy">We'd love to hear from you</p>
      </div>

      <div className="contact-grid">
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          animate={showCards ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : CARD_TRANSITION}
        >
          <h3>Send Message</h3>

          <div className="contact-form-row">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>

          <input type="email" name="email" placeholder="Email" required />

          <textarea name="message" placeholder="Your Message..." rows={4} required />

          <button type="submit" className="contact-submit">
            Send
          </button>
        </motion.form>

        <motion.div
          className="contact-info"
          animate={showCards ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : CARD_TRANSITION}
        >
          <h3>Get In Touch</h3>
          <p className="contact-company">Truedote Company Limited</p>

          <ul className="contact-details">
            {CONTACT_DETAILS.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={15} />
                {label}
              </li>
            ))}
          </ul>

          <div className="contact-socials">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;