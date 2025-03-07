function getcomputerChoice() {
    o = Math.floor(Math.random() * 3);
    let arr = ["rock","paper","scissors"]
    return arr[o];

  }
const buttons = document.querySelectorAll("button")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        
        playRound(button.id)
        
    })
})

function playRound(humanChoice){
    
    let computerChoice = getcomputerChoice()
    let result = playGame(humanChoice,computerChoice)
    if (result == 0){
        humanScore++
        alert(`You've won.Your score ${humanScore} - ${computerScore}`)
        return;
    }
    else if(result == 1){
        computerScore++
        alert(`You've lost.Your score ${humanScore} - ${computerScore}`)
        return;
    }else{
        alert(`Draw",${humanScore} - ${computerScore}`)
    }
    
}

function playGame(a,b){
    if(a===b){return -1;}
    else if(a=="rock" && b=="paper" || a=="scissors" && b=="rock" || a=="paper" && b=="scissors"){return 1;}
    else if(a=="paper" && b=="rock" || a=="rock" && b=="scissors" || a=="scissors" && b=="paper"){return 0;}
}
let humanScore = 0
let computerScore = 0



