//complete game function
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
// function to grab user inputadn run function to evaluate choices
  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
  }
  let pScoreboard = document.querySelector('.p-count');
  let cScoreboard = document.querySelector('.c-count');
  let roundResult = document.querySelector('.result');
  //initalizing global variables to store user and computer selection
  let compChoice;
  let playerChoice;

  //function to randomly generate a choice for the computer, use this function
  function computerChoice() {
    const computerOptions = ["rock","paper", "scissor"];
    const randomNum = Math.floor(Math.random()*3);
    compChoice = computerOptions[randomNum];
  }
  function playerChoice() {

  }
  function throwRock() {
    
  }
  function throwPaper() {

  }
  function throwScissor() {

  }
}
