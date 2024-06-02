let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt("Please enter 'rock', 'paper' or 'scissors'").toLowerCase();
  const validChoices = ["rock", "paper", "scissors"];
  if (validChoices.includes(humanChoice)) {
    return humanChoice
  } else {
    console.error(new TypeError(`Valid choices are: rock, paper, scissors. You entered: ${humanChoice}`))
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

playRound(getComputerChoice(), getHumanChoice())