// Number Guessing Website

/*
This is a Number Guessing website made by Segni Assaye[ALX Portfolio Project]
I have used script.js, HTML text file and a CSS file while doing this project.
*/

const secretNumber = Math.floor(Math.random() * 250) + 1;
let attempts = 0;
let bonusPoints = 0;
let timer = 60;
let timerInterval;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 250) {
    document.getElementById('message').innerHTML = "Please enter a valid number between 1 and 250.";
  } else {
    attempts++;
    if (guess === secretNumber) {   
      document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts. Bonus points: ${bonusPoints}`;
      document.getElementById('bonusPoints').textContent = `Bonus Points: ${bonusPoints}`;
      document.getElementById('firework').style.display = "block";
      setTimeout(() => {
        document.getElementById('firework').style.display = "none";
      }, 3000);
      resetGame();
    } else if (guess < secretNumber) {
      document.getElementById('message').innerHTML = "Try again! Guess higher.";
      bonusPoints += 5;
    } else {
      document.getElementById('message').innerHTML = "Try again! Guess lower.";
      bonusPoints += 5;
    }

    guessInput.value = '';
  }
}

// Timer
function startTimer() {
  timer = 60;
  timerInterval = setInterval(() => {
    timer--;
    document.getElementById('countdown').textContent = timer;
    if (timer === 0) {
      document.getElementById('message').innerHTML = `Time's up! The number was ${secretNumber}.`;
      clearInterval(timerInterval);
      document.getElementById('alarm').style.display = "block";
      setTimeout(() => {
        document.getElementById('alarm').style.display = "none";
        resetGame();
      }, 3000);
    }
  }, 1000);
}

function resetGame() {
  attempts = 0;
  bonusPoints = 0;
  document.getElementById('bonusPoints').textContent = `Bonus Points: ${bonusPoints}`;
  clearInterval(timerInterval);
  startTimer();
}

startTimer();
