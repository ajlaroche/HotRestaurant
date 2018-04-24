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
    },
    {
        customerName: "Kris",
        phoneNumber: "255-555",
        customerEmail: "kriss@email.com",
        customerID: "03"
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
    res.sendFile(path.join(__dirname, "./index.html"));
});



app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "./reserve.html"));
});


app.get("/api/tables", function (req, res) {

    var temp =[];
    
   if (guests.length < 6) {
     return res.json(guests);
   } else {
       for (var i = 0; i < 5; i++) {
           temp.push((guests[i]));
           console.log(temp);
       }
       return res.json(temp);
   }
});

app.get("/api/waitlist", function (req, res) {
    var tempTwo = [];
    if (guests.length > 6) {
        for (var i = 5; i < guests.length; i++)
        {
            tempTwo.push(guests[i]);
        }

        return res.json(tempTwo);
    } else {
        console.log('hi')
    }
});


app.post("/api/tables", function (req, res) {
    // res.sendFile(path.join(__dirname, "./reserve.html"));
    // console.log(path.join(__dirname, "./reserve.html"));

    var newReservation = req.body;

    console.log(newReservation);

    guests.push(newReservation);

    res.json(newReservation);



});

app.post("/api/waitlist", function (req, res) {
    // res.sendFile(path.join(__dirname, "./reserve.html"));
    // console.log(path.join(__dirname, "./reserve.html"));

    var newReservation = req.body;

    console.log(newReservation);

    guests.push(newReservation);

    res.json(newReservation);



});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});





