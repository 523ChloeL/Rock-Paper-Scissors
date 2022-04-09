//complete game function

  let playerScore = 0;
  let computerScore = 0;
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
    roundResult.innerHTML = "Player Wins!"
  }
  function cWin() {
    computerScore++;
    pScoreboard.innerHTML = computerScore;
    roundResult.innerHTML = "Computer Wins!"
  }
  //function to randomly generate a choice for the computer, use this function
  function computerChoice() {
    const computerOptions = ["rock","paper", "scissor"];
    const randomNum = Math.floor(Math.random()*3);
    compChoice = computerOptions[randomNum];
    document.getElementById('computer').style.backgroundImage = 'url(img/' computerChoice.value '.jpg)';
  }
  function paper() {
    playerChoice = "paper";
    document.getElementById('player').style.backgroundImage = 'url(img/paper.jpg)';
    playGame();

  }
  function scissor() {
    playerChoice = "scissor";
    document.getElementById('player').style.backgroundImage = 'url(img/scissor.jpg)';
    playGame();
  }
  function rock() {
    playerChoice = "rock";
    document.getElementById('player').style.backgroundImage = 'url(img/rock.jpg)';
    playGame();
  }
  function playGame() {
    computerChoice();
    game (playerChoice, compChoice);
  }
  function resetScore () {
    computerScore = 0;
    playerScore = 0;
    cScoreboard.innerHTML = computerScore;
    pScoreboard.innerHTML = playerScore;
  }

function game() {
  if (playerChoice === computerChoice)
  document.getElementById("result").textContent="It's a Tie!";
}
else if (playerChoice === "rock" && computerChoice === "scissor"){
  pWin();
}
else if (playerChoice === "paper" && computerChoice === "rock"){
  pWin();
}
else if (playerChoice === "scissor" && computerChoice === "paper"){
  pWin();
} else {
  cWin();
}
}
playGame();
