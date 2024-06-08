// Simulate a random number (replace with actual generation later)
const randomNum = 50; // Replace with actual random number generation

function handleGuess() {
  const userGuess = parseInt(document.getElementById('user-guess').value);
  if (isNaN(userGuess)) {
    alert("Invalid guess. Please enter a number.");
    return;
  }

  const guessFeedback = document.getElementById('guess-feedback');

  if (userGuess === randomNum) {
    guessFeedback.textContent = "Congratulations! You guessed the number!";
  } else if (userGuess > randomNum) {
    guessFeedback.textContent = "Your guess is too high. Try again!";
  } else {
    guessFeedback.textContent = "Your guess is too low. Try again!";
  }

  document.getElementById('user-guess').value = ""; // Clear user input field
}

const submitGuessButton = document.getElementById('submit-guess');
submitGuessButton.addEventListener('click', handleGuess);
