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
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
})