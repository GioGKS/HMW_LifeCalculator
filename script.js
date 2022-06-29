var name1 = prompt("What Is Your Name?: ");
var age = prompt("Please Enter your Age:");

var daysPassed = age * 365;
var weeksPassed = age * 52;
var monthsPassed = age * 12;
var yearsPassed = age;

var maxDays = 100 * 365;
var maxWeeks = 100 * 52;
var maxMonths = 100 * 12;
var maxYears = 100;

var leftDays = maxDays - daysPassed;
var leftWeeks = maxWeeks - weeksPassed;
var leftMonths = maxMonths - monthsPassed;
var leftYears = maxYears - yearsPassed;



console.log("Your Name Is: " + name1 + ' ' + "and you have left:\n" + leftDays + " - Days," + ' ' + leftWeeks + " - Weeks," + ' ' + leftMonths + " - Months," + ' ' + leftYears + " - Years.");
alert("Your Name Is: " + name1 + ' ' + "and you have left:\n" + leftDays + " - Days," + ' ' + leftWeeks + " - Weeks," + ' ' + leftMonths + " - Months," + ' ' + leftYears + " - Years.");
document.write("Your Name Is: " + name1 + ' ' + "and you have left:\n" + leftDays + " - Days," + ' ' + leftWeeks + " - Weeks," + ' ' + leftMonths + " - Months," + ' ' + leftYears + " - Years.")

