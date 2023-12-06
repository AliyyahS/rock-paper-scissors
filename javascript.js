let draw = 0;
let playerScore = 0;
let computerScore = 0;

// Get computer to select rock, paper or scissors

function getComputerSelection() {
    let randomSelection = Math.floor(Math.random() * 100);

    if (randomSelection <= 33) {
        return "rock";
    } else if (randomSelection > 33 && randomSelection < 68) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Play a round of rock, paper, scissors

function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    let roundWinner = "";

    const drawMessage = "It's a draw! You both picked " + playerSelection;
    const winMessage = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    const loseMessage = "Oh no, you lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;

    if (playerSelection == computerSelection) {
        message.textContent = drawMessage;
        roundWinner = "draw";
    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        message.textContent = winMessage;
        roundWinner = "player";
    } else {
        message.textContent = loseMessage;
        roundWinner = "computer";
    }

    score(roundWinner);

    if (playerScore === 5) {
        gameOver("player");
    } else if (computerScore === 5) {
        gameOver("computer");
    } else {
        return;
    }
}

// Track score after each round

function score(winner) {
    if (winner === "draw") {
        draw++;
    } else if (winner === "player") {
        playerScore++;
        playerScoreboard.textContent = playerScore;
    } else {
        computerScore++;
        computerScoreboard.textContent = computerScore;
    }
}

// Display game over message

function gameOver(finalWinner) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if (finalWinner === "player") {
        finalMessage.textContent = "Congratulations! You beat the computer!";
    } else if (finalWinner === "computer") {
        finalMessage.textContent = "Better luck next time! The computer wins this time."
    }
}

// UI

const messageDiv = document.querySelector('.message');
const message = document.createElement('p');
messageDiv.appendChild(message);
message.textContent = "Did you make the right choice?";

const finalMessage = document.createElement ('h2');
messageDiv.appendChild(finalMessage);
finalMessage.textContent = " ";

const playerDiv = document.querySelector('.player');
const playerScoreboard = document.createElement('h3');
playerDiv.appendChild(playerScoreboard);
playerScoreboard.textContent = 0;

const computerDiv = document.querySelector('.computer');
const computerScoreboard = document.createElement('h3');
computerDiv.appendChild(computerScoreboard);
computerScoreboard.textContent = 0;

const btn = document.querySelector('.button-group');
const selection = btn.querySelectorAll('button');

const rockBtn = selection[0];
const paperBtn = selection[1];
const scissorsBtn = selection[2];

rockBtn.addEventListener("click", () => {
    playRound("rock");
});
paperBtn.addEventListener("click", () => {
    playRound("paper");
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});