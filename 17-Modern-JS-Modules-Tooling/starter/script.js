// Importing module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// addToCart('eggs', 5);
// console.log(price, qty);

console.log('Importing Module');
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
