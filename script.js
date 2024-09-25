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
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper")
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors")
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win! rock beats scissors")
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! paper beats rock")
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! scissors beats paper")
    }
    

}

let humanScore = 0, computerScore = 0;

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
