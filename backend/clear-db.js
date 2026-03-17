require('dotenv').config();
const mongoose = require('mongoose');

const clearData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB to clear dummy data...');

    const collections = ['services', 'projects', 'blogposts', 'submissions', 'jobs'];
    
    for (const colName of collections) {
      if (mongoose.connection.collections[colName]) {
        await mongoose.connection.collections[colName].deleteMany({});
        console.log(`Cleared collection: ${colName}`);
      }
    }

    console.log('✅ All dummy data cleared from database.');
    process.exit(0);
  } catch (err) {
    console.error('Error clearing data:', err);
    process.exit(1);
  }
};

clearData();
