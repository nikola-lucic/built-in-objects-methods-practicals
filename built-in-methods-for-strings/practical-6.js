/*
6.
Write a function to convert a string to its abbreviated form. 
    "John Snow" ->     "John S."
*/

var string = "John Snow";

function abbreviatedForm(string) {
    var array = string.split(" ");
    var newString = array[0] + " " + array[1].slice(0, 1) + ".";
    return newString;
}
console.log(abbreviatedForm(string));