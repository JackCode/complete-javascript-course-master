'use strict';

/** DEFAULT PARAMETER VALUES */

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = numPassengers * 199 // works for parameters before in list
// ) {
//   // Old way of setting default values (ES5)
//   //   numPassengers ||= 1;
//   //   price ||= 199.0;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 23); // How to skip parameters

/** PARAMETERS BY VALUE VS. BY REFERENCE */

// const flight = 'LH234';
// const passenger = {
//   fullName: 'Jackson Weber',
//   passport: 4317849,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.fullName = 'Mr. ' + passenger.fullName;

//   if (passenger.passport === 4317849) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000) + 1;
// };

// newPassport(passenger);
// checkIn(flight, passenger);

/** First class and higher order functions */

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const highFive = function () {
//   console.log('👋🏼');
// };
// document.body.addEventListener('click', highFive);

// ['Jackson', 'Marsha', 'Adam'].forEach(highFive);

/** FUNCTIONS RETURNING FUNCTIONS */

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jackson');
// greeterHey('Patrick');

// greet('Hello')('Jackson!');

/** APPLY AND CALL FUNCTIONS */

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight #${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jackson Weber');
lufthansa.book(635, 'Patrick Cordero');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // Doesn't work
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

/** BIND METHOD */

const bookEW = book.bind(eurowings);
bookEW(420, 'Patrick Cordero');

const bookEW314 = book.bind(eurowings, 314);
bookEW314('Jackson Weber');
bookEW314('Amelia Floehr');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addSalesTax = addTax.bind(null, 0.06);
const calcTotal = addTax.bind(null, 0.1236);
console.log(calcTotal(169));

const tax = function () {
  return function () {};
};
