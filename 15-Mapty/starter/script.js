'use strict';

class Workout {
  date = new Date();
  id = Math.trunc(Math.random() * 9999999) + 1;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, long]
    this.distance = distance; // in km
    this.duration = duration; // in minutes
  }

  setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  #pace;
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.#calcPace();
    this.setDescription();
  }

  #calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.#pace;
  }

  getType() {
    return this.type;
  }
}

class Cycling extends Workout {
  #speed;
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.#calcSpeed();
    this.setDescription();
  }

  #calcSpeed() {
    // min/km
    this.speed = this.distance / this.duration;
    return this.#speed;
  }

  getType() {
    return this.type;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 31, 154);
console.log(run1);
console.log(cycling1);

///////////////////////////////////////
// APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this.#getPosition();

    form.addEventListener('submit', this.#newWorkout.bind(this));

    inputType.addEventListener('change', this.#toggleElevationField);
  }

  #getPosition() {
    // Getting location of user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        // If location cannot be retrieved
        function () {
          alert('Could not get your position.');
        }
      );
    }
  }

  #loadMap(position) {
    const coords = [position.coords.latitude, position.coords.longitude];

    this.#map = L.map('map').setView(coords, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot//{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);

    this.#map.on('click', this.#showForm.bind(this));
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  #newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = Number(inputDistance.value);
    const duration = Number(inputDuration.value);
    const coords = [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng];
    let workout;

    // Validate data
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('All inputs must be positive numbers.');
      }

      workout = new Running(coords, distance, duration, cadence);
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('All inputs must be positive numbers.');
      }
      workout = new Cycling(coords, distance, duration, elevation);
    }

    this.#workouts.push(workout);
    console.log(workout);

    // Render marker
    this.#renderWorkoutMarker(workout);

    // render workout on list
    this.#renderWorkoutListItem(workout);

    // hide form &
    // Clear input fields
    this.#hideForm();
  }

  #renderWorkoutMarker(workout) {
    console.log(workout.getType());
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.getType()}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  #renderWorkoutListItem(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.date}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;
    }

    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
    }

    // Inserts HTML after form in list
    form.insertAdjacentHTML('afterend', html);
  }
}

const app = new App();
