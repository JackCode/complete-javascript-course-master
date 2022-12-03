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

const flight = 'LH234';
const passenger = {
  fullName: 'Jackson Weber',
  passport: 4317849,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.fullName = 'Mr. ' + passenger.fullName;

  if (passenger.passport === 4317849) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000) + 1;
};

newPassport(passenger);
checkIn(flight, passenger);
