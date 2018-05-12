/*
9.
Write a function that for a given departure and arrival time calculates the time the trip takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds
*/

var departure = '2018 00:20:18 UTC+00:00';
var arrival = 'February 20, 2018 03:10:18 UTC+00:00'

function timeToArrival(departure, arrival) {
    var departure = new Date(departure);
    var arrival = new Date(arrival);
    var time = new Date(arrival - departure);
    return time.getUTCHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
}

console.log(timeToArrival(departure, arrival));