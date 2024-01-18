"use strict";

let score = 20;
let highscore = 0;
let displayScore = document.querySelector(".score");
let secretNumber = Math.floor(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // No Guess input or Invalid input
  if (guess <= 0 || guess > 20) {
    displayMessage("⛔ Enter a number between 1 and 20!");
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 Guess is Higher!" : "📉 Guess is Lower!"
      );

      score--;
      displayScore.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      displayScore.textContent = 0;
    }
  }
});

// Adding functionality to the again aka reset button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);

  displayMessage("Start guessing...");
  displayScore.textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
