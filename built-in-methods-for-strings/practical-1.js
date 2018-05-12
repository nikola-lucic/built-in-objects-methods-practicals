/*
1.
Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

'ff', 16, 8 -> 377
*/

function converterBase(parameter, fromBase, toBase) {
    var parsed = parseInt(parameter, fromBase);
    return parsed.toString(toBase)
}
console.log(converterBase('ff', 16, 8));