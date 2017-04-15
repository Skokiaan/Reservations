

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var reservations = [];



// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "restaurant.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/makeReservation", function(req, res) {
    res.sendFile(path.join(__dirname, "makeReservation.html"));
});



// $(".submit").on("click", function() {
//             event.preventDefault();
//           
  // var newReservation =  {
  //               name: $("#reserve_name").val().trim(),
  //               phone: $("#reserve_phone").val().trim(),
  //               email: $("#reserve_email").val().trim(),
  //               unique_id: $("#reserve_uniqueID").val().trim()
  //           }
//         });


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

