// Get computer to randomly select rock, paper or scissors

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

// Get player to input rock, paper or scissors

function getPlayerChoice () {
    let input;

    do {
        input = prompt("Let's play! Choose rock, paper or scissors.").toLowerCase();
    } while (input != "rock" && input != "paper" && input != "scissors");

    return input;
}

// Play a single round of rock, paper, scissors

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    const drawMessage = "It's a draw! You both picked " + playerSelection;
    const winMessage = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    const loseMessage = "Oh no, you lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;

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

// Play 5 rounds of rock, paper, scissors and tracks the score

function game() {
    let draw = 0;
    let playerWin = 0;
    let computerWin = 0;
    
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

    if (playerWin == computerWin){
        return "The final result: It's a draw! You both scored " + playerWin;
    } else if (playerWin > computerWin) {
        return "The final result: You win! You scored " + playerWin + " and the computer scored " + computerWin;
    } else {
        return "The final result: You lost! You scored " + playerWin + " and the computer scored " + computerWin;
    }
}

console.log(game());