require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const db = require('./database'); // Database connection
const userRoutes = require('./Routes/userRoutes'); // User routes
const { Server } = require('socket.io');
const { Socket } = require('dgram');

const app = express();
const PORT = process.env.PORT || 5000; // Default port 5000 if not specified
const server = http.createServer(app);
const io=new Server(server);

io.on('connection',(Socket)=>{
  console.log('a user connected');
})
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
