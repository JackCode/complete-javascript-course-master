// Importing module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// addToCart('eggs', 5);
// console.log(price, qty);

// console.log('Importing Module');
// // import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qty } from './shoppingCart.js'; // can do, not desirable
// add('pizza', 2);
// console.log(price, qty);

// // Top level await in modules only as of ES2022
// // Blocks execution of entire module
// // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await response.json();
// // console.log(data);
// // console.log('something');

// const getLastPost = async function () {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// lastPost.then(last => console.log(last));
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// the old module pattern
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQty = 23;

//   const addToCart = function (product, qty) {
//     cart.push({ product, qty });
//     console.log(`${qty} ${product} added to cart`);
//   };

//   const orderStock = function (product, qty) {
//     cart.push({ product, qty });
//     console.log(`${qty} ${product} ordered`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQty,
//   };
// })();

// ShoppingCart2.addToCart('apples', 4);
// console.log(ShoppingCart2);

// Common JS Modules
// Exporting (works in node.js, but not browser)
// export.addToCart = function (product, qty) {
//   cart.push({ product, qty });
//   console.log(`${qty} ${product} added to cart`);
// };

// const { addToCart } = require('./shoppingCart.js')

import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', qt: 5 },
    { product: 'pizza', qt: 4 },
  ],
  user: { loggedIn: true },
};

// const stateClone = Object.assign({}, state);
const stateClone 
console.log(stateClone);
