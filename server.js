var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var guests = [
    {
        customerName: "Sam",
        phoneNumber: "555-555",
        customerEmail: "sam@email.com",
        customerID: "01"
    },
    {
        customerName: "Jeff",
        phoneNumber: "155-555",
        customerEmail: "jeff@email.com",
        customerID: "02"
    },
    {
        customerName: "Kris",
        phoneNumber: "255-555",
        customerEmail: "kriss@email.com",
        customerID: "03"
    }
];


// Routes
// ----------------------------------

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});



app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.post("/api/new", function (req, res) {
    // res.sendFile(path.join(__dirname, "reserve.html"));

    var newReservation = req.body;

    console.log(newReservation);

    guests.push(newReservation);

    res.json(newReservation);



});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});





