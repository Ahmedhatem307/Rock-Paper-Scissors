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
    console.log(choice)
}

getHumanChoice()
