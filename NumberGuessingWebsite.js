// Number Guessing Website

/*
This is a Number Guessing website made by Segni Assaye[ALX Portfolio Project]
I have used script.js, HTML text file and a CSS file while doing this project.
*/

let secretNumber;
let difficulty = 'easy';
let attempts = 0;
let bonusPoints = 0;
let timer = 60;
let timerInterval;

function setDifficulty(difficultyLevel) {
  difficulty = difficultyLevel;
  resetGame();
}

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

      if (timer > 0) {
        bonusPoints += 5;
      } else {
        bonusPoints = 0;
      }

      setTimeout(() => {
        document.getElementById('firework').style.display = "none";
      }, 3000);
      resetGame();
    } else if (guess < secretNumber) {
      document.getElementById('message').innerHTML = "Try again! Guess higher.";
    } else {
      document.getElementById('message').innerHTML = "Try again! Guess lower.";
    }

    guessInput.value = '';
  }

  function playSound(soundName) {
    const sound = document.getElementById(soundName + 'Sound');
    sound.play();
  }
}
