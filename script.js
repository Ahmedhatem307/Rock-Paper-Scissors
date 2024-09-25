function getComputerChoice(){
    number = Math.floor(Math.random()*3);
    if(number == 0)
        return "rock";
    else if(number == 1)
        return "paper"
    else
        return "scissors"
}

function getHumanChoice(){
    let choice = prompt("choose: rock, paper or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice){

    if(humanChoice == computerChoice){
        console.log("Draw!");
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock")
        computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper")
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors")
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win! rock beats scissors")
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! paper beats rock")
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! scissors beats paper")
        humanScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your Score: "+humanScore);
        console.log("Computer Score: "+computerScore);
    }
    if(humanScore > computerScore)
        console.log("You have won the game!");
    else if(computerScore > humanScore)
        console.log("You have lost the game!");
    else
    console.log("It's a draw!");
}

let humanScore = 0, computerScore = 0;

playGame()

