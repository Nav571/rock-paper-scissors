
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

//Added event listeners so the game starts when rock, paper or scissors is clicked

btn.forEach(choice =>choice.addEventListener('click', playGame))
function playGame(e) {
    const computerSelection= getComputerchoice();
    const playerSelection= e.target.id;
    const remark= playRound(playerSelection, computerSelection);
    instruction.textContent= " ";
    weapons.textContent= "Choose your weapon carefully!";
    roundScore.textContent= `You chose ${playerSelection} and the Computer chose ${computerSelection}`;
    player.textContent= `Player Score : ${playerScore}`;
    computer.textContent= `Computer Score : ${computerScore}`;
    roundplay.textContent= `Rounds Played : ${roundsPlayed}`;
    const endResult= endGame(playerScore, computerScore);   
}

function getComputerchoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice [Math.floor(Math.random()*computerChoice.length)];
}
 //function plays one round and give the necessary output
 
function playRound(playerSelection, computerSelection) {
    roundsPlayed++
    if (playerSelection===computerSelection) {
        remark.textContent= 'That is a draw.';
    } else if (playerSelection==="rock" && computerSelection==="scissors") {
        playerScore++
        remark.textContent= "You win! Rock beats scissors";
    } else if (playerSelection==="scissors" && computerSelection==="paper") {
        playerScore++
        remark.textContent= "You win! Scissors beats paper";
    } else if (playerSelection==="paper" && computerSelection==="rock") {
        playerScore++
        remark.textContent= "You win! Paper beats rock";
    } else if ( playerSelection==="rock" && computerSelection==="paper") {
        computerScore++
        remark.textContent= "You lose! Your rock loses to paper";
    } else if (playerSelection==="paper" && computerSelection==="scissors") {
        computerScore++
        remark.textContent= "You lose! Your paper loses to scissors";
    } else if (playerSelection==="scissors" && computerSelection==="rock") {
        computerScore++
        remark.textContent= "You lose! Your scissors loses to rock";
    } else {
        remark.textContent="its broken, you broke it";
    }   
           
}

//Signals the end of the game, the results and the buttons are disabled until the game restarts
function endGame(playerScore, computerScore) {
    if (playerScore === 5 & computerScore < 5) {
        endResult.textContent= "You did it!!! You won! How about we keep these good vibes going. Up for another game?";
    
    } else if (computerScore ===5 & playerScore < 5) {
        endResult.textContent= "Sadly you lost! I'd be pissed if I lost to a computer. Try again for redemption";
        
    } else if (playerScore ===5 & computerScore ===5) {
        endResult.textContent= "You earned a tie! Good try. Go again for a win";
    }
    gameOver();
}
function gameOver () {
    if (playerScore === 5 || computerScore === 5) {
    btn.forEach(btn => btn.disabled= true);
    }
    restart.disabled=false;
    restart.addEventListener('click', gameRestart);
}

//Restart is clicked and the rock/paper/scissors buttons are enabled and all text goes back to it was as the start.
function gameRestart (e) {
    playerScore= 0;
    computerScore= 0;
    roundsPlayed= 0;
    btn.forEach(btn => btn.disabled= false);
    player.textContent= "Player Score: 0";
    computer.textContent= "Computer Score: 0";
    roundplay.textContent= "Rounds Played: 0";
    remark.textContent= "Sending good vibes!"
    roundScore.textContent= " ";
    endResult.textContent=" ";
    weapons.textContent= "Do you wanna play? Choose your weapon!";
    instruction.textContent= "Classic game of Rock Paper Scissors playing against the computer.Three outcomes; you win, lose or draw. Fastest to 5 points wins. ";
}





      
        

        

       
