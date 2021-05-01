// Javascript code for Rock, Paper, Scissors Game

// This function will randomly return either 'Rock', 'Paper', or 'Scissors' - Computer's Play
function computerPlay() {

    // Create a random number between 1 and 3 inclusive
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Create a variable from the random number

    var choiceInt = getRandomInt(1,3);

    // Variable for the choice to return
    var choice; 
    
    // Return Rock, Paper or Scissors, depending on the number
    if (choiceInt == 1) {
        choice = "rock";
    }
    else if (choiceInt == 2) {
        choice = "paper";
    }
    else if (choiceInt == 3) {
        choice = "scissors";
    }

    // Show error message if choice is not between 1 and 3
    else {
        choice = "Error";
        console.log("Error in the computerPlay() function");
    }

    return choice;
}

// Declare a variable using prompt() to enter a user value of either Rock, Paper or Scissors
function getSelection() {

    // Loop to check if the selection is one of the three
    x = true;
    while (x == true) {
            let selection = prompt("Please select Rock, Paper or Scissors");
            selection = selection.toLowerCase();
        if (selection === 'rock' || selection === 'paper' || selection === 'scissors') {
            x = false;
            return selection;
        } else {
            alert("Please enter either Rock, Paper, or Scissors");
        }

    }
    
}

// Declare variable playerSelection
let playerSelection;


// Declare variable computerSelection
let computerSelection;

// Declare variables for computer and user score
let compScore = 0;
let userScore = 0;

// Uses two variable inputs to play a single round of the game, playerSelection parameter is case-insensitive
function playSingleRound(playerSelection, computerSelection) {
    while (true) {

        // If a tie is declared, neither score increases
        if (playerSelection === computerSelection) {
            compScore = compScore;
            userScore = userScore;
            return "A tie has been reached. No winners, but no losers either!";
        } 
        // If the computer wins, increase the computer's score by one point
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            compScore++;
            return "You lose! Paper beats Rock!";
        } 
        
        // If the user wins, increase the user's score by one point
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            userScore++;
            return "You win! Rock beats Scissors!";
        } 
        
        // User wins
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            userScore++;
            return "You win! Paper beats Rock!";
        } 
        
        // Computer wins
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            compScore++;
            return "You lose! Scissors beats Paper!";
        } 
        
        // Computer wins
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            compScore++;
            return "You lose! Rock beats Scissors!";
        } 
        
        // User wins
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            userScore++;
            return "You win! Scissors beats Paper!";
        }
    }
}

// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
function game() {

    // playerSelection = getSelection();
    // computerSelection = computerPlay();

    for (let i = 1; i <= 5; i++) {
        console.log("Game " + i);
        playerSelection = getSelection();
        console.log("You selected: " + playerSelection);
        computerSelection = computerPlay();
        console.log("The Computer selected: " + computerSelection);
        console.log(playSingleRound(playerSelection, computerSelection));
        console.log("Computer score: " + compScore);
        console.log("User score: " + userScore);
    }

    if (userScore > compScore) {
        console.log("You won the match!");
    } else {
        console.log("You lost. Better luck next time!");
    }

}

// Console logs for testing - need to remove once program is complete
game();
console.log("Final Score:");
console.log("Computer: " + compScore);
console.log("User: " + userScore);



