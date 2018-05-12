/*
3.
Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
    12345 -> 54321
*/
var number = 12345;

function revers(number) {
    var newNumber = number.toString().split("").reverse().join("");
    var output = parseInt(newNumber)
    return typeof output
}
console.log(revers(number));