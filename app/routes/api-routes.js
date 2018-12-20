// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
var db = require("../models");

// Dependencies
// =============================================================
var Sighting = require("../models/sighting.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all Sightings
  app.get("/api/all", function(req, res) {

    // Finding all Sightings, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Sighting.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a Sighting
  app.post("/api/new", function(req, res) {

    console.log("Sighting Data:");
    console.log(req.body);

    Sighting.create({
      author: req.body.author,
      location: req.body.location,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created Sighting
      res.end();
    });

  });

};