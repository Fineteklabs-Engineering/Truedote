import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import '../styles/navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: '/blog' },
];

const Navbar = ({ forceLight = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (forceLight) return undefined;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceLight]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const showScrolledStyle = forceLight || isScrolled;

  return (
    <>
      <nav className={`nav ${showScrolledStyle ? 'nav-scrolled' : ''}`} aria-label="Primary">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src="/images/truedote-logo.svg" alt="Truedote" className="logo" />
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) => (isActive ? 'nav-link-active' : '')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            Login
          </Link>
          <Link to="/demo" className="nav-cta">
            Book a Demo
            <FiArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className="hamburger-btn"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-header">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src="/images/truedote-logo.svg" alt="Truedote" className="logo" />
          </Link>
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <FiX size={22} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) => (isActive ? 'nav-link-active' : '')}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-actions">
          <Link to="/login" className="login-link" onClick={closeMenu}>
            Login
          </Link>
          <Link to="/demo" className="nav-cta" onClick={closeMenu}>
            Book a Demo
            <FiArrowUpRight size={14} />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;