const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Incident = require('../models/Incident');

// GET /incidents -> Retrieve all incidents
router.get('/', async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /incidents -> Create a new incident
router.post('/', async (req, res) => {
  const { title, description, severity } = req.body;

  // Basic validation
  if (!title || !description || !severity) {
    return res.status(400).json({ message: "All fields are required." });
  }
  if (!["Low", "Medium", "High"].includes(severity)) {
    return res.status(400).json({ message: "Severity must be Low, Medium, or High." });
  }

  try {
    const newIncident = new Incident({ title, description, severity });
    const savedIncident = await newIncident.save();
    res.status(201).json(savedIncident);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /incidents/:id -> Retrieve a specific incident by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Check if the provided ID is a valid ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid ID format" });
  }

  try {
    const incident = await Incident.findById(id);

    // If the incident doesn't exist, return a 404 Not Found
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    // Return the found incident
    res.status(200).json(incident);

  } catch (error) {
    // Return 500 for any server/database errors
    res.status(500).json({ message: error.message });
  }
});

// DELETE /incidents/:id -> Delete an incident by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  // Check if the provided ID is a valid ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid ID format" });
  }

  try {
    const incident = await Incident.findByIdAndDelete(id);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }
    res.status(200).json({ message: "Incident deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
