// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Sighting" model that matches up with DB
var Sighting = sequelize.define("sighting", {
  author: Sequelize.STRING,
  location: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Sighting.sync();

// Makes the Sighting Model available for other files (will also create a table)
module.exports = Sighting;
