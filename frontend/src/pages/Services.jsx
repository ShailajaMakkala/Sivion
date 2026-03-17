import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Globe,
  BarChart,
  Search,
  Headphones,
  Zap,
  ArrowRight
} from "lucide-react";

/* =========================
   Icon Mapping
========================= */

const iconMap = {
  Code: Code,
  Globe: Globe,
  BarChart: BarChart,
  Search: Search,
  Headphones: Headphones,
  Zap: Zap
};

/* =========================
   Default Services
========================= */

// No default services - use database only

const Services = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =========================
     Fetch Services API
  ========================= */

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
        }
      })
      .catch((err) => console.error("Error fetching services:", err))
      .finally(() => setLoading(false));
  }, []);

  return (

    <div style={{ background: '#0F172A', minHeight: '100vh', color: 'white' }}>

      {/* Header Section */}
      <section style={{
        padding: '140px 0 60px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, rgba(0,210,255,0.04) 0%, transparent 100%)'
      }}>
        <div className="container">
          <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <div className="about-badge-line"></div>
            <span className="about-badge-text">OUR SERVICES</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '20px',
            lineHeight: 1.2
          }}>
            Innovative Technology Solutions for{' '}
            <span style={{
              background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Modern Businesses
            </span>
          </h1>

          <p style={{
            color: '#94a3b8',
            maxWidth: '680px',
            margin: '0 auto 30px',
            fontSize: '1.05rem',
            lineHeight: 1.7
          }}>
            At SiviOn Global Technologies we deliver scalable digital solutions
            including full stack development, website development, digital
            marketing, and custom web applications designed to accelerate
            business growth.
          </p>

          <div style={{ width: '60px', height: '3px', background: 'var(--accent-cyan)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container" style={{ paddingBottom: '80px' }}>

        {loading ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{
                height: '250px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px'
              }} />
            ))}
          </div>
        ) : (

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {services.length > 0 ? (
              services.map((service, index) => {
                const Icon = iconMap[service.iconName] || Code;
                const gradientColors = {
                  'from-blue-500 to-cyan-400': 'linear-gradient(135deg, #3b82f6, #22d3ee)',
                  'from-purple-500 to-pink-400': 'linear-gradient(135deg, #a855f7, #f472b6)',
                  'from-indigo-500 to-blue-400': 'linear-gradient(135deg, #6366f1, #60a5fa)',
                  'from-green-500 to-emerald-400': 'linear-gradient(135deg, #22c55e, #34d399)',
                  'from-orange-500 to-yellow-400': 'linear-gradient(135deg, #f97316, #facc15)',
                  'from-cyan-500 to-blue-500': 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                };

                return (
                  <motion.div
                    key={service._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, borderColor: 'rgba(34,211,238,0.4)' }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                      padding: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: service.coverImage ? 'transparent' : (gradientColors[service.color] || 'linear-gradient(135deg, #06b6d4, #3b82f6)'),
                      marginBottom: '20px',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                      overflow: 'hidden',
                      border: service.coverImage ? '1px solid rgba(255,255,255,0.1)' : 'none'
                    }}>
                      {service.coverImage ? (
                        <img src={service.coverImage} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <Icon size={32} color="white" />
                      )}
                    </div>

                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '10px',
                      letterSpacing: '-0.3px'
                    }}>
                      {service.title}
                    </h3>

                    <p style={{
                      color: '#94a3b8',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      flex: 1
                    }}>
                      {service.shortDescription}
                    </p>

                    <Link to={`/services/${service._id}`} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      marginTop: 'auto'
                    }}>
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px 0', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                <h3 style={{ color: 'white', marginBottom: '10px' }}>No Services Found</h3>
                <p style={{ color: '#94a3b8' }}>Please add services from the admin panel.</p>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '15px'
          }}>
            Start Your Next Digital Project With Us
          </h2>

          <p style={{
            color: '#94a3b8',
            maxWidth: '550px',
            margin: '0 auto 30px',
            fontSize: '1rem',
            lineHeight: 1.7
          }}>
            Our team helps businesses build scalable websites, modern
            applications, and powerful digital marketing strategies.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            <Link to="/contact" className="hp-btn-solid" style={{ padding: '14px 35px', fontSize: '1rem' }}>
              Get a Quote
            </Link>
            <Link to="/portfolio" className="hp-btn-outline" style={{
              padding: '14px 35px',
              fontSize: '1rem',
              color: 'white',
              borderColor: 'rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.03)'
            }}>
              View Portfolio
            </Link>
          </div>
        </div>

      </section>
    </div>

  );
};

export default Services;
