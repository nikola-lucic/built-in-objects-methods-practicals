/*
7.
Write a function that checks if a given string is written in all capitals.
Write a function that checks if a given string contains any digits.
Write a function that checks if a given string is a valid hexadecimal color.
Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
Write a function named validator that returns an object with properties stringValidator, 
passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
*/

var string = "dfdfVVF12313";
var number = 2214;

function checksCapitalCases(string) {
    var newString = string.toUpperCase();
    return string === newString ? true : false;
}

var checksCapitalCases = checksCapitalCases(string)
console.log(checksCapitalCases);

function checkForDigits(string) {
    var array = string.split("");
    var output = array.some(function(element) {
        return parseInt(element);
    })
    return output;
}
var checkForDigits = checkForDigits(string)
console.log(checkForDigits);

function checkHexadecimal(string) {
    return (typeof string === "string") && string.length === 6 && !isNaN(parseInt(string, 16))
}
var checkHexadecimal = checkHexadecimal(string)
console.log(checkHexadecimal);

function checkInterval(number) {
    return number > 1900 || number > 2018;
}
var checkInterval = checkInterval(number);
console.log(checkInterval);

function validator(checksCapitalCases, checkForDigits, checkHexadecimal, checkInterval) {
    var result = {
        stringValidator: checksCapitalCases,
        passwordValidator: checkForDigits,
        colorValidator: checkHexadecimal,
        yearValidator: checkInterval
    }
    return result;
}
var validator = validator(checksCapitalCases, checkForDigits, checkHexadecimal, checkInterval);
console.log(validator);