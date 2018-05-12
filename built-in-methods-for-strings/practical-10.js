/*
10.
Write a program that accepts a string as input and swaps the case of each character. For example, 
if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';

var string = "The Quick Brown Fox";

function swapLetters(string) {
    var array = string.split(" ");
    output = [];
    array.forEach(function(word) {
        var wordSplit = word.split("")
        wordSplit.forEach(function(letter) {
            if (UPPER.includes(letter)) {
                output.push(letter.toLowerCase())
            } else if (LOWER.includes(letter)) {
                output.push(letter.toUpperCase())
            }
        });
        output.push(" ")
    });
    return output.join("");
}
console.log(swapLetters(string));