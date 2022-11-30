'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Guess: ${guess} is of type ${typeof guess}`);

  // Check if player has lost
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '🚫 No Number!';

      // Player wins
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // Guess is too high
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '☝🏼 Too High';
      score--;
      document.querySelector('.score').textContent = score;

      // Guess is too low
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '👇🏼 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // Player loses
  } else {
    document.querySelector('.message').textContent = '💥 You lost!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start Guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
