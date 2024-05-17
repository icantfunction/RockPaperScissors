function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 2);
    return options[randomIndex]
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
        if (player === "Rock" && computer === "Scissors") {
            return true;
        } 
        else if (player === "Scissors" && computer === "Paper") {
            return true;
        } 
        else if (player === "Paper" && computer === "Rock") {
            return true;
        }
        else {
            return false;
        } 
    }

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`   
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");
const optionsContainer = document.getElementById(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = getRoundResults(userOption); 
    if (playerScore === 4) {
        winnerMsg.innerText = "Player wins the game!";
        optionsContainer.style.display = "none";
        resetGameBtn.style.display = "hidden";
    } else if (computerScore === 4) {
        winnerMsg.innerText = "Computer wins the game!";
        optionsContainer.style.display = "none";
        resetGameBtn.style.display = "hidden";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "hide";
    optionsContainer.style.display = "flex";
    winnerMsg.innerText = "";
    roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
