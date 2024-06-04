// Timer on the top left corner
let countdown = document.getElementById('countdown');

let bonusPoints = 0;

// Bonus points update and reset
function updateBonusPoints() {
  bonusPoints += 10;
}

function resetBonusPoints() {
  bonusPoints = 0;
}

// Difficulty Levels
document.getElementById('easyBtn').addEventListener('click', function() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
});

document.getElementById('mediumBtn').addEventListener('click', function() {
  secretNumber = Math.floor(Math.random() * 50) + 1;
});

document.getElementById('hardBtn').addEventListener('click', function() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
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
