'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

console.log('Test Start');
setTimeout(() => console.log('0 second timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('Test End');
