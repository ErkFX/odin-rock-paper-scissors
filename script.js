let playerChoice
let computerChoice
let playerSelection
let computerSelection
let playerScore = 0;
let computerScore = 0;

game();

function getPlayerChoice() {
    let playerInput = prompt("Enter 'Rock', 'Paper', or 'Scissors' below:");
    if (playerInput) {
        let editedInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
        if (editedInput === "Rock") {
            playerChoice = editedInput;
        } else if(editedInput === "Paper") {
            playerChoice = editedInput;
        } else if(editedInput === "Scissors") {
            playerChoice = editedInput;
        } else {
            alert('Please enter only "Rock", "Paper", or "Scissors"');
            getPlayerChoice();
        } 
    } else {
        alert("If you wish to end the game, please close the tab or cancel after the game is over.")
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
    getPlayerChoice();
    getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);

    computerSelection = computerChoice;
    playerSelection = playerChoice;

    if (computerChoice === 'Rock' && playerChoice === 'Rock') {
        alert("It's a draw! Rock can't beat Rock!")
    } else if (computerChoice === 'Rock' && playerChoice === 'Paper') {
        alert("You win! Paper beats Rock!");
        playerScore += 1;
    } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
        alert("You lose! Rock beats Scissors");
        computerScore += 1;
    } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
        alert("You lose! Paper beats Rock!");
        computerScore += 1;
    } else if (computerChoice === 'Paper' && playerChoice === 'Paper') {
        alert("It's a draw! Paper can't beat Paper!");
    } else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {
        alert("You win! Scissors beats Paper!");
        playerScore += 1;
    } else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {
        alert("You win! Rock beats Scissors!");
        playerScore += 1;
    } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
        alert("You lose! Scissors beats Paper!");
        computerScore += 1;
    } else if (computerChoice === 'Scissors' && playerChoice === 'Scissors') {
        alert("It's a draw! Scissors can't beat Scissors!");
    }
    console.log("player: " + playerScore);
    console.log("computer: " + computerScore);
}

function playAgain() {
    if (confirm("Play Again?") == true) {
        location.reload();
    } else {
        alert("Ok, bye!")
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    let userName = prompt('Welcome to Rock Paper Scissors! Please enter you name below:')
    for (let i = 1; i <= 6; i++) {
        if (i === 6 && computerScore > playerScore) {
                alert(`The Computer wins ${computerScore}-${playerScore}!`)
                playAgain();
        } else if (i === 6 && computerScore < playerScore) {
                alert(`${userName} wins ${playerScore}-${computerScore}!`)
                playAgain();
        } else if (i === 6 && computerScore === playerScore) {
                alert(`It's a tie game with a score of ${computerScore}-${playerScore}!`)
        }else {
            console.log("i: " + i);
            playRound();
        }
    }
}
