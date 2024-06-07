// Number Guessing Website

/*
This is a Number Guessing website made by Segni Assaye[ALX Portfolio Project]
I have used script.js, HTML text file and a CSS file while doing this project.
*/


//Random number between 1 & 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let bonusPoints = 0;
let timeLeft = 60;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    
    if (userGuess === secretNumber) {
        bonusPoints += 5;
        document.getElementById("bonus").textContent = `Bonus Points: ${bonusPoints}`;
        // Display firework image
    } else {
        // Display fun image
    }
}

function startTimer() {
    let timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        
        if (timeLeft === 0) {
            clearInterval(timer);
            bonusPoints = 0;
            document.getElementById("bonus").textContent = `Bonus Points: ${bonusPoints}`;
            // Display sad image
        }
    }, 1000);
}

startTimer();
