
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let result = (Math.floor((Math.random() * 3) + 1));

    if (result === 1) {
        return 'rock';
    } else if (result === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function getHumanChoice() {
    let inputFromUser = prompt('Enter your choice: Rock, Paper or Scissors?').toLowerCase();

    if (inputFromUser === 'rock') {
        return 'rock';
    } else if (inputFromUser === 'paper') {
        return 'paper';
    } else {
        return 'scissors';
    }

}

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        return 'draw';
    }
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        return 'You lose! Paper beats Rock';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        return 'You win! Rock beats Scissors';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        return 'You win! Paper beats Rock';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        return 'You lose! Scissors beats Paper';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        return 'You win! Scissors beats Paper';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        computerChoice += 1;
        return 'You lose! Rock beats Scissors';
    } else {
        return 'Enter a valid choice';
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));

