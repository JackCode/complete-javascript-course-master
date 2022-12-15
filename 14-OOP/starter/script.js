'use strict';

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this! (create method in constructor function - bad performance)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jackson = new Person('Jackson', 1991);
console.log(jackson);

// new KEYWORD
// 1. New {} is created
// 2. Function is called; this keyword is set to new empty object created in step 1
// 3. Newly created object is linked to prototype
// 4. Function automatically returns object from step 1.

const matilda = new Person('Matilda', 2017);
const patrick = new Person('Patrick', 1996);
console.log(matilda, patrick);

const jay = 'Jay';

console.log(jackson instanceof Person);
console.log(jay instanceof Person);
