import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBlogs(data.data);
        }
      })
      .catch(err => console.error('Error fetching blogs:', err))
      .finally(() => setLoading(false));
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ background: 'var(--primary-blue)', minHeight: '100vh', color: 'white' }}>
      
      {/* Header */}
      <section style={{ padding: '140px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="about-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <div className="about-badge-line"></div>
              <span className="about-badge-text">INSIGHTS</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 600, marginBottom: '25px', letterSpacing: '-1.5px' }}>
              Blog & Digital Strategy
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto' }}>
              Expert perspectives on Java development, web architectures, and growth-focused digital marketing trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section container" style={{ paddingBottom: '120px' }}>
        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {[1, 2, 3].map(i => (
               <div key={i} style={{ height: '400px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px' }}></div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}>
            {blogs.length > 0 ? (
              blogs.map((blog, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  style={{ 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    borderRadius: '24px', 
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'var(--accent-cyan)' }}
                >
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img src={blog.coverImage || '/vision-banner.jpg'} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {blog.category}
                      </span>
                      <div style={{ display: 'flex', gap: '15px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 600, color: 'white', marginBottom: '20px', lineHeight: 1.3 }}>
                      {blog.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '30px', fontSize: '1.05rem', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {blog.excerpt || blog.content?.substring(0, 150) + '...'}
                    </p>
                    
                    <Link to={`/blog/${blog._id}`} style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      color: 'white', 
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.95rem'
                    }}>
                      Read Full Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px 0', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '24px' }}>
                <h3 style={{ color: 'white', marginBottom: '10px' }}>No Blog Posts Found</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Please add blog articles from the admin panel.</p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,210,255,0.02)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Rss color="var(--accent-cyan)" size={40} style={{ marginBottom: '20px' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'white', marginBottom: '20px' }}>
            Subscribe to Our Insights
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
            Get the latest technical trends and digital marketing strategies delivered to your inbox.
          </p>
          <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '10px' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ flex: 1, padding: '15px 25px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }}
            />
            <button className="hp-btn-solid" style={{ padding: '0 30px' }}>Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
