const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

 
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

  
    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_TO, 
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Message from your Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

 
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Message saved and Email sent!" });
  } catch (error) {
    console.error("Email/DB Error:", error);
    res.status(500).json({ message: "Error processing message" });
  }
});

module.exports = router;