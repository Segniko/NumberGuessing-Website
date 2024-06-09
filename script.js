let randomNumber = Math.floor(Math.random() * 100) + 1; // Simulated random number
let timeLeft = 60; // Initial time in seconds
let timerInterval;

function submitGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(guess)) {
        document.getElementById("feedback").textContent = "Please enter a valid number.";
    } else {
        if (guess === randomNumber) {
            document.getElementById("feedback").textContent = "Congratulations! You guessed the correct number.";
        } else if (guess < randomNumber) {
            document.getElementById("feedback").textContent = "Too low. Try again.";
        } else {
            document.getElementById("feedback").textContent = "Too high. Try again.";
        }
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

timerInterval = setInterval(function() {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        document.getElementById("feedback").textContent = "Time's up! The correct number was " + randomNumber;
    }
}, 1000);