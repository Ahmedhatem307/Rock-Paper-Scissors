const container = document.querySelector("#container");
const result = document.createElement("div");
const hScore = document.createElement("div");
const cScore = document.createElement("div");

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
    if(humanScore < 5 && computerScore < 5){
    
        if(humanChoice == computerChoice){
            result.textContent ="Draw!";
            hScore.textContent = "Your Score: " + humanScore;
            cScore.textContent = "Computer's Score: "+ computerScore;
        }
        else if(humanChoice == "rock" && computerChoice == "paper"){
            result.textContent = "You lose! Paper beats Rock";
            computerScore++;
            hScore.textContent = "Your Score: " + humanScore;
            cScore.textContent = "Computer's Score: "+ computerScore;
        }
        else if(humanChoice == "paper" && computerChoice == "scissors"){
            result.textContent ="You lose! Scissors beats Paper";

            computerScore++;
            hScore.textContent = "Your Score: " + humanScore;
            cScore.textContent = "Computer's Score: "+ computerScore;;
        }
        else if(humanChoice == "scissors" && computerChoice == "rock"){
            result.textContent ="You lose! Rock beats scissors";
            computerScore++;
            hScore.textContent = "Your Score: " + humanScore;
            cScore.textContent = "Computer's Score: "+ computerScore;
        }
        else if(humanChoice == "rock" && computerChoice == "scissors"){
            result.textContent ="You Win! rock beats scissors";
            humanScore++;
            hScore.textContent = "Your Score: " + humanScore;
            cScore.textContent = "Computer's Score: "+ computerScore;
        }
        else if(humanChoice == "paper" && computerChoice == "rock"){
            result.textContent ="You Win! paper beats rock";
            humanScore++;
            hScore.textContent = "Your Score: " + humanScore;
            cScore.textContent = "Computer's Score: "+ computerScore;
        }
        else if(humanChoice == "scissors" && computerChoice == "paper"){
            result.textContent ="You Win! scissors beats paper";
            humanScore++;
            hScore.textContent = "Your Score: " + humanScore;
            cScore.textContent = "Computer's Score: "+ computerScore;
        }

        container.appendChild(result);
        container.appendChild(hScore);
        container.appendChild(cScore);
}
else{
    if(humanScore == 5){
        container.removeChild(hScore);
        container.removeChild(cScore);
        result.textContent = "YOU HAVE WON THE GAME!";
    }
    else{
        container.removeChild(hScore);
        container.removeChild(cScore);
        result.textContent = "YOU HAVE LOST THE GAME!";
    }
}
}

let humanScore = 0, computerScore = 0;
