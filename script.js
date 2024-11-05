
const container = document.querySelector("#container");
const result = document.createElement("div");

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
        result.textContent ="Draw!";
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){

        result.textContent = "You lose! Paper beats Rock";
        
        computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        result.textContent ="You lose! Scissors beats Paper";
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        result.textContent ="You lose! Rock beats scissors";
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        result.textContent ="You Win! rock beats scissors";
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        result.textContent ="You Win! paper beats rock";
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        result.textContent ="You Win! scissors beats paper";
        humanScore++;
    }
    container.appendChild(result);
}

function playGame(){
    
    if(humanScore > computerScore)
        console.log("You have won the game!");
    else if(computerScore > humanScore)
        console.log("You have lost the game!");
    else
    console.log("It's a draw!");
}

let humanScore = 0, computerScore = 0;

//playGame()






