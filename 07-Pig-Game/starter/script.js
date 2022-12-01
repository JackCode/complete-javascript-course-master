'use strict';

const winningScore = 20;

// Selecting elements from DOM
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Set default values to DOM elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
btnNew.classList.add('hidden');

// Create score/player tracking variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(`Active player changed to player ${activePlayer + 1}`);
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`Rolled: ${dice}`);

    // Generate dice image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    console.log(
      `Current score of ${currentScore} held by player ${activePlayer + 1}`
    );
    scores[activePlayer] += currentScore;
    console.log(`Player 1: ${scores[0]}; Player 2: ${scores[1]}`);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= winningScore) {
      playing = false;
      console.log(`Player ${activePlayer + 1} wins!`);
      const winner = document.querySelector(`.player--${activePlayer}`);
      winner.classList.add('player--winner');
      winner.classList.remove('player--active');

      diceEl.classList.add('hidden');
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
      btnNew.classList.remove('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  if (!playing) {
  }
});
