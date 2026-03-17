// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Code2, Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Technologies', path: '/technologies' },
//     { name: 'Portfolio', path: '/portfolio' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Blog', path: '/blog' },
//     { name: 'Contact Us', path: '/contact' }
//   ];

//   return (
//     <header className="header">
//       <div className="nav-container">
//         <Link to="/" className="logo">
//           <img src="/sivionlogo.jpeg" alt="SiviOn Global" />
//         </Link>
//         <nav>
//           <ul className="nav-links">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.path}
//                   style={{ color: location.pathname === link.path ? '#f59e0b' : '' }}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//             <li>
//               <Link to="/contact" className="hp-btn hp-btn-primary">Get a Quote</Link>
//             </li>
//           </ul>
//           <button className="menu-toggle" onClick={toggleMenu}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </nav>
//       </div>

//       <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
//         <ul className="mobile-nav-links">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link to={link.path} onClick={toggleMenu}>{link.name}</Link>
//             </li>
//           ))}
//           <li>
//             <Link to="/contact" className="hp-btn hp-btn-primary" onClick={toggleMenu}>Get a Quote</Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

/**
 * Header — SiviOn Global Technologies
 * ✅ SEO: semantic <header>, <nav>, <ul>, aria-* labels, skip-to-content link
 * ✅ No floating pill / white layer — transparent by default, fills on scroll
 * ✅ Animated logo, creative active states, full mobile drawer
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activeBarRef = useRef(null);
  const navRef = useRef(null);

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* close drawer on route change */
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  /* lock body when drawer open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  /* animate sliding active underbar */
  useEffect(() => {
    if (!navRef.current || !activeBarRef.current) return;
    const active = navRef.current.querySelector('a.hn-link.hn-active');
    if (active) {
      const navRect = navRef.current.getBoundingClientRect();
      const rect = active.getBoundingClientRect();
      activeBarRef.current.style.left = `${rect.left - navRect.left}px`;
      activeBarRef.current.style.width = `${rect.width}px`;
      activeBarRef.current.style.opacity = '1';
    } else {
      activeBarRef.current.style.opacity = '0';
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (p) => location.pathname === p;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .hn-skip {
          position: absolute;
          top: -100px;
          left: 16px;
          background: var(--accent-cyan);
          color: #010409;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          z-index: 9999;
          transition: top 0.2s;
          text-decoration: none;
        }
        .hn-skip:focus { top: 8px; }

        .hn-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: var(--font-main);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          padding: 20px 0;
        }
        .hn-root.hn-scrolled {
          background: rgba(2, 6, 23, 0.3);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .hn-bar {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          transition: all 0.4s ease;
        }
        .hn-scrolled .hn-bar {
          background: transparent;
          backdrop-filter: none;
          border-color: transparent;
        }

        @media (max-width: 768px) {
          .hn-bar { padding: 0 16px; height: 56px; border-radius: 50px; }
          .hn-root { padding: 10px 10px; }
        }

        .hn-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
          transition: all 0.3s ease;
          filter: brightness(1.2);
        }
        .hn-logo:hover .hn-logo-img {
          transform: scale(1.05);
        }

        .hn-nav {
          display: flex;
          align-items: center;
          gap: 5px;
          list-style: none;
          margin: 0; padding: 0;
          position: relative;
        }
        @media (max-width: 1100px) { .hn-nav { display: none; } }

        .hn-indicator {
          position: absolute;
          bottom: 2px;
          height: 3px;
          background: var(--accent-cyan);
          border-radius: 20px;
          transition: 
            left 0.4s cubic-bezier(0.34, 1.3, 0.64, 1),
            width 0.4s cubic-bezier(0.34, 1.3, 0.64, 1),
            opacity 0.2s;
          pointer-events: none;
          box-shadow: 0 0 10px rgba(0, 210, 255, 0.5);
        }

        .hn-nav li a.hn-link {
          position: relative;
          display: block;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          padding: 10px 18px;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .hn-nav li a.hn-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }
        .hn-nav li a.hn-link.hn-active {
          color: var(--accent-cyan);
        }

        .hn-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          background: var(--accent-cyan);
          color: #010409;
          padding: 12px 24px;
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 20px rgba(0, 210, 255, 0.2);
        }
        .hn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(16, 185, 129, 0.4);
          filter: brightness(1.1);
          background: var(--accent-green);
        }
        @media (max-width: 1100px) { .hn-cta { display: none; } }

        .hn-burger {
          display: none;
          align-items: center; justify-content: center;
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hn-burger:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-cyan);
        }
        @media (max-width: 1100px) { .hn-burger { display: flex; } }

        .hn-overlay {
          position: fixed; inset: 0;
          z-index: 2000;
          pointer-events: none;
          visibility: hidden;
        }
        .hn-overlay.open {
          pointer-events: all;
          visibility: visible;
        }
        .hn-backdrop {
          position: absolute; inset: 0;
          background: rgba(1, 4, 9, 0.8);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .hn-overlay.open .hn-backdrop { opacity: 1; }

        .hn-drawer {
          position: absolute;
          top: 0; right: 0;
          width: 320px;
          height: 100%;
          background: #010409;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex; flex-direction: column;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
        }
        .hn-overlay.open .hn-drawer { transform: translateX(0); }

        .hn-dtop {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .hn-dclose {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
        }

        .hn-dlinks {
          flex: 1; padding: 24px; list-style: none; margin: 0;
          display: flex; flex-direction: column; gap: 8px;
        }
        .hn-dlinks li a {
          display: flex; align-items: center; justify-content: space-between;
          text-decoration: none;
          font-size: 16px; font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          padding: 12px 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .hn-dlinks li a:hover, .hn-dlinks li a.hn-active {
          background: rgba(0, 210, 255, 0.1);
          color: var(--accent-cyan);
        }
      `}</style>

      {/* accessibility: skip to main content */}
      <a className="hn-skip" href="#main-content">Skip to main content</a>

      {/* ── HEADER ── */}
      <header
        className={`hn-root${scrolled ? ' hn-scrolled' : ''}`}
        role="banner"
      >
        <div className="hn-bar">

          {/* Logo — linked to home, with title for SEO */}
          <Link to="/" className="hn-logo" aria-label="SiviOn Global Technologies — Home">
            <img
              src="/sivionlogo.jpeg"
              alt="SiviOn Global Technologies"
              className="hn-logo-img"
              width="160"
              height="44"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation">
            <ul className="hn-nav" ref={navRef} role="list">
              {/* sliding underline */}
              <span className="hn-indicator" ref={activeBarRef} aria-hidden="true" />

              {navLinks.map((link) => (
                <li key={link.name} role="listitem">
                  <Link
                    to={link.path}
                    className={`hn-link${isActive(link.path) ? ' hn-active' : ''}`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <Link to="/contact" className="hn-cta" aria-label="Get a free quote from SiviOn">
              Get a Quote
            </Link>
            <button
              className="hn-burger"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={21} />
            </button>
          </div>

        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div
        id="mobile-menu"
        className={`hn-overlay${isMenuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="hn-backdrop" onClick={() => setIsMenuOpen(false)} />
        <div className="hn-drawer">

          <div className="hn-dtop">
            <img src="/sivionlogo.jpeg" alt="SiviOn Global Technologies" height="36" />
            <button
              className="hn-dclose"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="hn-dlinks" role="list">
              {navLinks.map((link, i) => (
                <li key={link.name} role="listitem">
                  <Link
                    to={link.path}
                    className={isActive(link.path) ? 'hn-active' : ''}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="dn">0{i + 1}</span>
                      {link.name}
                    </span>
                    <ArrowUpRight size={14} className="hn-darrow" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hn-dfooter">
            <Link
              to="/contact"
              className="hn-dfooter-cta"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Get a free quote"
            >
              Get a Free Quote
            </Link>
            <p className="hn-dfooter-note">
              Trusted by 50+ enterprises
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;