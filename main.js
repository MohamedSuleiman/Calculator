
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

console.log(getHumanChoice());