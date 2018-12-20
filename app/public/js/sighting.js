/* global moment */

// When user clicks add-btn
$("#sighting-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newsighting object
  var newSighting = {
    author: $("#author").val().trim(),
    location: $("#sighting-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newSighting);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newSighting)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("sighting");

      row.append("<p> Last sighted: " + newSighting.location + " by " + newSighting.author + " </p>");
      row.append("<p>At " + moment(newSighting.created_at).format("h:mma on dddd") + "</p>");

      $("#sighting-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#sighting-box").val("");
});

// When the page loads, grab all of our sightings
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("sighting");

      row.append("<p>Last sighted: " + data[i].location + " by " + data[i].author +"</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#sighting-area").prepend(row);

    }

  }

});
