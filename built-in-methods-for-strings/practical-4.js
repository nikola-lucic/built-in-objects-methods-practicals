/*
4.
Write a function to alphabetize words of a given string. 
Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/

var string = "Republic Of Serbia";

function sortString(string) {
    var arrayOfWords = string.split(" ");
    var sortedArrayOfWords = [];
    arrayOfWords.forEach(function(word) {
        sortedArrayOfWords.push(word.split("").sort().join(""))
    });
    var newString = sortedArrayOfWords.join(" ");
    return newString;

}
console.log(sortString(string));