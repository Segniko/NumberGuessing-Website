// Number Guessing Website

/*
This is a Number Guessing website made by Segni Assaye[ALX Portfolio Project]
I have used script.js, HTML text file and a CSS file while doing this project.
*/

// Timer on the top left corner
let countdown = document.getElementById('countdown');

// Bonus points update and reset
let bonusPoints = 0;
const bonusPointsDisplay = document.getElementById('bonus-points');

function incrementBonusPoints() {
  bonusPoints++;
  bonusPointsDisplay.textContent = 'Bonus Points: ' + bonusPoints;
}

// Add an event listener to each button to increment bonus points when clicked
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    incrementBonusPoints();
  });
});

// Difficulty Levels
let secretNumber;

document.getElementById('easyBtn').addEventListener('click', function() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  resetBonusPoints();
});

document.getElementById('mediumBtn').addEventListener('click', function() {
  secretNumber = Math.floor(Math.random() * 50) + 1;
  resetBonusPoints();
});

document.getElementById('hardBtn').addEventListener('click', function() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  resetBonusPoints();
});

// Sound Effects
function playCorrectSound() {
  let audio = new Audio('correct.mp3');
  audio.play();
}

function playIncorrectSound() {
  let audio = new Audio('incorrect.mp3');
  audio.play();
}

function playButtonClickSound() {
  let audio = new Audio('buttonClick.mp3');
  audio.play();
}

