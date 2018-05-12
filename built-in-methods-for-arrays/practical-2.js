/*
2.
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
var output = function removeDuplicates(array) {
    var newArray = [];
    array.sort(function(current, next) {
            return current - next;
        })
        /*
          newArray = array.filter((element, index) => {
                return array.indexOf(element) === index;
            });
        */
    array.forEach(function(element, index) {
        if (array.indexOf(element) === index) {
            newArray.push(element)
        }
    });

    return newArray;
}

console.log(output(array));