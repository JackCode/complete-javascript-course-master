'use strict';

const fun = function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
};

const firstName = 'Jackson';
calcAge(1991);
fun.printAge();
