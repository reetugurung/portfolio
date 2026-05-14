require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin'); // Adjust path if your model is elsewhere
const bcrypt = require('bcryptjs');

const reset = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  
  const email = "admin@example.com"; // Set your desired email
  const password = "password123";    // Set your desired password
  
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await Admin.findOneAndUpdate(
    {}, // Finds the first admin in the collection
    { email, password: hashedPassword },
    { upsert: true } // Creates it if it doesn't exist
  );

  console.log("------------------------------------");
  console.log("Admin credentials updated!");
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  console.log("------------------------------------");
  process.exit();
};

reset();