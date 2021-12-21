'use strict';
/*
// prt to console - select el class - than text content
console.log(document.querySelector('.message').textContent);

// Select the class and replace text content
document.querySelector('.message').textContent = '🎈 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// can't be textContent as this class is input element - .value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Random number between 0 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

// select el .guess and add function click and print to console
document.querySelector('.check').addEventListener('click', function () {
  // save value into variable guess
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if no input number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '👇 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎃 You lost the game!';
    }

  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '👆 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});