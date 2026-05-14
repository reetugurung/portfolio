const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Clear existing users to avoid duplicates
    await User.deleteMany();

    // Create Admin User
    await User.create({
      email: 'admin@example.com', // Change this to your email
      password: 'password123'    // Change this to a strong password
    });

    console.log('Admin User Created Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();