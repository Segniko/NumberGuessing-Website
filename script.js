let timer = 60; // Initial timer value (seconds)

function updateTimer() {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').textContent = formattedTime;

  // Decrement timer only if it's positive to avoid negative values
  if (timer > 0) {
    timer--;
  }

  // Handle game end on timer reaching 0 (replace with your logic)
  if (timer === 0) {
    alert("Time's Up! You ran out of time.");
    // Reset timer or display game over message (replace with your logic)
  }
}

function startTimer() {
  const timerInterval = setInterval(updateTimer, 1000); // Update timer every second
  updateTimer(); // Call initially to display formatted time
}


function handleGuess() {
  // ... existing guess validation logic (unchanged)

  if (userGuess === correctNumber) {
    clearInterval(timerInterval);
    document.getElementById('guess-feedback').textContent = "Congratulations! You guessed the number!";

    // Optionally display a message indicating a new game can start
    document.getElementById('guess-feedback').textContent += " A new game can start now!";

    // Reset timer and enable starting a new game (replace with your logic)
    timer = 60;
  } else if (userGuess > correctNumber) {
    // ... existing feedback for high guess (unchanged)
  } else {
    // ... existing feedback for low guess (unchanged)
  }

  document.getElementById('user-guess').value = ""; // Clear user input field
}

// Call startTimer() when the user starts a new game (replace with your logic)
// startTimer(); // Uncomment to start timer on page load (optional)

const submitGuessButton = document.getElementById('submit-guess');
submitGuessButton.addEventListener('click', handleGuess);
