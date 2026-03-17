import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  BarChart, 
  Search, 
  Headphones, 
  Zap, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Zap as ZapIcon
} from 'lucide-react';

const iconMap = {
  Code: Code,
  Globe: Globe,
  BarChart: BarChart,
  Search: Search,
  Headphones: Headphones,
  Zap: Zap
};

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/api/services/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setService(data.data);
        }
      })
      .catch(err => console.error('Error fetching service:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={{ background: '#0F172A', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        <div className="animate-pulse">Loading Service Details...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div style={{ background: '#0F172A', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '20px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Service not found</h2>
        <Link to="/services" className="hp-btn-solid">Back to Services</Link>
      </div>
    );
  }

  const Icon = iconMap[service.iconName] || ZapIcon;

  return (
    <div style={{ background: '#0F172A', minHeight: '100vh', color: 'white', paddingBottom: '100px' }}>
      
      {/* Dynamic Header */}
      <section style={{ 
        padding: '160px 0 80px', 
        background: 'linear-gradient(to bottom, rgba(0,210,255,0.06) 0%, transparent 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'rgba(34,211,238,0.05)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        
        <div className="container">
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', marginBottom: '30px', fontWeight: 600, textDecoration: 'none' }}>
            <ArrowLeft size={18} /> Back to Services
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '2 1 500px' }}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="about-badge" 
                style={{ marginBottom: '20px' }}
              >
                <div className="about-badge-line"></div>
                <span className="about-badge-text">SERVICE DETAIL</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '25px', lineHeight: 1.1, letterSpacing: '-1.5px' }}
              >
                {service.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '700px', marginBottom: '40px' }}
              >
                {service.shortDescription}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ display: 'flex', gap: '15px' }}
              >
                <Link to="/contact" className="hp-btn-solid" style={{ padding: '16px 40px' }}>Get a Quote</Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{ 
                flex: '1 1 300px', 
                display: 'flex', 
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '4/3',
                background: 'rgba(34,211,238,0.05)', 
                borderRadius: '30px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
                border: '1px solid rgba(34,211,238,0.2)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {service.coverImage ? (
                  <img 
                    src={service.coverImage} 
                    alt={service.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }} 
                  />
                ) : (
                  <Icon size={100} />
                )}
                
                {service.coverImage && (
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '15px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <Icon size={30} />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container" style={{ marginTop: '0px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          
          {/* Detailed Content */}
          <div style={{ flex: '2' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '30px', borderLeft: '4px solid var(--accent-cyan)', paddingLeft: '20px' }}>
              Service Overview
            </h2>
            <div style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              {service.longDescription ? (
                <div style={{ whiteSpace: 'pre-wrap' }}>{service.longDescription}</div>
              ) : (
                <p>We provide enterprise-grade {service.title} solutions tailored to your specific business requirements. Our approach ensures scalability, security, and high performance from the ground up.</p>
              )}
            </div>

            {/* Core Features / Advantages Grid */}
            <div style={{ marginTop: '60px' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '30px', borderLeft: '4px solid var(--accent-cyan)', paddingLeft: '20px' }}>
                Key Benefits
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {[
                  { title: 'Scalability', desc: 'Built to grow as your business requirements expand.' },
                  { title: 'Security', desc: 'Integrated security protocols at every development layer.' },
                  { title: 'Performance', desc: 'Optimized for speed and flawless user experience.' },
                  { title: 'Expert Team', desc: 'Managed by senior engineers with deep domain expertise.' }
                ].map((benefit, i) => (
                  <div key={i} style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <ShieldCheck size={24} color="var(--accent-cyan)" style={{ marginBottom: '15px' }} />
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white', marginBottom: '10px' }}>{benefit.title}</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside style={{ flex: '1' }}>
            {/* Tech Stack Card */}
            {service.technologies && service.technologies.length > 0 && (
              <div style={{ 
                background: 'rgba(255,255,255,0.03)', 
                padding: '40px', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.05)',
                marginBottom: '40px' 
              }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ZapIcon size={20} color="var(--accent-cyan)" /> Technologies Used
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {service.technologies.map((tech, i) => (
                    <span key={i} style={{ 
                      background: 'rgba(34,211,238,0.1)', 
                      color: 'var(--accent-cyan)', 
                      padding: '8px 18px', 
                      borderRadius: '50px', 
                      fontSize: '0.9rem', 
                      fontWeight: 600,
                      border: '1px solid rgba(34,211,238,0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact Card */}
            <div style={{ 
                background: 'linear-gradient(135deg, #0D2248 0%, #0A1128 100%)', 
                padding: '40px', 
                borderRadius: '24px', 
                border: '1px solid rgba(0,210,255,0.2)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px' }}>Need custom advice?</h3>
                <p style={{ color: '#94a3b8', marginBottom: '25px', fontSize: '0.95rem' }}>Schedule a free consultation with our technical experts to discuss your {service.title} needs.</p>
                <Link to="/contact" className="hp-btn-solid" style={{ width: '100%', display: 'block' }}>Discuss Project</Link>
            </div>
          </aside>

        </div>
      </section>

      {/* Other Services Bottom Navigation */}
      <section className="container" style={{ marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Explore More Services</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
           <Link to="/services" className="hp-btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 40px', color: 'white' }}>
             View All Offerings <ChevronRight size={18} />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
