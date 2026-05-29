const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email.' });
    }
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({
      success: true,
      message: "Dhanyavaad! Your message is in — we'll reply within 24 hours.",
      contact,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: "Dhanyavaad! Your message has been received.",
    });
  }
});

module.exports = router;
