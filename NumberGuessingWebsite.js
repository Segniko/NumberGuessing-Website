// Number Guessing Website

/*
This is a Number Guessing website made by Segni Assaye[ALX Portfolio Project]
I have used script.js, HTML text file and a CSS file while doing this project.
*/

const secretNumber = Math.floor(Math.random() * 250) + 1;
let attempts = 0;
let bonusPoints = 0;
let timer = 60;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 250) {
    document.getElementById('message').innerHTML = "Please enter a valid number between 1 and 250.";
  } else {
    attempts++;
    if (guess === secretNumber) {   
      document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts. Bonus points: ${bonusPoints}`;
      document.body.style.backgroundImage = "url('fireworks.jpg')";
    } else if (guess < secretNumber) {
      document.getElementById('message').innerHTML = "Try again! Guess higher.";
      bonusPoints += 5; // Increase bonus points for incorrect guesses
    } else {
      document.getElementById('message').innerHTML = "Try again! Guess lower.";
      bonusPoints += 5; // Increase bonus points for incorrect guesses
    }

    guessInput.value = '';
  }
}

// Timer
const countdownEl = document.getElementById('countdown');
setInterval(() => {
  timer--;
  countdownEl.textContent = timer;
  if (timer === 0) {
    document.getElementById('message').innerHTML = `Time's up! The number was ${secretNumber}.`;
    clearInterval();
  }
}, 1000);
