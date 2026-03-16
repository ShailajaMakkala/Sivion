import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProjects(data.data);
        }
      })
      .catch(err => console.error('Error fetching portfolio:', err))
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    { name: 'All Work', id: 'all' },
    { name: 'Web', id: 'Web' },
    { name: 'Java', id: 'Java' },
    { name: 'Mobile', id: 'Mobile' },
    { name: 'Marketing', id: 'Digital Marketing' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div style={{ minHeight: '100vh', background: '#0A1128', padding: '140px 0 80px', overflowX: 'hidden', position: 'relative' }}>
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '50%', background: 'rgba(6, 182, 212, 0.05)', filter: 'blur(150px)', zIndex: -10 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '50%', height: '50%', background: 'rgba(168, 85, 247, 0.05)', filter: 'blur(150px)', zIndex: -10 }} />

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ maxWidth: '896px', margin: '0 auto 64px auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>Our Expertise in Action</span>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, color: 'white', marginBottom: '32px', letterSpacing: '-0.025em', fontStyle: 'italic', lineHeight: 1.1 }}>
              Selected Projects
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.625, margin: '0 auto', maxWidth: '800px' }}>
              Discover how we've helped leading organizations across the globe 
              transform their digital landscape with precision engineering and strategic vision.
            </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}>
          <span style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 500, marginRight: '8px' }}>
            <Filter size={16} /> Filter by:
          </span>
          {categories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              style={{
                padding: '10px 24px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                transition: 'all 0.3s ease',
                border: filter === tab.id ? '1px solid var(--accent-cyan)' : '1px solid rgba(255,255,255,0.1)',
                background: filter === tab.id ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
                color: filter === tab.id ? '#0A1128' : 'white',
                boxShadow: filter === tab.id ? '0 0 20px rgba(6,182,212,0.3)' : 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (filter !== tab.id) e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)';
              }}
              onMouseLeave={(e) => {
                if (filter !== tab.id) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            {[1, 2, 4].map(i => (
              <div key={i} style={{ aspectRatio: '16/9', background: 'rgba(255,255,255,0.05)', borderRadius: '40px', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            ))}
          </div>
        ) : (
          <motion.div 
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, i) => (
                <motion.div
                  key={proj._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  style={{ group: true }}
                  className="portfolio-card-group"
                >
                  <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '40px', overflow: 'hidden', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img 
                      src={proj.coverImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'} 
                      alt={proj.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'all 0.7s ease-in-out' }}
                      className="portfolio-card-img"
                    />
                    
                    {/* Overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0A1128, rgba(10,17,40,0.2), transparent)', opacity: 0.6, transition: 'opacity 0.3s ease' }} className="portfolio-card-overlay" />
                    
                    <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                         {(proj.technologies || []).slice(0, 3).map(tech => (
                           <span key={tech} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                             {tech}
                           </span>
                         ))}
                      </div>
                      <h3 style={{ fontSize: '1.875rem', fontWeight: 900, color: 'white', marginBottom: '8px', fontStyle: 'italic', letterSpacing: '-0.05em', textTransform: 'uppercase', transition: 'color 0.3s ease' }} className="portfolio-card-title">
                        {proj.title}
                      </h3>
                    </div>

                    <div style={{ position: 'absolute', top: '32px', right: '32px', opacity: 0, transform: 'translateX(16px)', transition: 'all 0.3s ease' }} className="portfolio-card-link">
                       <a href={proj.liveUrl || '#'} target="_blank" rel="noreferrer" style={{ width: '56px', height: '56px', background: 'var(--accent-cyan)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A1128', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', transition: 'transform 0.3s ease' }}>
                          <ArrowUpRight size={24} />
                       </a>
                    </div>
                  </div>
                  <style>{`
                    .portfolio-card-group:hover .portfolio-card-img { filter: grayscale(0) !important; transform: scale(1.05) !important; }
                    .portfolio-card-group:hover .portfolio-card-overlay { opacity: 0.8 !important; }
                    .portfolio-card-group:hover .portfolio-card-title { color: var(--accent-cyan) !important; }
                    .portfolio-card-group:hover .portfolio-card-link { opacity: 1 !important; transform: translateX(0) !important; }
                  `}</style>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', background: 'rgba(255,255,255,0.03)', borderRadius: '40px', border: '1px dashed rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>No projects found in this category</h3>
            <p style={{ color: '#94A3B8' }}>Try selecting a different filter or check back later.</p>
          </div>
        )}

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ marginTop: '128px', padding: '64px', borderRadius: '60px', background: 'linear-gradient(to bottom right, #0D1B3E, #0A1128)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '33%', height: '33%', background: 'rgba(6, 182, 212, 0.1)', filter: 'blur(100px)' }} />
          <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 900, color: 'white', marginBottom: '32px', letterSpacing: '-0.025em', fontStyle: 'italic', lineHeight: 1.1 }}>
            Ready to Build Your <br /> Digital Legacy?
          </h2>
          <Link 
            to="/contact" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'white', color: '#0A1128', fontWeight: 900, padding: '20px 48px', borderRadius: '9999px', transition: 'all 0.3s ease', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#0A1128'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            GET IN TOUCH <ArrowUpRight size={20} />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
