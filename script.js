const buttons=document.querySelectorAll('button');
const resultEl=document.getElementById('result');
const user_scoreEl=document.getElementById('user-score');
const computer_scoreEl=document.getElementById('computer-score');

let userPoints=0;
let computerPoints=0;

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        playRound(button.id,computerPlay());
    });
});

function computerPlay(){
    const choices=["rock","paper","scissors"];
    const randomChoice=Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection,computerSelection){
    if ((playerSelection==='rock' && computerSelection==='scissors')|| 
    (playerSelection==='scissors' && computerSelection==='paper') ||
    (playerSelection==='paper' && computerSelection==='rock')
    ) {
        resultEl.textContent="You won!";
        userPoints++;
        user_scoreEl.textContent=userPoints;
        computer_scoreEl.textContent=computerPoints;
    } else {
        resultEl.textContent="You lose!";
        computerPoints++;
        user_scoreEl.textContent=userPoints;
        computer_scoreEl.textContent=computerPoints;
    }
}