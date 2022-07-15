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


const checkMoment= function(date) {
    if (!date.isValid){
        console.log("this is not a moment object");
    } 
    else {
        console.log("this is a moment object");
    }
}