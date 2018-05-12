/*
8.

Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days
*/

var birthday = "12/12/2018"

function daysToBirthday(birthday) {
    birthday = new Date(birthday).getTime();
    var currentTime = new Date().getTime();
    var output = parseInt(((birthday - currentTime) / (1000 * 60 * 60 * 24)))
    return output + " daty to birthaday"
}
console.log(daysToBirthday(birthday));