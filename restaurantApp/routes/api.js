var express = require('express');
var router = express.Router();
var reservations = [];
var waitList = [];

/* GET home page. */
router.get('/', function (req, res, next) {
    var command = req.param('command');
    var name = req.param('name');
    var email = req.param('email');
    var tel = req.param('tel');
    var id = req.param('id');
    var userData = {
        name: name,
        email: email,
        tel: tel,
        id: id
    };
    fireCommand(command, userData, res);
    // res.json(userData);
});

function fireCommand(command, userData, res) {
    if (command == "bookReservation") {
        if (reservations > 5) {
            //add name to waitlist
            addToWaitlist(userData);
        } else {
            bookReservation(userData);
            //add to reservation list
        }
    } else if (command == "viewTables") {
        //route to viewTables page
        viewTables(res);
    } else if (command == "mockData") {
        //route to viewTables page
        mockData(res);
    } else if (command == "emptyArray") {
        //route to viewTables page
        emptyArrays(res);
    } else {
        res.send("Sorry we don't recognize that API call");
    }
}

function viewTables(res) {
    res.json({
        reservation: reservations,
        waitList: waitList
    });
}
// $.get(`/api/?command=bookReservation&${name}&email=${email}&tel=${tel}&id=${id}`);
function bookReservation(userData) {
    reservations.push(userData);
}

function addToWaitlist(userData) {
    waitList.push(userData);
}

function mockData(res) {
    reservations.push({
        name: "Test1",
        email: "SomeEmail@goog.com",
        tel: "303-555-5553",
        id: "12345"
    }, {
        name: "Test2",
        email: "SomeEmailToo@goog.com",
        tel: "303-555-5554",
        id: "12346"
    });
    res.send("All Done");
}

function emptyArrays(res) {
    reservations = [];
    waitList = [];
    res.send('Arrays emptied');
}

module.exports = router;