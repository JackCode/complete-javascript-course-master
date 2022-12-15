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
// 3. Newly created object is linked to prototype (sets __proto__ to prototype property of constructor function)
// 4. Function automatically returns object from step 1.

const matilda = new Person('Matilda', 2017);
const patrick = new Person('Patrick', 1996);
console.log(matilda, patrick);

const jay = 'Jay';

console.log(jackson instanceof Person);
console.log(jay instanceof Person);

// Prototypes
// Any object always has access to methods and properties of prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

jackson.calcAge(); // We have access because of prototypal inheritance
matilda.calcAge();
patrick.calcAge();

// Person.prototype is not the prototype of Person, but of the linked objects
console.log(jackson.__proto__);
console.log(jackson.__proto__ === Person.prototype);
console.log(Person.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jackson));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens'; // Access to property but not part of instance
console.log(jackson, matilda, patrick);
console.log(jackson.species);

console.log(jackson.hasOwnProperty('firstName')); // true
console.log(jackson.hasOwnProperty('species')); // false

console.log(jackson.__proto__);
// Object.prototype
console.log(jackson.__proto__.__proto__);
console.log(jackson.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 1, 2, 2, 2, 7, 5, 5, 6, 3, 4, 5]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// You can do this, but bad idea to extend functionality of built in types
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

// ES6 Classes (not the same as classes in other OOP languages)
// Syntactic sugar to look similar
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Added to .prototype, not actual 'class'
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(n) {
    if (n.includes(' ')) {
      this._fullName = n;
    } else {
      alert(`${n} is not a full name!`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

PersonCl.prototype.greet = function () {
  console.log(`Hey, ${this.fullName}!`);
};

jessica.greet();

const walter = new Person('Walter', 1908);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode (even if not declared in entire script)

const account = {
  owner: 'jonas',
  movements: [200, -400, 432, 900],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
