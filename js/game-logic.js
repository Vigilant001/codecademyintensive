// All code should be written in this file.

// what values come in from the entry on page...
const P1 = 'Player One';
const P2 = 'Player Two';
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const tie = 'Tie';

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

const validType = (type) => type === rock || type === paper || type === scissors;

// how are we sure the move types are valid?
const validMoveTypes = (v1, v2, v3) => validType(v1) && validType(v2) && validType(v3);

// How do we subtract from the 99 strengths and assign them to one of the values from the start?
const validMoveValues = (t1, t2, t3) => t1 >= 1 && t2 >= 1 && t3 >= 1 && t1 + t2 + t3 === 99;




// Set the Player Moves variables (using inputs from page?)
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    if (!validMoveTypes(moveOneType, moveTwoType, moveThreeType)) {
        return;
    }

    if (!validMoveValues(moveOneValue, moveTwoValue, moveThreeValue)) {
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

    if (roundNumber < 1 || roundNumber > 3) {
        return null;
    }
    const playerOneMoveType = [playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType][roundNumber - 1];
    const playerTwoMoveType = [playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType][roundNumber - 1];

    const playerOneMoveValue = [playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue][roundNumber - 1];
    const playerTwoMoveValue = [playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue][roundNumber - 1];

    if (!validType(playerOneMoveType) || !validType(playerTwoMoveType)) {
        return null;
    }

        //compares both player's move types and values for that round, and returns the appropriate winner



        if (playerOneMoveType === rock && playerTwoMoveType === scissors || playerOneMoveType === paper && playerTwoMoveType === rock || playerOneMoveType === scissors && playerTwoMoveType === paper) {
            return P1;
        } else if (playerTwoMoveType === rock && playerOneMoveType === scissors || playerTwoMoveType === paper && playerOneMoveType === rock || playerTwoMoveType === scissors && playerOneMoveType === paper) {
            return P2;
        } else {  // (playerOneMoveType === playerTwoMoveType)
            if (playerOneMoveValue > playerTwoMoveValue) {
                return P1;
            } else if (playerOneMoveValue < playerTwoMoveValue) {
                return P2;
            } else { //(playerOneMoveValue === playerTwoMoveValue)
                return tie;
            }
        }
}

// need a function for total rounds won? set to player totals?


function getGameWinner() {
    // Find the game winner

    let rounds = [getRoundWinner(1), getRoundWinner(2), getRoundWinner(3)];


    let getCount = (x) => {

        let count = 0

        for (let i = 0; i < rounds.length; i++) {
            if (rounds[i] === x) {
                count++;
            }
        }
        return count;
    }

    let winner = (getCount(P1)) - (getCount(P2));
    return winner > 0 ? P1 : (winner < 0 ? P2 : tie);


    // winner = rounds.filter(x => x === 'Player One').length - rounds.filter(x => x === 'Player Two').length
    // return winner > 0 ? 'Player One' : (winner < 0 ? 'Player Two' : 'Tie');

}


// Bonus section for computer player randoms

function setComputerMoves() {

    // still needs to add the values between 1 and 99 distributed between all three moves...

    let movesArr = [rock, paper, scissors];

    playerTwoMoveOneType = movesArr[Math.floor(Math.random() * 3)];
    playerTwoMoveTwoType = movesArr[Math.floor(Math.random() * 3)];
    playerTwoMoveThreeType = movesArr[Math.floor(Math.random() * 3)];


    playerTwoMoveOneValue = 1 + Math.floor(Math.random() * 97);;
    playerTwoMoveTwoValue = 1 + Math.floor(Math.random() * (98 - randomVal1));
    playerTwoMoveThreeValue = 99 - (randomVal1 + randomVal2);

}

