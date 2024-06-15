const MIN_NUMBER = 1;  // Minimum allowed number 
const MAX_NUMBER = 100; // Maximum allowed number 

function generateRandomNumber() {
  // Generates a random number between MIN_NUMBER and MAX_NUMBER 
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
}

let secretNumber = generateRandomNumber();
let attempts = 0;
let timer = 0;
let intervalId;

function startTimer() {
  // Starts a timer that updates the on-screen timer every second
  intervalId = setInterval(() => {
    timer++;
    document.getElementById('timer').textContent = `Timer: ${timer.toString().padStart(2, '0')}`;
  }, 1000);
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
    document.getElementById('message').innerHTML = `Please enter a valid number between ${MIN_NUMBER} and ${MAX_NUMBER}.`;
  } else {
    attempts++;
    if (guess === secretNumber) {
      clearInterval(intervalId);
      document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts. Your time was ${timer} seconds.`;
      // Reset everything for a new game, including generating a new secret number
      secretNumber = generateRandomNumber();
      attempts = 0;
      timer = 0;
      clearInterval(intervalId);
    } else if (guess < secretNumber) {
      document.getElementById('message').innerHTML = "Try again! Guess higher.";
    } else {
      document.getElementById('message').innerHTML = "Try again! Guess lower.";
    }

    guessInput.value = '';
  }
}

startTimer(); // Start timer on page load
