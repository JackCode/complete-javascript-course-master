'use strict';

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);


// }

// const friends = ['Chad', 'Jackson', 'Patrick'];
// console.log(friends);

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


// const calcAge = function (birthYear) {
//     return new Date().getFullYear() - birthYear;
// }

// const years = [1990, 1991, 1996];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
// console.log(ages);

// const friends = ['Chad', 'Jackson', 'Patrick'];
// console.log(friends);

// // Add elements
// let newLength = friends.push('Willow');
// console.log(friends);
// console.log(newLength);

// newLength = friends.unshift('Brent');
// console.log(friends);
// console.log(newLength);

// // Remove elements
// const lastEntry = friends.pop();
// console.log(friends);
// console.log(lastEntry);

// const firstEntry = friends.shift();
// console.log(friends);
// console.log(firstEntry);

// // Find which index element is located
// console.log(friends.indexOf('Jackson'));

// // Does array include element? (strict equality)
// console.log(friends.includes('Jackson'));
// console.log(friends.includes('Willow'));
// friends.push(23);
// console.log(friends.includes('23'));

// INTRODUCTION TO OBJECTS
// const jackson = {
//     firstName:  'Jackson',
//     lastName:   'Weber',
//     age:        2022 - 1991,
//     job:        'Manager',
//     friends:    ['Patrick', 'Amelia', 'Emily'],
// };

// Dot vs. Bracket notation
// console.log(jackson.lastName);
// console.log(jackson['friends']);

// const nameKey = 'Name';
// console.log(jackson['first' + nameKey]);
// console.log(jackson['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jackson? Choose betwwen firstName, lastName, age, job, friends');

// if (jackson[interestedIn]) {
//     console.log(`${interestedIn}: ${jackson[interestedIn]}`)
// } else {
//     console.log('Invalid request. Choose betwwen firstName, lastName, age, job, friends.')
// }

// jackson.location = 'Kentucky';
// jackson['twitter'] = '@helaaspk';
// console.log(jackson);

const jackson = {
    firstName:      'Jackson',
    lastName:       'Weber',
    birthYear:      1991,
    job:            'Manager',
    friends:        ['Patrick', 'Amelia', 'Emily'],
    driversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    }
};

// console.log(jackson.calcAge(1991));
// console.log(jackson['calcAge'](1980));

console.log(jackson.calcAge());
console.log(jackson.age);
console.log(jackson.age);
console.log(jackson.age);
console.log(jackson.age);