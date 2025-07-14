let playerChoice
let computerChoice
let playerSelection
let computerSelection
let playerScore = 0;
let computerScore = 0;
let rock;
let paper;
let scissors;

let btn1 = document.getElementById("rock");

let btn2 = document.getElementById("paper");

let btn3 = document.getElementById("scissors");


btn1.addEventListener('click', () => {
    rock = true;
    paper = false;
    scissors = false;
    playRound();
});
btn2.addEventListener('click', () => {
    rock = false;
    paper = true;
    scissors = false;
    playRound();
});
btn3.addEventListener('click', () => {
    rock = false;
    paper = false;
    scissors = true;
    playRound();
});

// game();

// function getPlayerChoice() {

//     return playerChoice;
// }

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
    // getPlayerChoice();

    if (rock === true) {
        playerChoice = 'Rock'
    } else if (paper === true) {
        playerChoice = 'Paper'
    } else if (scissors === true) {
        playerChoice = 'Scissors'
    }

    getComputerChoice();

    console.log(playerChoice);
    console.log(computerChoice);

    computerSelection = computerChoice;
    playerSelection = playerChoice;

    if (computerChoice === 'Rock' && playerChoice === 'Rock') {
        document.getElementById("resultText").innerHTML = "It's a draw! Rock can't beat Rock!";
    } else if (computerChoice === 'Rock' && playerChoice === 'Paper') {
        document.getElementById("resultText").innerHTML = "You win! Paper beats Rock!";
        playerScore += 1;
        document.getElementById("player").innerHTML = playerScore;
    } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
        document.getElementById("resultText").innerHTML = "You lose! Rock beats Scissors";
        computerScore += 1;
        document.getElementById("computer").innerHTML = computerScore;
    } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
        document.getElementById("resultText").innerHTML = "You lose! Paper beats Rock!";
        computerScore += 1;
        document.getElementById("computer").innerHTML = computerScore;
    } else if (computerChoice === 'Paper' && playerChoice === 'Paper') {
        document.getElementById("resultText").innerHTML = "It's a draw! Paper can't beat Paper!";
    } else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {
        document.getElementById("resultText").innerHTML = "You win! Scissors beats Paper!";
        playerScore += 1;
        document.getElementById("player").innerHTML = playerScore;
    } else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {
        document.getElementById("resultText").innerHTML = "You win! Rock beats Scissors!";
        playerScore += 1;
        document.getElementById("player").innerHTML = playerScore;
    } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
        document.getElementById("resultText").innerHTML = "You lose! Scissors beats Paper!";
        computerScore += 1;
        document.getElementById("computer").innerHTML = computerScore;
    } else if (computerChoice === 'Scissors' && playerChoice === 'Scissors') {
        document.getElementById("resultText").innerHTML = "It's a draw! Scissors can't beat Scissors!";
    }
    console.log("player: " + playerScore);
    console.log("computer: " + computerScore);

    if (playerScore >= 5) {
        setTimeout(function(){alert(`You win! The score was ${playerScore} - ${computerScore}!`);},250);
        setTimeout(function(){playAgain();},250);
    } else if (computerScore >= 5) {
        setTimeout(function(){alert(`You lose! The score was ${playerScore} - ${computerScore}!`);},250);
        setTimeout(function(){playAgain();},250);
    }
}

function playAgain() {
    if (confirm("Play Again?") == true) {
        location.reload();
    } else {
        alert("Ok, bye!")
        location.reload();
    }
}

// function game() {
//     playerScore = 0;
//     computerScore = 0;
//     let userName = prompt('Welcome to Rock Paper Scissors! Please enter you name below:')
//     for (let i = 1; i <= 6; i++) {
//         if (i === 6 && computerScore > playerScore) {
//                 alert(`The Computer wins ${computerScore}-${playerScore}!`)
//                 playAgain();
//         } else if (i === 6 && computerScore < playerScore) {
//                 alert(`${userName} wins ${playerScore}-${computerScore}!`)
//                 playAgain();
//         } else if (i === 6 && computerScore === playerScore) {
//                 alert(`It's a tie game with a score of ${computerScore}-${playerScore}!`)
//         }else {
//             console.log("i: " + i);
//             playRound();
//         }
//     }
// }
