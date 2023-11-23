// Get computer to randomly select rock, paper or scissors

const randomChoice = Math.floor(Math.random() * 100);

function getComputerChoice(randomChoice) {
    if (randomChoice <= 33) {
        return "rock";
    } else if (randomChoice > 33 && randomChoice < 68) {
        return "paper";
    } else {
        return "scissors";
    }
}

const computerSelection = getComputerChoice(randomChoice);

// console.log(computerSelection);

// Player inputs rock, paper or scissors

const playerInput = "rock";

// Makes player's input case insensitive

const playerSelection = playerInput.toLowerCase();

// Play a single round of rock, paper, scissors

function playRound(playerSelection, computerSelection) {
    const draw = "It's a draw! You both picked " + playerSelection;
    const win = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    const lose = "Oh no, you lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;

    if (playerSelection == computerSelection) {
        return draw;
    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        return win;
    } else {
        return lose;
    }
}

// Prints the results of a round

console.log(playRound(playerSelection, computerSelection));