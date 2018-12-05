// All code should be written in this file.

// what values come in from the entry on page...
const P1 = 'Player One';
const P2 = 'Player Two';
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const tie = 'tie';

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


// how are we sure the move types are valid?
const validMoveTypes = (v1, v2, v3) => validTypes(v1) && validTypes(v2) && validTypes(v3);

// How do we subtract from the 99 strengths and assign them to one of the values from the start?
const validMoveValues = (t1, t2, t3) => t1 >= 1 && t2 >= 1 && t3 >= 1 && t1 + t2 + t3 >= 99;

const validType = (type) => type === 'rock' || type === 'paper' || type === 'scissors';



// Set the Player Moves variables (using inputs from page?)
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    if (!validMoveTypes(moveOneType, moveTwoType, MoveThreeType)) {
        return;
    }

    if (!validMoveValues(moveOneValue, moveTwoValue, MoveThreeValue)) {
        return;
    }

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

    // global move value as not less than 1? 

    if (playerOneMoveOneValue < 1 || playerOneMoveTwoValue < 1 || playerOneMoveThreeValue < 1 || playerTwoMoveOneValue < 1 || playerTwoMoveTwoValue < 1 || playerTwoMoveThreeValue < 1) {
        return;
    }

    //compares both player's move types and values for that round, and returns the appropriate winner

    let getWinner = (playerOneMoveType, playerTwoMoveType, playerOneMoveValue, playerTwoMoveValue) => {

        if (playerOneMoveType === 'rock' && playerTwoMoveType === 'scissors' || playerOneMoveType === 'paper' && playerTwoMoveType === 'rock' || playerOneMoveType === 'scissors' && playerTwoMoveType === 'paper') {
            return 'Player One';
        } else if (playerTwoMoveType === 'rock' && playerOneMoveType === 'scissors' || playerTwoMoveType === 'paper' && playerOneMoveType === 'rock' || playerTwoMoveType === 'scissors' && playerOneMoveType === 'paper') {
            return 'Player Two';
        } else {  // (playerOneMoveType === playerTwoMoveType)
            if (playerOneMoveValue > playerTwoMoveValue) {
                return 'Player One';
            } else if (playerOneMoveValue < playerTwoMoveValue) {
                return 'Player Two';
            } else { //(playerOneMoveValue === playerTwoMoveValue)
                return 'Tie';
            }
        }
    }

    // switch case for the winner of each round
    let winner;
    switch (roundNumber) {
        case 1:
            winner = getWinner(playerOneMoveOneType, playerTwoMoveOneType, playerOneMoveOneValue, playerTwoMoveOneValue);
            break;
        case 2:
            winner = getWinner(playerOneMoveTwoType, playerTwoMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoValue);
            break;
        case 3:
            winner = getWinner(playerOneMoveThreeType, playerTwoMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeValue);
            break;
    }
    return winner;
}

// need a function for total rounds won? set to player totals?


function getGameWinner() {
    // Find the game winner

    let rounds = [getRoundWinner(1), getRoundWinner(2), getRoundWinner(3)];

    winner = rounds.filter(x => x === 'Player One').length - rounds.filter(x => x === 'Player Two').length
    return winner > 0 ? 'Player One' : (winner < 0 ? 'Player Two' : 'Tie');

}


// Bonus section for computer player randoms


let compMove1;
let compMove2;
let compMove3;

function setComputerMoves() {

    // still needs to add the values between 1 and 99 distributed between all three moves...

    const randomMove1 = Math.floor(Math.random() * 3);
    const randomMove2 = Math.floor(Math.random() * 3);
    const randomMove3 = Math.floor(Math.random() * 3);

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