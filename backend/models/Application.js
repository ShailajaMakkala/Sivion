const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  resumeLink: { type: String, required: true },
  status: { type: String, enum: ['new', 'reviewed', 'shortlisted', 'rejected'], default: 'new' },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
