const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Middleware
app.use(express.json());

// Routes
const messageRoutes = require('./routes/messages');
app.use('/api/messages', messageRoutes);

// Socket.io logic
require('./socket')(io);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
