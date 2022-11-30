'use strict';

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);


// }

const friends = ['Chad', 'Jackson', 'Patrick'];
console.log(friends);

// const years = new Array(1992, 1907, 1885);
// console.log(years);

// console.log(friends[0]);
// console.log(years[2]);

// console.log(friends.length);
// console.log(years[years.length-1]);

// friends[2] = 'Shelby';
// console.log(friends);

// const firstName = 'Jackson';
// const jackson = [firstName, 'Weber', 2022 - 1991, friends];
// console.log(jackson);


const calcAge = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}

const years = [1990, 1991, 1996];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);