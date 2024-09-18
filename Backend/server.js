require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const db = require('./database'); // Database connection
const userRoutes = require('./Routes/userRoutes'); // User routes

const app = express();
const PORT = process.env.PORT || 5000; // Default port 5000 if not specified
const server = http.createServer(app);
const io = new Server(server);

// Socket.io setup
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Add additional socket event handlers here
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
