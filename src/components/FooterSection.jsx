import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import '../styles/footer-section.css';

const CONTACT_DETAILS = [
  { icon: FiMapPin, label: 'Nairobi, Kenya' },
  { icon: FiPhone, label: '+254 712 345 678' },
  { icon: FiMail, label: 'hello@truedote.com' },
];

const SOCIALS = [
  { icon: FaTwitter, label: 'Twitter', href: 'https://x.com/truedote' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/company/truedote/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/truedote' },
];

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Blog', href: '/blog' },
];

const FooterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className={`site-footer ${isVisible ? 'footer-visible' : ''}`}
      id="footer"
    >
      <div className="footer-inner">
        <div className="footer-col" style={{ '--stagger': 0 }}>
          <h3 className="footer-heading">Contact Us</h3>

          <ul className="footer-contact-list">
            {CONTACT_DETAILS.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={15} />
                {label}
              </li>
            ))}
          </ul>

          <img src="/images/person1.avif" alt="" className="footer-photo" />

          <div className="footer-legal">
            <Link to="/terms">Terms &amp; Conditions</Link>
            <span className="footer-divider" aria-hidden="true">
              |
            </span>
            <Link to="/sitemap">Sitemap</Link>
            <span className="footer-divider" aria-hidden="true">
              |
            </span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer-col" style={{ '--stagger': 1 }}>
          <h3 className="footer-heading">Our Social Channels</h3>
          <p className="footer-social-copy">
            The latest research, product updates, and company news.
          </p>

          <div className="footer-social-icons">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="footer-bottom-row">
            <nav className="footer-nav-pills" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="footer-scroll-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-copyright" style={{ '--stagger': 2 }}>
        © {new Date().getFullYear()} Truedote Company Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;