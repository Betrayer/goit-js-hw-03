const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(allProdcuts, productName) {
  let itemsPrice;
  for (let i = 0; i < allProdcuts.length; i++) {
    if (productName === allProdcuts[i].name) {
      itemsPrice = allProdcuts[i].price * allProdcuts[i].quantity;
    }
  }
  return itemsPrice;
};

console.log(calculateTotalPrice(products, "Радар"));

console.log(calculateTotalPrice(products, "Дроид"));