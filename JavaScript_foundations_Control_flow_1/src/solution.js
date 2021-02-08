/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `product`, it is referring to an object. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// Use a conditional (ternary) operator below.
function checkSize(product, size) {
  let result;
  product.availableSizes.includes(size) ? result = "We have that size." : result = "We do not have that size.";
  return result
}

function newYorkCitySalesPrice(product, city) {
  let tax;
  switch (city) {
    case "Yonkers":
    case "Staten Island":
    case "New York City":
    case "Brooklyn":
    case "Jamaica":
      tax = 1.08875
      break;
    case "Amherst":
    case "Buffalo":
    case "Cheektowaga":
      tax = 1.0875
      break;
    case "Mount Vernon":
    case "White Plains":
      tax = 1.08375
      break;
    case "Hempstead":
      tax = 1.08625
      break;
    default:
      tax = 1.08
  }
  return product.priceInCents * tax;
}
module.exports = {
  checkSize,
  newYorkCitySalesPrice,
};
