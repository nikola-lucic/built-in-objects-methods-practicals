/*
8.
Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises"
*/

var string = "js string exercises";

function capitalizeFirsLetter(string) {
    var newString = string.charAt(0).toUpperCase() + string.substring(1)
    return newString
}
console.log(capitalizeFirsLetter(string));