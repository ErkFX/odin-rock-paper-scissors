let playerChoice
let computerChoice

getPlayerChoice();
console.log(playerChoice);

getComputerChoice();
console.log(computerChoice);

playRound();

playAgain();

function getPlayerChoice() {
    let playerInput = prompt("Enter 'Rock', 'Paper', or 'Scissors' below:");
    let editedInput
    if (playerInput) {
        editedInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
        if (editedInput === "Rock") {
            playerChoice = editedInput;
        } else if(editedInput === "Paper") {
            playerChoice = editedInput;
        } else if(editedInput === "Scissors") {
            playerChoice = editedInput;
        } else {
            alert("Please enter only 'Rock', 'Paper', or 'Scissors'");
            getPlayerChoice();
        }
    } else {
        alert("You canceled. Please refresh the page to play again.")
    }
    return playerChoice;
}

function getComputerChoice() {
    let computerChoices = [
        'Rock', 
        'Paper', 
        'Scissors'
    ];
    // This will choose a random number between 0 and 2.99 and will then round down
    // to the nearest integer (0, 1, or 2) which results in randomChoice being equal
    // to one of the 3 options from the computerChoices array

    let randomChoice = Math.floor(Math.random()*computerChoices.length);

    // This takes the random choice (0, 1, or 2) from above and pulls the value that
    // is equal to whatever number was chosen from the computerChoices array 
    // (ex: 0 = 'Rock', 1 = 'Paper', 2 = 'Scissors')
    // the result variable is then given the value that was randomly selected on the right

    computerChoice = computerChoices[randomChoice];

    // Return result is needed to get the answer to show up outside of the function
    return computerChoice;
}

function playRound(computerSelection, playerSelection) {
    computerSelection = computerChoice;
    playerSelection = playerChoice;

    if (computerChoice === 'Rock' && playerChoice === 'Rock') {
        alert("It's a draw! Rock can't beat Rock!")
    } else if (computerChoice === 'Rock' && playerChoice === 'Paper') {
        alert("You win! Paper beats Rock!");
    } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
        alert("You lose! Rock beats Scissors");
    } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
        alert("You lose! Paper beats Rock!");
    } else if (computerChoice === 'Paper' && playerChoice === 'Paper') {
        alert("It's a draw! Paper can't beat Paper!");
    } else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {
        alert("You win! Scissors beats Paper!");
    } else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {
        alert("You win! Rock beats Scissors!");
    } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
        alert("You lose! Scissors beats Paper!");
    } else if (computerChoice === 'Scissors' && playerChoice === 'Scissors') {
        alert("It's a draw! Scissors can't beat Scissors!");
    }
}

function playAgain() {
    if (confirm("Play Again?") == true) {
        getPlayerChoice();
        getComputerChoice();
        playRound();
        playAgain();
    } else {
        alert("Ok, bye!")
    }
}