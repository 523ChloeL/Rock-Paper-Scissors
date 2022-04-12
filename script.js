//complete game function

let playerScore = 0;
let compScore = 0;
// function to grab user inputadn run function to evaluate choices

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');

let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
//initalizing global variables to store user and computer selection
let compChoice;
let playerChoice;

function pWin() {
  playerScore++;
  pScoreboard.innerHTML = playerScore;
  roundResult.innerHTML = "Player Wins!";
}

function cWin() {
  compScore++;
  cScoreboard.innerHTML = compScore;
  roundResult.innerHTML = "Computer Wins!";
}
//function to randomly generate a choice for the computer, use this function
function NpcChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
  console.log('PC choice = ' + compChoice);
  document.getElementById('computer').style.backgroundImage = 'url(img/' + compChoice.value + '.jpg)';
}

function paper() {
  playerChoice = "paper";
  document.getElementById('player').style.backgroundImage = 'url(img/paper.jpg)';
  console.log('Player choice = ' + playerChoice);
  NpcChoice();
  game();
}

function scissor() {
  playerChoice = "scissor";
  document.getElementById('player').style.backgroundImage = 'url(img/scissor.jpg)';
  console.log('Player choice = ' + playerChoice);
  NpcChoice();
  game();
}

function rock() {
  playerChoice = "rock";
  document.getElementById('player').style.backgroundImage = 'url(img/rock.jpg)';
  console.log('Player choice = ' + playerChoice);
  NpcChoice();
  game();
}

function playGame() {
  NpcChoice();
  game(playerChoice, compChoice);
}

function resetScore() {
  compScore = 0;
  playerScore = 0;
  cScoreboard.innerHTML = compScore;
  pScoreboard.innerHTML = playerScore;
}

function game() {
  if (playerChoice === compChoice) {
    roundResult.innerHTML = "Tie!";
} else if (playerChoice === "rock" && compChoice === "scissor") {
  pWin();
} else if (playerChoice === "paper" && compChoice === "rock") {
  pWin();
} else if (playerChoice === "scissor" && compChoice === "paper") {
  pWin();
} else {
  cWin();
}
}
game();
