import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2,
  Monitor,
  BarChart,
  Settings,
  Smartphone,
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  Puzzle,
  Wrench,
  Megaphone,
  Search,
  Share2,
  Target,
  Users,
  ShieldCheck,
  Clock,
  Tag,
  Handshake,
  Layers,
  Globe,
  Zap
} from 'lucide-react';

const iconMap = {
  Code2: <Code2 />,
  Monitor: <Monitor />,
  BarChart: <BarChart />,
  Settings: <Settings />,
  Smartphone: <Smartphone />,
  ShoppingCart: <ShoppingCart />,
  Puzzle: <Puzzle />,
  Wrench: <Wrench />,
  Megaphone: <Megaphone />,
  Search: <Search />,
  Share2: <Share2 />,
  Target: <Target />,
  Code: <Code2 />,
  Globe: <Globe />,
  Zap: <Zap />
};

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setServices(data.data);
        }
      })
      .catch(err => console.error('Error fetching services:', err))
      .finally(() => setLoading(false));
  }, []);

  // Split services for home page groups
  const devServicesAPI = services.filter(s =>
    s.title.toLowerCase().includes('java') ||
    s.title.toLowerCase().includes('web') ||
    s.title.toLowerCase().includes('ecommerce') ||
    s.title.toLowerCase().includes('app')
  );

  const marketingServicesAPI = services.filter(s =>
    s.title.toLowerCase().includes('marketing') ||
    s.title.toLowerCase().includes('seo') ||
    s.title.toLowerCase().includes('social')
  );

  const advantages = [
    { title: 'Skilled Team of Developers', icon: <Users />, desc: 'Project-hardened engineers with deep expertise in modern architectures.' },
    { title: 'Scalable & Secure Solutions', icon: <ShieldCheck />, desc: 'Cloud-ready infrastructures built with security-first engineering.' },
    { title: 'On-time Project Delivery', icon: <Clock />, desc: 'Rigorous project management ensuring every milestone is met.' },
    { title: 'Cost-effective Pricing', icon: <Tag />, desc: 'Premium engineering and marketing services tailored to your budget.' },
    { title: 'Client-focused Approach', icon: <Handshake />, desc: 'Collaborative delivery models that put your business goals first.' },
    { title: 'Modern Tech Stack', icon: <Layers />, desc: 'Utilizing the latest versions of Java, React, and Cloud technologies.' }
  ];

  const processSteps = [
    { title: 'Requirements', desc: 'Deep-dive into your business goals and technical needs.', icon: <Target size={24} /> },
    { title: 'Strategic Planning', desc: 'Defining the architecture and delivery roadmap.', icon: <BarChart size={24} /> },
    { title: 'Design & UX Phase', desc: 'Crafting intuitive and high-fidelity user experiences.', icon: <Monitor size={24} /> },
    { title: 'Agile Development', desc: 'Iterative coding cycles with regular feedback loops.', icon: <Code2 size={24} /> },
    { title: 'Rigorous Testing', desc: 'End-to-end QA, performance, and security audits.', icon: <CheckCircle size={24} /> },
    { title: 'Delivery & Support', desc: 'Seamless deployment followed by proactive maintenance.', icon: <Globe size={24} /> }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '100px' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="hero-content"
            style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '900px', margin: '0 0 0 0' }}
          >
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                marginBottom: '20px',
                color: 'var(--color-bisque)'
              }}
            >
              Engineering the Next Digital Era
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              marginBottom: '35px',
              maxWidth: '600px',
              fontSize: '1.1rem',
              color: 'var(--color-bisque)',
              opacity: 0.85,
              lineHeight: 1.5
            }}>
              Engineer. Innovate. Scale.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-buttons" style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="hp-btn-solid" style={{ padding: '18px 45px', fontSize: '1.1rem', background: 'var(--accent-orange)', color: '#fff' }}>Initiate Proposal</Link>
              <Link to="/services" className="hp-btn-outline" style={{
                padding: '18px 45px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '1.1rem',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'var(--color-bisque)',
                color: 'var(--color-bisque)'
              }}>
                View Offerings
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-section">
        <div className="about-glow"></div>
        <div className="container">
          <div className="about-grid-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>

            <div className="about-text-column" style={{ flex: '2 1 280px' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="about-badge"
              >
                <div className="about-badge-line"></div>
                <span className="about-badge-text">ABOUT SIVION</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--color-bisque)', marginBottom: '40px', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}
              >
                Execution at scale, built from the ground up
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ borderLeft: '1px solid rgba(0, 210, 255, 0.2)', paddingLeft: '20px', position: 'relative' }}
              >
                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--color-bisque)', lineHeight: '1.7', marginBottom: '12px', fontWeight: 500, opacity: 0.9 }}>
                  SiviOn Global Technologies was founded to bridge the gap between complex enterprise requirements and scalable digital execution. We built a single delivery engine that handles robust technical architectures and engaging user interfaces with precision.
                </p>
                <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: 'rgba(255,255,255,0.85)', lineHeight: '1.8', marginBottom: '0' }}>
                  Today, our experts deliver high-performance Java solutions, modern web platforms, and results-oriented digital marketing for clients across the globe, spanning e-commerce, manufacturing, and fintech.
                </p>
              </motion.div>
            </div>

            <div className="about-stats-column" style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Founded', val: '2014', sub: 'New Delhi, India', icon: <Code2 size={24} /> },
                { label: 'Experience', val: '10+ Years', sub: 'Pure IT Expertise', icon: <Settings size={24} /> },
                { label: 'Sectors', val: 'Integrated', sub: 'Java • Web • Digital', icon: <BarChart size={24} /> }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card"
                  style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(0, 210, 255, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}>
                    {stat.icon}
                  </div>
                  <div>
                    <h5 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 5px 0' }}>{stat.label}</h5>
                    <p style={{ color: 'var(--accent-green)', fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{stat.val}</p>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>{stat.sub}</span>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: '10px' }}
              >
                <Link to="/about" className="hp-btn-solid">
                  View Our Story &rarr;
                </Link>
              </motion.div>
            </div>

          </div>

          <div style={{ marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px', display: 'flex', justifyContent: 'center', opacity: 0.5 }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              Trusted Partner for Digital Transformation
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--primary-blue)', position: 'relative', overflow: 'hidden' }}>
        <div className="about-glow" style={{ top: '20%', left: '70%', opacity: 0.4 }}></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '45px' }}
          >
            <div className="about-badge" style={{ marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">WHAT WE DO</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#ffffff', margin: 0, lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}>
              End-to-end digital execution.
            </h2>
          </motion.div>

          {/* Development Group */}
          {devServicesAPI.length > 0 && (
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                <div style={{ width: '20px', height: '2px', background: 'var(--accent-cyan)' }}></div>
                <h3 style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.8)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Development</h3>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {devServicesAPI.map((s, index) => (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    key={s._id}
                    className="glass-card"
                    style={{
                      padding: '40px',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}
                  >
                    <div style={{
                      color: 'var(--accent-cyan)',
                      marginBottom: '25px',
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: 'rgba(0, 210, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(0, 210, 255, 0.2)'
                    }}>
                      {s.coverImage ? (
                        <img src={s.coverImage} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        React.cloneElement(iconMap[s.iconName] || <Zap size={32} />, { size: 32 })
                      )}
                    </div>
                    <h4 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '15px', fontWeight: 800, letterSpacing: '-0.5px' }}>{s.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: '30px', lineHeight: 1.6, flexGrow: 1 }}>{s.shortDescription}</p>
                    <Link to={`/services/${s._id}`} style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', transition: 'gap 0.3s ease' }} className="service-link">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Marketing Group */}
          {marketingServicesAPI.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                <div style={{ width: '20px', height: '2px', background: 'var(--accent-cyan)' }}></div>
                <h3 style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.8)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Digital Marketing</h3>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {marketingServicesAPI.map((s, index) => (
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    key={s._id}
                    className="glass-card"
                    style={{
                      padding: '40px',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}
                  >
                    <div style={{
                      color: 'var(--accent-cyan)',
                      marginBottom: '25px',
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: 'rgba(0, 210, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(0, 210, 255, 0.2)'
                    }}>
                      {s.coverImage ? (
                        <img src={s.coverImage} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        React.cloneElement(iconMap[s.iconName] || <Zap size={32} />, { size: 32 })
                      )}
                    </div>
                    <h4 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '15px', fontWeight: 800, letterSpacing: '-0.5px' }}>{s.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: '30px', lineHeight: 1.6, flexGrow: 1 }}>{s.shortDescription}</p>
                    <Link to={`/services/${s._id}`} style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Unified list if not split */}
          {devServicesAPI.length === 0 && marketingServicesAPI.length === 0 && services.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {services.map((s) => (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  key={s._id}
                  style={{
                    padding: '35px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ color: 'var(--accent-cyan)', marginBottom: '25px' }}>
                    {iconMap[s.iconName] || <Zap size={32} />}
                  </div>
                  <h4 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '12px', fontWeight: 900 }}>{s.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', marginBottom: '20px' }}>{s.shortDescription}</p>
                  <Link to={`/services/${s._id}`} style={{ marginTop: 'auto', color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <Link to="/services" className="hp-btn-solid" style={{ padding: '18px 50px', fontSize: '1.1rem' }}>
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ background: 'var(--primary-blue)', color: 'white', padding: '100px 0 80px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">WHY PARTNER WITH US?</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#ffffff', margin: 0, lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}>
              The SiviOn Advantage
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px 40px'
            }}
          >
            {advantages.map((adv, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                className="glass-card"
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '35px',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(0, 210, 255, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(0, 210, 255, 0.2)'
                }}>
                  {React.cloneElement(adv.icon, { size: 28 })}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 10px 0', color: '#ffffff', letterSpacing: '-0.5px' }}>{adv.title}</h3>
                  <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '80px' }}
          >
            <Link to="/contact" className="hp-btn-solid" style={{ padding: '16px 40px' }}>
              Let's Talk &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ background: 'var(--primary-blue)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">OUR PROCESS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#ffffff', margin: 0, lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}>
              How We Work
            </h2>
          </motion.div>

          <div className="process-container">
            <div className="process-line"></div>
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="process-step"
              >
                <div className="process-content">
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-desc">{step.desc}</p>
                </div>

                <div className="process-icon-wrap">
                  {step.icon}
                </div>

                <div style={{ width: '45%' }} className="process-empty-hidden-mobile"></div>
              </motion.div>
            ))}
          </div>

          <style>{`
            @media (max-width: 768px) {
              .process-empty-hidden-mobile { display: none; }
              .hero {
                padding-top: 80px !important;
                padding-bottom: 60px !important;
              }
              .hero-content {
                text-align: left !important;
                align-items: flex-start !important;
                margin: 0 !important;
              }
              .about-badge {
                justify-content: flex-start !important;
              }
              .hero-buttons {
                justify-content: flex-start !important;
                gap: 12px !important;
              }
              .hero-buttons .hp-btn-solid, 
              .hero-buttons .hp-btn-outline {
                padding: 12px 24px !important;
                font-size: 0.95rem !important;
              }
              .service-link:hover { gap: 12px !important; }
            }
          `}</style>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '100px' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '25px', fontSize: '1.1rem' }}>Ready to begin?</p>
            <Link to="/contact" className="hp-btn-solid" style={{
              padding: '18px 50px',
              fontSize: '1.1rem',
              background: 'var(--accent-cyan)',
              color: 'var(--primary-blue)'
            }}>
              Let's Talk &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section" style={{ background: 'var(--bg-navy-alt)', padding: '60px 0 100px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <div className="about-badge-line"></div>
            <span className="about-badge-text">TECHNOLOGIES WE USE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '40px', fontWeight: 600, letterSpacing: '-1.5px' }}>
            Powered by Modern Tech Stack
          </h2>
        </div>

        <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', padding: '20px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg-navy-alt), transparent 15%, transparent 85%, var(--bg-navy-alt))', zIndex: 2, pointerEvents: 'none' }}></div>
          <motion.div
            animate={{ x: [0, -2500] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'inline-flex', gap: '30px' }}
          >
            {[
              { name: 'Java', color: '#f89820' },
              { name: 'Spring Boot', color: '#6db33f' },
              { name: 'Hibernate', color: '#bcae79' },
              { name: 'REST APIs', color: '#00d2ff' },
              { name: 'MySQL', color: '#4479a1' },
              { name: 'PostgreSQL', color: '#336791' },
              { name: 'HTML', color: '#e34f26' },
              { name: 'CSS', color: '#1572b6' },
              { name: 'JavaScript', color: '#f7df1e' },
              { name: 'React', color: '#61dafb' },
              { name: 'Angular', color: '#dd0031' },
              { name: 'Bootstrap', color: '#7952b3' },
              { name: 'Tailwind CSS', color: '#38b2ac' },
              { name: 'WordPress', color: '#21759b' },
              { name: 'SEO Tools', color: '#00a300' },
              { name: 'Google Ads', color: '#4285f4' },
              { name: 'Meta Ads', color: '#0668e1' },
              { name: 'Java', color: '#f89820' },
              { name: 'Spring Boot', color: '#6db33f' },
              { name: 'Hibernate', color: '#bcae79' },
              { name: 'REST APIs', color: '#00d2ff' },
              { name: 'MySQL', color: '#4479a1' },
              { name: 'PostgreSQL', color: '#336791' }
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="glass-card"
                whileHover={{ scale: 1.05, borderColor: tech.color, boxShadow: `0 0 25px ${tech.color}44` }}
                style={{
                  padding: '15px 30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  borderRadius: '30px'
                }}
              >
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: tech.color, boxShadow: `0 0 8px ${tech.color}` }}></div>
                <span style={{ fontWeight: 700, color: 'var(--color-bisque)', fontSize: '1.1rem', letterSpacing: '0.5px' }}>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="section" style={{ padding: '120px 0 80px', background: 'var(--primary-blue)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <div className="about-badge-line"></div>
            <span className="about-badge-text">CLIENT TRUST</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '25px', fontWeight: 600, letterSpacing: '-1.5px' }}>Trusted by Enterprises Worldwide</h2>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.6)', marginBottom: '60px', maxWidth: '750px', margin: '0 auto 60px', lineHeight: 1.7 }}>
            We prioritize quality and precision. Our commitment to excellence has earned us the trust of businesses looking for reliable, scalable, and secure digital architectures.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <div className="stats-grid">
              {[
                { num: '99%', label: 'Client Retention', sub: 'across all core engagements', highlight: 'var(--accent-green)' },
                { num: '24/7', label: 'Expert Support', sub: 'dedicated technical assistance', highlight: 'var(--accent-green)' },
                { num: '50+', label: 'Projects Delivered', sub: 'successful end-to-end executions', highlight: 'var(--accent-green)' },
                { num: 'ISO', label: '9001:2015', sub: 'Certified Quality Management', highlight: 'var(--accent-green)' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="stat-item"
                >
                  <h3 className="stat-num" style={{ color: stat.highlight || 'inherit' }}>{stat.num}</h3>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-sub">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src="/vision-banner.jpg" alt="Technology Future" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary-blue), transparent, var(--primary-blue))', opacity: 0.8 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              maxWidth: '850px',
              padding: '40px 0',
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '25px' }}>
              <div className="about-badge-line" style={{ background: 'var(--color-bisque)' }}></div>
              <span className="about-badge-text" style={{ color: 'var(--color-bisque)' }}>OUR VISION</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', color: 'var(--color-bisque)', lineHeight: 1.2, fontWeight: 800, marginBottom: '25px', letterSpacing: '-1.5px' }}>
              Technology is powering the future of business
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-bisque)', opacity: 0.8, lineHeight: 1.7, marginBottom: '40px', maxWidth: '650px', margin: '0 auto 40px' }}>
              From modern web applications to scalable data architectures, SiviOn's technology enables mastery in a rapidly evolving digital landscape.
            </p>
            <Link to="/about" className="hp-btn-solid" style={{ padding: '16px 40px' }}>See Our Execution Strategy &rarr;</Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        textAlign: 'center',
        padding: '120px 0',
        background: 'var(--primary-blue)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="about-glow green-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3, width: '80%', height: '80%' }}></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '30px' }}>
              <div className="about-badge-line" style={{ background: 'var(--color-bisque)' }}></div>
              <span className="about-badge-text" style={{ color: 'var(--color-bisque)' }}>READY TO SCALE?</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1.2px', color: 'var(--color-bisque)', lineHeight: 1.1 }}>
              Let's Build the Future Together
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-bisque)', opacity: 0.7, maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
              Connect with our team today and discover how SiviOn Global Technologies can accelerate your digital growth with precision engineering.
            </p>
            <Link to="/contact" className="hp-btn-solid" style={{ padding: '16px 45px', fontSize: '1.1rem', background: 'var(--accent-orange)' }}>Get Started Today &rarr;</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
