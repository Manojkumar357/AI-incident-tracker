const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const incidentRoutes = require('./routes/incidents');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/incidents', incidentRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the AI Safety Incident Log API!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
