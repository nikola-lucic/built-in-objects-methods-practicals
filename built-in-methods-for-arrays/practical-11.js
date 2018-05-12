/*
11.
Write a function that generates a random integer value between 5 and 20.
Write a function that generates a random integer value between 50 and 100. 
Write a function which expects a number and a callback generator function and returns an array of 
numbers produced by the generator function.    
*/

var min = 5;
var max = 20;

function generatesRandomNumber(min, max) {
    var randomNumber = (Math.random() * (max - min) + min).toPrecision(2);
    return randomNumber
}
console.log(generatesRandomNumber(min, max));


var min = 50;
var max = 100;

function generatesRandomNumber(min, max) {
    var randomNumber = (Math.random() * (max - min) + min).toPrecision(2);
    return randomNumber
}
var generateRandomNumber = generatesRandomNumber(min, max)
console.log(generatesRandomNumber);

var number = 5;

function generateRandomNumberArray(number, generatesRandomNumber) {
    const array = []
    for (let i = 0; i < number; i++) {
        array.push(generatesRandomNumber(min, max))
    }
    return array
}

console.log(generateRandomNumberArray(number, generatesRandomNumber))