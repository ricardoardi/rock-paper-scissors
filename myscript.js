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
            humanScore+=1;
            return "you win! paper beats rock";
        }
        else if(computerChoice=="scissor"){
            computerScore+=1;
            return "you lose! scissor beats paper";
        }
        else{
            return "draw";
        }
    }
    else if(humanChoice=="rock"){
        if(computerChoice=="scissor"){
            humanScore+=1;
            return "you win! rock beats scissor";
        }
        else if(computerChoice=="paper"){
            computerScore+=1;
            return "you lose! paper beats rock";
        }
        else{
            return "draw";
        }
    }

    else if(humanChoice=="scissor"){
        if(computerChoice=="paper"){
            humanScore+=1;
            return "you win! scissor beats paper";
        }
        else if(computerChoice=="rock"){
            computerScore+=1;
            return "you lose! rock beats scissor";
        }
        else{
            return "draw";
        }
    }
}

function playGame(round){
    for (let i=1;i<=round;i++){
        const humanChoice=getHumanChoice().toLowerCase();
        const computerChoice=getComputerChoice().toLowerCase();
        console.log(humanChoice);
        console.log(computerChoice);
        console.log(playRound(humanChoice,computerChoice));
        console.log(humanScore);
        console.log(computerScore);
    }
    if(humanScore>computerScore){
        console.log("You Win!!");
    }
    else{
        console.log("You Lose!");
    }
}

console.log(playGame(5))
