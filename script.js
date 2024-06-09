const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById('message').innerHTML = "Please enter a valid number between 1 and 100.";
  } else {
    attempts++;
    if (guess === secretNumber) {
      document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < secretNumber) {
      document.getElementById('message').innerHTML = "Try again! Guess higher.";
    } else {
      document.getElementById('message').innerHTML = "Try again! Guess lower.";
    }

    guessInput.value = '';
  }
}