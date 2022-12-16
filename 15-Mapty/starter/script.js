'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Getting location of user
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const coords = [position.coords.latitude, position.coords.longitude];

      //                  v id of html element
      const map = L.map('map').setView(coords, 13);
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      map.on('click', function (mapEvent) {
        const coords = [mapEvent.latlng.lat, mapEvent.latlng.lng];

        L.marker(coords)
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout!')
          .openPopup();
      });
    },
    // If location cannot be retrieved
    function () {
      alert('Could not get your position.');
    }
  );
}
