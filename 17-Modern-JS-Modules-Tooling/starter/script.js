// Importing module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// addToCart('eggs', 5);
// console.log(price, qty);

console.log('Importing Module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add, { addToCart, totalPrice as price, qty } from './shoppingCart.js'; // can do, not desirable
add('pizza', 2);
console.log(price, qty);

// Top level await in modules only as of ES2022
// Blocks execution of entire module
// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

lastPost.then(last => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
