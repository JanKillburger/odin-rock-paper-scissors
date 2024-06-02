let humanScore = 0;
let computerScore = 0;
const ROUNDS = 5;
const CHOICES = ["rock", "paper", "scissors"];

function playGame() {
  for (let i = 0; i < ROUNDS; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt("Please enter 'rock', 'paper' or 'scissors'").toLowerCase();
  if (CHOICES.includes(humanChoice)) {
    return humanChoice
  } else {
    console.error(new TypeError(`Valid choices are: ${CHOICES.join(', ')}. You entered: ${humanChoice}`))
  }
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) {
    console.log("It's a tie. You both selected: ", capitalize(computerChoice));
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")  
  ) {
    computerScore++;
    console.log(`Computer wins with score ${computerScore}! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
  } else {
    humanScore++;
    console.log(`You win with score ${humanScore}! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
  }
}

function capitalize(string) {
  if (string.length == 1) {
    return string[0].toUpperCase();
  } else if (string.length >= 2) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
}

playGame()