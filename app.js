// Dependencies
const express = require("express");
const games = require("./models/games.js");

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to our Game Database Express App");
});

// Listen
app.listen(PORT, () => {
  console.log("listening on port ${PORT}");
});

// Export
module.exports = app;
