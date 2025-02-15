function getComputerChoice () {
    const randomNumber = Math.floor((Math.random() * 3));
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(getComputerChoice());

function getUserChoice (){
    const userInput = prompt('rock, paper, or scissors?');
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Invalid choice');
    }
}
console.log(getUserChoice());

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = getUserChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return 'Computer wins!';
        } else {
            humanScore++;
            return 'You win!';
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return 'Computer wins!';
        } else {
            humanScore++;
            return 'You win!';
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'Computer wins!';
        } else {
            humanScore++;
            return 'You win!';
        }
    }
}

for (let i = 0; i < 5; i++) {
    console.log(playRound());
}