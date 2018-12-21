// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
  var Sighting = sequelize.define("Sighting", {
    author: DataTypes.STRING,
    location: DataTypes.STRING,
    created_at: DataTypes.DATE
});
return Sighting;
}; 
