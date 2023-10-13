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

    let result = computerChoices[randomChoice];

    // Return result is needed to get the answer to show up outside of the function

    return result;
}

console.log(getComputerChoice());