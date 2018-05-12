/*
9.
Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" -> "somerand...@example.com"
*/

var email = "somerandomaddress@example.com";

function hideEmail(email) {
    var splitEmail = email.split("@");
    var hiddenEmail = splitEmail[0].substring(0, splitEmail[0].length / 2) + "...@" + splitEmail[1];
    return hiddenEmail;
}
console.log(hideEmail(email));