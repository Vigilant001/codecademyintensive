// All code should be written in this file.

// what values come in from the entry on page...
const P1 = 'Player One';
const P2 = 'Player Two';
const Rock = 'rock';
const Paper = 'paper';
const Scissors = 'scissors';
const Tie = 'tie';

// Player One Move Types and Values
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

// Player Two Move Types and Values
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

// How do we subtract from the 99 strengths and assign them to one of the values from the start?

// Set the Player Moves variables (using inputs from page?)
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    switch (player) {
        case P1:
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
        break;
    
        case P2:
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
        break;
    }
}

// Find the round winner
function getRoundWinner(roundNumber) {
    //compares both player's move types and values for that round, and returns the appropriate winner

    // global move value as not less than 1? 
    if (playerOneMoveOneValue || playerOneMoveTwoValue || playerOneMoveThreeValue || playerTwoMoveOneValue || playerTwoMoveTwoValue || playerTwoMoveThreeValue === 0) {
        return null;
    }
// round 1

    if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors' || playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock' || playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper' ) {
        return 'Player One';
    } else if (playerTwoMoveOneType === 'rock' && playerOneMoveOneType === 'scissors' || playerTwoMoveOneType === 'paper' && playerOneMoveOneType === 'rock' || playerTwoMoveOneType === 'scissors' && playerOneMoveOneType === 'paper' ){
        return 'Player Two';
    } else if (playerOneMoveOneType === playerTwoMoveOneType) {
        return 'Its a Tie!';
    }
        
    if (playerOneMoveOneValue > playerTwoMoveOneValue) {
        return 'Player One';
    } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
        return 'Player Two';
    } else if (playerOneMoveOneValue === playerTwoMoveOneValue) {
        return 'Its a Tie!';
    }

// round 2 

    if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors' || playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock' || playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper' ) {
        return 'Player One';
    } else if (playerTwoMoveTwoType === 'rock' && playerOneMoveTwoType === 'scissors' || playerTwoMoveTwoType === 'paper' && playerOneMoveTwoType === 'rock' || playerTwoMoveTwoType === 'scissors' && playerOneMoveTwoType === 'paper' ){
        return 'Player Two';
    } else if (playerOneMoveTwoType === playerTwoMoveTwoType) {
        return 'Its a Tie!';
    }
        
    if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
        return 'Player One';
    } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
        return 'Player Two';
    } else if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
        return 'Its a Tie!';
    }

// round 3

    if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors' || playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock' || playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper' ) {
        return 'Player One';
    } else if (playerTwoMoveThreeType === 'rock' && playerOneMoveThreeType === 'scissors' || playerTwoMoveThreeType === 'paper' && playerOneMoveThreeType === 'rock' || playerTwoMoveThreeType === 'scissors' && playerOneMoveThreeType === 'paper' ){
        return 'Player Two';
    } else if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        return 'Its a Tie!';
    }
        
    if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
        return 'Player One';
    } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
        return 'Player Two';
    } else if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
        return 'Its a Tie!';
    }
  }

// need a function for total rounds won? set to player totals?

// Find the game winner
function getGameWinner() {

    if (playerOneTotals > playerTwoTotals) {
        return 'Player One Wins';
    } else if (playerOneTotals < playerTwoTotals) {
        return 'Player Two Wins';
    } else if (playerOneTotals === playerTwoTotals) {
        return 'Its a Tie!';
    }
}



// Bonus section for computer player randoms


function setComputerMoves() {

    // still needs to add the values between 1 and 99 distributed between all three moves...

    let compMove1;
    let compMove2;
    let compMove3;

    const randomMove1 = Math.floor(Math.random()* 3);
    const randomMove2 = Math.floor(Math.random()* 3);
    const randomMove3 = Math.floor(Math.random()* 3);

    if (randomMove1 === 1) {
        let compMove1 = 'rock';
    } else if (randomMove1 === 2) {
        let compMove1 = 'paper';
    } else if (randomMove1 === 3) {
        let compMove1 = 'scissors';
    }

    if (randomMove2 === 1) {
        let compMove2 = 'rock';
    } else if (randomMove2 === 2) {
        let compMove2 = 'paper';
    } else if (randomMove2 === 3) {
        let compMove2 = 'scissors';
    }

    if (randomMove3 === 1) {
        let compMove3 = 'rock';
    } else if (randomMove3 === 2) {
        let compMove3 = 'paper';
    } else if (randomMove3 === 3) {
        let compMove3 = 'scissors';
    }

    return compMove1, compMove2, compMove3;
}