const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

router.get('/:email', async (req, res) => {
  try {
    const log = await Log.findOne({ userEmail: req.params.email.toLowerCase() });
    if (!log) return res.json({ success: true, log: null });
    res.json({ success: true, log });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/sync', async (req, res) => {
  try {
    const { userEmail, calorieTarget, entries } = req.body;
    if (!userEmail) {
      return res.status(400).json({ success: false, error: 'Email is required.' });
    }
    const log = await Log.findOneAndUpdate(
      { userEmail: userEmail.toLowerCase() },
      { calorieTarget, entries },
      { upsert: true, new: true }
    );
    res.json({ success: true, log });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
