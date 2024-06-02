let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt("Please enter 'rock', 'paper' or 'scissors'")
  const validChoices = ["rock", "paper", "scissors"];
  if (validChoices.includes(humanChoice)) {
    return humanChoice
  } else {
    getHumanChoice()
  }
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) {
    console.log("It's a tie. You both selected: ", computerChoice);
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")  
  ) {
    console.log(`Computer wins! (ComputerChoice: ${computerChoice}, your Choice: ${humanChoice})`)
  } else {
    console.log("You win! (ComputerChoice: ", computerChoice, "; your Choice: ", humanChoice, ")")
  }
}

playRound(getComputerChoice(), getHumanChoice())