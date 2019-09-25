//The map method takes an array and maps it into a new array, itterates an array and perform a function on each value, then retun a new value.  New values stored in a new array retunred by the map method.  It is no destructive, the orginal array stays the same.

const prices = [20, 10, 30, 25, 15, 40, 80, 5];
// takes a call back funcition and in it return the value
const salePrices = prices.map(prices => {
  return price / 2;
});
// same thing shorthand version
//const salePrices = prices.map(price => price / 2);

console.log(salePrices);

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 }
];
// 2 propertyies name and price, map to new array and change price to 50% off if the original price is higher than 30
const saleProducts = products.map(product => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(products, saleProducts);
