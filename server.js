const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const connectDB = async () => {
  try {
      await mongoose.connect('mongodb://localhost:27017/crud_api', {
          useNewUrlParser: true, // Required for MongoDB connection string parsing
      });
      console.log('Connected to MongoDB');
  } catch (error) {
      console.error('Database connection error:', error);
      process.exit(1); // Exit the process if the database connection fails
  }
};

// Call the function
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
