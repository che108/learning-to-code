// write a function to compute the maximum of two values
// call the function

function computeMax (a,b) {
  if (b > a) {
    return b;
  }
  else {
    return a;
  }
}

pizza1 = 60;
pizza2 = 100;
var priceOfPizza = computeMax(pizza1, pizza2);
var otherStuff = 20;
var total = priceOfPizza + otherStuff;
console.log("Total: " + total);
