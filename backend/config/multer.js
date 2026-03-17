const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = 'uploads';
    if (req.originalUrl.includes('portfolio')) dir = 'uploads/portfolio';
    else if (req.originalUrl.includes('blog')) dir = 'uploads/blog';
    else if (req.originalUrl.includes('careers')) dir = 'uploads/resumes';
    
    const fullPath = path.join(__dirname, '..', dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
    cb(null, fullPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

module.exports = { upload };
