// User information (replace with actual login logic)
let username = "Player"; // Placeholder username
let bonusPoints = 0;

// Game variables
let secretNumber;
let timer = 60; // Initial timer value (seconds)
let timerInterval; // Timer interval reference
let additionalTime = 0; // Tracks additional time awarded for correct guesses

// Function to update bonus points on the screen
function updateBonusPoints() {
  document.getElementById("bonus-points").textContent = bonusPoints;
}

// Function to display username on the screen
function updateUsername() {
  document.getElementById("username").textContent = username;
}

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
  timer = 60; // Reset timer
  additionalTime = 0; // Reset additional time
  document.getElementById("timer").textContent = timer;
  document.getElementById("message").textContent = "";
  document.getElementById("game-image").src = "images/ocean.jpg"; // Set default image

  // Start timer countdown
  clearInterval(timerInterval); // Clear any existing interval
  timerInterval = setInterval(() => {
    timer--;
    document.getElementById("timer").textContent = timer;
    if (timer === 0) {
      clearInterval(timerInterval);
      document.getElementById("message").textContent = "Time's Up!";
      bonusPoints = 0; // Reset bonus points on timeout
      updateBonusPoints();
      document.getElementById("game-image").src = "images/broken-hourglass.jpg"; // Timer out image
    }
  }, 1000); // Decrement timer every second (1000 milliseconds)
}

function checkGuess() {
  const guessInput = document.getElementById("guess-input");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("message").textContent = "Please enter a valid number between 1 and 100.";
  } else {
    if (guess === secretNumber) {
      clearInterval(timerInterval); // Stop timer on correct guess
      bonusPoints += timer + additionalTime; // Award bonus points based on remaining time and additional time
      updateBonusPoints();
      document.getElementById("message").textContent = "Congratulations! You guessed the number.";
      document.getElementById("game-image").src = "images/fireworks.jpg"; // Correct guess image

      // Award additional time for subsequent correct guesses (optional)
      additionalTime += 5; // Increase additional time for next correct guess
      playAudio("correct"); // Play correct guess sound effect (optional)
    } else if (guess < secretNumber) {
      document.getElementById("message").textContent = "Try again! Guess higher.";
    } else {
      document.getElementById("message").textContent = "Try again! Guess lower.";
    }
  }

  guessInput.value = ""; // Clear guess input field after submission
  playAudio("guess"); // Play guess sound effect (optional)
}

// Optional sound effect functions (add these to the bottom of your script.js)
function playAudio(sound) {
  const audio = document.getElementById(sound + "Audio");
  if (audio) {
    audio.play();
  }
}
