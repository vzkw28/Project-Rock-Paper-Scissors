let scorePlayer = 0;
let scoreComputer = 0;

const btn = document.querySelectorAll("button")
const outcomeDiv = document.querySelector(".outcome");
const scorePlayerSpan = document.querySelector(".player-score");
const scoreComputerSpan = document.querySelector(".computer-score");


const computerPlay = () => {
    const options = ["rock", "paper", "scissors"];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

const playRound = (playerSelection,computerSelection)=>{
    const p = document.createElement('p')

    if(playerSelection === computerSelection){
        p.innerText = `Tie! You both picked ${playerSelection}.`;
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        scorePlayer++
        p.innerText = `Player wins!  ${playerSelection} beats ${computerSelection}.`;
    }
    else{
        scoreComputer++
        p.innerText =  `Computer wins! ${computerSelection} beats ${playerSelection}.`;
    }
    outcomeDiv.appendChild(p)
}

// function getPlayerChoice(){
//     let validatedInput = false;
//     while(validatedInput == false){
//         const choice = prompt("Rock Paper Scissors")
//         if(choice == null){
//             continue;
//         }
//         const choiceInLower = choice.toLowerCase();
//         if(options.includes(choiceInLower)){
//             validatedInput = true;
//             return choiceInLower;
//         }
//     }
// }

const checkForWinner = (scorePlayer, scoreComputer) => {
    const h2 = document.createElement('h2');

    if (scorePlayer === 5 ){
        h2.classList.add('player-won');
        h2.innerText = `Congrats, you won! The score was ${scorePlayer} : ${scoreComputer}`;
        outcomeDiv.append(h2);
    }
    else if(scoreComputer === 5){
        h2.classList.add('computer-won');
        h2.innerText = `Sadly the computer beat you, the score was ${scoreComputer} : ${scorePlayer}`;
        outcomeDiv.append(h2);
    }
}

const updateScores = (scorePlayer, scoreComputer) => {
    scorePlayerSpan.innerText = `Player Score :  ${scorePlayer}`
    scoreComputerSpan.innerText = `Computer Score :  ${scoreComputer}`
}

btn.forEach(button => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = `${button.className}`;
        playRound(playerSelection, computerSelection);
        updateScores(scorePlayer, scoreComputer)
        checkForWinner(scorePlayer,scoreComputer);
    })
})

// function game(){
//     console.log("Welcome!")
//     for(let i = 0; i<5; i++){
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log("------------")
//     }



//         if(checkWinner(playerSelection, computerSelection) == "Player"){
//             scorePlayer++;
//         }
//         else if(checkWinner(playerSelection, computerSelection) == "Computer"){
//             scoreComputer++;
//         }
    
//     console.log("Game Over")
//     if(scorePlayer > scoreComputer){
//         console.log("Player was the winner");
//     }
//     else if(scorePlayer < scoreComputer){
//         console.log("Computer was the winner");
//     }
//     else{
//         console.log("We have a tie!");
//     }
// }

// game()
