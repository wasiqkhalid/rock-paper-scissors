// 0 = Rock
// 1 = Paper
// 2 = Scissor

// Random function to return the computers choice 
function computerPlay() {
    return Math.floor(Math.random()*3);   
}
function playerSelection(){
    var input = prompt("Please enter rock, paper or scissor: ").toLowerCase();
    var valid = false;

    while(!valid){
        if(input === "rock" || input === "paper" || input === "scissor"){
            if(input === "rock"){
                console.log("You selected:" + input);
                return 0;
            }
            if(input === "paper"){
                console.log("You selected:" + input);
                return 1;
            }
            if(input === "scissor"){
                console.log("You selected:" + input);
                return 2;
            }
            valid = true;
        }
         input = prompt("Please enter again").toLowerCase();
    }
}

// Function to compare the players and computers choices to return the winner
function playRound(playerChoice, computerChoice) {
    if((playerChoice == 1 && computerChoice == 1) || (playerChoice == 2 && computerChoice == 2) || (playerChoice == 0 && computerChoice == 0)){
        console.log("Draw");
        var x = 0;
        return x;
    }
    else if(playerChoice == 0 && computerChoice == 2){
        console.log("You win! Rock beats Scissor");
        var x = 1;
        return x;
    }
    else if(playerChoice == 1 && computerChoice == 0){
        console.log("You win! Paper beats Rock");
        var x = 1;
        return x;
    }
    else if(playerChoice == 2 && computerChoice == 1){
        console.log("You win! Scissor beats Paper");
        var x = 1;
        return x;
    }
    else if(playerChoice == 2 && computerChoice == 0){
        console.log("You Lose! Rock beats Scissor");
        var x = 2;
        return x;
    }
    else if(playerChoice == 0 && computerChoice == 1){
        console.log("You Lose! Paper beats Rock");
        var x = 2;
        return x;
    }
    else if(playerChoice == 1 && computerChoice == 2){
        console.log("You Lose! Scissor beats Paper");
        var x = 2;
        return x;
    }
}
function game(){
    var playerChoice = playerSelection();
    var computerChoice = computerPlay();
    var games = 0;
    var playerScore = 0;
    var computerScore = 0;
    var score = 0;
    score = playRound(playerChoice, computerChoice);
    while(games<5){
        if(score == 1){
            playerScore++;
            games++;
        }
        if(score == 2){
            computerScore++;
            games++;
        }
        if(games<5){
            var playerChoice = playerSelection();
            var computerChoice = computerPlay();
            score = playRound(playerChoice, computerChoice);
        }
        
    }
    console.log("Player: " + playerScore + " Computer: " + computerScore);
        

}


