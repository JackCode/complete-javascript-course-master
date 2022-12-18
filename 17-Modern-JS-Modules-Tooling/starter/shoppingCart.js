// Exporting module
console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, qty) {
  cart.push({ product, qty });
  console.log(`${qty} ${product} added to cart`);
};

const totalPrice = 236;
const totalQty = 23;

export { totalPrice, totalQty as qty };
