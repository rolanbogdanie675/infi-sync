/* 
Filename: ComplexWebApp.js
Content: A complex web application that includes authentication, CRUD operations, and real-time chat functionality.
*/

// Import required packages and modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const socketIO = require('socket.io');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define User schema for MongoDB
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Create the Express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret-key', resave: true, saveUninitialized: false }));

// Serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      res.redirect('/login');
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          req.session.loggedIn = true;
          res.redirect('/dashboard');
        } else {
          res.redirect('/login');
        }
      });
    }
  });
});

app.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.sendFile(__dirname + '/public/dashboard.html');
  } else {
    res.redirect('/login');
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Set up the Socket.IO server
const server = app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

// Catch any other routes and return a 404 error
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});