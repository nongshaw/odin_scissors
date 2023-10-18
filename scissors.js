
const options = ["Scissors", "Paper", "Rock"];
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById("player-score");
playerScoreDisplay.textContent = `${playerScore}`;
const computerScoreDisplay = document.getElementById("computer-score");
computerScoreDisplay.textContent = `${computerScore}`;

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};
 
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound (playerSelection, computerSelection) {
     const result = checkWinner(playerSelection, computerSelection);
     if(result == "Tie"){
        return "It's a Tie!"
     } else if(result == "Player"){
          playerScore ++
          playerScoreDisplay.textContent = `${playerScore}`
          return `You Win! ${playerSelection} beats ${computerSelection}.`
     } else {
        computerScore ++
        computerScoreDisplay.textContent = `${computerScore}`
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
     }
}

const container = document.getElementById('container');
const resetButtonContainer = document.getElementById('reset-button-container');
const resetButton = document.createElement('button');
resetButton.textContent = "Play Again";
resetButton.addEventListener("click",() => {
    location.reload();
})

function checkIfVictorious () {
    if (playerScore === 5) {
        result.textContent = "Congratulations, you are victorious!"
        container.remove()
        resetButtonContainer.appendChild(resetButton)
    } else if (computerScore === 5) {
        result.textContent = "Game over, you lose!"
        container.remove()
        resetButtonContainer.appendChild(resetButton)
    }
}

const buttonScissors = document.querySelector('.scissors');
const buttonPaper = document.querySelector('.paper');
const buttonRock = document.querySelector('.rock');
const result = document.querySelector('.result');

buttonScissors.addEventListener('click', () => {
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    result.textContent = (playRound(playerSelection, computerSelection));
    checkIfVictorious();
})

buttonPaper.addEventListener('click', () => {
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    result.textContent = (playRound(playerSelection, computerSelection));
    checkIfVictorious();
})

buttonRock.addEventListener('click', () => {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    result.textContent = (playRound(playerSelection, computerSelection));
    checkIfVictorious();
})


