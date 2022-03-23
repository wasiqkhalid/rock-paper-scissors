// 0 = Rock 
// 1 = Paper
// 2 = Scissor
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

let pScore = 0;
let cScore = 0;
// Button
const btn = document.querySelectorAll('.btn');
btn.forEach(button => { button.addEventListener('click', getPlayerChoice)});

// Reset game
const reset = document.querySelector('.reset-btn');
reset.addEventListener('click', () => location.reload());
// Start Game
function game(choice){
    playerChoice = choice;
    const computerChoice = computerPlay();
    selections(playerChoice, computerChoice);
    const gameResult = playRound(playerChoice, computerChoice);
    roundResult(gameResult);
    checkWin();
}

// Random function to return the computers choice 
function computerPlay() {
    return Math.floor(Math.random()*3);   
}

// Shows the humans and computers selections on screen
function selections(playerChoice, computerChoice) {
    // human selection
    const human = document.querySelector('#human');
    const hudiv = document.createElement('div');
    human.removeChild(human.lastChild);
    if(playerChoice == 0) {
        hudiv.textContent = 'Rock';
        human.appendChild(hudiv);
    }
    if(playerChoice == 1) {
        hudiv.textContent = 'Paper';
        human.appendChild(hudiv);
    }
    if(playerChoice == 2) {
        hudiv.textContent = 'Scissor';
        human.appendChild(hudiv);
    }
    // computer selection
    const computer = document.querySelector('#computer');
    const codiv = document.createElement('div');
    computer.removeChild(computer.lastChild);
    if(computerChoice == 0) {
        codiv.textContent = 'Rock';
        computer.appendChild(codiv);
    }
    if(computerChoice == 1) {
        codiv.textContent = 'Paper';
        computer.appendChild(codiv);
    }
    if(computerChoice == 2) {
        codiv.textContent = 'Scissor';
        computer.appendChild(codiv);
    }
}

// Function to compare the players and computers choices to return the winner
function playRound(playerChoice, computerChoice) {
    if((playerChoice == 1 && computerChoice == 1) || (playerChoice == 2 && computerChoice == 2) || (playerChoice == 0 && computerChoice == 0)){
        // Draw
        var x = 0;
        return x;
    }
    else if((playerChoice == 0 && computerChoice == 2) || (playerChoice == 1 && computerChoice == 0) || (playerChoice == 2 && computerChoice == 1)){
        // Win
        var x = 1;
        playerScore.textContent = ++pScore;
        return x;
    }
    else if((playerChoice == 2 && computerChoice == 0) || (playerChoice == 0 && computerChoice == 1) || (playerChoice == 1 && computerChoice == 2)){
        // Lose
        computerScore.textContent = ++cScore;
        var x = 2;
        return x;
    }
    
}

// Check if game has ended
function checkWin() {
    if(cScore == 5 || pScore == 5) {
        btn.forEach(button => { button.removeEventListener('click', getPlayerChoice)});
    }
}
// Display win/loss/draw
function roundResult(gameResult){
    const container = document.querySelector('#result');
    //Create div
    const div = document.createElement('div');
    // style div
    div.classList.add('win-lose-draw');
    container.removeChild(container.lastChild);
    if(gameResult == 0){
        // div content = toggle draw
        div.style.color = 'black';
        div.textContent = 'Draw';
        container.appendChild(div);
    }else if(gameResult == 1){
        // div content = toggle win
        div.style.color = 'Green';
        div.textContent = 'You Win';
        container.appendChild(div);
    }else if(gameResult == 2){
        // div content = toggle lose
        div.style.color = 'Red';
        div.textContent = 'You Lose';
        container.appendChild(div);
    }

    //final result
    if(pScore == 5){
        div.style.color = 'green';
        div.textContent = 'Well done, you beat a computer!';
        container.appendChild(div);
    }
    if(cScore == 5){
        div.style.color = 'red';
        div.textContent = 'Wow, you lost to a computer! Pathetic!';
        container.appendChild(div);
    }
}

function getPlayerChoice(e){
    const playerChoice = e.target.id;
    game(playerChoice);
}