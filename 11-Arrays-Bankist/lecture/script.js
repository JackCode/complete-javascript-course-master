/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// currencies.forEach(function (v, k, m) {
//   console.log(`${k}: ${v}`);
// });

// const currenciesSet = new Set(['USD', 'EUR', 'EUR', 'GBP']);
// console.log(currenciesSet);
// currenciesSet.forEach(function (v, _, s) {
//   console.log(`${v}`); // k and v are the same for sets
// });

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1)); // final element of array
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1); //remove final element from array
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
*/

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log(arr.at(-2));

// console.log('Jackson'.at(0));
// console.log('Jackson'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementsUsd = movements.map((movement) => movement * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementDescriptions = movements.map(
//   (movement, i, arr) =>
//     `Movement ${i + 1}: You ${
//       movement > 0 ? "deposited" : "withdrew"
//     } ${Math.abs(movement)}`
// );

// console.log(movementDescriptions);

// const deposits = movements.filter((mov) => mov > 0);
// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(deposits);
// console.log(withdrawals);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// // get max value with reduce
// const maximum = movements.reduce(
//   (max, curr) => (curr > max ? curr : max),
//   -Infinity
// );
// console.log(maximum);

// const eurToUsd = 1.1;
// const totalDepUsd = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDepUsd);

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const deposit = (move) => move > 0;

// console.log(movements.some(deposit));
// console.log(movements.some((mov) => mov > 5000));

// console.log(movements.every(deposit));
// console.log([500, 300, 200].every(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[[1], 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));
// console.log(arrDeep.flat(3));

// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements);
// console.log(movements.sort()); // Based on string values

// console.log(movements.sort((a, b) => a - b));

const x = new Array(4);
console.log(x);
// x.fill(5);
// x.fill(0, 3, 5);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// const nRolls = 10000000;
// const randomRolls = Array.from(
//   { length: nRolls },
//   () => Math.trunc(Math.random() * 6) + 1
// );
// console.log(randomRolls);

// const avgRoll = randomRolls.reduce((acc, cur) => acc + cur) / nRolls;
// console.log(avgRoll);
