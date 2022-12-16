'use strict';

// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this! (create method in constructor function - bad performance)
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// Person.hey = function () {
//   console.log('Hey There 👋🏼');
// };

// const jackson = new Person('Jackson', 1991);
// console.log(jackson);

// Person.hey();
// // jackson.hey(); // Error

// // new KEYWORD
// // 1. New {} is created
// // 2. Function is called; this keyword is set to new empty object created in step 1
// // 3. Newly created object is linked to prototype (sets __proto__ to prototype property of constructor function)
// // 4. Function automatically returns object from step 1.

// const matilda = new Person('Matilda', 2017);
// const patrick = new Person('Patrick', 1996);
// console.log(matilda, patrick);

// const jay = 'Jay';

// console.log(jackson instanceof Person);
// console.log(jay instanceof Person);

// // Prototypes
// // Any object always has access to methods and properties of prototype
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear);
// };

// jackson.calcAge(); // We have access because of prototypal inheritance
// matilda.calcAge();
// patrick.calcAge();

// // Person.prototype is not the prototype of Person, but of the linked objects
// console.log(jackson.__proto__);
// console.log(jackson.__proto__ === Person.prototype);
// console.log(Person.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jackson));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens'; // Access to property but not part of instance
// console.log(jackson, matilda, patrick);
// console.log(jackson.species);

// console.log(jackson.hasOwnProperty('firstName')); // true
// console.log(jackson.hasOwnProperty('species')); // false

// console.log(jackson.__proto__);
// // Object.prototype
// console.log(jackson.__proto__.__proto__);
// console.log(jackson.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 1, 2, 2, 2, 7, 5, 5, 6, 3, 4, 5]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// // You can do this, but bad idea to extend functionality of built in types
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// console.dir(x => x + 1);

// // ES6 Classes (not the same as classes in other OOP languages)
// // Syntactic sugar to look similar
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Added to .prototype, not actual 'class'
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }

//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }

//   set fullName(n) {
//     if (n.includes(' ')) {
//       this._fullName = n;
//     } else {
//       alert(`${n} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static methods
//   static hey() {
//     console.log('Hey there from the class 👋🏼');
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.fullName}!`);
// };

// jessica.greet();

// const walter = new Person('Walter', 1908);

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mode (even if not declared in entire script)

// const account = {
//   owner: 'jonas',
//   movements: [200, -400, 432, 900],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(movement) {
//     this.movements.push(movement);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed; // current speed in km/h
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   this.printSpeed();
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   this.printSpeed();
// };

// Car.prototype.printSpeed = function () {
//   console.log(`The ${this.make}'s current speed: ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// car1.printSpeed();

// const car2 = new Car('Mercedes', 95);
// car2.printSpeed();

// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();
// car1.brake();
// car1.brake();

// car2.accelerate();
// car2.accelerate();
// car2.accelerate();
// car2.brake();
// car2.accelerate();
// car2.brake();
// car2.brake();

// Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   printSpeed() {
//     console.log(`The ${this.make}'s current speed: ${this.speed} km/h`);
//   }

//   accelerate() {
//     this.speed += 10;
//     this.printSpeed();
//   }

//   brake() {
//     this.speed -= 5;
//     this.printSpeed();
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car3 = new Car('Ford', 120);
// car3.printSpeed();
// car3.accelerate();
// car3.brake();
// console.log(car3.speedUS);
// car3.speedUS = 35;
// car3.printSpeed();

// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

// const mike = new Student('Mike', 2020, 'computer science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed; // current speed in km/h
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   this.printSpeed();
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   this.printSpeed();
// };

// Car.prototype.printSpeed = function () {
//   console.log(`The ${this.make}'s current speed: ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make}'s speed: ${this.speed}km/h; charge: ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.printSpeed();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Added to .prototype, not actual 'class'
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }

//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }

//   set fullName(n) {
//     if (n.includes(' ')) {
//       this._fullName = n;
//     } else {
//       alert(`${n} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static methods
//   static hey() {
//     console.log('Hey there from the class 👋🏼');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear); // Must always be called first to create 'this' keyword
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}.`);
//   }

//   calcAge() {
//     console.log(`I'm a young student.`);
//   }
// }

// const gary = new StudentCl('Gary Woods', 1985, 'math');
// gary.introduce();
// gary.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(`Age: ${new Date().getFullYear() - this.birthYear}`);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// const jay = Object.create(StudentProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// jay.init('Jay', 2010, 'history');
// jay.calcAge();

// public fields
// private fields
// public methods
// private methods

class Account {
  // Public fields (on instances, not prototype)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.locale = navigator.language;

    console.log(`Thanks for opening and account, ${owner}.`);
  }

  // Public interface (API)
  deposit(amount) {
    this.#movements.push(amount);
    return this;
  }

  withdraw(amount) {
    this.deposit(-amount);
    return this;
  }

  // don't want this in public interface
  #approveLoan(amount) {
    return true;
  }

  requestLoan(amount) {
    if (this.#approveLoan) {
      this.deposit(amount);
      console.log('Loan Approved');
    }
    return this;
  }
}

const acct1 = new Account('Jackson', 'USD', 1234);
console.log(acct1);

// Bad idea to interact with properties directly.
// acct1.movements.push(250);
// acct1.movements.push(-140);

acct1.deposit(250);
acct1.withdraw(140);

console.log(acct1);

// Chaining
acct1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acct1);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
