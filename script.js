//JavaScript    Completed
const remark= document.querySelector('.remark');
const roundScore= document.querySelector('.roundScore');
const btn= document.querySelectorAll('.btn');
const player= document.getElementById('player-score');
const computer= document.getElementById('computer-score');
const roundplay=document.getElementById('round');
const record= document.querySelector('.record');
const restart= document.querySelector('.restart');
const endResult= document.querySelector('.endResult');
const weapons= document.querySelector('.weapons');
const instruction= document.querySelector('.instruction');

let playerScore= 0;
let computerScore=0;
let roundsPlayed= 0;

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








      
        

        

       
