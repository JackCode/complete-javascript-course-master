'use strict';

// const fun = function calcAge(birthYear) {
//   const age = 2022 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();
//   return age;
// };

// const firstName = 'Jackson';
// calcAge(1991);
// fun.printAge();

// HOISTING variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jackson';
// let job = 'manager';
// const year = 1991;

// // HOISTING functions
// console.log(addDecl(1, 2));
// // console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// let addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example of issue with hoisting

// const numProducts = 10;
// if (!numProducts) deleteCart();

// function deleteCart() {
//   console.log('All products deleted');
// }

// var x = 1; // Creates variable on window object
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);

// THIS KEYWORD
// Method in object, this references object
// Function -> this is undefined (in strict mode), loose -> window
// Arrow functions -> lexical (this is not part of context)
// Event listener -> attached to DOM element

// console.log(this); // window

// const calcAge = function () {
//   console.log(this); // undefined in strict mode
// };
// calcAge();

// const calcAgeArrow = () => {
//   console.log(this); // Window (lexical this of parent (global) scope)
// };
// calcAgeArrow();

// const jackson = {
//   year: 1991,
//   calcAgeJackson: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// jackson.calcAgeJackson();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jackson.calcAgeJackson;
// matilda.calcAge();

// const f = jackson.calcAgeJackson;
// f();

var firstName = 'Patrick';

const jackson = {
  firstName: 'Jackson',
  year: 1991,
  //   calcAgeJackson: function () {
  //     console.log(this);
  //     console.log(2022 - this.year);

  //     const self = this; // self or that
  //     const isMillennial = function () {
  //       //   console.log(this.year);
  //       console.log(self.year);
  //     };
  //     isMillennial();
  //   },
  calcAgeJackson: function () {
    console.log(this);
    console.log(2022 - this.year);

    const isMillennial = () => {
      //   console.log(this.year);
      console.log(this.year);
    };
    isMillennial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // DONT USE ARROW IN METHODS
};
jackson.greet();
jackson.calcAgeJackson();
