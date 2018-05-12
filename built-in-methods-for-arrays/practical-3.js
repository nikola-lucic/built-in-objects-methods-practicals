/*
3.
Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
Write a function that counts the number of elements less than the middle element. If the given array 
has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

var array = [1, 2, 9, 2, 1];

function checksOddElements(array) {
    var output;
    array.forEach(function(element) {
        (element % 2 !== 0) ? output = true: output = false;
    });
    return output;
}

console.log(checksOddElements(array));

var array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function countsArrayLength(array) {

    var arrayLength = array.length / 2;
    if (arrayLength % 2 === 1) {
        return "error"
    }

    var middleElement = array[(array.length - 1) / 2]
    var newArray = [];
    array.forEach(function(element) {
        if (element < middleElement) {
            newArray.push(element)
        }
    });

    return newArray
}
console.log(countsArrayLength(array));