const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let timer = 0;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    timer++;
    document.getElementById('timer').textContent = `Timer: ${timer.toString().padStart(2, '0')}`;
  }, 1000);
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById('message').innerHTML = "Please enter a valid number between 1 and 100.";
  } else {
    attempts++;
    if (guess === secretNumber) {
      clearInterval(intervalId);
      document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts. Your time was ${timer} seconds.`;
    } else if (guess < secretNumber) {
      document.getElementById('message').innerHTML = "Try again! Guess higher.";
    } else {
      document.getElementById('message').innerHTML = "Try again! Guess lower.";
    }

    guessInput.value = '';
  }
}

startTimer(); // Start timer on page load
