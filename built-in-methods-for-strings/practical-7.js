/*
7.
Write a function that can pad (left, right) a string to get to a determined length.
'0000', 123, 'l' -> 0123 
'00000000', 123, 'r' -> 12300000
*/

function lengthPad(pad, string, parameter) {
    var output = "";
    if (parameter === "l") {
        output = (pad + string).slice(-pad.length)
    }
    if (parameter === "r") {
        output = (string + pad).substring(0, pad.length)
    }
    return output
}
console.log(lengthPad('0000', 123, "l"));
console.log(lengthPad('00000000', 123, "r"));