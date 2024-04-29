function getComputerChoice(){
    let choice;
    switch (Math.floor(Math.random()*3)){
        case 0:
            choice= "Rock";
            break;
        case 1:
            choice= "Paper";
            break;
        case 2:
            choice= "Scissor";
            break;
    }
    return choice;
}

function getHumanChoice(){
    let answer= prompt("Enter your answer");
    if(answer.toLowerCase()=="rock"||answer.toLowerCase()=="paper"||answer.toLowerCase()=="scissor"){
        return answer
    }
    else{
        return "wrong input please input Rock/Paper/Scissor"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            return "you win! paper beats rock";
            humanScore+=1
        }
        else if(computerChoice=="scissor"){
            return "you lose! scissor beats paper";
        }
        else{
            return "draw";
        }
    }
    else if(humanChoice=="rock"){
        if(computerChoice=="scissor"){
            return "you win! rock beats scissor";
        }
        else if(computerChoice=="paper"){
            return "you lose! paper beats rock";
        }
        else{
            return "draw";
        }
    }

    else if(humanChoice=="scissor"){
        if(computerChoice=="paper"){
            return "you win! scissor beats paper";
        }
        else if(computerChoice=="rock"){
            return "you lose! rock beats scissor";
        }
        else{
            return "draw";
        }
    }
}


const humanChoice=getHumanChoice().toLowerCase();
const computerChoice=getComputerChoice().toLowerCase();

console.log(humanChoice);
console.log(computerChoice);
console.log(playRound(humanChoice,computerChoice))