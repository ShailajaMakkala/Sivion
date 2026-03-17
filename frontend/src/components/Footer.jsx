// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MapPin, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container footer-grid">
//         <div style={{ paddingRight: '20px' }}>
//           <Link to="/" style={{ display: 'block', marginBottom: '25px' }}>
//             <img src="/sivionlogo.jpeg" alt="SiviOn Global" style={{ height: '50px', objectFit: 'contain' }} />
//           </Link>
//           <p style={{ marginBottom: '30px', maxWidth: '320px', lineHeight: '1.7' }}>
//             We engineer the future of digital. SiviOn Global Technologies delivers reliable enterprise solutions, robust web architectures, and data-driven marketing to scale your business.
//           </p>
//           <div style={{ display: 'flex', gap: '15px' }}>
//             <a href="#" style={{ width: 40, height: 40, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Linkedin size={18} /></a>
//             <a href="#" style={{ width: 40, height: 40, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Twitter size={18} /></a>
//             <a href="#" style={{ width: 40, height: 40, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Facebook size={18} /></a>
//             <a href="#" style={{ width: 40, height: 40, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', color: 'white', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}><Instagram size={18} /></a>
//           </div>
//         </div>

//         <div>
//           <h3>Our Services</h3>
//           <ul className="footer-links">
//             <li><Link to="/services">Java Full Stack Development</Link></li>
//             <li><Link to="/services">Website Design & Development</Link></li>
//             <li><Link to="/services">Custom Web Applications</Link></li>
//             <li><Link to="/services">Digital Marketing & SEO</Link></li>
//             <li><Link to="/portfolio">Portfolio & Case Studies</Link></li>
//             <li><Link to="/services">Maintenance & Support</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h3>Company</h3>
//           <ul className="footer-links">
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/services">Our Services</Link></li>
//             <li><Link to="/technologies">Technologies</Link></li>
//             <li><Link to="/careers">Careers</Link></li>
//             <li><Link to="/blog">Blog & Insights</Link></li>
//             <li><Link to="/privacy">Privacy Policy</Link></li>
//             <li><Link to="/terms">Terms & Conditions</Link></li>
//             <li><Link to="/disclaimer">Disclaimer</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h3>Contact Us</h3>
//           <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

//             <li style={{ display: 'flex', gap: '15px', alignItems: 'center', margin: 0 }}>
//               <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '10px', borderRadius: '8px' }}><Mail size={20} color="var(--accent-cyan)" /></div>
//               <span style={{ fontWeight: 500, color: 'white' }}>Hr@sivionglobaltechnologies.Com</span>
//             </li>
//             <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', margin: 0 }}>
//               <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '10px', borderRadius: '8px' }}><MapPin size={20} color="var(--accent-cyan)" /></div>
//               <span style={{ fontWeight: 500, color: '#94a3b8', lineHeight: 1.5 }}>SiviOn Global Technologies<br />London, UK</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//           <p>&copy; {new Date().getFullYear()} SiviOn Global Technologies. <span style={{ color: '#475569' }}>All Rights Reserved.</span></p>
//           <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>Designed with <span style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>♥</span> for modern enterprises.</p>
//         </div>
//       </div>


//     </footer>
//   );
// };

// export default Footer;



import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.4 + 0.1),
      alpha: Math.random() * 0.4 + 0.1,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.twinkle += p.twinkleSpeed;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        const alpha = p.alpha * (0.5 + 0.5 * Math.sin(p.twinkle));
        // core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${alpha})`;
        ctx.fill();
        // soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${alpha * 0.15})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const services = [
    { label: 'Java Full Stack Development', to: '/services' },
    { label: 'Website Design & Development', to: '/services' },
    { label: 'Custom Web Applications', to: '/services' },
    { label: 'Digital Marketing & SEO', to: '/services' },
    { label: 'Portfolio & Case Studies', to: '/portfolio' },
    { label: 'Maintenance & Support', to: '/services' },
  ];

  const company = [
    { label: 'About Us', to: '/about' },
    { label: 'Our Services', to: '/services' },
    { label: 'Technologies', to: '/technologies' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog & Insights', to: '/blog' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Disclaimer', to: '/disclaimer' },
  ];

  return (
    <>
      <style>{`
        .ft-wrap {
          position: relative;
          background: #010409;
          border-top: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
          font-family: var(--font-main);
        }
        .ft-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }
        .ft-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px 0;
        }
        .ft-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.1fr;
          gap: 48px;
        }
        @media (max-width: 1024px) {
          .ft-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 580px) {
          .ft-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ft-container {
            padding: 48px 20px 0;
          }
          .ft-bottom-inner {
            flex-direction: column !important;
            text-align: center;
          }
        }
        .ft-logo {
          height: 55px;
          object-fit: contain;
          display: block;
          margin-bottom: 25px;
          filter: brightness(1.2);
        }
        .ft-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          margin-bottom: 30px;
          max-width: 320px;
        }
        .ft-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .ft-social {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ft-social:hover {
          background: var(--accent-cyan);
          color: #010409;
          border-color: var(--accent-cyan);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 210, 255, 0.3);
        }
        .ft-heading {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 25px 0;
          position: relative;
        }
        .ft-heading::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--accent-cyan);
        }
        .ft-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ft-links li a {
          text-decoration: none;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        .ft-links li a:hover {
          color: var(--accent-cyan);
          transform: translateX(8px);
        }
        .ft-contact-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 16px;
          border-radius: 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }
        .ft-contact-card:hover {
          border-color: rgba(0, 210, 255, 0.3);
          background: rgba(255,255,255,0.04);
          transform: translateX(5px);
        }
        .ft-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(0, 210, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }
        .ft-contact-text {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
          font-weight: 500;
          line-height: 1.5;
        }
        .ft-divider-wrap {
          max-width: 1200px;
          margin: 60px auto 0;
          padding: 0 32px;
        }
        .ft-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }
        .ft-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 32px 40px;
        }
        .ft-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        .ft-bottom-inner p {
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          margin: 0;
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>

      <footer className="ft-wrap">
        <canvas ref={canvasRef} className="ft-canvas" />

        <div className="ft-container">
          <div className="ft-grid">

            {/* Brand */}
            <div>
              <Link to="/">
                <img src="/sivionlogo.jpeg" alt="SiviOn Global" className="ft-logo" />
              </Link>
              <p className="ft-desc">
                We engineer the future of digital. SiviOn Global Technologies delivers reliable enterprise solutions, robust web architectures, and data-driven marketing to scale your business.
              </p>
              <div className="ft-socials">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} className="ft-social" aria-label={label}>
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="ft-heading">Our Services</h3>
              <ul className="ft-links">
                {services.map(({ label, to }) => (
                  <li key={label}><Link to={to}>{label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="ft-heading">Company</h3>
              <ul className="ft-links">
                {company.map(({ label, to }) => (
                  <li key={label}><Link to={to}>{label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="ft-heading">Contact Us</h3>
              <div className="ft-contact-card">
                <div className="ft-icon-box">
                  <Mail size={20} />
                </div>
                <span className="ft-contact-text">Hr@sivionglobaltechnologies.com</span>
              </div>
              <div className="ft-contact-card">
                <div className="ft-icon-box">
                  <MapPin size={20} />
                </div>
                <span className="ft-contact-text">
                  SiviOn Global Technologies<br />London, UK
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="ft-divider-wrap">
          <div className="ft-divider" />
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="ft-bottom-inner">
            <p>
              © {new Date().getFullYear()} SiviOn Global Technologies.{' '}
              <span style={{ color: '#9ca3af' }}>All Rights Reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;