'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const lines = document.querySelector('textarea').value.split('\n');

  for (const [i, line] of lines.entries()) {
    const camelCase = line.trim().toLowerCase();
    const camCap = camelCase.indexOf('_') + 1;
    console.log(
      camelCase
        .replace('_' + camelCase[camCap], camelCase[camCap].toUpperCase())
        .padEnd(20) + '✅'.repeat(i)
    );
  }
});
