import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, FileText, Send, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', jobTitle: '', resumeLink: '' });

  useEffect(() => {
    fetch('/api/careers')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setJobs(data.data);
        }
      })
      .catch(err => console.error('Error fetching jobs:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.jobTitle) { toast.error('Please select a target role'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Application submitted successfully!');
        setForm({ name: '', email: '', phone: '', jobTitle: '', resumeLink: '' });
      } else {
        toast.error(data.message || 'Submission failed');
      }
    } catch (err) {
      toast.error('Connection error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

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
              <span className="about-badge-text">JOIN OUR TEAM</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 600, marginBottom: '25px', letterSpacing: '-1.5px' }}>
              Build Your Digital Career
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '800px', margin: '0 auto' }}>
              We're looking for passionate freshers, trainees, and experienced engineers who think like owners and build for scale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section container" style={{ paddingBottom: '120px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          
          {/* Left: Job Listings */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
              <Briefcase className="text-accent-cyan" color="var(--accent-cyan)" />
              <h2 style={{ fontSize: '2.2rem', fontWeight: 600, color: 'white', margin: 0 }}>Current Openings</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {loading ? (
                [1, 2].map(i => (
                  <div key={i} style={{ height: '150px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}></div>
                ))
              ) : jobs.filter(j => j.isActive).length > 0 ? (
                jobs.filter(j => j.isActive).map((job, i) => (
                  <motion.div 
                    key={job._id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.1 }}
                    style={{ 
                      background: 'rgba(255,255,255,0.02)', 
                      border: '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: '20px', 
                      padding: '35px',
                      position: 'relative',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'var(--accent-cyan)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '8px' }}>{job.title}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> {job.type}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={14} /> {job.location}</span>
                        </div>
                      </div>
                      <span style={{ background: 'rgba(0,210,255,0.1)', color: 'var(--accent-cyan)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700 }}>
                        {job.experience}
                      </span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>{job.description}</p>
                  </motion.div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '60px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '20px' }}>
                   <h3 style={{ color: 'white', marginBottom: '10px' }}>No Current Openings</h3>
                   <p style={{ color: 'rgba(255,255,255,0.6)' }}>We are always looking for talent. Please check back later or send us your resume.</p>
                </div>
              )}
            </div>
            
            <div style={{ marginTop: '50px', padding: '30px', background: 'rgba(58, 237, 178, 0.05)', borderRadius: '20px', border: '1px solid rgba(58, 237, 178, 0.1)', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(58, 237, 178, 0.1)', padding: '15px', borderRadius: '12px', color: '#3aedb2' }}>
                <GraduationCap size={32} />
              </div>
              <div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '5px' }}>Freshers & Interns Program</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.95rem' }}>We actively hire trainees and provide comprehensive mentorship for early-career developers and marketers.</p>
              </div>
            </div>
          </div>

          {/* Right: Application Form */}
          <div style={{ flex: '1 1 400px' }}>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ 
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '45px', 
                borderRadius: '30px',
                position: 'sticky',
                top: '120px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <FileText color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'white', margin: 0 }}>Apply Now</h3>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Full Name</label>
                  <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your name" style={inputStyle} required />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Enter your email" style={inputStyle} required />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Phone / WhatsApp</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Enter your mobile number" style={inputStyle} required />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Target Role</label>
                  <select value={form.jobTitle} onChange={e => setForm({...form, jobTitle: e.target.value})} style={inputStyle} required>
                    <option value="">Select a role</option>
                    {!loading && jobs.map(job => (
                      <option key={job._id || job.id} value={job.title}>{job.title}</option>
                    ))}
                    <option value="other">Other Potential Role</option>
                  </select>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <label style={labelStyle}>Resume / CV Link</label>
                  <input type="url" value={form.resumeLink} onChange={e => setForm({...form, resumeLink: e.target.value})} placeholder="Enter Portfolio or Drive Link" style={inputStyle} required />
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>Ensure the link is viewable by our recruitment team.</p>
                </div>

                <button type="submit" disabled={submitting} className="hp-btn-solid" style={{ width: '100%', height: '60px', borderRadius: '15px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  {submitting ? 'Submitting...' : 'Submit Application'} <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

const labelStyle = { 
  display: 'block', 
  color: 'rgba(255,255,255,0.4)', 
  fontSize: '0.85rem', 
  marginBottom: '8px', 
  textTransform: 'uppercase', 
  letterSpacing: '1px',
  fontWeight: 600
};

const inputStyle = {
  width: '100%',
  padding: '15px 20px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  transition: 'all 0.3s ease',
  boxSizing: 'border-box'
};

export default Careers;
