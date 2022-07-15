// Vars for work day hours

var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");

// vars for moment.js current day and date
var todaysDate = moment().format('ddd') + ", " + moment().format("MMM Do YY");

// retrieving local storage Information for each hour
var loadPage = function() {
   
    var retrieve9 = JSON.parse(localStorage.getItem("09:00am"));
    nine.val(retrieve9);

    var retrieve10 = JSON.parse(localStorage.getItem("10:00am"));
    ten.val(retrieve10);
    
    var retrieve11 = JSON.parse(localStorage.getItem("11:00am"));
    eleven.val(retrieve11);

    var retrieve12 = JSON.parse(localStorage.getItem("12:00pm"));
    twelve.val(retrieve12);

    var retrieve1 = JSON.parse(localStorage.getItem("01:00pm"));
    one.val(retrieve1);

    var retrieve2 = JSON.parse(localStorage.getItem("02:00pm"));
    two.val(retrieve2);

    var retrieve3 = JSON.parse(localStorage.getItem("03:00pm"));
    three.val(retrieve3);

    var retrieve4 = JSON.parse(localStorage.getItem("04:00pm"));
    four.val(retrieve4);

    var retrieve5 = JSON.parse(localStorage.getItem("05:00pm"));
    five.val(retrieve5);
}