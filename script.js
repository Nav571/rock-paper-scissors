//*Script for rock paper scissors*//
console.log("Do you wanna play a game?");
let playerScore = 0
let computerScore = 0
roundsPlayed = 0

/*Random choice by the computer*/

function getComputerchoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice [Math.floor(Math.random()*computerChoice.length)];
}
 
/* One round of game*/

function playRound(playerSelection, computerSelection) {
    roundsPlayed++
    if (playerSelection===computerSelection) {
        return ("That is a Draw!")
    } else if (playerSelection==="rock" && computerSelection==="scissors") {
        playerScore++
        return ("You win! rock beats scissors")
    } else if (playerSelection==="scissors" && computerSelection==="paper") {
        playerScore++
        return ("You win! Scissors beats paper")
    } else if (playerSelection==="paper" && computerSelection==="rock") {
        playerScore++
        return ("You win! Paper beats rock")
    } else if ( playerSelection==="rock" && computerSelection==="paper") {
        computerScore++
        return ("You lose!Paper beats rock")
    } else if (playerSelection==="paper" && computerSelection==="scissors") {
        computerScore++
        return ("You lose! Scissors beats paper")
    } else if (playerSelection==="scissors" && computerSelection==="rock") {
        computerScore++
        return ("You lose! Rock beats scissors")
    } else {
        return ("its broken, you broke it...or you mistyped! try again");
    }  
           
}

function game() {
    console.log("Best of 5, lets gooo!");
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Choose your weapon! rock, paper or scissors", "rock paper scissors").toLowerCase();
        let computerSelection = getComputerchoice()
        console.log(playRound(playerSelection, computerSelection))
        let score = `Round ${roundsPlayed} (Computer ${computerScore} - User ${playerScore})`
        console.log(score)
    }
    if (playerScore > computerScore) {
        return (`Game over. You Win! Good job! 5 stars for you! (Computer ${computerScore} - User ${playerScore})`)
    } else if (playerScore < computerScore) {
        return(`Game over, You lose! Better luck next time! (Computer ${computerScore} - User ${playerScore})`)
    } else {
        return (`tied. Good job, better than losing I guess. (Computer ${computerScore} - User ${playerScore})`)
    }
}
console.log(game())
console.log("Good game, refresh to play again!")

      
        

        

       
