'use strict';

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const choice = Math.trunc(
      Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}\n(Write option number)`
        )
      )
    );

    !isNaN(choice) &&
      choice >= 0 &&
      choice <= this.options.length - 1 &&
      this.answers[choice]++;

    this.displayResults('string');
  },

  displayResults(type) {
    switch (type) {
      case 'string':
        console.log(`Poll results are ${this.answers.join(', ')}`);
        break;
      case 'array':
        console.log(this.answers);
        break;
      default:
        break;
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const displayResults = poll.displayResults;

const testData = {
  answers: [1, 5, 3, 9, 6, 1],
};

displayResults.call({ answers: [5, 2, 3] }, 'string');
displayResults.call({ answers: [5, 2, 3] }, 'array');

displayResults.call(testData, 'string');
displayResults.call(testData, 'array');
