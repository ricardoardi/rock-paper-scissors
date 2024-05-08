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
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");

paper.addEventListener("click",()=>{
    const humanChoice="paper";
    const ppr = document.createElement("div");
    ppr.textContent=humanChoice;
    result.appendChild(ppr);
    const computerChoice=getComputerChoice().toLowerCase();
    const comCh = document.createElement("div");
    comCh.textContent=computerChoice;
    result.appendChild(comCh);
    const final = document.createElement("div");
    final.textContent=playRound(humanChoice,computerChoice);
    result.appendChild(final);
    const hScore = document.createElement("div");
    hScore.textContent=humanScore;
    result.appendChild(hScore);
    const cScore = document.createElement("div");
    cScore.textContent=computerScore;
    result.appendChild(cScore);
    checkScore(humanScore,computerScore);
})

rock.addEventListener("click",()=>{
    const humanChoice="rock";
    const rck = document.createElement("div");
    rck.textContent=humanChoice;
    result.appendChild(rck);
    const computerChoice=getComputerChoice().toLowerCase();
    const comCh = document.createElement("div");
    comCh.textContent=computerChoice;
    result.appendChild(comCh);
    const final = document.createElement("div");
    final.textContent=playRound(humanChoice,computerChoice);
    result.appendChild(final);
    const hScore = document.createElement("div");
    hScore.textContent=humanScore;
    result.appendChild(hScore);
    const cScore = document.createElement("div");
    cScore.textContent=computerScore;
    result.appendChild(cScore);  
    checkScore(humanScore,computerScore);
})

scissor.addEventListener("click",()=>{
    const humanChoice="scissor";
    const scr = document.createElement("div");
    scr.textContent=humanChoice;
    result.appendChild(scr);
    const computerChoice=getComputerChoice().toLowerCase();
    const comCh = document.createElement("div");
    comCh.textContent=computerChoice;
    result.appendChild(comCh);
    const final = document.createElement("div");
    final.textContent=playRound(humanChoice,computerChoice);
    result.appendChild(final);
    const hScore = document.createElement("div");
    hScore.textContent=humanScore;
    result.appendChild(hScore);
    const cScore = document.createElement("div");
    cScore.textContent=computerScore;
    result.appendChild(cScore);  
    checkScore(humanScore,computerScore);
})
let humanScore = 0;
let computerScore = 0;


function checkScore(humanScore,computerScore){
    if (humanScore==5){
        const h2 = document.createElement("h2");
        h2.textContent = "You win Horay";
        result.appendChild(h2);
    }else if(computerScore==5){
        const h2 = document.createElement("h2");
        h2.textContent = "You lost Sadge";
        result.appendChild(h2);
    }
}



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
