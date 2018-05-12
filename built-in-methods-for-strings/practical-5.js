/*
5.
Write a function to split a string and convert it into an array of words.
    "John Snow" -> [ 'John', 'Snow' ]
*/

var string = "John Snow";

function convertToArray(string) {
    var array = string.split(" ");
    return array;
}
console.log(convertToArray(string));