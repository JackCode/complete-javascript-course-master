'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log('ORDERING:', ing1, ing2, ing3);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/** WORKING WITH STRINGS */

const 

/** MAPS WITHOUT SET METHOD */
// const question = new Map([
//   ['question', 'Best language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key}: ${value}`);
//   }
// }
// const answer = Number(prompt('Guess?'));
// console.log(answer);

// console.log(question.get(answer === question.get('correct')));

// // Convert Map to array
// console.log([...question]);

/** MAPS */
// const rest = new Map();
// rest.set('name', 'Chipotle');
// rest.set(1, 'Cincinnati, OH');
// console.log(rest.set(2, 'Chicago, Illinois'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// // console.log(rest);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');

/** SETS */
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jackson'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// console.log(ordersSet.add('Garlic Bread'));
// console.log(ordersSet.add('Garlic Bread'));

// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const positions = [...new Set(staff)];
// console.log(positions);
// console.log(`Staff size: ${new Set(staff).size}`);

// console.log(new Set('jacksonleeweber').size);

// ordersSet.clear();
// console.log(ordersSet);

// /** LOOPING OBJECTS */
// // Property names (aka keys)
// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Both keys and values
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

/** OPTIONAL CHAINING */
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant?.openingHours?.mon?.open);

// example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // arrays
// const users = [{ firstName: 'Jackson', email: 'helaaspk@gmail.com' }];
// console.log(users[0]?.firstName ?? 'User array empty.');

// console.log(3 || 'Jackson');
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// let guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // Nullish coalesching operator
// guests2 = restaurant.numGuests ?? 10; // knowledge values says empty strings and 0 are true
// console.log(guests2);

// logical assingments
// ||=
// &&=
// ??=

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(1, 2, 3);
// add(3, 7, 23, 7, 2, 5, 9);
// add(1, 7);

// const arr = [12, 4, 1];
// add(...arr);
// add(1);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'pep');
// restaurant.orderPizza('cheese');
// restaurant.orderPizza();

// // Rest

// const arr = [1, 2, ...[3, 4]];

// // Rest pattern uses spread op on left side of array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const ingredients = [prompt('Ing1'), prompt('Ing2'), prompt('Ing3')];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // since 2018, works on objects
// const newRestaurant = { ...restaurant, founder: 'Jackson', founded: 1998 };
// console.log(newRestaurant);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

// DESTRUCTURING OBJECTS
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const { name: resName, openingHours: hours, categories: cats } = restaurant;
// console.log(resName, hours, cats);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// let [one, , three] = restaurant.categories;
// console.log(one, three);

// [three, one] = [one, three];
// console.log(one, three);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 2, r = 3] = [8, 9];
// console.log(p, q, r);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(arr);
// console.log(badNewArr);

// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Shallow copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables are arrays, strings, maps, and sets....not objects
// const str = 'Jackson';
// const letters = [...str, ' ', 's'];
// console.log(letters);
// console.log(...str);

// // spread args for functions

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);
