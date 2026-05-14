const User = require('../models/User');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt for:", email); 

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found"); 
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.matchPassword(password);
    console.log("Password match:", isMatch); 

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
      res.json({ _id: user._id, email: user.email, token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};
module.exports = { loginUser };