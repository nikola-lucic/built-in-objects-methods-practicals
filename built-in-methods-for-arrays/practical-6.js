/*
7.
Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
    [
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
Write a function that calculates the total price of your shopping list. 
Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

*/

var listOfProducts = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
]

function calculatesTotalPrice(listOfProducts) {
    var totalPrice = 0;
    listOfProducts.forEach(function(article) {
        totalPrice += article.price;
    });
    return totalPrice;
}

var totalPrice = calculatesTotalPrice(listOfProducts)

console.log(totalPrice);

function calculatesAveragePrice(totalPrice) {
    var averagePrice = totalPrice / listOfProducts.length;
    return averagePrice;
}

var averagePrice = calculatesAveragePrice(totalPrice);
console.log(averagePrice);

function mostExpensive(listOfProducts) {
    return listOfProducts.reduce((accumulator, current) => {
        return accumulator.price > current.price ? accumulator : current;
    });
}

var mostExpensive = mostExpensive(listOfProducts);

console.log(mostExpensive);