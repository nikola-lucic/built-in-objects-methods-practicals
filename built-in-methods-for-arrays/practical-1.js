/*
1.
Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/

var array = [2, 4, 7, 11, -2, 1];
var output = function duplicates(array) {
    var newArray = []
    array.forEach(function(element) {
        newArray.push(element, element)
    });
    return newArray;
}
console.log(output(array));