const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Application = require('../models/Application');
const Job = require('../models/Job');
const Submission = require('../models/Submission');
const authMiddleware = require('../middleware/auth');

// Public: Submit job application
router.post('/apply', async (req, res) => {
  try {
    const app = await Application.create(req.body);
    res.status(201).json({ success: true, message: 'Application submitted successfully.' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Get all applications
router.get('/admin/applications', authMiddleware, async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.json({ success: true, data: apps });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Update application status
router.patch('/admin/applications/:id/status', authMiddleware, async (req, res) => {
  try {
    const app = await Application.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json({ success: true, data: app });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Delete application
router.delete('/admin/applications/:id', authMiddleware, async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
const { upload } = require('../config/cloudinary');

// Public: Get all active jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true }).sort({ createdAt: -1 });
    res.json({ success: true, data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Get all jobs
router.get('/admin/all', authMiddleware, async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json({ success: true, data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Create job
router.post('/admin', authMiddleware, async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Update job
router.put('/admin/:id', authMiddleware, async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: job });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Delete job
router.delete('/admin/:id', authMiddleware, async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
