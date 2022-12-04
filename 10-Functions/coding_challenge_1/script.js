'use strict';

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
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
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type) {
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
};

const displayResults = poll.displayResults;

const testData1 = {
  answers: [5, 2, 3],
};
const testData2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

displayResults.call(testData1, 'string');
displayResults.call(testData1, 'array');

displayResults.call(testData2, 'string');
displayResults.call(testData2, 'array');
