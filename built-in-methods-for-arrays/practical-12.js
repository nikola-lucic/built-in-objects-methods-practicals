/*
12.
Write a function that shuffles the elements of a given array. 
Input: [3, 6, 11, 2, 9, 1]
Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)
*/
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var array = [3, 6, 11, 2, 9, 1]

console.log(shuffle(array))