'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// ///////////////////////////////////////

// // const getCountryData = function (countryName) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
// //   request.send();
// //   // request.responseText(); // doesn't work because async

// //   request.addEventListener('load', function (e) {
// //     // console.log(this.responseText);
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `
// //     <article class="country">
// //       <img class="country__img" src="${data.flag}" />
// //       <div class="country__data">
// //         <h3 class="country__name">${data.name}</h3>
// //         <h4 class="country__region">${data.region}</h4>
// //         <p class="country__row"><span>👫</span>${(
// //           +data.population / 1000000
// //         ).toFixed(1)}M</p>
// //         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //       </div>
// //     </article>
// //   `;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData('portugal');
// // getCountryData('usa');
// // getCountryData('germany');

// const renderCountry = function (data, className = '') {
//   console.log(data.name);
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}M</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// const renderError = function (message) {
//   countriesContainer.insertAdjacentText('beforeend', message);
//   // countriesContainer.style.opacity = 1;
// };

// // // const getCountryAndNeighborData = function (countryName) {
// // //   // AJAX call country 1
// // //   const request = new XMLHttpRequest();
// // //   request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
// // //   request.send();
// // //   // request.responseText(); // doesn't work because async

// // //   request.addEventListener('load', function (e) {
// // //     // console.log(this.responseText);
// // //     const [data] = JSON.parse(this.responseText);
// // //     console.log(data);

// // //     renderCountry(data);

// // //     const neighbor = data.borders?.[0];

// // //     if (!neighbor) return;

// // //     //Ajax Call 2
// // //     const request2 = new XMLHttpRequest();
// // //     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
// // //     request2.send();
// // //     // request.responseText(); // doesn't work because async

// // //     request2.addEventListener('load', function (e) {
// // //       // console.log(this.responseText);
// // //       const data = JSON.parse(this.responseText);

// // //       renderCountry(data, 'neighbour');
// // //     });
// // //   });
// // // };

// // // getCountryAndNeighborData('usa');

// // // const request = new XMLHttpRequest();
// // //   request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
// // //   request.send();

// // // const request = fetch('https://restcountries.com/v2/name/usa');
// // // console.log(request);

// const getJson = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg}. (${response.status})`);
//     }
//     return response.json();
//   });
// };

// const getCountryData = function (code) {
//   getJson(`https://restcountries.com/v2/alpha/${code}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0]?.borders[0];
//       if (!neighbour) return;

//       return getJson(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong: ${err.message}`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// // btn.addEventListener('click', function () {
// //   getCountryData('mexico');
// // });

// // getCountryData('jfdksa');

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */
// let lat, lng;
// navigator.geolocation.getCurrentPosition(pos => {
//   lat = pos.coords.latitude;
//   lng = pos.coords.longitude;

//   whereAmI(lat, lng);
// });

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Unable to fetch location ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data.prov);
//       getCountryData(data.prov);
//       return console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .catch(err => console.error(err));
// };

// whereAmI(51.50354, -0.12768);

// console.log('Test Start');
// setTimeout(() => console.log('0 second timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test End');

// const lotteryPromise = new Promise(function (fulfilled, reject) {
//   console.log('Conducting lottery 🔮');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       fulfilled('WINNER 💰');
//     } else {
//       reject(new Error('LOSER 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(2)
//   .then(() => {
//     console.log('2 seconds done');
//     return wait(1);
//   })
//   .then(() => console.log('1 second done'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('noooo').catch(err => console.error(new Error(err)));

// console.log('Getting location');

// const getPosition = () =>
//   new Promise((resolve, reject) =>
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   );

// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(() => {
//       console.log(pos.coords);
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Unable to fetch location ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data.prov);
//       // getCountryData(data.prov);
//       return console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .catch(err => console.error(err));
// };

// const getPosition = () =>
//   new Promise((resolve, reject) =>
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   );

// const whereAmI = async function () {
//   try {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;
//     const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!geoRes.ok) throw new Error('Fetch for geo data failed');
//     const geoData = await geoRes.json();
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${geoData.country}`
//     );
//     if (!res.ok) throw new Error('Fetch for country data failed');
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${geoData.city}, ${geoData.country}`;
//   } catch (err) {
//     console.log(err.message);
//     renderError(`⛔️ ${err.message}`);
//     throw err;
//   }
// };

// whereAmI();
// console.log('FIRST');

// try {
//   let y = 1;
//   const x = 3;
//   x = y;
// } catch (err) {
//   alert(err.message);
// }

// console.log('1: Will get location');
// // const city = whereAmI().then();
// // console.log(city);
// whereAmI()
//   .then(city => console.log(`Fulfilled`))
//   .catch(err => console.log(`Error`))
//   .finally(console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     err => console.log(`Error`);
//   }
//   console.log('3.');
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     // NOTE: rejects/short-circuits when one promise fails
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     // console.log([data1.capital, data2.capital, data3.capital]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// };
// get3Countries('portugal', 'canada', 'usa');

// Promise.race()
// (async function () {
//   const response = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//     getJSON(`https://restcountries.com/v2/name/usa`),
//   ]);
//   console.log(response[0]);
// })();

// const timeout = function (seconds) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('request took too long'));
//     }, seconds * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/portugal`),
//   timeout(0.0005),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// Returns array of all settled promises (does not short circuit)
// Promise.allSettled([
//   Promise.resolve('success1'),
//   Promise.resolve('success2'),
//   Promise.reject('rejected1'),
//   Promise.resolve('success3'),
// ]).then(res => console.log(res));

// // ES2021 - same as promise.race but only returns first fulfilled whereas race returns rejects
// Promise.any();
