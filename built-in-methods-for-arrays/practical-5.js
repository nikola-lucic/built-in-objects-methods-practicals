/*
6.
Write a function that finds all the elements in a given array less than a given element. 
Input: [2, 3, 8, -2, 11, 4], 6 
Output: [2, 3, -2, 4]
Write a function that finds all the elements in a given array that start with the “pro” substring. 
The function should be case insensitive. 
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
Output: [’Programming’, ‘product’]

Write a function that expects an array and a callback function that filters out some of the elements. 
Use functions defined in a) or b) to test it. 
*/

var array = [2, 3, 8, -2, 11, 4];
var parameter = 6;

function findLessThanParameter(array, parameter) {
    var newArray = [];
    array.forEach(function(element) {
        if (element < parameter) {
            newArray.push(element)
        }
    });
    return newArray;
}

console.log(findLessThanParameter(array, parameter));

var array = ["JavaScript", "Programming", "fun", "product"];
var parameter = "pro"

function findMatching(array, parameter) {
    var parameterToUpperCase = parameter.charAt(0).toUpperCase();
    var output = []

    array.forEach(function(element) {
        if (element.match(parameter) || element.match(parameterToUpperCase)) {
            output.push(element)
        }
    });
    return output;

}
console.log(findMatching(array, parameter));

var array = ["JavaScript", "Programming", "fun", "product"];

function filerArray(array, callback) {
    var output = [];
    array.forEach(function(element) {
        if (callback.includes(element)) {
            output = true
        }

    });
    return output;
}
console.log(filerArray(array, findMatching(array, parameter)))