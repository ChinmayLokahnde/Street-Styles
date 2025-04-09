const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const user = require("../models/user");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token, 
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
  

  const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const newUser = new User({ name, email, password, role:role || 'user' });
      await newUser.save(); 
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error in registering user:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
module.exports = { loginUser, registerUser };
