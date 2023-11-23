// Function to get computer to randomly select rock, paper or scissors

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 100);

    if (randomChoice <= 33) {
        return "rock";
    } else if (randomChoice > 33 && randomChoice < 68) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get player to input rock, paper or scissors and make sure input is case insensitive

function getPlayerChoice () {
    let input;

    do {
        input = prompt("Let's play! Choose rock, paper or scissors.").toLowerCase();
    } while (input != "rock" && input != "paper" && input != "scissors");

    return input;
}

// Function to play a single round of rock, paper, scissors

function playRound() {
    // Calls function to get player's selection

    let playerSelection = getPlayerChoice();

    // Calls function to get computer's selection

    let computerSelection = getComputerChoice();

    // Outcome message after a single round of rock, paper, scissors

    const drawMessage = "It's a draw! You both picked " + playerSelection;
    const winMessage = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    const loseMessage = "Oh no, you lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;

    // Compares player's selection to computer's selection, prints the outcome message and returns the winner of the round

    if (playerSelection == computerSelection) {
        console.log(drawMessage);
        return "draw";
    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        console.log(winMessage);
        return "player";
    } else {
        console.log(loseMessage);
        return "computer";
    }
}

// Function to play 5 rounds of rock, paper, scissors and tracks the score

function game() {

    // Variables to track score

    let draw = 0;
    let playerWin = 0;
    let computerWin = 0;

    // Calls function to play five rounds of game
    
    for (let i = 0; i < 5; i++) {

        let roundWinner = playRound();

        if (roundWinner == "draw") {
            draw++;
        } else if (roundWinner == "player") {
            playerWin++;
        } else {
            computerWin++;
        }
    }

    // Compares the final results of 5 games

    if (playerWin == computerWin){
        return "The final result: It's a draw! You both scored " + playerWin;
    } else if (playerWin > computerWin) {
        return "The final result: You win! You scored " + playerWin + " and the computer scored " + computerWin;
    } else {
        return "The final result: You lost! You scored " + playerWin + " and the computer scored " + computerWin;
    }
}

console.log(game());