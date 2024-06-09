const difficultyLevels = {
  easy: {
    range: [1, 50],
    time: 30,
  },
  medium: {
    range: [1, 100],
    time: 60,
  },
  hard: {
    range: [1, 250],
    time: 90,
  },
};

let selectedDifficulty = "easy"; // Default difficulty
let secretNumber;
let attempts = 0;
let timer; // Timer functionality (not implemented here)

function getHighScore(difficulty) {
  const storedScore = localStorage.getItem(`highScore-${difficulty}`);
  return storedScore ? parseInt(storedScore) : Infinity; // Infinity for no score yet
}

function setHighScore(difficulty, attempts) {
  const currentHighScore = getHighScore(difficulty);
  if (attempts < currentHighScore) {
    localStorage.setItem(`highScore-${difficulty}`, attempts);
  }
}

function updateHighScoreDisplay() {
  const difficulty = selectedDifficulty;
  const highScore = getHighScore(difficulty);
  document.getElementById('highScore').textContent = `High Score (${difficulty.toUpperCase()}): ${highScore === Infinity ? 'No Score Yet' : highScore}`;
}

function startGame() {
  selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
  const { range, time } = difficultyLevels[selectedDifficulty];
  secretNumber = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
  attempts = 0;
  // ... (start timer functionality if implemented)
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = guessInput.value;

  if (isNaN(guess) || guess < 1 || guess > difficultyLevels[selectedDifficulty].range[1]) { // Check based on difficulty range
    document.getElementById('message').innerHTML = "Please enter a valid number between 1 and " + difficultyLevels[selectedDifficulty].range[1] + ".";
  } else {
    attempts++;

    // Check for range input (e.g., "100-120")
    if (guess.includes('-')) {
      const parts = guess.split('-');
      const lowerBound = parseInt(parts[0]);
      const upperBound = parseInt(parts[1]);
      if (isNaN(lowerBound) || isNaN(upperBound) || lowerBound > upperBound) {
        document.getElementById('message').innerHTML = "Invalid range format. Use 'number-number' (e.g., 100-120).";
      } else if (secretNumber >= lowerBound && secretNumber <= upperBound) {
        document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
        setHighScore(selectedDifficulty, attempts);
        updateHighScoreDisplay();
        // ... (
