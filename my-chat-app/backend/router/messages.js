const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new message
router.post('/', async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
